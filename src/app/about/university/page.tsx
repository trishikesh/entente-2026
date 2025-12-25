import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata = {
  title: 'About NIIT University | ENTENTE-2026',
  description: 'NIIT University - A premier institution of higher education',
};

export default function AboutUniversity() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-12 md:py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            NIIT University
          </h1>
          <p className="text-lg md:text-xl text-white">
            A University with a Difference
          </p>
        </div>
      </SectionWrapper>

      {/* Intro + Campus Image */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-4">
              About NIIT University
            </h2>
            <p className="text-maroon text-lg leading-relaxed mb-4">
              NIIT University (NU), established in 2009, is a premier institution of higher
              education located on a 100-acre fully residential campus in the foothills of
              the Aravalli Hills in Neemrana, Rajasthan.
            </p>
            <p className="text-maroon text-lg leading-relaxed">
              The university is easily accessible by road, rail, and air from major
              metropolitan centers, offering a serene yet well-connected academic
              environment.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <PlaceholderImage type="campus" alt="NIIT University Campus" />
          </div>
        </div>
      </SectionWrapper>

      {/* Founding Vision — CIRCULAR PRINCIPLES */}
      <SectionWrapper className="bg-white py-10">
  {/* Rounded maroon container */}
  <div className="max-w-6xl mx-auto bg-maroon rounded-2xl px-6 md:px-10 py-8">

    {/* Heading */}
    <div className="text-center mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow mb-3">
        Founded on Vision
      </h3>
      <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        Founded by Rajendra S. Pawar and Vijay K. Thadani, NIIT University was envisioned
        as a “university with a difference,” grounded in four core principles:
      </p>
    </div>

    {/* Vision Circles */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        'Industry-linked education',
        'Technology-based learning',
        'Research-driven approach',
        'Seamless education experience',
      ].map((item, idx) => (
        <div key={idx} className="flex justify-center">
          <div className="w-36 h-36 border-4 border-white rounded-full flex items-center justify-center px-4">
            <p className="text-sm font-semibold text-yellow text-center leading-snug">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</SectionWrapper>



      {/* Academic Excellence */}
      <SectionWrapper className="bg-white py-14">
        <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
          Academic Excellence
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-maroon mb-4">
              Programs Offered
            </h3>
            <ul className="space-y-2 text-maroon">
              {['Undergraduate', 'Postgraduate', 'Doctoral Programs'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-maroon mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2 text-maroon">
              {['Engineering', 'Science & Management', 'Humanities'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      {/* Infrastructure — PARTITION STYLE WITH IMAGE */}
      <SectionWrapper className="bg-white py-16">
        {/* Top Divider */}
        <div className="max-w-6xl mx-auto border-t-2 border-maroon mb-12"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center">
            <PlaceholderImage type="infrastructure" alt="University Infrastructure" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-maroon mb-4">
              Infrastructure & Institutional Focus
            </h3>
            <p className="text-maroon text-lg leading-relaxed">
              NIIT University offers modern infrastructure, state-of-the-art laboratories,
              and a strong focus on sustainability, innovation, and industry collaboration—
              creating an environment where academic excellence and real-world relevance
              converge.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="max-w-6xl mx-auto border-b-2 border-maroon mt-12"></div>
      </SectionWrapper>
    </main>
  );
}
