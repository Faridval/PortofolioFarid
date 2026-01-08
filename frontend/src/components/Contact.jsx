import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Contact = () => {
  const socialIcons = {
    Github,
    Instagram,
    Linkedin,
    Mail
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 top-1/4 left-1/4 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bottom-1/4 right-1/4 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {personalInfo.socialLinks.map((social, index) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:scale-110"
              >
                {/* Radiating Lines Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 bg-gradient-to-t from-purple-600 to-transparent radiating-line"
                      style={{
                        height: '60px',
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: 'center',
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/70 transition-all duration-300">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Icon className="relative z-10 h-8 w-8 text-white" />
                </div>

                {/* Label */}
                <span className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Direct Contact Info */}
        {/* <div className="mt-16 text-center space-y-4">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-300 dark:border-purple-700">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-medium text-purple-900 dark:text-purple-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-300 dark:border-purple-700 ml-4">
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-lg font-medium text-purple-900 dark:text-purple-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes radiate {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
          100% {
            opacity: 0;
            transform: scaleY(0);
          }
        }
        .radiating-line {
          animation: radiate 2s ease-in-out infinite;
          opacity: 0;
        }
        .group:hover .radiating-line {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
};

export default Contact;