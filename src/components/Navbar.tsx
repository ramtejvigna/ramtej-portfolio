
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          <span className="hidden sm:inline">Vigna Ramtej</span>
          <span className="sm:hidden">VR</span>
        </a>
        
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <a href="#contact">
            <Button variant="default" className="hidden sm:flex">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
