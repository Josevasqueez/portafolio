export const site = {
  lang: 'es',
  url: 'https://alejandrovasquez.dev',
  title: 'Alejandro Vásquez // Full-Stack Engineer',
  description:
    'Full-Stack Engineer con 5+ años construyendo sistemas en producción. Node.js, React, PostgreSQL, AWS. Ingeniero en Informática.',
  ogImage: '/profile.jpg',

  author: {
    name: 'Alejandro Vásquez',
    jobTitle: 'Full-Stack Engineer',
    avatar: '/profile.jpg',
    bio: 'Full-Stack Engineer con 5+ años construyendo sistemas en producción. Node.js, React, PostgreSQL, AWS (Lambdas, DynamoDB). Liderazgo técnico. IA como acelerador de desarrollo bajo supervisión propia. Venezolano.',
    cv: '/cv.pdf',
    sameAs: ['https://linkedin.com/in/josevasqueez'],
  },

  social: [
    {
      icon: 'linkedin',
      url: 'https://linkedin.com/in/josevasqueez',
      label: 'LinkedIn',
    },
    { icon: 'whatsapp', url: 'https://wa.me/584126147025', label: 'WhatsApp' },
    { icon: 'mail', url: 'mailto:alejandrovasqueez@gmail.com', label: 'Email' },
  ],

  sections: {
    perfil: {
      icon: 'terminal',
      title: '// PERFIL',
      margin: 'mb-10',
      headerMargin: 'mb-4',
    },
    proyectos: {
      icon: 'folder',
      title: '// PROYECTOS',
      margin: 'mb-12',
      headerMargin: 'mb-5',
    },
    experiencia: {
      icon: 'briefcase',
      title: '// EXPERIENCIA PROFESIONAL',
      margin: 'mb-10',
      headerMargin: 'mb-4',
    },
    educacion: {
      icon: 'university',
      title: '// FORMACIÓN ACADÉMICA',
      margin: 'mb-10',
      headerMargin: 'mb-4',
    },
  },

  projects: [
    {
      name: 'Xinerlink Express',
      tags: ['Next.js', 'AWS', 'Postgresql'],
      url: 'https://app.xinerlink.cl/',
    },
    {
      name: 'Plantilla Portafolio',
      tags: ['Astro'],
      url: 'https://github.com/Josevasqueez/portafolio',
    },
    {
      name: 'A3W Studio',
      tags: ['Astro'],
      url: 'https://a3wstudio.com/',
    },
    {
      name: 'Gathercord Bot',
      tags: ['Postgresql', 'Javascript'],
      url: 'https://github.com/Josevasqueez/gathercord-bot',
    },
  ],

  experience: [
    {
      role: 'Full-Stack Engineer',
      company: 'Xinerlink',
      period: '2021 - Presente',
    },
    {
      role: 'Fundador / Desarrollador',
      company: 'A3W Studio (estudio propio)',
      period: '2026 - presente',
    },
    {
      role: 'Diseñador Web',
      company: 'Wizchimp / PI Marketing',
      period: '2017 - 2021',
    },
  ],

  education: [
    {
      degree: 'Ing. en Informática',
      institution: 'Universidad Alejandro de Humboldt, Caracas',
      year: '2019',
    },
  ],
};
