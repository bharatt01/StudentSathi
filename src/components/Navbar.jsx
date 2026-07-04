import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Colleges', link: '/colleges' },
    { name: 'Hostels', link: '/hostels' },

    { name: 'PGs', link: '/paying-guests' },
    { name: 'Coaching', link: '/coaching' },
    { name: 'How It Works', link: '/how-it-works' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#F5F1EB] border-b-2 border-[#2D2D2D] py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#C41E3A] p-2 border-2 border-[#2D2D2D] rotate-[-2deg]">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-black tracking-tight uppercase ${isScrolled ? 'text-[#2D2D2D]' : 'text-white'}`}>
                StudentSathi
              </h1>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-[#C41E3A]' : 'text-white/70'}`}>
                Save on Education
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
             <Link
  key={link.name}
  to={link.link}
  className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#C41E3A] ${
    isScrolled ? 'text-[#2D2D2D]' : 'text-white/90'
  }`}
>
  {link.name}
</Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className={`text-sm font-bold uppercase tracking-wide ${isScrolled ? 'text-[#2D2D2D]' : 'text-white'}`}>
              Sign In
            </button>
            <button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-6 py-2.5 text-sm font-black uppercase tracking-wide transition-colors border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px]">
              Get Discount
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#F5F1EB] border-2 border-[#2D2D2D] p-6 space-y-4 shadow-[8px_8px_0px_0px_#2D2D2D]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="block text-sm font-bold uppercase tracking-wide text-[#2D2D2D] hover:text-[#C41E3A]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-[#2D2D2D]" />
            <button className="w-full bg-[#C41E3A] text-white py-3 font-black uppercase tracking-wide border-2 border-[#2D2D2D]">
              Get Discount
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;