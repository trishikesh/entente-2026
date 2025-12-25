import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Call for Papers | ENTENTE-2026',
  description: 'Submit your research paper to ENTENTE-2026 conference',
};

export default function CallForPapers() {
  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Call for Papers
          </h1>
          <p className="text-xl text-white">
            Share Your Research with the International Community
          </p>
        </div>
      </SectionWrapper>

      {/* Overview */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            Original research papers are invited across humanities, social sciences, management, educational technology, and library sciences. All submissions must be original and not under consideration elsewhere. Papers will undergo plagiarism checks, with a maximum acceptable similarity of 10%.
          </p>
        </div>
      </SectionWrapper>

      {/* Submission Guidelines */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Submission Guidelines
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Abstracts
            </h3>
            <p className="text-gray-700">
              Maximum 500 words, submitted via EasyChair
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Full Papers
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Not exceeding six pages</li>
              <li>Times New Roman, 12pt font</li>
              <li>Single spacing</li>
              <li>APA style format</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Notifications
            </h3>
            <p className="text-gray-700">
              Accepted abstracts will be notified via email
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Registration
            </h3>
            <p className="text-gray-700">
              Registration fees must be paid within 10 days of acceptance
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Plagiarism Policy */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Plagiarism Policy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            All submissions will undergo plagiarism checks using industry-standard detection tools. The maximum acceptable similarity index is <strong>10%</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Papers exceeding the acceptable similarity threshold will be rejected without further review.
          </p>
        </div>
      </SectionWrapper>

      {/* Awards */}
      <SectionWrapper className="bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Best Paper Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Management
            </h3>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Humanities & Social Sciences
            </h3>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Educational Technology
            </h3>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Library Sciences
            </h3>
          </Card>
        </div>
      </SectionWrapper>

      {/* Publication Opportunities */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Publication Opportunities
          </h2>
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                Conference Proceedings
              </h3>
              <p className="text-gray-700">
                All accepted full papers submitted by 30 January 2026 will be published in conference proceedings with ISBN
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                Atlantis Press (Springer Nature)
              </h3>
              <p className="text-gray-700">
                Select articles will be published with Atlantis Press (Springer Nature) with Web of Science affiliation
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Submit?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Submit your abstract or paper via EasyChair. Make sure your work aligns with the conference theme and follows all submission guidelines.
          </p>
          <CTAButton
            href="https://easychair.org/conferences?conf=entente2026"
            label="Submit via EasyChair"
            variant="secondary"
            external
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
