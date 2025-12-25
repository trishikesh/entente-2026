import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'About the Conference | ENTENTE-2026',
  description: 'Learn about ENTENTE-2026 conference, its objectives and vision',
};

export default function AboutConference() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-12 md:py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            About the Conference
          </h1>
          <p className="text-lg md:text-xl text-white">
            ENTENTE-2026 International Conference
          </p>
        </div>
      </SectionWrapper>

      {/* Overview — Split Layout */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-4">
              Conference Overview
            </h2>
            <p className="text-maroon text-lg leading-relaxed mb-4">
              ENTENTE-2026 is an international conference providing a collaborative platform
              for researchers, students, academicians, and industry experts to exchange ideas
              across multiple disciplines.
            </p>
            <p className="text-maroon text-lg leading-relaxed">
              The conference aims to bridge academic wisdom with industry practices through
              interdisciplinary research and meaningful collaboration.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-xl border-2 border-maroon flex items-center justify-center text-maroon">
              Conference Image
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Highlights */}
      <SectionWrapper className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-maroon mb-3">
              Global Reach
            </h3>
            <p className="text-maroon">
              Connecting researchers and professionals from around the world to share
              cutting-edge ideas and innovations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-maroon mb-3">
              Multidisciplinary Focus
            </h3>
            <p className="text-maroon">
              Covering humanities, social sciences, management, educational technology,
              and library sciences.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Mission — Capsule Style */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-5xl mx-auto">
          <div className="bg-maroon rounded-full px-8 md:px-14 py-10 text-center">
            <h3 className="text-2xl md:text-3xl text-yellow font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              To create a knowledge society that addresses global challenges through
              collaborative research, innovative thinking, and sustainable practices.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Objectives — Circular Layout */}
      <SectionWrapper className="bg-white py-14">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Key Objectives
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { title: 'Knowledge Exchange', desc: 'Facilitate exchange of ideas across domains' },
            { title: 'Bridge the Gap', desc: 'Connect research with real-world practice' },
            { title: 'Interdisciplinary', desc: 'Encourage holistic, cross-domain research' },
            { title: 'Collaboration', desc: 'Build networks for future partnerships' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-maroon flex items-center justify-center mb-4 px-4">
                <h3 className="text-sm font-semibold text-maroon text-center">
                  {item.title}
                </h3>
              </div>
              <p className="text-maroon text-sm max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <CTAButton href="/conference/theme-tracks" label="Explore Conference Theme" />
        </div>
      </SectionWrapper>
    </main>
  );
}
