import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Theme & Tracks | ENTENTE-2026',
  description: 'Conference theme and indicative sub-tracks across multiple domains',
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
        'Role of Library Professionals in the Age of IoT, AI, and Robotics',
        'Library Professionals in the Present Society',
      ],
    },
    {
      category: 'Educational Technology',
      subtracks: [
        'Emerging Technologies Transforming Education',
        'Digital Pedagogies and Innovative Instructional Design',
        'Learning Analytics and Educational Assessment',
        'Data-Driven Learning Design for Optimized Experiences',
      ],
    },
    {
      category: 'Management',
      subtracks: [
        'Sustainable Business, Corporate Governance, and Ethics',
        'Finance Markets and Economic Transitions',
        'Consumer Behaviour and Digital Transformations',
        'Human Resources and Organizational Development',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Theme & Tracks
          </h1>
          <p className="text-xl text-white">
            Multidisciplinary Research for Sustainability
          </p>
        </div>
      </SectionWrapper>

      {/* Conference Theme */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Conference Theme
          </h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
              Knowledge Society in Transition: Advancing Sustainability through Multidisciplinary Research
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The theme highlights the need to rethink knowledge creation, sharing, and application amid global ecological, technological, and cultural shifts. By integrating insights from humanities, social sciences, management, education, technology, and library sciences, the conference emphasizes a multidisciplinary approach essential for building inclusive, equitable, and sustainable knowledge societies.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Sub-tracks */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Indicative List of Sub-Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-indigo-600 mb-4">
                {track.category}
              </h3>
              <ul className="space-y-2">
                {track.subtracks.map((subtrack, subIndex) => (
                  <li key={subIndex} className="flex items-start">
                    <span className="text-indigo-600 mr-3 font-bold">•</span>
                    <span className="text-gray-700">{subtrack}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-700 italic">
            <strong>Note:</strong> The above sub-themes are indicative and not exhaustive. Research contributions aligned with the conference theme are welcome.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
