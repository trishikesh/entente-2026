import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const runtime = "edge";

export const metadata = {
  title: 'Patrons & Mentors | ENTENTE-2026',
  description: 'Conference patrons and mentor advisors',
};

export default function Patrons() {
  const patrons = [
    {
      name: 'Mr. Rajendra S. Pawar',
      title: 'Founder, NIIT University',
      description:
        'Visionary entrepreneur and educationist with decades of experience in educational innovation and technology.',
      contributions: 'Strategic Vision, Institutional Support',
    },
    {
      name: 'Mr. Vijay K. Thadani',
      title: 'Founder, NIIT University',
      description:
        'Educational leader and innovator dedicated to advancing learning and knowledge creation globally.',
      contributions: 'Academic Governance, Global Outreach',
    },
  ];

  const mentors = [
    {
      name: 'Prof. Prakash Gopalan',
      position: 'Academic Mentor',
      expertise: 'Academic Program & Quality Assurance',
      focus:
        'Ensures academic rigor and research quality across all conference sessions',
    },
    {
      name: 'Prof. Parimal V. Mandke',
      position: 'Research Mentor',
      expertise: 'Research Innovation & Excellence',
      focus:
        'Guides research presentation standards and fosters innovative scholarship',
    },
    {
      name: 'Mr. Harpal Singh',
      position: 'Industry Mentor',
      expertise: 'Industry Engagement & Application',
      focus:
        'Bridges academia and industry, ensuring practical relevance and partnerships',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="bg-maroon py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Patrons & Mentors
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Leadership and Vision
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            Distinguished leaders providing strategic direction and mentorship to ensure
            ENTENTE-2026 achieves its vision
          </p>
        </div>
      </SectionWrapper>

     

      {/* Patrons */}
      <SectionWrapper className="bg-white py-10">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Conference Patrons
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {patrons.map((patron, idx) => (
            <div
              key={idx}
              className="border border-maroon rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Patron Image */}
              <div
                className={`flex justify-center ${
                  idx % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <img 
                  src={idx === 0 ? '/images/people/rajendra-pawar.jpg' : '/images/people/vijay-thadani.jpg'}
                  alt={patron.name}
                  className="w-48 h-48 object-cover rounded-full border-4 border-yellow shadow-lg"
                />
              </div>

              {/* Text */}
              <div className={idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <h3 className="text-xl font-semibold text-maroon mb-1">
                  {patron.name}
                </h3>
                <p className="text-sm text-maroon font-medium mb-3">
                  {patron.title}
                </p>
                <p className="text-maroon text-sm mb-4">
                  {patron.description}
                </p>
                <div className="border-t border-yellow pt-3">
                  <p className="text-xs text-yellow font-semibold uppercase mb-1">
                    Key Contributions
                  </p>
                  <p className="text-sm text-maroon">
                    {patron.contributions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Academic Mentors */}
      <SectionWrapper className="bg-white py-10">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Academic Mentors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="group relative border border-maroon rounded-xl p-6 text-center overflow-hidden"
            >
              {/* Mentor Default View */}
              <div className="flex flex-col items-center">
                <img 
                  src={idx === 0 ? '/images/people/prof-prakash-gopalan.webp' : idx === 1 ? '/images/people/prof-parimal-mandke.jpg' : '/images/people/harpal-singh.jpg'}
                  alt={mentor.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-maroon shadow-lg"
                />
                <h3 className="text-lg font-semibold text-maroon mt-4">
                  {mentor.name}
                </h3>
                <p className="text-sm text-maroon font-medium">
                  {mentor.position}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div>
                  <p className="text-sm font-semibold text-maroon mb-2">
                    {mentor.expertise}
                  </p>
                  <p className="text-sm text-maroon italic">
                    “{mentor.focus}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact */}
      <SectionWrapper className="bg-maroon py-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow mb-4">
            Our Leadership Commitment
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            “ENTENTE-2026 represents a commitment to advancing knowledge society through
            rigorous research, innovative thinking, and meaningful collaborations.”
          </p>
          <p className="text-white/80 text-sm italic">
            Together, we are building a conference remembered for intellectual rigor and
            lasting impact.
          </p>
        </div>
      </SectionWrapper>

      {/* Leadership Functions */}
      <SectionWrapper className="bg-white py-10">
        <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
          Core Leadership Functions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Strategic Direction',
              items: [
                'Define conference vision and objectives',
                'Guide long-term planning and sustainability',
                'Align conference with institutional values',
              ],
            },
            {
              title: 'Academic Excellence',
              items: [
                'Oversee research quality standards',
                'Approve keynote speakers and tracks',
                'Ensure disciplinary rigor and innovation',
              ],
            },
            {
              title: 'Mentorship & Guidance',
              items: [
                'Advise organizing committee on decisions',
                'Foster professional development',
                'Share expertise and experience',
              ],
            },
            {
              title: 'Institutional Support',
              items: [
                'Secure institutional resources',
                'Build partnerships and collaborations',
                'Enhance conference visibility globally',
              ],
            },
          ].map((func, idx) => (
            <Card key={idx}>
              <h3 className="text-base font-semibold text-maroon mb-3">
                {func.title}
              </h3>
              <ul className="space-y-2">
                {func.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-maroon">
                    <span className="text-yellow font-bold">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      
    </main>
  );
}
