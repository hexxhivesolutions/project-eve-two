import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 dark:bg-slate-950 text-white transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hexxhive Solutions</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              Innovative IT solutions to transform your business and drive growth in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                <Mail size={16} />
                <a href="mailto:hexxhivesolutions@gmail.com" className="hover:text-white transition-colors">
                  hexxhivesolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                <MapPin size={16} />
                <span>Manila, Philippines 5800</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 dark:bg-slate-800 p-2 rounded-full hover:bg-primary-700 dark:hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 dark:bg-slate-800 p-2 rounded-full hover:bg-primary-700 dark:hover:bg-slate-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 dark:bg-slate-800 p-2 rounded-full hover:bg-primary-700 dark:hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 dark:border-slate-800 mt-8 pt-8 text-center text-gray-300 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hexxhive Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
