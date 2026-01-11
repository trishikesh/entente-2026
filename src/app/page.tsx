'use client';

import HeroCarousel from '@/components/HeroCarousel';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-white py-0">
        <HeroCarousel />
      </SectionWrapper>

      {/* About ENTENTE-2026 — Split Layout */}
      <SectionWrapper className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-maroon mb-2 relative">
                About ENTENTE-2026
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-yellow to-maroon rounded-full"></div>
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              ENTENTE-2026 is an <span className="font-semibold text-maroon">international conference</span> providing a collaborative platform for researchers,
              students, academicians, and industry experts to exchange ideas across domains such as <span className="font-semibold text-maroon">humanities,
              social sciences, management, educational technology,</span> and <span className="font-semibold text-maroon">library sciences.</span>
            </p>
            <div className="flex gap-4 pt-4">
              <CTAButton href="/about" label="Learn More" />
              <a href="/call-for-papers" className="px-6 py-3 border-2 border-maroon text-maroon font-semibold rounded-lg hover:bg-maroon hover:text-white transition-all duration-300">
                Submit Paper
              </a>
            </div>
          </div>

          {/* Date Card */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow via-maroon to-yellow rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
              
              {/* Main card with dark background */}
              <div className="relative bg-maroon rounded-2xl p-10 shadow-2xl transform group-hover:scale-105 transition-all duration-300 border-2 border-yellow/30">
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow/20 rounded-tr-full"></div>
                
                <div className="relative text-center space-y-6">
                  {/* Large visible dates */}
                  <div>
                    <div className="text-8xl font-black text-yellow drop-shadow-2xl">
                      8-10
                    </div>
                    <div className="text-2xl font-bold text-white tracking-[0.4em] mt-2">APRIL</div>
                    <div className="text-xl font-semibold text-yellow/90">2026</div>
                  </div>
                  
                  {/* Divider */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-px bg-yellow/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow shadow-lg shadow-yellow/50 animate-pulse"></div>
                    <div className="w-12 h-px bg-yellow/50"></div>
                  </div>
                  
                  {/* Location */}
                  <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20">
                    <div className="text-xl font-bold text-white">NIIT University</div>
                    <div className="text-sm text-yellow font-medium">📍 Neemrana, Rajasthan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Conference Theme — Inset Highlight Box */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-5xl mx-auto border-2 border-maroon rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-maroon text-center mb-6">
            Conference Theme
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-maroon text-center mb-4">
            Knowledge Society in Transition: Advancing Sustainability through Multidisciplinary Research
          </h3>
          <p className="text-maroon text-center max-w-3xl mx-auto">
            The theme highlights the need to rethink knowledge creation, sharing, and application amid global
            ecological, technological, and cultural shifts.
          </p>
        </div>
      </SectionWrapper>

      {/* Key Highlights — Cards + Visual Balance */}
      <SectionWrapper className="bg-maroon py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-12">
          Key Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h4 className="text-lg font-semibold text-maroon mb-3">Best Paper Awards</h4>
            <p className="text-maroon">Awards across all four thematic areas</p>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold text-maroon mb-3">Workshops</h4>
            <p className="text-maroon">Case Writing and Impactful Research workshops</p>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold text-maroon mb-3">Networking Dinner</h4>
            <p className="text-maroon">An exclusive networking dinner on 9th April 2026</p>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold text-maroon mb-3">Certificates</h4>
            <p className="text-maroon">Certificates for all workshop participants</p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Important Dates — Image + Content Flip */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Event Venue Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img 
              src="/images/event-venue.jpg" 
              alt="Conference Venue" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Dates */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-8">
              Important Dates
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {[
                ['Abstract Submission Closes', '30 November 2025'],
                ['Full Paper Submission Closes', '30 December 2025'],
                ['Early Bird Registration Closes', '30 January 2026'],
                ['Conference Dates', '8–10 April 2026'],
              ].map(([title, date]) => (
                <div key={title} className="border border-maroon rounded-lg p-4">
                  <p className="font-semibold text-maroon">{title}</p>
                  <p className="text-maroon mt-1">{date}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton href="/important-dates" label="View All Dates" />
            </div>
          </div>

        </div>
      </SectionWrapper>
    </main>
  );
}
