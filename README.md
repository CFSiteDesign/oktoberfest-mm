# Mad Monkey Oktoberfest 2026

Event landing page for Mad Monkey Oktoberfest, **Friday 2 to Sunday 4 October 2026**.

Live sections: hero, three night programme, Beer Olympics running order, hostel
picker, FAQ and footer.

## Palette

| Role | Hex |
|---|---|
| Bavarian blue | `#0081f7` |
| Festival gold | `#ffc100` |
| White | `#ffffff` |
| Outline ink | `#04223d` (a deep shade of the brand blue, used for poster borders and type outlines) |

Type is Anton for display and Montserrat for everything else. The Bavarian
lozenge (Rauten) bands are a tiled inline SVG, and every illustration in
`src/components/BavarianArt.tsx` is hand built SVG, so the page ships with no
image requests beyond the share card.

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
npm run build      # production build
npx tsc -p tsconfig.app.json --noEmit   # typecheck (plain tsc is a no-op here)
```

## Share card

`public/og-oktoberfest.png` is a 1200x630 poster referenced by the Open Graph and
Twitter tags in `index.html`.

## Deploying

This project is wired to Lovable. Pushing to `main` syncs the workspace, then hit
**Publish** in the [Lovable editor](https://lovable.dev/projects/a955b35f-7b2a-44db-842a-b25ccb54726e)
to put it live. The git push alone does not publish.
