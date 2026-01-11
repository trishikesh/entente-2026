import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Workshops | ENTENTE-2026',
  description: 'Featured workshops and training sessions',
};

export default function Workshops() {
  const workshops = [
    {
      title: 'Case Writing and Teaching',
      resource: 'Dr. Pankaj Jain',
      description: 'Learn the art of writing compelling case studies and using them effectively in classroom teaching. This workshop covers case development, pedagogical approaches, and publishing opportunities. Perfect for educators and researchers looking to enhance their teaching materials.',
      duration: '3 hours',
      targetAudience: 'Faculty, Educators, Researchers',
      skills: ['Case Development', 'Teaching Methods', 'Academic Publishing']
    },
    {
      title: 'Impactful Research',
      resource: 'Dr. Vinay Kumar Kainthola',
      description: 'Discover strategies for conducting high-impact research, utilizing research tools, leveraging citation databases, and navigating academic publishing. Learn how to maximize your research visibility and academic impact.',
      duration: '3 hours',
      targetAudience: 'Researchers, PhD Students, Early-career Academics',
      skills: ['Research Methodology', 'Citation Databases', 'Academic Publishing']
    },
    {
      title: 'Digital Transformation in Education',
      resource: 'Faculty Resource Panel',
      description: 'Explore the latest digital tools and platforms transforming educational delivery. Learn about emerging technologies, their pedagogical applications, and strategies for digital integration in classrooms.',
      duration: '2.5 hours',
      targetAudience: 'Educators, Learning Technologists, Administrators',
      skills: ['EdTech Tools', 'Digital Pedagogy', 'Online Learning']
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <SectionWrapper className="bg-maroon py-10 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Workshops
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enhance Your Skills and Knowledge
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interactive sessions with expert facilitators designed to develop professional competencies and teaching excellence
          </p>
        </div>
      </SectionWrapper>

      {/* Workshop Overview */}
      

      {/* Workshops Grid */}
      <SectionWrapper className="bg-white py-4 md:py-6">
        <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
          Featured Workshops
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5">
          {workshops.map((workshop, index) => (
            <Card key={index}>
              <div>
                {/* Header */}
                <div className="border-b border-yellow/20 pb-3 mb-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-maroon">
                      {workshop.title}
                    </h3>
                    <div className="bg-yellow/10 px-2 py-1 rounded whitespace-nowrap text-xs">
                      <p className="text-maroon font-semibold">⏱ {workshop.duration}</p>
                    </div>
                  </div>
                  <p className="text-maroon text-xs font-medium">
                    👤 {workshop.resource}
                  </p>
                </div>

                {/* Description */}
                <p className="text-maroon leading-relaxed mb-3 text-sm">
                  {workshop.description}
                </p>

                {/* Target Audience & Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-maroon/5 p-2 rounded">
                    <p className="text-xs font-semibold text-yellow/80 uppercase tracking-wide mb-1">Audience</p>
                    <p className="text-xs text-maroon leading-snug">{workshop.targetAudience}</p>
                  </div>
                  <div className="bg-maroon/5 p-2 rounded">
                    <p className="text-xs font-semibold text-yellow/80 uppercase tracking-wide mb-1">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {workshop.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-yellow/20 text-maroon px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Workshop Benefits */}
      <SectionWrapper className="bg-white py-4 md:py-6">
        <h2 className="text-3xl font-bold text-maroon mb-6 text-center">
          Why Attend Our Workshops?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Expert Facilitation',
              desc: 'Learn from experienced faculty and industry practitioners with deep expertise in their fields'
            },
            {
              title: 'Practical Skills',
              desc: 'Gain hands-on experience and actionable techniques applicable to your teaching and research'
            },
            {
              title: 'Networking',
              desc: 'Connect with peers, educators, and professionals from diverse backgrounds and institutions'
            },
            {
              title: 'Certification',
              desc: 'Receive certificates of completion recognized by NIIT University and international peers'
            },
            {
              title: 'Interactive Format',
              desc: 'Engage in discussions, group activities, and collaborative problem-solving sessions'
            },
            {
              title: 'Resource Materials',
              desc: 'Access comprehensive workshop materials, tools, and references for continued learning'
            }
          ].map((benefit, idx) => (
            <Card key={idx}>
              <div className="text-center">
                <div className="w-1 h-1 bg-yellow/20 rounded-full flex items-center justify-center mx-auto mb-2">
                </div>
                <h3 className="text-sm font-semibold text-maroon mb-1">{benefit.title}</h3>
                <p className="text-xs text-maroon leading-relaxed">{benefit.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Certificate Program */}
      <SectionWrapper className="bg-maroon py-4 md:py-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow mb-3">
            Certificate Program
          </h2>
          <p className="text-white text-sm mb-4">
            All workshop participants will receive a certificate of completion from NIIT University, recognized by academic and professional organizations globally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white text-xs font-semibold">
            <div className="bg-white/10 p-2 rounded">🎓 Official Certificate</div>
            <div className="bg-white/10 p-2 rounded">📜 Recognized Credentials</div>
            <div className="bg-white/10 p-2 rounded">⏱ Duration Specified</div>
            <div className="bg-white/10 p-2 rounded">✓ Digital & Hard Copy</div>
          </div>
        </div>
      </SectionWrapper>

    
    </main>
  );
}
