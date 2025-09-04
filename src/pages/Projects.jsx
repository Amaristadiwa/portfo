import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Real-time sales tracking and analytics. Secure user authentication and authorization. Intuitive product management interface. Responsive design for all devices.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      tech: ['React', 'Node.js', 'MongoDB', 'Git'],
      category: 'Web Application',
      featured: true
    },
    {
      title: '',
      description: 'User-friendly interface for task creation and tracking. Categorization and priority settings. Collaboration features for teams. Customizable task boards.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tech: ['Next.js', 'Express', 'PostgreSQL'],
      category: 'Productivity',
      featured: true
    },
    {
      title: 'AI Content Generator',
      description: 'Generates creative content with AI algorithms. Multiple content formats supported (articles, captions). Integrated spell and grammar checker. User-friendly content customization options.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tech: ['Vue.js', 'Python', 'AWS S3'],
      category: 'AI/Machine Learning',
      featured: true
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Track income and expenses easily. Categorize transactions for better insights. Generate monthly financial reports. Budgeting tools to manage spending.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      tech: ['Angular', 'NestJS', 'MySQL'],
      category: 'Finance',
      featured: false
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'Share and discover new recipes. User profiles with favorite recipe collections. Advanced search and filtering options. Meal planning functionality.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tech: ['Svelte', 'Firebase', 'Firestore'],
      category: 'Social Platform',
      featured: false
    },
    {
      title: 'Community Event Planner',
      description: 'Create and manage community events. RSVP and guest list management. Integrated calendar for event scheduling. Discussion forums for attendees.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      tech: ['Solid.js', 'Django', 'PostgreSQL'],
      category: 'Community',
      featured: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            My Projects <Heart className="w-8 h-8 lg:w-12 lg:h-12 text-pink-500 ml-4" />
          </h1>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
                        <Github className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {project.description.split('. ').map((feature, featureIndex) => (
                        feature.trim() && (
                          <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{feature.trim()}{featureIndex < project.description.split('. ').length - 1 ? '.' : ''}</span>
                          </div>
                        )
                      ))}
                    </div>

                    <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
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

export default Projects;