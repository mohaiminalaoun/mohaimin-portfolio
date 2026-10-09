export const siteContent = {
  name: 'Mohaimin Al Aoun',
  role: 'UI-first senior full-stack engineer',
  intro:
    'I start with the interface: what someone needs to see, understand, and do next. Then I follow the problem through APIs, data, deployment, and AI tools.',
  now: 'Current tabs: instructor websites, SAT answer explanations, and experiments with coding agents.',
  about: [
    'I started in frontend and kept moving closer to the product. I like being able to follow a problem from what someone needs, through the system behind it, to the moment the finished thing makes sense to use.',
    'Before my own products, I worked on customer feedback and NLP tools at Clarabridge, later acquired by Qualtrics. That work made me curious about the gap between a technically impressive system and one that actually helps someone get their job done.',
    'Outside work: Brazilian Jiu-Jitsu, Fantasy Premier League, and an unreasonable number of tabs about Sergio Ramos.'
  ],
  ai: {
    intro: 'I use coding agents every day. They speed me up; they also make mistakes with a lot of confidence. I review the work and own what ships.',
    practices: [
      {
        title: 'Put AI to work on a real task',
        body: 'I built a Claude-powered service that turns dashboard migrations into per-widget plans, cutting rebuild time from about 30 minutes to 5.'
      },
      {
        title: 'Give the model a useful shape',
        body: 'Forced structured output makes each plan usable by the rest of the pipeline. Server-sent events stream progress back to the UI.'
      },
      {
        title: 'Build the service around it',
        body: 'Node/Express, a Python FastAPI proxy, and HMAC JWT auth connect the model to the corporate gateway. I also use coding agents in my own projects and review what ships.'
      }
    ]
  },
  projects: [
    {
      number: '01',
      name: 'NovaGrapple',
      kind: 'Product · Full stack',
      description:
        'A platform for Brazilian Jiu-Jitsu instructors to publish their own pages and receive private-lesson inquiries.',
      detail:
        'Built a React/Rsbuild site builder with split-screen previews, five themes, and live profiles, alongside scheduling, booking, and instructor dashboards. Firebase auth and LLM bio generation support the instructor-to-student marketplace.',
      stack: 'React · Rsbuild · Express · Prisma · Postgres · MongoDB · Firebase',
      href: 'https://www.novagrapple.com',
      linkLabel: 'Open the live NovaGrapple site'
    },
    {
      number: '02',
      name: 'ScoreBetter',
      kind: 'Product · Learning tools',
      description:
        'SAT Reading and Writing practice that lets students commit, keep a choice open, or rule it out.',
      detail:
        'The point is to show the thinking, not just flash right or wrong. Students see why a wrong choice is tempting, where it goes off track, and what makes the right answer fit.',
      stack: 'React · NestJS · TypeScript',
      href: 'https://github.com/mohaiminalaoun/scorebetter',
      linkLabel: 'View the ScoreBetter repo'
    },
    {
      number: '03',
      name: 'Qualtrics: BFF, AI tooling & UI platform',
      kind: 'Systems · APIs · Reliability',
      description:
        'Built a Node/Express backend-for-frontend for 5+ APIs, plus a Claude-powered dashboard migration service that cut rebuild time from about 30 minutes to 5.',
      detail:
        'The BFF used parallel requests, JWT auth, retries, bounded timeouts, and graceful degradation, with 98% test coverage. It ran across Kubernetes datacenters with KEDA autoscaling, Prometheus metrics, and Vault secrets. I also architected three Module Federation entry points for multiple host apps.',
      stack: 'Node · Express · React · TypeScript · SSE · FastAPI · Kubernetes',
      href: undefined,
      linkLabel: undefined
    }
  ],
  tinkering: [
    { name: 'plastic-search', note: 'An inverted index, built by hand.' },
    { name: 'micrograd in TypeScript', note: 'Backpropagation without a framework hiding the steps.' },
    { name: 'Agent experiments', note: 'Small tools for research, coding, reviews, and everyday workflows.' }
  ],
  experience: [
    {
      place: 'Qualtrics · Full-Stack Software Engineer II',
      dates: 'Nov 2021 to present',
      note: 'Architected a multi-host analytics UI; built a resilient BFF for 5+ APIs with 98% test coverage; shipped an AI migration tool that cut rebuilds from ~30 minutes to ~5 and won one of five Innovation Month awards from 160 projects.'
    },
    {
      place: 'Clarabridge',
      dates: 'Mar 2020 to Oct 2021',
      note: 'Built NLP and audio analysis tools, a shared React component library that cut feature development time ~25%, and helped move a large AngularJS app to Angular.'
    },
    {
      place: 'MicroStrategy',
      dates: 'Mar 2017 to Mar 2020',
      note: 'Built React/Redux/TypeScript data visualization features for an enterprise BI product; a rendering framework I developed reduced dashboard load times by 40%.'
    },
    {
      place: 'Digital Reasoning',
      dates: 'May to Aug 2016',
      note: 'Built a full-stack image annotation platform used to create training data for object detection models.'
    }
  ],
  contact: {
    email: 'mohaiminx@gmail.com',
    github: 'https://github.com/mohaiminalaoun',
    linkedin: 'https://linkedin.com/in/mohaiminalaoun'
  }
} as const;

// Kept for future copy exploration, not displayed.
export const alternateHeroCopy =
  'Founding-style engineer. I take products from blank repo to real users, and I build them with AI from day one.';
