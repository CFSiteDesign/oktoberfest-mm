export interface Property {
  id: string
  name: string
  country: Country
  /** This hostel's Oktoberfest event page on madmonkeyhostels.com. Empty shows COMING SOON. */
  url: string
}

export type Country =
  | 'Cambodia'
  | 'Indonesia'
  | 'Laos'
  | 'Philippines'
  | 'Thailand'
  | 'Vietnam'

export type CountryFilter = 'All' | Country

export const COUNTRIES: CountryFilter[] = [
  'All',
  'Cambodia',
  'Indonesia',
  'Laos',
  'Philippines',
  'Thailand',
  'Vietnam',
]

export const PROPERTIES: Property[] = [
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-koh-rong' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-koh-sdach' },
  { id: 'kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-phnom-penh' },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-friday-bbq-free-flow-package-pub-crawl' },
  { id: 'gili-trawangan', name: 'Gili Trawangan', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-gili-trawangan' },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-kuta-lombok' },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-nusa-lembongan' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-uluwatu' },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-luang-prabang' },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-vang-vieng' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-dumaguete' },
  { id: 'manila', name: 'Manila', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-manila' },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', url: '' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-panglao' },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-siargao' },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-siquijor' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-bangkok' },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-chiang-mai' },
  { id: 'pai', name: 'Pai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-pai' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-phuket' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-hanoi' },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/oktoberfest-mad-monkey-hoi-an' },
]

export const BOOK_URL = 'https://madmonkeyhostels.com/booking'
export const ALL_EVENTS_URL = 'https://madmonkeyhostels.com/tours-events'
