import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';



export const metadata = {
  title: 'Call for Papers | ENTENTE-2026',
  description: 'Submit your research paper to ENTENTE-2026',
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
        <div className="max-w-4xl mx-auto border-l-4 border-r-4 p-6 mb-8">
          <p className="text-maroon text-lg leading-relaxed mb-4">
            Original research papers are invited across humanities, social sciences, management, educational technology, and library sciences.
          </p>
          <p className="text-maroon text-lg leading-relaxed">
            All submissions must be original, not under consideration elsewhere, and will undergo plagiarism checks with a maximum acceptable similarity of 10%.
          </p>
        </div>
      </SectionWrapper>

      {/* Submission Process */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Submission Process
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <Card>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-maroon text-yellow rounded-full flex items-center justify-center font-bold text-sm">1</div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-maroon mb-2">Submit Abstract</h3>
                <p className="text-maroon">Maximum 500 words via Registration Form before 30 November 2025</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-maroon text-yellow rounded-full flex items-center justify-center font-bold text-sm">2</div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-maroon mb-2">Await Review</h3>
                <p className="text-maroon">Committee reviews and provides feedback on your abstract</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-maroon text-yellow rounded-full flex items-center justify-center font-bold text-sm">3</div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-maroon mb-2">Submit Full Paper</h3>
                <p className="text-maroon">After acceptance, submit complete paper via EasyChair by 30 December 2025</p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Guidelines */}
      <SectionWrapper className="bg-white">
        <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Paper Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <div className="border-b-2 border-yellow pb-3 mb-3">
              <h3 className="text-lg font-semibold text-maroon">Format Requirements</h3>
            </div>
            <ul className="space-y-2 text-maroon">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>Not exceeding 6 pages</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>Times New Roman, 12pt</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>Single spacing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow rounded-full mr-2"></span>APA style format</li>
            </ul>
          </Card>
          <Card>
            <div className="border-b-2 border-yellow pb-3 mb-3">
              <h3 className="text-lg font-semibold text-maroon">Plagiarism Policy</h3>
            </div>
            <p className="text-maroon mb-3">Maximum acceptable similarity: <strong>10%</strong></p>
            <p className="text-maroon text-sm">Papers exceeding this threshold will be rejected without further review.</p>
          </Card>
        </div>
      </SectionWrapper>

    
      
    </main>
  );
}
