import React from "react";
import { Menu, X } from "lucide-react";
interface NavLink {
  title: string;
  id: string;
}
const navLinks: NavLink[] = [
  { title: "About", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Testimonials", id: "testimonials" },
];
const Navbar = () => {
  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    window.location.reload();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <header className="fixed top-0 left-0 right-0 py-5 bg-gray-100">
      <nav className="container flex items-center justify-between mx-auto px-6">
        <span className="text-xl font-bold tracking-tight cursor-pointer text-blue-500" onClick={scrollToTop}>
          {"<H/>"}
        </span>
        {/* Desktop Nav */}
        <div className="hidden md:block bg-white rounded-full px-4 py-2 shadow-md">
          <div className="hidden md:flex gap-2 font-medium">
            {navLinks.map((link, idx) => (
              <span
                className="cursor-pointer text-blue-500"
                key={idx}
                onClick={handleNavClick(link.id)}
              >
                {link.title}
              </span>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="text-blue-500 rounded-full bg-white shadow-md">Contact Me</button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Menu size={24} className="text-blue-500" />
        </div>
      </nav>
      {/* Mobile Menu */}
        <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          {navLinks.map((link, idx) => (
            <span
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100 cursor-pointer"
              key={idx}
              onClick={handleNavClick(link.id)}
            >
              {link.title}
            </span>
          ))}
          <span className="block px-4 py-2 text-blue-500 hover:bg-gray-100 cursor-pointer">Contact Me</span>
        </div>
    </header>
  );
};
export default Navbar;
