import Link from 'next/link';
import CTAButton from './CTAButton';

export default function Footer() {
  return (
    <footer className="text-white">
     {/* Ready to Participate – Capsule Section */}
<div className="py-12">
  <div className="max-w-5xl mx-auto px-4">
    <div className="bg-maroon border border-white/20 rounded-full py-10 px-6 md:px-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
          Ready to Participate?
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://forms.gle/Tz3xm1VoTChDnbcA7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 bg-yellow text-maroon font-semibold rounded-full hover:bg-white transition duration-300"
          >
            Register & Submit Abstract
          </a>

          <a
            href="https://easychair.org/conferences?conf=entente2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 bg-white text-maroon font-semibold rounded-full hover:bg-yellow transition duration-300"
          >
            Submit Full Paper
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Footer Links Section */}
      <div className="bg-maroon py-10 md:py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & Branding */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-2">
                ENTENTE
              </h2>
              <p className="text-xs text-white/70">
                International Conference
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xs font-semibold text-yellow/80 uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-white/80 hover:text-yellow transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-yellow transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/call-for-papers" className="text-white/80 hover:text-yellow transition">
                    Call for Papers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold text-yellow/80 uppercase tracking-wider mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <p>
                  <a href="mailto:entente@st.niituniversity.in" className="text-white/80 hover:text-yellow transition">
                    entente@st.niituniversity.in
                  </a>
                </p>
                <p className="text-white/80">
                  +91-9810197694
                </p>
                <p className="text-white/80">
                  Neemrana, Rajasthan
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-6 text-center">
            <p className="text-white/60 text-xs">
              © 2026 ENTENTE Conference. All rights reserved. | NIIT University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
