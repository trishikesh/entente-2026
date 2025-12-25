import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata = {
  title: 'Venue & University | ENTENTE-2026',
  description: 'NIIT University venue and campus information',
};

export default function Venue() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Venue & University
          </h1>
          <p className="text-xl text-white">
            NIIT University, Neemrana
          </p>
        </div>
      </SectionWrapper>

      {/* Campus Image */}
      <SectionWrapper className="bg-white">
        <div className="flex justify-center">
          <PlaceholderImage type="campus" alt="NIIT University Campus" />
        </div>
      </SectionWrapper>

      {/* About NIIT University */}
      <SectionWrapper className="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About NIIT University
          </h2>
          <Card>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              NIIT University (NU), established in 2009, is located on a 100-acre fully residential campus in the foothills of the Aravalli Hills in Neemrana, Rajasthan. The university is easily accessible by road, rail, and air.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded by Rajendra S. Pawar and Vijay K. Thadani, NU was envisioned as a "university with a difference," grounded in four core principles:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-4">
              <li>Industry-linked education</li>
              <li>Technology-based learning</li>
              <li>Research-driven approach</li>
              <li>Seamless education experience</li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed">
              NU offers undergraduate, postgraduate, and doctoral programs across engineering, science, management, and humanities, supported by modern infrastructure and a strong focus on sustainability and industry collaboration.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Location & Accessibility */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Location & Accessibility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              By Road
            </h3>
            <p className="text-gray-700">
              Easily accessible by road from Delhi and Jaipur
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              By Rail
            </h3>
            <p className="text-gray-700">
              Connected via railway networks in Rajasthan
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              By Air
            </h3>
            <p className="text-gray-700">
              Closest airports: Delhi (DLH) and Jaipur (JAI)
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Campus Features */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Campus Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              100-Acre Campus
            </h3>
            <p className="text-gray-700">
              Fully residential campus in the foothills of the Aravalli Hills
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Modern Infrastructure
            </h3>
            <p className="text-gray-700">
              State-of-the-art facilities and learning spaces
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Research Focus
            </h3>
            <p className="text-gray-700">
              World-class research centers and laboratories
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-700">
              Commitment to environmental sustainability and green campus
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Conference Venues */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Conference Facilities
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">
              Lecture Halls & Auditoriums
            </h3>
            <p className="text-gray-700 mb-4">
              Multiple large and medium-sized halls equipped with modern presentation technology
            </p>

            <h3 className="text-lg font-semibold text-indigo-600 mb-4 mt-6">
              Workshop Rooms
            </h3>
            <p className="text-gray-700 mb-4">
              Dedicated spaces for workshop sessions with interactive setup
            </p>

            <h3 className="text-lg font-semibold text-indigo-600 mb-4 mt-6">
              Networking Spaces
            </h3>
            <p className="text-gray-700">
              Lounge and dining areas for networking and informal interactions
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Address Card */}
      <SectionWrapper className="bg-indigo-50">
        <div className="max-w-2xl mx-auto">
          <Card>
            <h3 className="text-xl font-semibold text-indigo-600 mb-4 text-center">
              Conference Venue
            </h3>
            <p className="text-gray-700 text-center text-lg mb-4">
              <strong>NIIT University</strong>
            </p>
            <p className="text-gray-700 text-center mb-2">
              Neemrana, Rajasthan, India
            </p>
            <p className="text-gray-700 text-center text-sm">
              Email: entente@st.niituniversity.in
            </p>
            <p className="text-gray-700 text-center text-sm">
              Phone: +91-9810197694
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </main>
  );
}
