import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';

export const metadata = {
  title: 'About ENTENTE-2026 | Conference',
  description: 'Learn about ENTENTE-2026 conference objectives and target audience',
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            About ENTENTE-2026
          </h1>
          <p className="text-xl text-white">
            Exploring Knowledge Society in Transition
          </p>
        </div>
      </SectionWrapper>

      {/* About NIIT University */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About NIIT University</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            NIIT University (NU), established in 2009, is located on a 100-acre fully residential campus in the foothills of the Aravalli Hills in Neemrana, Rajasthan. The university is easily accessible by road, rail, and air.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Founded by Rajendra S. Pawar and Vijay K. Thadani, NU was envisioned as a "university with a difference," grounded in industry-linked, technology-based, research-driven, and seamless education.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            NU offers undergraduate, postgraduate, and doctoral programs across engineering, science, management, and humanities, supported by modern infrastructure and a strong focus on sustainability and industry collaboration.
          </p>
        </div>
      </SectionWrapper>

      {/* About the Conference */}
      <SectionWrapper className="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Conference</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Global digitization and technological advancements have transformed globalization into a multidimensional phenomenon impacting everyday life. This transformation aligns closely with the United Nations Sustainable Development Goals and calls for interdisciplinary research and collaboration.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            ENTENTE-2026 aims to provide an international platform for academicians, researchers, industry professionals, and students to exchange ideas across domains such as humanities, social sciences, management, educational technology, and library sciences.
          </p>
        </div>
      </SectionWrapper>

      {/* Objectives */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Objectives of the Conference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Encourage Knowledge Exchange
            </h3>
            <p className="text-gray-700">
              Encourage academicians, students, industry experts, practitioners, researchers, and policymakers to share ideas, problems, and solutions
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Bridge Academic-Industry Gap
            </h3>
            <p className="text-gray-700">
              Bridge the gap between academic wisdom and industry practices
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Facilitate Interdisciplinary Research
            </h3>
            <p className="text-gray-700">
              Facilitate interdisciplinary research and discussion
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Promote Collaboration
            </h3>
            <p className="text-gray-700">
              Promote collaboration in research and teaching-learning processes
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Target Audience */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Target Audience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            'Students and Research Scholars',
            'Academicians and Researchers',
            'Policy Makers and Regulators',
            'Industry Experts, Law Firms, and Rating Agencies',
            'Chartered Accountants, Cost Accountants, and Company Secretaries',
            'Financial Consultants and Practitioners',
            'NGOs and Registered Societies',
            'Banks, NBFCs, and Micro-Finance Institutions',
            'Economists',
          ].map((audience, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-gray-700 font-medium">{audience}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
