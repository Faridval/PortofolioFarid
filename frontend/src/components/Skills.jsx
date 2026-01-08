import React from 'react';
import { skills } from '../mock';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Auto-Scrolling Skill Icons */}
        <div className="relative overflow-hidden py-12">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

          <div className="skill-scroll-container">
            <div className="skill-scroll-content">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="skill-item group"
                >
                  <div className="relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-2">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                    
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 object-contain mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-scroll-container {
          display: flex;
          overflow: hidden;
        }
        
        .skill-scroll-content {
          display: flex;
          animation: scroll-left 30s linear infinite;
          gap: 2rem;
        }
        
        .skill-scroll-container:hover .skill-scroll-content {
          animation-play-state: paused;
        }
        
        .skill-item {
          flex-shrink: 0;
          width: 150px;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;