import React, { useState } from 'react';
import { ExternalLink, Github, X, Calendar, Code, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { projects } from '../mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent work in AI, Machine Learning, and Full-Stack Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2"
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

              {/* Project Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  View More Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Created At */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Created: {selectedProject.createdAt}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies Used */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Code className="h-5 w-5 text-purple-600" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  What I Do
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
                <Button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;