
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark');
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#home" className="text-2xl font-bold text-primary" onClick={handleNavClick}>
            <img src="android-chrome-192x192.png" alt="Logo" className="h-16 w-16" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="nav-item text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden sm:block">
              <Button variant="default">
                Contact Me
              </Button>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" onClick={handleNavClick} />
          <nav className="fixed top-20 left-0 right-0 bg-card border-b border-border shadow-lg">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block px-6 py-4 text-foreground/80 hover:text-primary hover:bg-muted transition-colors border-b border-border/50 last:border-b-0"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="block px-6 py-4"
                  onClick={handleNavClick}
                >
                  <Button variant="default" className="w-full">
                    Contact Me
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
