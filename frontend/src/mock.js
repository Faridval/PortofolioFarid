export const personalInfo = {
  name: 'Muhammad Farid',
  email: 'faridmuhammad.1402@gmail.com',
  phone: '+62 895-1967-9430',
  placeOfBirth: 'Bekasi, Indonesia',
  gpa: '3.84',
  hobby: 'Learning New Technologies',
  education: 'Universitas Multi Data Palembang',
  profileImage: 'https://customer-assets.emergentagent.com/job_dev-showcase-880/artifacts/99e76mwn_Farid_Trisula.jpg',
  jobTitles: [
    'Backend Developer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'AI Enthusiast'
  ],
  stats: [
    { label: '1+ Years of Experience', icon: 'Award' },
    { label: 'Python & JavaScript', icon: 'Code' },
    { label: 'ML Enthusiast', icon: 'Layers' }
  ],
  aboutMe: {
    whoAmI: 'I am Muhammad Farid, an Undergraduate Mechatronics and Artificial Intelligence student with a deep understanding of data structures, algorithms, and object oriented programming logic, which provides a strong fondation, for data processing and model development.',
    approach: 'My approach centers on crafting clean, maintainable ML workflows and developing intelligent, data-driven systems that provide meaningful business impact. I believe in continuous learning and staying ahead of emerging AI technologies to build innovative and scalable solutions.'
  }, 
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Faridval', icon: 'Github' },
    { name: 'Instagram', url: 'https://www.instagram.com/faridval_/', icon: 'Instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammadfarid14/', icon: 'Linkedin' },
    { name: 'Email', url: 'https://mail.google.com/mail/u/0/#inbox?compose=new', icon: 'Mail' }
  ]
};

export const skills = [
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

export const projects = [
  {
    id: 1,
    title: 'Smart Motor Monitoring System',
    description: 'Mechasense is a monitoring and predictive maintenance platform for AC motors that integrates IoT sensors, Machine Learning predictions, and Expert System diagnosis',
    thumbnail: '/image/mecasense.png',
    createdAt: 'November - December 2025',
    technologies: ['Firebase', 'ML', 'Node.js', 'MQQT', 'IoT'],
    features: [
      'Designed and implemented database structure using Firebase Realtime Database',
      'Developed a responsive and user-friendly interface',
      'Built bearing fault prediction models using Machine Learning techniques',
      'Implemented electrical parameter monitoring using IoT sensors',
      'Developed motor condition diagnosis through Expert System integration'
    ],
    githubUrl: 'https://github.com/Faridval/Mechasense',
    liveUrl: 'https://mechasenses-tw2u.vercel.app/'
  },
  {
    id: 2,
    title: 'Teman Sehat - Health Chatbot',
    description: 'AI-based health chatbot for disease screening with expert system integration',
    thumbnail: '/image/temansehat.png',
    createdAt: 'November 2025',
    technologies: ['Python', 'LLM', 'Expert System', 'Vector Database', 'Node.js'],
    features: [
      'AI-powered disease screening and symptom assessment',
      'Rule-based diagnostic engine with decision logic',
      'Vector database integration for medical knowledge',
      'JKN facilities reference system',
      'Early symptom detection and health recommendations'
    ],
    githubUrl: 'https://github.com/muhammadfarid/teman-sehat',
    liveUrl: 'https://www.youtube.com/watch?v=2rdAKJ6biZI'
  },
  {
    id: 3,
    title: 'Email Sorting & Smart Reply Agent',
    description: 'AI-powered email assistant with intelligent categorization and automated reply generation',
    thumbnail: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80',
    createdAt: 'November 2025',
    technologies: ['Python', 'OpenRouter API', 'LLM', 'AI Agent', 'NLP'],
    features: [
      'Automated email sorting into urgent, important, task, promo, and spam categories',
      'Custom email_sort_and_reply tool for content analysis',
      'Smart reply recommendations using LLM integration',
      'Dynamic summary generation for email threads',
      'Integration with OpenRouter API for AI processing'
    ],
    githubUrl: 'https://github.com/muhammadfarid/email-agent',
    liveUrl: 'https://demo-email-agent.com'
  },
  {
    id: 4,
    title: 'Predicting New Patient Fee Classes',
    description: 'Machine Learning project for healthcare fee classes prediction with 82% accuracy',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    createdAt: 'November 2025',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Machine Learning'],
    features: [
      'Processed and analyzed 94,000+ healthcare membership records from a national health insurance dataset',
      'Built and compared multiple models, including Logistic Regression and Random Forest Classifier',
      'Achieved 82% classification accuracy with balanced performance across major and minor classes',
      'Evaluated models using accuracy, precision, recall, F1-score, and confusion matrix',
      'Trained a final production-ready model and validated it using unseen (new) data samples'
    ],
    githubUrl: 'https://github.com/muhammadfarid/patient-cost-prediction',
    liveUrl: 'https://colab.research.google.com/drive/1pTBjxPe9UOJxr0XpJI8h-P7yYdtr03_O?usp=sharing'
  },
];