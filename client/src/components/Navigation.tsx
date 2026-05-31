import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "How We Help" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  // { href: "#projects", label: "Projects" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#root"
          onClick={(e) => scrollToSection(e, "#root")}
          className="font-display text-2xl font-bold tracking-tighter uppercase text-primary"
        >
          VICTUS <span className="text-accent">CONSULTING</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2 border border-primary bg-primary text-primary-foreground text-sm font-medium hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors uppercase tracking-widest"
          >
            Start a Conversation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-2 px-6 py-3 border border-primary bg-primary text-primary-foreground text-sm font-medium text-center hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors uppercase tracking-widest"
          >
            Start a Conversation
          </a>
        </div>
      )}
    </nav>
  );
}