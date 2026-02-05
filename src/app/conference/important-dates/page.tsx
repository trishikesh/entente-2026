import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Important Dates | ENTENTE-2026',
  description: 'Key dates and deadlines for ENTENTE-2026',
};

export default function ImportantDates() {
  const dates = [
    { event: 'Abstract Submission Opens', date: '1 November 2025' },
    { event: 'Abstract Submission Closes', date: '15 February 2025' },
    { event: 'Full Paper Submission Opens (After Acceptance)', date: '1 December 2025' },
    { event: 'Full Paper Submission Closes', date: '28 February 2026' },
    { event: 'Early Bird Registration Opens', date: '1 January 2026' },
    { event: 'Early Bird Registration Closes', date: '30 January 2026' },
    { event: 'Regular Registration Opens', date: '31 January 2026' },
    { event: 'Conference Dates', date: '8–10 April 2026' },
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
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Key Milestones
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {dates.map((item, index) => (
            <div key={index} className="bg-white rounded-sm shadow-sm p-6 border-l-4 border-maroon hover:shadow-md transition">
              <div className="flex justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>
                    <h3 className="text-lg font-semibold text-maroon">
                      {item.event}
                    </h3>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg font-bold text-yellow whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Summary */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-maroon rounded-sm p-6">
            <h3 className="text-2xl font-bold text-maroon mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow rounded-full mr-3"></span>
              Quick Reference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-b-2 border-yellow pb-3">
                <p className="text-maroon font-semibold mb-1">Submission Phase</p>
                <p className="text-maroon text-sm">Nov 1 - Dec 30, 2025</p>
              </div>
              <div className="border-b-2 border-yellow pb-3">
                <p className="text-maroon font-semibold mb-1">Registration Phase</p>
                <p className="text-maroon text-sm">Jan 1 - Ongoing, 2026</p>
              </div>
              <div className="border-b-2 border-yellow pb-3">
                <p className="text-maroon font-semibold mb-1">Conference</p>
                <p className="text-maroon text-sm">Apr 8-10, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
