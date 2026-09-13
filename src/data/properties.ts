export interface Property {
  id: string
  name: string
  country: Country
  /** Stripe checkout link for this hostel's Oktoberfest booking. Empty shows COMING SOON. */
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
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', url: '' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: '' },
  { id: 'kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', url: '' },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', url: '' },
  { id: 'gili-trawangan', name: 'Gili Trawangan', country: 'Indonesia', url: '' },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', url: '' },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', url: '' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', url: '' },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', url: '' },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', url: '' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', url: '' },
  { id: 'manila', name: 'Manila', country: 'Philippines', url: '' },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', url: '' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', url: '' },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', url: '' },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', url: '' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', url: '' },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', url: '' },
  { id: 'pai', name: 'Pai', country: 'Thailand', url: '' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', url: '' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', url: '' },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', url: '' },
]

export const BOOK_URL = 'https://madmonkeyhostels.com/booking'
export const ALL_EVENTS_URL = 'https://madmonkeyhostels.com/tours-events'
