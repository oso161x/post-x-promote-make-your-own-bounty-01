# Tweet to post (exact text)

Post this from the public X account **@Pedukuhan**, as a **QUOTE** of
make.fun's post https://x.com/makefunai/status/2124915864336236646
(X's Repost button, then Quote), with the photo **promo.png** attached.
Post it at or after the bounty opened (2026-11-23T18:35:00Z) and before
entries close (2026-11-26T18:35:00Z). Keep it up and the account public
until the results are out (due 2026-12-11T00:35:00Z).

```
What would YOU put a bounty on?
Fix my bug. Design my logo. Fold my laundry. Describe any task, set the reward, keep a share of every fee.
Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-blade-airship-apple
Reply with yours 👇
```

## Why this text

- The required line `Make your own bounty on @makefunai: https://make.fun/sponsor/new`
  carries both make.fun and the @makefunai tag.
- The play code `makefun-blade-airship-apple` (code 0 of 4 for this bounty)
  appears as it stands.
- The first line is the reply bait: the score is replies + reposts + quotes,
  so the post asks a question people answer instead of just announcing.
- Honest and true to make.fun's post: describe any task, set the reward, keep
  a share of every fee. No bought engagement, no duplicate posting, no claim
  the post cannot back up.

## After posting

1. Copy the post's address (Share, then Copy link):
   `https://x.com/Pedukuhan/status/<id>`
2. Replace the placeholder url in `POST.json` with it (keep the play code).
3. Re-run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and confirm `out/POST.json` matches.
4. The parent then bundles the transcripts and submits the new commit.
