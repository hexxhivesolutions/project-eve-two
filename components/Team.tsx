import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Al-Ghabid B. Hadji Haron',
      role: 'CEO & Founder',
      image: '👨‍💼',
      bio: 'Visionary leader driving innovation and strategic growth',
      linkedin: '#',
      email: 'alghabid@hexxhive.com',
    },
    {
      name: 'Keen David L. Aguro',
      role: 'Chief Technology Officer',
      image: '👨‍💻',
      bio: 'Technology strategist and full-stack development expert',
      linkedin: '#',
      email: 'keendavid@hexxhive.com',
    },
    {
      name: 'Mohamad I. Imam',
      role: 'Chief Operating Officer',
      image: '👨‍💼',
      bio: 'Operations excellence and process optimization specialist',
      linkedin: '#',
      email: 'mohamad@hexxhive.com',
    },
    {
      name: 'John Luigi A. Calumot',
      role: 'Chief Information Officer',
      image: '👨‍💻',
      bio: 'Information systems architect and data management expert',
      linkedin: '#',
      email: 'johnluigi@hexxhive.com',
    },
    {
      name: 'Suhaimil M. Subair',
      role: 'Technical Manager',
      image: '👨‍',
      bio: 'Technical leadership and development team coordinator',
      linkedin: '#',
      email: 'suhaimil@hexxhive.com',
    },
    {
      name: 'Al-Ghamdi T. Pangcoga',
      role: 'Project Manager',
      image: '👨‍💼',
      bio: 'Project delivery and client success specialist',
      linkedin: '#',
      email: 'alghamdi@hexxhive.com',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A passionate group of professionals dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="text-7xl mb-4">{member.image}</div>
              
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
