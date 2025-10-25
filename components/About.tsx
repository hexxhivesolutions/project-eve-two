import { Target, Lightbulb, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Empowering businesses through innovative technology solutions that drive growth and efficiency.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Staying ahead of the curve with cutting-edge technologies and creative problem-solving.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Building lasting partnerships by understanding and exceeding client expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality solutions with attention to detail and commitment to success.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            About Hexxhive Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We&apos;re a passionate startup team of 6 dedicated professionals committed to delivering
            exceptional IT solutions that transform businesses and drive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-primary-50 dark:hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 transition-colors">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to revolutionize how businesses leverage technology, 
                Hexxhive Solutions brings together a team of talented developers, designers, 
                and IT specialists who share a common goal: making technology work for you.
              </p>
              <p>
                As a startup, we understand the challenges businesses face in today&apos;s fast-paced 
                digital landscape. That&apos;s why we&apos;re committed to providing agile, scalable, and
                cost-effective solutions tailored to your unique needs.
              </p>
              <p>
                With our combined expertise and fresh perspective, we&apos;re not just building software
                – we&apos;re building the future of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
