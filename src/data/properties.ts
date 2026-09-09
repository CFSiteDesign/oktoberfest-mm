export interface Property {
  id: string
  name: string
  country: Country
  /** Live tours & events listing on madmonkeyhostels.com, empty when the hostel has no public listing yet */
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

const events = (slug: string) => `https://madmonkeyhostels.com/tours-events/list/${slug}`
const stay = (slug: string) => `https://madmonkeyhostels.com/destination/${slug}`

export const PROPERTIES: Property[] = [
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', url: '' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: '' },
  { id: 'kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', url: events('phnom-penh') },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', url: events('siem-reap') },
  { id: 'gili-trawangan', name: 'Gili Trawangan', country: 'Indonesia', url: events('gili-trawangan') },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', url: events('kuta-lombok') },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', url: '' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', url: events('uluwatu') },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', url: events('luang-prabang') },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', url: '' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', url: events('dumaguete') },
  { id: 'manila', name: 'Manila', country: 'Philippines', url: events('manila') },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', url: '' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', url: events('panglao') },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', url: events('siargao') },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', url: events('siquijor') },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', url: events('bangkok') },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', url: '' },
  { id: 'pai', name: 'Pai', country: 'Thailand', url: '' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', url: '' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', url: events('hanoi') },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', url: events('hoi-an') },
]

export const STAY_URL = (id: string) => stay(id)
export const BOOK_URL = 'https://madmonkeyhostels.com/booking'
export const ALL_EVENTS_URL = 'https://madmonkeyhostels.com/tours-events'
