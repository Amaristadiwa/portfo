import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Code, Database, Cloud, Smartphone, Palette, BarChart3, Sparkles } from 'lucide-react';

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications with modern frameworks.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing robust APIs and database solutions for seamless data flow.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Cloud,
      title: 'DevOps ',
      description: 'Automating deployment, optimizing infrastructure ',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and aesthetically pleasing user interfaces and experiences.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile experiences for iOS and Android.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Database Management',
      description: 'Managing and optimizing data storage solutions for performance and reliability.',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with secure payments, inventory management, and customer dashboards.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Chatbot Interface',
      description: 'An intelligent chatbot powered by natural language processing for enhanced customer support.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tech: ['Next.js', 'Express', 'PostgreSQL']
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A personalized dashboard for tracking project progress, key metrics, and client interactions.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      tech: ['Vue.js', 'Python', 'AWS S3']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <img
                src="src\images\Snapchat-8135359.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Designing <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Dreams</span>,<br />
              Building <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Futures</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm a Full-Stack Developer creating elegant and intuitive digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-pink-400 hover:text-pink-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl overflow-hidden">
                <img
                  src="src\images\Snapchat-548283091.jpg"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;