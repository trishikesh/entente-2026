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
      designation: 'Distinguished Professor of Economics',
      bio: 'Expert in development economics with extensive research in energy and climate change. Authored over 50 publications in international journals and conferences.',
    },
    {
      name: 'Prof. Elisabetta Marino',
      designation: 'Professor of English Literature',
      bio: 'Specialist in transnational literature and intercultural studies. Conducted research across 15 countries and mentored numerous doctoral students.',
    },
    {
      name: 'Prof. Lacey J. Davidson',
      designation: 'Professor of Philosophy',
      bio: 'Expert in feminist philosophy and social epistemology. Director of multiple research initiatives focusing on knowledge and social justice.',
    },
    {
      name: 'Dr. Amelia Roberts',
      designation: 'Senior Research Scholar',
      bio: 'Specialist in educational technology and digital transformation. Consulting expert for leading international organizations on innovation in learning.',
    },
    {
      name: 'Prof. Raj Patel',
      designation: 'Director of Sustainability Studies',
      bio: 'Leading authority on sustainable development and resource management. Published groundbreaking work on circular economy principles.',
    },
    {
      name: 'Dr. Sarah Chen',
      designation: 'Professor of Library & Information Science',
      bio: 'Pioneer in digital library systems and knowledge organization. Recipient of multiple international awards for innovative research.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-10 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Keynote Speakers
          </h1>
          <p className="text-lg md:text-xl text-white">
            Learn from International Experts and Thought Leaders
          </p>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Distinguished academics and industry professionals sharing cutting-edge research and insights
          </p>
        </div>
      </SectionWrapper>

      {/* Introduction Section */}
      <SectionWrapper className="bg-white py-4 md:py-5">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-r-4 p-4 bg-white rounded-sm">
            <h2 className="text-2xl font-bold text-maroon mb-2">About Our Speakers</h2>
            <p className="text-maroon leading-relaxed text-sm mb-2">
              ENTENTE-2026 brings together world-renowned experts from diverse disciplines to share their research, insights, and perspectives.
            </p>
            <p className="text-maroon leading-relaxed text-sm">
              Their presentations will cover critical topics ranging from sustainable development to digital transformation.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Speakers Grid */}
      {/* Speakers Grid */}
<SectionWrapper className="bg-white py-10 md:py-12">
  <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
    Distinguished Speakers
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {speakers.map((speaker, index) => (
      <div
        key={index}
        className="group relative border border-maroon rounded-xl p-6 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Photo */}
        <img
          src={`/images/people/${speaker.name}.${index === 0 ? 'png' : index === 2 ? 'jpeg' : 'jpg'}`}
          alt={speaker.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-maroon mb-4"
        />

        {/* Name + Designation (Always Visible) */}
        <h3 className="text-lg font-semibold text-maroon mb-1">
          {speaker.name}
        </h3>
        <p className="text-sm text-maroon font-medium">
          {speaker.designation}
        </p>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div>
            <h4 className="text-base font-semibold text-maroon mb-2">
              {speaker.name}
            </h4>
            <p className="text-sm text-maroon leading-relaxed mb-3">
              {speaker.bio}
            </p>
            <p className="text-xs text-maroon/70">
              Keynote Session • 8–10 April 2026
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</SectionWrapper>


      {/* Sessions Info */}
      <SectionWrapper className="bg-white py-4 md:py-6">
        <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
          Keynote Sessions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            {
              day: 'Day 1 (8 April)',
              time: '9:00 AM - 10:30 AM',
              topic: 'Knowledge Society in Transition: Challenges and Opportunities',
              speakers: 'Dr. K. Narayanan & Prof. Elisabetta Marino'
            },
            {
              day: 'Day 1 (8 April)',
              time: '11:00 AM - 12:30 PM',
              topic: 'Ethics, Technology & Social Responsibility',
              speakers: 'Prof. Lacey J. Davidson & Dr. Amelia Roberts'
            },
            {
              day: 'Day 2 (9 April)',
              time: '9:00 AM - 10:30 AM',
              topic: 'Sustainability & Future Systems',
              speakers: 'Prof. Raj Patel & Dr. Sarah Chen'
            },
            {
              day: 'Day 2 (9 April)',
              time: '2:00 PM - 3:30 PM',
              topic: 'Research Impact & Knowledge Sharing',
              speakers: 'All Distinguished Speakers Panel'
            }
          ].map((session, idx) => (
            <Card key={idx}>
              <div>
                <p className="text-xs font-semibold text-yellow uppercase tracking-wide mb-1">{session.day}</p>
                <p className="text-xs text-maroon/70 mb-2">{session.time}</p>
                <h3 className="text-sm font-semibold text-maroon mb-2">{session.topic}</h3>
                <div className="border-t border-yellow pt-2">
                  <p className="text-xs text-maroon/70">
                    <span className="font-semibold">Speakers:</span> {session.speakers}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
