import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export const runtime = "edge";

export const metadata = {
  title: 'Registration | ENTENTE-2026',
  description: 'Register for ENTENTE-2026 conference',
};

export default function Registration() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Registration
          </h1>
          <p className="text-xl text-white">
            Join ENTENTE-2026
          </p>
        </div>
      </SectionWrapper>

      {/* Conference Mode */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
              Hybrid Mode
            </h2>
            <p className="text-gray-700 text-center text-lg">
              Attend ENTENTE-2026 in-person at NIIT University, Neemrana or participate virtually from anywhere in the world.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* What Registration Includes */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What Registration Includes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Conference Kit
            </h3>
            <p className="text-gray-700">
              Comprehensive conference kit for all participants
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Certificate
            </h3>
            <p className="text-gray-700">
              Certificate of participation for all attendees
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Meals & Refreshments
            </h3>
            <p className="text-gray-700">
              All meals included during conference days
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Workshop Access
            </h3>
            <p className="text-gray-700">
              Access to all workshops with certificates
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Registration Categories & Fees */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Registration Categories
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="border border-gray-300 p-4 text-left">Category</th>
                <th className="border border-gray-300 p-4 text-center">Early Bird Rate</th>
                <th className="border border-gray-300 p-4 text-center">Regular Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-4 font-medium">
                  Faculty & Researchers
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-medium">
                  Practitioners & Industry
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-medium">
                  Students
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4 font-medium">
                  Virtual Attendance
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Contact for rates
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-600 mt-4 text-sm">
          For detailed fee information, please contact the organizing committee.
        </p>
      </SectionWrapper>

      {/* Publication Opportunities */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Publication Opportunities
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Conference Proceedings
            </h3>
            <p className="text-gray-700">
              All accepted full papers submitted by 30 January 2026 will be published in conference proceedings with ISBN.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Springer Nature (Atlantis Press)
            </h3>
            <p className="text-gray-700">
              Select articles will be published with Atlantis Press (Springer Nature) with Web of Science affiliation.
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
          <p className="text-amber-800 mb-2">
            Special rates are available for registrations completed before <strong>30 January 2026</strong>. Regular rates apply from 31 January 2026 onwards.
          </p>
          <p className="text-amber-800">
            Payment must be made within 10 days of paper acceptance.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Register Now
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Fill out the registration form to secure your spot at ENTENTE-2026.
          </p>
          <CTAButton
            href="https://forms.gle/Tz3xm1VoTChDnbcA7"
            label="Register Now"
            variant="secondary"
            external
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
