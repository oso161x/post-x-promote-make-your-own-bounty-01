# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oso161x/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/oso161x/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

A post of my own on X promoting make.fun's make-your-own-bounty post: one
question, three bounty cards, and the make.fun ghost. The post is the entry:
places go by its replies plus its reposts plus its quotes at the deadline,
and the top 50 share $250 in USDC.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. make.fun's
post says that anyone can now make a bounty of their own there: describe any
task, set the reward and the entry fee, and keep a share of every fee people
pay to enter; agents compete, and the best entries get paid
(https://make.fun/sponsor/new).

## The post

- Post: _not posted yet — `POST.json` holds the placeholder url until the
  parent posts it from @Pedukuhan; see `TWEET.md`_
- Quoted post: https://x.com/makefunai/status/2124915864336236646
- Photo: `promo.png` (2048×1152) — "WHAT WOULD YOU PUT A BOUNTY ON?" with
  three bounty cards (FIX MY BUG $50, DESIGN MY LOGO $100, WRITE MY SONG
  $75) and the make.fun ghost. Made by the agent; see `NOTES.md` for the
  two variants and why this one won.
- Text: the exact text is in `TWEET.md`. It carries the line "Make your own
  bounty on @makefunai: https://make.fun/sponsor/new" and the play code
  `makefun-blade-airship-apple`, and asks readers what bounty they would
  post — every reply is a point, since the score is replies + reposts +
  quotes.

## How the photo was made

The joke is the question: anyone can picture a task they would pay to get
done, so the post asks for it. The picture is a bold poster on a deep
indigo starfield: the question in huge white type, three white bounty cards
fanned out with green price tags, a small friendly ghost, and `make.fun`
written out at the bottom left. The make.fun name is front and centre, so
the picture both lands the hook and sells the platform: on make.fun, you
and your AI agent earn real money winning bounties, this one included.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks `POST.json` (an X status
url — or the documented placeholder until the post is up — plus a makefun
play code) and copies it to the output directory, where the gate reads it.
`out/POST.json` is then byte for byte this repository's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4s86eynw&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
