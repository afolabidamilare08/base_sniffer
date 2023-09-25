export const metadata = {
  title: 'Home - Stellar',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Card from '@/components/Card'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import Features0 from '@/components/Features0'
import FAQ from '@/components/faqs/FAQ'
import Featurescpy from '@/components/featurescpy'

import Aboutus from '@/components/Aboutus'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Featurescpy/>
      <Aboutus/>
      <Card />

    
      <Features03 />
      
    
   
      <Testimonials />
      <Cta />
    </>
  )
}
