import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const runtime = "edge";

export const metadata = {
  title: 'Venue | ENTENTE-2026',
  description: 'Conference venue and location details',
};

export default function Venue() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Venue
          </h1>
          <p className="text-xl text-white">
            NIIT University, Neemrana, Rajasthan
          </p>
        </div>
      </SectionWrapper>

      {/* Campus Image */}
      <SectionWrapper className="bg-white">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/campus-view.jpg" 
            alt="NIIT University Campus" 
            className="w-full max-w-4xl h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </SectionWrapper>

      {/* Location Information */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white border-l-4 border-r-4 p-6 rounded-sm mb-8">
            <h2 className="text-3xl font-bold text-maroon mb-4 text-center">Conference Venue</h2>
            <p className="text-maroon text-lg leading-relaxed mb-3">
              NIIT University is located in Neemrana, Rajasthan, at the foothills of the Aravalli Hills. The university features a modern, fully residential campus spread across 100 acres.
            </p>
            <p className="text-maroon text-lg leading-relaxed">
              The state-of-the-art facilities and serene environment provide an ideal setting for academic discourse and networking.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-maroon mb-4 text-center">
            
            How to Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="border-b-2 border-yellow pb-3 mb-4">
                <h3 className="text-lg font-semibold text-maroon">By Road</h3>
              </div>
              <p className="text-maroon">
                Easily accessible from Delhi and Jaipur. Well-connected via NH-44 and state highways.
              </p>
              <p className="text-maroon text-sm mt-3 font-semibold">Distance from Delhi: ~180 km</p>
            </Card>
            <Card>
              <div className="border-b-2 border-yellow pb-3 mb-4">
                <h3 className="text-lg font-semibold text-maroon">By Rail</h3>
              </div>
              <p className="text-maroon">
                Connected to major railway networks with stations in nearby cities.
              </p>
              <p className="text-maroon text-sm mt-3 font-semibold">Nearest Station: Neemrana Fort</p>
            </Card>
            <Card>
              <div className="border-b-2 border-yellow pb-3 mb-4">
                <h3 className="text-lg font-semibold text-maroon">By Air</h3>
              </div>
              <p className="text-maroon">
                Major airports nearby with excellent connectivity.
              </p>
              <p className="text-maroon text-sm mt-3 font-semibold">Delhi: 180 km | Jaipur: 120 km</p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Campus Features */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Campus Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Modern Auditoriums', desc: 'State-of-the-art conference halls with multimedia facilities' },
            { title: 'Residential Facilities', desc: 'Comfortable on-campus accommodation for delegates' },
            { title: 'Dining Services', desc: 'Multi-cuisine food court with vegetarian and non-vegetarian options' },
            { title: 'Recreational Areas', desc: 'Serene campus with gardens and recreational facilities' },
          ].map((item, idx) => (
            <Card key={idx}>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-yellow rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <h3 className="text-lg font-semibold text-maroon mb-2">{item.title}</h3>
                  <p className="text-maroon">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
