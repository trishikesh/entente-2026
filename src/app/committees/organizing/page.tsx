import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const metadata = {
  title: 'Organizing Committee | ENTENTE-2026',
  description: 'Conference organizing committee members',
};

export default function OrganizingCommittee() {
  const coreTeam = [
    {
      name: 'Dr. Mamta Pankaj Jain',
      email: 'Mamta.P.Jain@niituniversity.in',
      role: 'Conference Chair',
      expertise: 'Conference Leadership & Strategic Planning'
    },
    {
      name: 'Dr. Ratika Kaushik',
      email: 'Ratika.Kaushik@niituniversity.in',
      role: 'Co-Chair',
      expertise: 'Program Development & Content Coordination'
    },
    {
      name: 'Dr. Vinay Kumar Kainthola',
      email: 'Vinay.Kainthola@niituniversity.in',
      role: 'Co-Chair',
      expertise: 'Academics & Research Quality'
    },
    {
      name: 'Dr. Gulroop Kaur',
      email: 'Gulroop.kaur@niituniversity.in',
      role: 'Convener',
      expertise: 'Operations & Participant Services'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-10 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Organizing Committee
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Making ENTENTE-2026 Possible
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            A dedicated team of experienced professionals ensuring a world-class conference experience
          </p>
        </div>
      </SectionWrapper>

      {/* Committee Overview */}
      

      {/* Core Team */}
      {/* Core Team */}
<SectionWrapper className="bg-white py-6 md:py-8">
  <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
    Core Leadership Team
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {coreTeam.map((member, idx) => (
      <div
        key={idx}
        className="group relative border border-maroon rounded-xl p-6 text-center overflow-hidden"
      >
        {/* Default View */}
        <div className="flex flex-col items-center">
          {/* Circular Image */}
          <img
            src={`/images/people/${member.name}.jpg`}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-maroon mb-4"
          />v>

        {/* Hover Details */}
        <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="text-center">
            <p className="text-sm font-semibold text-maroon mb-2">
              Focus Area
            </p>
            <p className="text-sm text-maroon mb-4 leading-relaxed">
              {member.expertise}
            </p>

            <a
              href={`mailto:${member.email}`}
              className="text-xs text-maroon hover:text-yellow font-medium"
            >
              {member.email}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</SectionWrapper>


      {/* Committee Functions */}
      
<SectionWrapper className="bg-white py-10 md:py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left: Content */}
    <div>
      <h2 className="text-3xl font-bold text-maroon mb-4">
        Core Responsibilities
      </h2>
      <ul className="space-y-4">
        {[
          'Program design and content curation across conference tracks',
          'Speaker, reviewer, and participant coordination',
          'Venue management, logistics, and on-site operations',
          'Budget planning, sponsorship, and financial oversight',
          'Marketing, communications, and outreach activities',
          'Registration handling and participant support services',
          'Technology infrastructure and hybrid participation support',
          'Partnership development and institutional collaboration',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-maroon">
            <span className="w-2 h-2 bg-yellow rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right: Committee Image */}
    <div className="flex justify-center">
      <img 
        src="/images/conference-image.jpg" 
        alt="Committee at Work" 
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />
    </div>

  </div>
</SectionWrapper>


      {/* Decision Making Structure */}
      <SectionWrapper className="bg-white py-4 md:py-6">
        <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
          How We Work Together
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                title: 'Monthly Meetings',
                desc: 'Regular coordination meetings to track progress, address challenges, and align on decisions'
              },
              {
                num: '02',
                title: 'Collaborative Planning',
                desc: 'Cross-functional teams working together on program content, logistics, and participant experience'
              },
              {
                num: '03',
                title: 'Shared Vision',
                desc: 'All members committed to delivering an academically rigorous and professionally organized conference'
              }
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow mb-2">{item.num}</div>
                  <h3 className="text-sm font-semibold text-maroon mb-1">{item.title}</h3>
                  <p className="text-xs text-maroon leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
