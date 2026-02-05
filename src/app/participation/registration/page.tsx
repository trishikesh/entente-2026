import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';



export const metadata = {
  title: 'Registration | ENTENTE-2026',
  description: 'Conference registration information and categories',
};

export default function Registration() {
  const registrationCategories = [
    {
      category: 'Student/Research Scholar',
      price: '₹1500',
      includes: [
        'Access to all sessions',
        'Conference kit',
        'Lunch & refreshments',
        'Digital certificate',
      ],
    },
    {
      category: 'Academician',
      price: '₹3000',
      includes: [
        'Access to all sessions',
        'Conference kit',
        'Lunch & refreshments',
        'Certificate of participation',
      ],
    },
    {
      category: 'Industry Professional',
      price: '₹3500',
      includes: [
        'Access to all sessions',
        'Premium kit',
        'Lunch & refreshments',
        'Networking events',
        'Certificate',
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="bg-maroon py-10 md:py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-3">
            Registration
          </h1>
          <p className="text-lg md:text-xl text-white">
            Join us for ENTENTE-2026
          </p>
        </div>
      </SectionWrapper>

      {/* Registration Categories */}
      <SectionWrapper className="bg-white py-12">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Registration Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {registrationCategories.map((reg, idx) => (
            <div
              key={idx}
              className="group relative border border-maroon rounded-xl p-6 text-center overflow-hidden"
            >
              {/* Default View */}
              <div>
                <h3 className="text-lg font-semibold text-maroon mb-2">
                  {reg.category}
                </h3>
                <p className="text-2xl font-bold text-yellow">
                  {reg.price}
                </p>
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 bg-white/95 px-5 py-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ul className="space-y-2 text-left">
                  {reg.includes.map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-maroon">
                      <span className="text-yellow font-bold">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-maroon italic mt-4">
          *Registration fee is per paper and is non-refundable. It does not include 
accommodation charges. 
        </p>
      </SectionWrapper>

      {/* Registration Process */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Steps */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-6">
              Registration Process
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Fill Registration Form',
                  desc: 'Complete the online registration form with your details',
                },
                {
                  step: '02',
                  title: 'Select Category',
                  desc: 'Choose the appropriate participant category',
                },
                {
                  step: '03',
                  title: 'Payment',
                  desc: 'Complete the registration fee payment',
                },
                {
                  step: '04',
                  title: 'Confirmation',
                  desc: 'Receive confirmation email and receipt',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 border-l-4 border-maroon p-4"
                >
                  <div className="w-10 h-10 bg-maroon text-yellow rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-maroon">
                      {item.title}
                    </h3>
                    <p className="text-sm text-maroon">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Process Image */}
          <div className="flex justify-center">
            <img 
              src="/images/event-venue.jpg" 
              alt="Registration Process" 
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Deadline & Payment */}
      <SectionWrapper className="bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Deadlines */}
          <Card>
            <h3 className="text-xl font-bold text-maroon mb-4">
              Registration Deadlines
            </h3>
            <ul className="space-y-2 text-maroon text-sm">
              <li><strong>Early Bird:</strong> Before 30th January 2026</li>
              <li><strong>Regular:</strong> 31st Jan 2026 onwards</li>
              <li><strong>On-Site:</strong> During the conference</li>
            </ul>
          </Card>

          {/* Payment Methods */}
          <Card>
            <h3 className="text-xl font-bold text-maroon mb-4">
              Payment Methods
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-maroon text-sm">
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow rounded-full"></span>
              Debit Card
              </li>
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow rounded-full"></span>
              Credit Card
              </li>
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow rounded-full"></span>
              Net Banking
              </li>
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow rounded-full"></span>
              UPI
              </li>
            </ul>
          </Card>

        </div>
      </SectionWrapper>
    </main>
  );
}
