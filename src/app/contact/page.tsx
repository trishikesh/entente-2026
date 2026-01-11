import SectionWrapper from '@/components/SectionWrapper';



export const metadata = {
  title: 'Contact | ENTENTE-2026',
  description: 'Get in touch with ENTENTE-2026 conference organizers',
};

export default function Contact() {
  const contactPersons = [
    {
      name: 'Dr. Mamta Pankaj Jain',
      email: 'Mamta.P.Jain@niituniversity.in',
      role: 'Conference Chair'
    },
    {
      name: 'Dr. Ratika Kaushik',
      email: 'Ratika.Kaushik@niituniversity.in',
      role: 'Co-Chair'
    },
    {
      name: 'Dr. Vinay Kumar Kainthola',
      email: 'Vinay.Kainthola@niituniversity.in',
      role: 'Co-Chair'
    },
    {
      name: 'Dr. Gulroop Kaur',
      email: 'Gulroop.kaur@niituniversity.in',
      role: 'Convener'
    },
  ];

  return (
    <main>
      {/* Hero */}
      <SectionWrapper className="bg-maroon py-14">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
            Contact ENTENTE-2026
          </h1>
          <p className="text-lg text-white leading-relaxed">
            Reach out to the organizing committee for queries, submissions, or support
          </p>
        </div>
      </SectionWrapper>

      {/* Conference Secretariat (Image Left, Text Right) */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="h-64 rounded-xl overflow-hidden">
            <img
              src="/images/conference-image.jpg"
              alt="Conference Secretariat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="border border-maroon rounded-xl p-8">
            <h2 className="text-2xl font-bold text-maroon mb-4">
              Conference Secretariat
            </h2>

            <p className="text-lg font-semibold text-maroon mb-3">
              ENTENTE-2026 International Conference
            </p>

            <div className="space-y-2 text-maroon">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:entente@st.niituniversity.in"
                  className="hover:text-yellow font-semibold"
                >
                  entente@st.niituniversity.in
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91-9810197694
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Contact Persons (Hover Circles) */}
      <SectionWrapper className="bg-white py-14">
        <h2 className="text-3xl font-bold text-maroon mb-10 text-center">
          Contact Persons
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {contactPersons.map((person, idx) => (
            <div
              key={idx}
              className="group relative w-44 h-44 mx-auto rounded-full border border-maroon flex items-center justify-center text-center cursor-pointer"
            >
              {/* Default */}
              <p className="text-sm font-semibold text-maroon px-4 leading-snug group-hover:opacity-0 transition">
                {person.name}
              </p>

              {/* Hover */}
              <div className="absolute inset-0 rounded-full bg-maroon flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition px-4">
                <p className="text-yellow text-sm font-semibold mb-1">
                  {person.role}
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="text-white text-xs break-all hover:text-yellow"
                >
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Venue */}
      <SectionWrapper className="bg-white py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Address */}
          <div className="border border-maroon rounded-xl p-8">
            <h2 className="text-2xl font-bold text-maroon mb-4">
              Conference Venue
            </h2>
            <p className="text-lg font-semibold text-maroon">
              NIIT University
            </p>
            <p className="text-maroon">Neemrana, Rajasthan</p>
            <p className="text-maroon">India</p>
          </div>

          {/* Image */}
          <div className="h-64 rounded-xl overflow-hidden">
            <img
              src="/images/campus-view.jpg"
              alt="NIIT University Campus Location"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </SectionWrapper>
    </main>
  );
}
