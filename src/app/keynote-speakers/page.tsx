import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const metadata = {
  title: 'Keynote & Speakers | ENTENTE-2026',
  description: 'Distinguished keynote speakers and resource persons',
};

export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: 'Dr. K. Narayanan',
      designation: 'Distinguished Professor and Head, Department of Economics',
      bio: 'Former Professor at IIT Bombay with extensive research in development economics, energy economics, industrial economics, and climate change.',
    },
    {
      name: 'Prof. Elisabetta Marino',
      designation: 'Professor of English Literature, University of Rome Tor Vergata',
      bio: 'Expert in transnational literature, Romanticism, and intercultural studies.',
    },
    {
      name: 'Prof. Lacey J. Davidson',
      designation: 'Professor of Philosophy, University of Indianapolis',
      bio: 'Specialist in feminist philosophy, social epistemology, and moral psychology.',
    },
  ];

  const workshops = [
    {
      title: 'Workshop on Case Writing and Teaching',
      resource: 'Dr. Pankaj Jain',
      description:
        'Recognized case writer with publications by SAGE and Ivey Publishing, specializing in case-based learning and pedagogy.',
    },
    {
      title: 'Workshop on Impactful Research',
      resource: 'Dr. Vinay Kumar Kainthola',
      description:
        'Expert in library and information sciences, research tools, citation databases, and academic publishing.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Keynote & Speakers
          </h1>
          <p className="text-xl text-white">
            Learn from International Experts
          </p>
        </div>
      </SectionWrapper>

      {/* Keynote Speakers */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Keynote Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={`/images/people/${speaker.name}.${index === 0 ? 'png' : 'jpg'}`}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-maroon"
                />
              </div>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">
                  {speaker.designation}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {speaker.bio}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Workshops */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Workshops
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {workshop.title}
              </h3>
              <p className="text-gray-700 font-medium mb-3">
                <strong>Resource Person:</strong> {workshop.resource}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {workshop.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Event */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Featured Event
          </h2>
          <Card>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              Industry Insights Forum on Technology, Innovation & Sustainability (2026)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The forum brings together industry leaders, innovators, and academic experts to discuss how technology and innovation are shaping sustainable futures.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Key Focus Areas:</strong> AI, Industry 4.0, green technologies, and data-driven systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The round-table format encourages open exchange, actionable insights, and industry–academia collaboration.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </main>
  );
}
