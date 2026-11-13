# news-image-01 — "Friday 13 November 2026: The World Today"

One image that sums up the world's news of Friday 13 November 2026, for
make.fun competition `news-image-01` ($250, 100 paid places).

## The image

A 1024×1024 editorial infographic, `entry.png` (506,021 bytes): a header
dated **FRIDAY 13 NOVEMBER 2026** over six illustrated panels, each with a
short bold label and a one-line sub-label — every story first reported on
13 November 2026:

1. **NVIDIA CHIEF HUANG RESIGNS** — Shares fall 16%
   (Nvidia founder Jensen Huang resigned as chief executive and from the
   board; CFO Colette Kress became interim CEO.)
2. **ZELENSKY MEETS US ENVOYS** — Europe joins next talks
   (After US envoys met Putin in Moscow and Zelenskyy near Dublin, Russia
   agreed Europe will be represented at the next round of Ukraine talks;
   the coming prisoner exchange is described as potentially the war's largest.)
3. **DRONE HITS RUSSIAN WARSHIP** — Gulf of Finland
   (Ukraine's Security Service says it struck the Baltic Fleet corvette
   Naro-Fominsk; Finland confirmed detecting a strike on a Russian
   warship near Gogland, ~40 km off Kotka.)
4. **IRAN CLAIMS STRIKE ON US RADAR** — Bahrain
   (Iran says it struck a US radar site in Bahrain.)
5. **FBI: N. KOREA $400M CRYPTO HACK** — Via fake video calls
   (The FBI on North Korean hackers' $400m crypto theft through fake
   video calls.)
6. **MICROSOFT 365 OUTAGE** — Mail & Teams down worldwide
   (A major Microsoft 365 outage disrupted mail and Teams services
   around the world.)

Sources checked while building: BBC World and Al Jazeera RSS (as named in
the competition kit), plus same-day reporting of the Nvidia resignation
and the Microsoft 365 outage. Labels state only what was reported; the
Iran item is attributed ("claims") exactly as reported.

## How it was built

The six panels were drawn as one AI-generated 2×3 grid illustration
(no text in the artwork), then composed into the final image with a
Python/Pillow script (`build_entry.py`, kept outside this repo): a title
band, the six panels, and crisp vector-rendered labels — so every word
is spelled exactly, with no garbled text.

## The program

`main.ts` (Node 22, standard library only) copies the image the
repository holds to `/output/entry.png`. No network, fully deterministic:
two runs write the same bytes.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
