import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const runtime = "edge";

export const metadata = {
  title: 'Theme & Tracks | ENTENTE-2026',
  description: 'Conference theme and research tracks',
};

export default function ThemeTracks() {
  const tracks = [
    {
      category: 'Humanities and Social Sciences',
      subtracks: [
        'Ethics and Social Change',
        'Gender, Migration, and the Knowledge Society',
        'Media, Technology, and the Politics of Knowledge',
        'Education and Public Knowledge',
      ],
    },
    {
      category: 'Library Sciences',
      subtracks: [
        'Open Access and Innovation in Libraries',
        'Role of Libraries in Research',
        'Library Professionals in the Age of IoT, AI, and Robotics',
      ],
    },
    {
      category: 'Educational Technology',
      subtracks: [
        'Emerging Technologies Transforming Education',
        'Digital Pedagogies and Innovative Instructional Design',
        'Learning Analytics and Educational Assessment',
      ],
    },
    {
      category: 'Management',
      subtracks: [
        'Sustainable Business, Corporate Governance, and Ethics',
        'Finance Markets and Economic Transitions',
        'Consumer Behaviour and Digital Transformations',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            THEME and TRACKS
          </h1>
          <p className="text-xl text-white">
            Multidisciplinary Research for Sustainability
          </p>
        </div>
      </SectionWrapper>

      {/* Main Theme */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-yellow p-6 rounded-sm mb-8">
            <h2 className="text-3xl font-bold text-maroon mb-4 text-center">Conference Theme</h2>
            <h3 className="text-2xl font-semibold text-yellow mb-4 text-center">
              Knowledge Society in Transition: Advancing Sustainability through Multidisciplinary Research
            </h3>
            <p className="text-maroon text-lg leading-relaxed">
              The theme highlights the need to rethink knowledge creation, sharing, and application amid global ecological, technological, and cultural shifts. By integrating insights from humanities, social sciences, management, education, technology, and library sciences, the conference emphasizes a multidisciplinary approach essential for building inclusive, equitable, and sustainable knowledge societies.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Sub-tracks */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Research Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <Card key={index}>
              <div className="border-b-2 border-yellow pb-3 mb-4">
                <h3 className="text-lg font-bold text-maroon">
                  {track.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {track.subtracks.map((subtrack, subIndex) => (
                  <li key={subIndex} className="flex items-start text-maroon">
                    <span className="w-2 h-2 bg-yellow rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>{subtrack}</span>
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
