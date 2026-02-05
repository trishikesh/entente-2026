import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Important Dates | ENTENTE-2026',
  description: 'Key dates and deadlines for ENTENTE-2026 conference',
};

export default function ImportantDates() {
  const dates = [
    {
      event: 'Submission of Abstract Closes',
      date: '15 February 2026',
      color: 'border-l-red-600',
    },
    {
      event: 'Submission of Full Paper Closes',
      date: '28 February 2026',
      color: 'border-l-orange-600',
    },
    {
      event: 'Early Bird Registration Opens',
      date: '1 January 2026',
      color: 'border-l-green-600',
    },
    {
      event: 'Early Bird Registration Closes',
      date: '30 January 2026',
      color: 'border-l-blue-600',
    },
    {
      event: 'Regular Registration Opens',
      date: '31 January 2026 onwards',
      color: 'border-l-indigo-600',
    },
    {
      event: 'Conference Dates',
      date: '8–10 April 2026',
      color: 'border-l-purple-600',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Important Dates
          </h1>
          <p className="text-xl text-white">
            Mark Your Calendar
          </p>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {dates.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${item.color}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.event}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-indigo-600">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Key Milestones */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Submission Phase
            </h3>
            <p className="text-gray-700">
              Submit abstracts and full papers by 30 December 2025
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Registration Phase
            </h3>
            <p className="text-gray-700">
              Early bird rates available until 30 January 2026
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              Conference
            </h3>
            <p className="text-gray-700">
              Join us 8–10 April 2026 at NIIT University
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Early Bird Notice */}
      <SectionWrapper className="bg-amber-50">
        <div className="max-w-3xl mx-auto bg-amber-100 border-l-4 border-amber-600 p-6 rounded">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">
            Early Bird Registration
          </h3>
          <p className="text-amber-800">
            Register before <strong>30 January 2026</strong> to avail of special early bird rates. Regular registration opens on 31 January 2026.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
