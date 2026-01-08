import React, { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = personalInfo.jobTitles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % personalInfo.jobTitles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Place your CV file in `public/Farid-CV.pdf` and the Download CV button below
  // will initiate a download of that file. Move your CV (PDF) into `frontend/public`.
  // Example: `frontend/public/Farid-CV.pdf`

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="h-12 flex items-center">
                <span className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  {displayText}
                  <span className="animate-pulse text-purple-600">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              A passionate developer specializing in building scalable Machine Learning models and AI-powered solutions.
              I transform ideas into reality through clean code and innovative thinking.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                size="lg"
              >
                Explore My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300"
                size="lg"
              >
                <a href="/CV Muhammad Farid(AI).pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 pt-6">
              {personalInfo.stats.map((stat, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-300 dark:border-purple-700 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-sm font-medium text-purple-900 dark:text-purple-100">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar with Glow */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-60 animate-pulse" />
              
              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;