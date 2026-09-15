import HeroSection from '@/components/HeroSection'
import TickerBar from '@/components/TickerBar'
import WeekendSection from '@/components/WeekendSection'
import BeerOlympicsSection from '@/components/BeerOlympicsSection'
import PropertySelector from '@/components/PropertySelector'
import FaqSection from '@/components/FaqSection'
import FooterSection from '@/components/FooterSection'

// Hostels come straight after the hero so people can find where to go first.
// The Siem Reap line up and Beer Olympics are one property's programme, so they close the page.
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TickerBar />
      <PropertySelector />
      <FaqSection />
      <WeekendSection />
      <TickerBar
        tone="blue"
        speed="slow"
        items={[
          'SIX EVENTS',
          'ONE TEAM',
          'ZERO DIGNITY',
          'FLIP PONG',
          'DRUNK WAITER',
          'STEIN HOLDING',
          'SPOON BEER',
          'POWER HOUSE',
        ]}
      />
      <BeerOlympicsSection />
      <FooterSection />
    </div>
  )
}

export default Index
