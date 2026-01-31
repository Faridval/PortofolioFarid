import React from 'react';
import { User, Target, Mail, GraduationCap, Trophy } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  const infoItems = [
    { icon: User, label: 'Name', value: personalInfo.name },
        {
      icon: GraduationCap,
      label: 'Education',
      value: 'Universitas Pendidikan Indonesia',
    },
    { icon: Trophy, label: 'GPA', value: '3.64' },
    { icon: Mail, label: 'Email', value: personalInfo.email },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-12 items-start">
          {/* Left: Image + Tagline */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Static Tagline (Responsive & Safe) */}
            {/* <div className="py-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Building the Future • One Line at a Time • Innovate • Create •
                Inspire
              </p>
            </div> */}
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Who Am I */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <User className="h-6 w-6 text-purple-600" />
                Who Am I
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.aboutMe.whoAmI}
              </p>
            </div>

            {/* My Approach */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-600" />
                My Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.aboutMe.approach}
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {infoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1 break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
