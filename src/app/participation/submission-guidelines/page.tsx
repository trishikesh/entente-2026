import SectionWrapper from '@/components/SectionWrapper';

export const metadata = {
  title: 'Submission Guidelines | ENTENTE-2026',
  description: 'Paper submission guidelines and requirements',
};

export default function SubmissionGuidelines() {
  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="bg-maroon py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Submission Guidelines
          </h1>
          <p className="text-lg text-white">
            Prepare Your Paper for ENTENTE-2026
          </p>
        </div>
      </SectionWrapper>

      {/* Key Info Capsules */}
      <SectionWrapper className="bg-white py-12">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Key Submission Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { label: 'Submission Deadline', value: '31 December 2025' },
            { label: 'Acceptance Notification', value: '31 January 2026' },
            { label: 'Camera Ready Copy', value: '28 February 2026' },
            { label: 'Conference Dates', value: '22–24 April 2026' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-maroon rounded-full px-6 py-4 text-center"
            >
              <p className="text-xs text-maroon font-semibold uppercase mb-1">
                {item.label}
              </p>
              <p className="text-sm text-maroon font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

    {/* Paper Format Requirements */}
{/* Paper Format Requirements */}
<SectionWrapper className="bg-white py-14">
  <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
    Paper Format Requirements
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

    {/* Left: Format Specs */}
    <div className="space-y-4">
      {[
        { label: 'File Format', value: 'Microsoft Word (.docx) or PDF' },
        { label: 'Page Length', value: '8–10 pages (including references)' },
        { label: 'Font', value: 'Times New Roman, 12 pt' },
        { label: 'Line Spacing', value: '1.5 or Double spaced' },
        { label: 'Margins', value: '1 inch on all sides' },
        { label: 'Language', value: 'English (British or American)' },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 border-b border-maroon/20 pb-3"
        >
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <div>
            <p className="text-sm font-semibold text-maroon">
              {item.label}
            </p>
            <p className="text-sm text-maroon/90">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right: Large Visual Block */}
    <div className="h-full rounded-xl border border-maroon overflow-hidden flex items-center justify-center bg-maroon/5">
      {/* Replace this div with <Image /> later if needed */}
      <div className="text-center px-6">
        <p className="text-maroon text-lg font-semibold mb-2">
          Formatting Matters
        </p>
        <p className="text-sm text-maroon/80 leading-relaxed">
          Ensure your manuscript strictly follows the prescribed format to
          avoid desk rejection and delays during review.
        </p>
      </div>
    </div>

  </div>
</SectionWrapper>


     

      {/* Plagiarism Policy */}
   {/* Plagiarism Policy */}
<SectionWrapper className="bg-white py-16">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

    {/* Left Accent — height matched */}
    <div className="md:col-span-1 bg-maroon text-yellow rounded-xl p-6 flex flex-col justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">
        Plagiarism Policy
      </h2>
      <p className="text-sm leading-relaxed">
        ENTENTE-2026 follows a zero-tolerance policy towards plagiarism to
        ensure academic integrity and originality of research.
      </p>
    </div>

    {/* Right Content */}
    <div className="md:col-span-2 border border-maroon rounded-xl p-8 h-full">
      <ul className="space-y-4 text-sm text-maroon">
        <li className="flex gap-3">
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <span>
            All submissions are screened using advanced plagiarism detection software.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <span>
            Papers with a similarity index exceeding <strong>20%</strong> will be desk rejected.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <span>
            Self-plagiarism from previously published work is strictly prohibited.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <span>
            All sources must be properly cited and acknowledged.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 bg-yellow rounded-full mt-2"></span>
          <span>
            Authors bear full responsibility for the originality of their submissions.
          </span>
        </li>
      </ul>
    </div>

  </div>
</SectionWrapper>



      
    </main>
  );
}
