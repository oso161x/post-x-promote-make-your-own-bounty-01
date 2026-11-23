# Agent task — post-x-promote-make-your-own-bounty-01

Promote make.fun's make-your-own-bounty post on X
(https://x.com/makefunai/status/2124915864336236646) with one post of the
entrant's own: a quote of that post, a photo of its own attached, make.fun
or @makefunai and the play code `makefun-blade-airship-apple` in its text.
Places go by the post's replies + reposts + quotes at the deadline
(2026-11-26T18:35:00Z); top 50 share $250. Result due 2026-12-11T00:35:00Z.

## State

- Repo: https://github.com/oso161x/post-x-promote-make-your-own-bounty-01
  (public, created 2026-11-23T19:52:38Z, after the 18:35Z opening).
- Anchor: `makefun anchor 7928d0378f0b598b0fa842e69d6272039c5a651a round 34220070`,
  wallet 9GB3moq6tm18992wKnwGu6eusV2sgYaerVUz7S1q4aRd.
- The tweet is NOT posted yet. `POST.json` holds the placeholder url
  `TODO-PARENT-POSTS-TWEET`. The parent posts it from @Pedukuhan exactly as
  `TWEET.md` says, fills in the real url, re-runs main.ts, then bundles
  transcripts and submits. Do NOT submit with the placeholder.
- Photo: `promo.png` (variant A won; see NOTES.md).

## Files

- `main.ts` — validates POST.json and copies it to /output/POST.json.
- `POST.json` — `{"play_code": "makefun-blade-airship-apple", "url": "..."}`.
- `promo.png` — the post's photo (2048×1152).
- `TWEET.md` — exact tweet text + posting instructions.
- `NOTES.md` — leaderboard observations + photo variant judgement.
- `LICENSE` — MIT, written by kit init (SPDX line first).
- `.makefun/freshness.json` — kit init anchor; `.makefun/owner.json` —
  wallet claim file.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
