// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
//
// It reads POST.json from the repository root, checks that it names this
// bounty entry's X post and play code, and copies it to /output/POST.json,
// where the gate reads it. That is all the program has to do. The entry is
// the post itself: one post of your own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, a photo of its own attached, make.fun or the @makefunai tag
// and your play code in its text; POST.json names the post, and the house
// reads its replies, reposts and quotes from X. Nothing this program writes
// about the post is scored.
//
// POST.json may still hold the placeholder url "TODO-PARENT-POSTS-TWEET"
// while the post has not been put up yet: the program warns about it and
// still copies the file, so the entry can be tested end to end before the
// post exists. The placeholder is not a post's address, so the gate refuses
// it as it stands -- replace it with the real post's address before you
// submit, then run this program again.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The placeholder url POST.json carries until the post is up and its address
// is known. It is not a valid X address on purpose: the gate refuses it.
const PLACEHOLDER_URL = 'TODO-PARENT-POSTS-TWEET';

// An X status address: https://x.com/<handle>/status/<digits>
// (twitter.com accepted too, with or without www.).
const POST_URL_RE = /^https:\/\/(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;

// A make.fun play code: makefun- followed by lowercase words,
// e.g. makefun-blade-airship-apple.
const PLAY_CODE_RE = /^makefun-[a-z]+(-[a-z]+)+$/;

// Usage: node main.ts [--help]
//   --help  print this usage and exit without reading or copying anything.
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log('Usage: node main.ts [--help]');
  console.log('  Checks POST.json (an X status URL + a makefun play code) and copies it to the output directory.');
  console.log('  Env: MAKEFUN_BOT_DIR (default /bot), MAKEFUN_OUTPUT_DIR (default /output).');
  process.exit(0);
}

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  console.error('Expected POST.json to look like: {"play_code": "makefun-<word>-<word>-<word>", "url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}

const postPath = join(BOT_DIR, 'POST.json');
let raw: string;
try {
  raw = readFileSync(postPath, 'utf8');
} catch (err) {
  fail(`POST.json could not be read from ${postPath}: ${(err as Error).message}`);
}
// The gate refuses a POST.json over 16384 bytes, so refuse it here too
// instead of copying a file the gate would reject.
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  fail(`POST.json is ${Buffer.byteLength(raw, 'utf8')} bytes, over the gate's 16384-byte limit.`);
}
let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  fail(`POST.json could not be parsed from ${postPath}: ${(err as Error).message}`);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  fail('POST.json is not a JSON object.');
}

const url = (post as { url?: unknown }).url;
if (typeof url !== 'string') {
  fail(`POST.json "url" is not a string: ${JSON.stringify(url)}`);
}
if (url === PLACEHOLDER_URL) {
  console.warn('main.ts: WARNING: POST.json still holds the placeholder url; replace it with the real post address before submitting.');
} else if (!POST_URL_RE.test(url)) {
  fail(`POST.json "url" is not a valid X status URL: ${JSON.stringify(url)}`);
}

const playCode = (post as { play_code?: unknown }).play_code;
if (typeof playCode !== 'string' || !PLAY_CODE_RE.test(playCode)) {
  fail(`POST.json "play_code" is not a valid make.fun play code: ${JSON.stringify(playCode)}`);
}

console.log(`Post: ${url}`);
console.log(`Play code: ${playCode}`);

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
