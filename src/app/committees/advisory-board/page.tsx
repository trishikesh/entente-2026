import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const metadata = {
  title: 'Advisory Board | ENTENTE-2026',
  description: 'Distinguished members of the Advisory Board',
};

export default function AdvisoryBoard() {
  const boardMembers = [
    {
      category: 'International Academics',
      count: '8+',
      description: 'Renowned scholars from universities across Europe, Asia, and Americas, bringing diverse academic perspectives.',
      responsibilities: [
        'Provide scholarly guidance on conference themes',
        'Review and evaluate research proposals',
        'Suggest eminent speakers and contributors'
      ]
    },
    {
      category: 'Industry Leaders',
      count: '5+',
      description: 'Experienced professionals from leading organizations, offering practical insights and real-world applications.',
      responsibilities: [
        'Share industry best practices',
        'Identify emerging trends and challenges',
        'Foster academia-industry collaborations'
      ]
    },
    {
      category: 'Government & Policy Experts',
      count: '4+',
      description: 'Policy specialists and government representatives ensuring relevance to strategic initiatives.',
      responsibilities: [
        'Connect research to policy implementation',
        'Provide institutional support',
        'Ensure alignment with national priorities'
      ]
    },
    {
      category: 'Research & NGO Representatives',
      count: '6+',
      description: 'Leaders from research institutions and non-profits, representing grassroots and community perspectives.',
      responsibilities: [
        'Ensure inclusive and ethical research practices',
        'Connect academic work to societal impact',
        'Facilitate knowledge dissemination'
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-10 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Advisory Board
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Guiding Excellence in Academic Conference
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            A distinguished group of 23+ global experts providing strategic guidance and academic excellence
          </p>
        </div>
      </SectionWrapper>

      {/* Introduction Section */}
     

      {/* Board Composition */}
      <SectionWrapper className="bg-white py-10 md:py-12">
        <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
          Board Composition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <Card key={index}>
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow/20 border-2 border-yellow">
                      <span className="text-lg font-bold text-yellow">{member.count}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-maroon">
                      {member.category}
                    </h3>
                  </div>
                </div>
                
                <p className="text-maroon leading-relaxed mb-4 text-sm">
                  {member.description}
                </p>

                <div className="border-t-2 border-yellow/30 pt-3">
                  <p className="text-xs font-semibold text-yellow uppercase tracking-wide mb-2">Key Responsibilities</p>
                  <ul className="space-y-1">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-maroon flex items-start gap-2">
                        <span className="text-yellow font-bold">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Overall Responsibilities */}
      <SectionWrapper className="bg-white py-10 md:py-12">
  <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
    Overall Board Functions
  </h2>

  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Strategic Direction',
          description:
            'Establish conference themes, session topics, and research priorities aligned with global trends.',
        },
        {
          title: 'Quality Assurance',
          description:
            'Ensure academic excellence through review of proposals, speakers, and content.',
        },
        {
          title: 'Network Building',
          description:
            'Foster collaborations between academia, industry, government, and civil society.',
        },
        {
          title: 'Knowledge Dissemination',
          description:
            'Facilitate sharing of research outputs and conference insights with wider communities.',
        },
        {
          title: 'Diversity & Inclusion',
          description:
            'Ensure diverse perspectives, demographics, and geographic representation.',
        },
        {
          title: 'Impact & Evaluation',
          description:
            'Monitor conference outcomes and measure contributions to knowledge society.',
        },
      ].map((func, idx) => (
        <Card key={idx}>
          <div className="text-center">
            <h3 className="text-base font-semibold text-maroon mb-2">
              {func.title}
            </h3>

            <p className="text-sm text-maroon leading-relaxed">
              {func.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
</SectionWrapper>
 


     
    </main>
  );
}
