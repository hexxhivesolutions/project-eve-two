import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Innovative IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-primary-600 dark:text-primary-400">Hexxhive Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              We&apos;re a dynamic startup delivering cutting-edge IT solutions to help businesses thrive in the digital age. 
              From web development to cloud solutions, we&apos;ve got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 font-semibold"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all border-2 border-primary-600 dark:border-primary-400 font-semibold"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo/Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/official_logo_nobg.png"
                alt="Hexxhive Solutions"
                width={500}
                height={500}
                className="relative z-10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
