# ALL IN Oktoberfest 2026 · Mad Monkey

Event landing page for ALL IN Oktoberfest at Mad Monkey hostels, **Friday 2 to Sunday 4 October 2026**.

Sections: hero, three night programme, Beer Olympics running order, hostel picker,
FAQ and footer.

## Palette

| Role | Hex |
|---|---|
| Blue | `#0081f7` |
| Gold | `#ffc100` |
| White | `#ffffff` |
| Outline ink | `#04223d` (a deep shade of the brand blue, used for poster borders and type outlines) |

Type is Anton for display and Montserrat for everything else, including the
italic 900 sticker labels.

## Artwork

Everything visual follows the two brand files supplied for the event:

| File in `src/assets` | Source | Notes |
|---|---|---|
| `oktoberfest-title-1400.webp`, `-760.webp` | `MMGBL - Oktoberfest 2026 Main Logo.png` | The hero title. Trimmed to its alpha bounds and a stray blue speck below the lettering removed. The soft gold glow is kept in the alpha channel, so it sits on any background. |
| `oktoberfest-wristband.webp` | `MMGBL Oktoberfest - Wristband.png` | Used unchanged as the footer band. |
| `mad-monkey-logo-white.webp` | Mad Monkey face logo | Recoloured to match the wristband: white face fill, black linework, white wordmark. |
| `all-in-logo.webp` | ALL IN logo from `mm-squad-trips` | Footer lockup. |

The halftone ground (`.halftone` in `src/index.css`) is a recreation of the
wristband texture: a single 20px SVG tile with the dot lattice rotated 18.4
degrees, the one angle that repeats seamlessly in a square. The illustrations in
`src/components/BavarianArt.tsx` (steins, pretzel, hops, keg) are hand built
inline SVG.

## Where the programme came from

The three night line up in `src/data/schedule.ts` is the confirmed Mad Monkey
Siem Reap Oktoberfest programme (Friday BBQ and free flow plus pub crawl at $20,
Saturday Beer Olympics free entry, Sunday Funday and pub quiz at $15). Other
properties run the same three night shape with their own timings, which is what
the page copy says.

Hostel links in `src/data/properties.ts` point at each property's live
`tours-events/list/<slug>` page on madmonkeyhostels.com. Properties without a
public events page fall back to their destination page and show
"Ask at reception". Once Oktoberfest event pages are published, swap the `url`
values for the direct event URLs.

## Development

```sh
npm i
npm run dev
```

Runs on port 5185 via the `oktoberfest-mm` launch config.

```sh
npm run build                           # production build
npx tsc -p tsconfig.app.json --noEmit   # typecheck (plain tsc is a no-op here)
```

## Share card

`public/og-oktoberfest.jpg` is a 1200x630 card built from the title artwork on
the halftone, referenced by the Open Graph and Twitter tags in `index.html`.

## Deploying

This project is wired to Lovable. Pushing to `main` syncs the workspace, then hit
**Publish** in the [Lovable editor](https://lovable.dev/projects/a955b35f-7b2a-44db-842a-b25ccb54726e)
to put it live. The git push alone does not publish.
