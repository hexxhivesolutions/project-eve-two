import { Code, Cloud, Smartphone, Database, Shield, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance.',
      color: 'bg-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
      color: 'bg-purple-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced reliability and flexibility.',
      color: 'bg-cyan-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management for your data needs.',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from digital threats.',
      color: 'bg-red-500',
    },
    {
      icon: Headphones,
      title: 'IT Consulting',
      description: 'Expert guidance and strategic planning to optimize your technology investments.',
      color: 'bg-amber-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} text-white rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Ready to take your business to the next level?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 font-semibold"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
