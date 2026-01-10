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
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">
              About ENTENTE-2026
            </h2>
            <p className="text-maroon text-lg leading-relaxed mb-6">
              ENTENTE-2026 is an international conference providing a collaborative platform for researchers,
              students, academicians, and industry experts to exchange ideas across domains such as humanities,
              social sciences, management, educational technology, and library sciences.
            </p>
            <CTAButton href="/about" label="Learn More" />
          </div>

          {/* NIIT Logo */}
          <div className="flex justify-center">
            <img 
              src="/images/niit-logo.jpg" 
              alt="NIIT University Logo" 
              className="w-72 h-72 object-contain rounded-full"
            />
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
              className="w-72 h-48 object-cover rounded-xl shadow-lg"
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
