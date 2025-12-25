'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },

    {
      label: 'About',
      dropdown: [
        { label: 'About the Conference', href: '/about/conference' },
        { label: 'About NIIT University', href: '/about/university' },
      ],
    },

    {
      label: 'Conference',
      dropdown: [
        { label: 'Theme & Tracks', href: '/conference/theme-tracks' },
        { label: 'Call for Papers', href: '/conference/call-for-papers' },
        { label: 'Important Dates', href: '/conference/important-dates' },
        { label: 'Venue', href: '/conference/venue' },
      ],
    },

    {
      label: 'Programme',
      dropdown: [
        { label: 'Keynote & Speakers', href: '/programme/keynote-speakers' },
        { label: 'Workshops', href: '/programme/workshops' },
        { label: 'Featured Events', href: '/programme/events' },
      ],
    },

    {
      label: 'Committees',
      dropdown: [
        { label: 'Patrons & Mentors', href: '/committees/patrons' },
        { label: 'Advisory Board', href: '/committees/advisory-board' },
        { label: 'Organizing Committee', href: '/committees/organizing' },
      ],
    },

    {
      label: 'Participation',
      dropdown: [
        { label: 'Registration', href: '/participation/registration' },
        { label: 'Submission Guidelines', href: '/participation/submission-guidelines' },
      ],
    },

    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-2xl text-maroon hover:text-maroon-dark transition"
          >
            ENTENTE
            <span className="block text-sm">2026</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-maroon transition border-b-2 border-transparent group-hover:border-yellow"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="px-3 py-2 text-sm font-medium text-maroon flex items-center gap-1">
                      {item.label}
                      <span className="text-xs">▼</span>
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/30 overflow-hidden">
                      {item.dropdown?.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-maroon text-sm font-medium hover:bg-maroon/5 transition border-b border-maroon/5 last:border-b-0"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-maroon"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-maroon rounded hover:bg-maroon/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-maroon rounded hover:bg-maroon/5"
                    >
                      {item.label}
                      <span
                        className={`text-xs transition ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {openDropdown === item.label && (
                      <div className="ml-4 border-l border-maroon/20">
                        {item.dropdown?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-maroon hover:bg-maroon/10"
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
