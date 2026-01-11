import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Committees | ENTENTE-2026',
  description: 'Conference organizing committee and advisory board',
};

export default function Committees() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Committees
          </h1>
          <p className="text-xl text-white">
            Leadership and Governance
          </p>
        </div>
      </SectionWrapper>

      {/* Patrons */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Patrons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <p className="text-lg font-semibold text-indigo-600">
              Mr. Rajendra S. Pawar
            </p>
          </Card>
          <Card>
            <p className="text-lg font-semibold text-indigo-600">
              Mr. Vijay K. Thadani
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Mentors */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card>
            <p className="text-lg font-semibold text-indigo-600">
              Prof. Prakash Gopalan
            </p>
          </Card>
          <Card>
            <p className="text-lg font-semibold text-indigo-600">
              Prof. Parimal V. Mandke
            </p>
          </Card>
          <Card>
            <p className="text-lg font-semibold text-indigo-600">
              Mr. Harpal Singh
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Advisory Board */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Advisory Board
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <p className="text-gray-700 text-center">
              Comprising distinguished academicians, researchers, and industry experts from national and international institutions
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Organizing Committee */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Organizing Committee
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-indigo-600 mb-3">
                Core Team
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Dr. Mamta Pankaj Jain</strong>
                  <br />
                  <span className="text-sm text-gray-600">Mamta.P.Jain@niituniversity.in</span>
                </p>
                <p className="text-gray-700">
                  <strong>Dr. Ratika Kaushik</strong>
                  <br />
                  <span className="text-sm text-gray-600">Ratika.Kaushik@niituniversity.in</span>
                </p>
                <p className="text-gray-700">
                  <strong>Dr. Vinay Kumar Kainthola</strong>
                  <br />
                  <span className="text-sm text-gray-600">Vinay.Kainthola@niituniversity.in</span>
                </p>
                <p className="text-gray-700">
                  <strong>Dr. Gulroop Kaur</strong>
                  <br />
                  <span className="text-sm text-gray-600">Gulroop.kaur@niituniversity.in</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Note */}
      <SectionWrapper className="bg-indigo-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-center">
            For complete list of advisory and organizing committee members, please contact the conference organizers.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
