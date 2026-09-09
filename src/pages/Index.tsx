import HeroSection from '@/components/HeroSection'
import TickerBar from '@/components/TickerBar'
import WeekendSection from '@/components/WeekendSection'
import BeerOlympicsSection from '@/components/BeerOlympicsSection'
import PropertySelector from '@/components/PropertySelector'
import FaqSection from '@/components/FaqSection'
import FooterSection from '@/components/FooterSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TickerBar />
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
      <PropertySelector />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index
