export interface Day {
  id: string
  day: string
  date: string
  title: string
  price: string
  priceNote: string
  doors: string
  blurb: string
  includes: string[]
}

/**
 * Programme confirmed for Mad Monkey Siem Reap, the flagship Oktoberfest weekend.
 * Other hostels run the same three-night format, timings vary by property.
 */
export const DAYS: Day[] = [
  {
    id: 'friday',
    day: 'Friday',
    date: '2 October',
    title: 'BBQ, Free Flow & Pub Crawl',
    price: '$20',
    priceNote: 'per person',
    doors: 'Doors 6:30 PM',
    blurb:
      'The weekend kicks off with a proper Oktoberfest BBQ, ninety minutes of free flow beer and our famous Friday pub crawl to carry it into the night. Beer pong tournament, music quiz and a few surprises in between.',
    includes: [
      'Special Oktoberfest BBQ',
      'Free flow beer, 7:00 to 8:30 PM',
      'Friday pub crawl straight after',
      'Beer pong tournament and music quiz',
    ],
  },
  {
    id: 'saturday',
    day: 'Saturday',
    date: '3 October',
    title: 'Beer Olympics & Karaoke',
    price: 'FREE',
    priceNote: 'walk straight in',
    doors: 'Games from 7:00 PM',
    blurb:
      'A full evening of gloriously stupid drinking games. Pick a team, pick a name, battle it out for Oktoberfest glory. Karaoke takes over at nine, then the Power House challenge decides who is actually still standing.',
    includes: [
      'Flip pong, drunk waiter, stein holding, spoon beer',
      'Karaoke from 9:00 PM',
      'Power House challenge at 9:30 PM',
      'Prizes for the winning team',
    ],
  },
  {
    id: 'sunday',
    day: 'Sunday',
    date: '4 October',
    title: 'Sunday Funday & Pub Quiz',
    price: '$15',
    priceNote: 'per person',
    doors: 'Doors 6:30 PM',
    blurb:
      'Last day of the weekend, so we send it off properly. A loaded BBQ plate, ninety minutes of unlimited draft beer and spirit mixers, then our pub quiz to settle who has the sharpest head left.',
    includes: [
      'BBQ plate, two meats and three sides',
      'Unlimited draft beer and spirit mixers, 90 minutes',
      'Entry to the Oktoberfest pub quiz',
      'Prizes for the winning table',
    ],
  },
]

export interface OlympicEvent {
  time: string
  name: string
  note: string
}

export const BEER_OLYMPICS: OlympicEvent[] = [
  { time: '7:00 PM', name: 'Flip Pong', note: 'Sink it, flip it, pass it on' },
  { time: '7:30 PM', name: 'Drunk Waiter', note: 'Full tray, full sprint, no spills' },
  { time: '8:00 PM', name: 'Stein Holding', note: 'Arm out, stein up, last one wins' },
  { time: '8:30 PM', name: 'Spoon Beer', note: 'Exactly as undignified as it sounds' },
  { time: '9:00 PM', name: 'Karaoke', note: 'Nobody is judging. Everybody is judging' },
  { time: '9:30 PM', name: 'Power House', note: 'One shot of beer a minute, for an hour' },
]

export interface Faq {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: 'When is Mad Monkey Oktoberfest?',
    a: 'Friday 2 October through Sunday 4 October 2026. Three nights, three formats, one very long weekend.',
  },
  {
    q: 'Do I need to be staying at the hostel?',
    a: 'No. Oktoberfest is open to everyone, guests and non guests alike. Staying with us just means the walk home is about nine seconds long.',
  },
  {
    q: 'How do I book?',
    a: 'Pick your hostel above and hit Get access. That takes you to its Oktoberfest page, where you can book. Kampot and Nacpan Beach are coming soon.',
  },
  {
    q: 'What does the package price cover?',
    a: 'Each hostel sets its own packages and prices, listed on its Oktoberfest page. At Siem Reap, Friday is $20 for the BBQ, the free flow beer window and the pub crawl, Saturday Beer Olympics is free to enter, and Sunday is $15 for the BBQ plate, unlimited drinks window and pub quiz entry.',
  },
  {
    q: 'Is free flow really free flow?',
    a: 'Yes, inside the stated window, which each hostel lists on its Oktoberfest page. At Siem Reap, Friday runs 7:00 to 8:30 PM and Sunday runs for ninety minutes from the start of service. After that it is back to normal bar prices, which at Mad Monkey are hardly punishing.',
  },
  {
    q: 'Do I need a costume?',
    a: 'Not required, very much encouraged. Lederhosen and dirndls will be rewarded at the bar. Bring your energy and your good vibes either way.',
  },
  {
    q: 'Is every Mad Monkey running it?',
    a: '21 hostels are bookable now, each with its own timings and pricing, all in the list above. Kampot and Nacpan Beach are coming soon.',
  },
]
