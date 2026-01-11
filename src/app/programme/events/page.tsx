import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const metadata = {
  title: 'Featured Events | ENTENTE-2026',
  description: 'Special events and networking opportunities',
};

export default function Events() {
  const events = [
    {
      title: 'Inaugural Ceremony',
      date: '8 April 2026, 9:00 AM',
      description:
        'Formal opening of the conference with keynote addresses from distinguished guests and university leadership.',
    },
    {
      title: 'Networking Dinner',
      date: '9 April 2026, 7:00 PM',
      description:
        'An elegant evening to connect with researchers, academicians, and professionals from around the world.',
    },
    {
      title: 'Poster Presentations',
      date: '8–10 April 2026',
      description:
        'Visual presentation of research findings with interactive discussions and feedback sessions.',
    },
    {
      title: 'Panel Discussions',
      date: '9 April 2026, 2:00 PM',
      description:
        'Engaging discussions on current issues across various domains with expert panelists.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-12 md:py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Featured Events
          </h1>
          <p className="text-lg md:text-xl text-white">
            Special Programs and Networking Opportunities
          </p>
        </div>
      </SectionWrapper>

      {/* Events Highlights */}
      <SectionWrapper className="bg-white py-14">
        <h2 className="text-3xl font-bold text-maroon mb-12 text-center">
          Conference Highlights
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Card key={index}>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-maroon">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-maroon">
                    {event.title}
                  </h3>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>
                  <p className="text-maroon text-sm font-semibold">{event.date}</p>
                </div>
                
                <p className="text-maroon leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Social Program – Background Gallery Section */}
      <SectionWrapper className="relative bg-maroon py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/social-1.jpg" 
            alt="Social Programs" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-maroon/80"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
            Social Programs & Networking
          </h2>

          <p className="text-yellow text-lg leading-relaxed mb-8">
            Beyond academic sessions, ENTENTE-2026 offers thoughtfully curated social
            programs to foster meaningful connections and cultural exchange.
          </p>
{/*needs to be carousel*/}
          <ul className="space-y-4 max-w-2xl mx-auto text-left">
            {[
              'Campus tour for international guests',
              'Cultural evening showcasing local traditions',
              'Sports and recreational activities',
              'Networking breaks with refreshments',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-yellow">
                <span className="w-2 h-2 bg-yellow rounded-full mr-4"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </main>
  );
}
