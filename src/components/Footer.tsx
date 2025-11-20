import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <img 
                src={logo} 
                alt="USA Best Cable Logo" 
                className="h-10 w-auto brightness-0 invert transition-smooth group-hover:scale-105"
              />
              <span className="text-xl font-bold">USA Best Cable</span>
            </Link>
            <p className="text-white/80 text-sm">
              America's trusted partner for blazing-fast fiber internet, premium TV, and reliable connectivity solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">Services</Link>
              </li>
              <li>
                <Link to="/plans" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">Plans</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-smooth hover:translate-x-1 inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Fiber Internet</li>
              <li>Cable TV</li>
              <li>Home WiFi</li>
              <li>Business Broadband</li>
              <li>24/7 Support</li>
              <li>Installation</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-2">
              <p className="text-sm text-white/80">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button variant="soft" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; 2025 USA Best Cable. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
