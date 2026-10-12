export const siteContent = {
  name: 'Mohaimin Al Aoun',
  role: 'UI-first senior full-stack engineer',
  intro:
    'UI first. I start with what someone needs to see, understand, and do next, then follow the problem through APIs, data, deployment, and AI.',
  now: 'Current tabs: instructor websites, SAT answer explanations, and experiments with coding agents.',
  about: [
    'I started in frontend and kept moving closer to the product. I like being able to follow a problem from what someone needs, through the system behind it, to the moment the finished thing makes sense to use.',
    'Before my own products, I worked on customer feedback and NLP tools at Clarabridge, later acquired by Qualtrics. That work made me curious about the gap between a technically impressive system and one that actually helps someone get their job done.',
    'Outside work: Brazilian Jiu-Jitsu, Fantasy Premier League, and an unreasonable number of tabs about Sergio Ramos.'
  ],
  ai: {
    intro: 'Agents make me faster. I still review the work, check the decisions, and own what ships.',
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
        'A platform for Brazilian Jiu-Jitsu instructors to publish a page of their own and receive private-lesson inquiries.',
      detail:
        'I built the React/Rsbuild site builder with a split-screen live preview and five themes, plus scheduling, booking, and instructor dashboards. Firebase auth and AI-assisted bios help instructors go from a blank page to a published profile.',
      stack: 'React · Rsbuild · Express · Prisma · Postgres · MongoDB · Firebase',
      href: 'https://www.novagrapple.com',
      linkLabel: 'Open the live NovaGrapple site',
      repoHref: undefined
    },
    {
      number: '02',
      name: 'ScoreBetter',
      kind: 'Product · Learning tools',
      description:
        'SAT Reading and Writing practice where students commit to an answer, keep a choice as “Maybe,” or eliminate it.',
      detail:
        'It teaches the thinking, not just right or wrong. After answering, students can see why a wrong choice is tempting, where it goes off track, and what makes the right answer fit.',
      stack: 'React · NestJS · TypeScript',
      href: 'https://scorebetter.vercel.app/',
      linkLabel: 'Try ScoreBetter live',
      repoHref: 'https://github.com/mohaiminalaoun/scorebetter'
    },
    {
      number: '03',
      name: 'Qualtrics',
      kind: 'AI tooling · BFF · UI platform',
      description:
        'Dashboard migration, from about 30 minutes to 5. A Claude-powered service drafts per-widget plans so teams can review a migration before it reaches the dashboard.',
      detail:
        'Claude returned structured per-widget plans; server-sent events streamed progress to the UI. The migration won one of five Innovation Month awards, selected from 160 projects. Separately, I built a Node/Express BFF for 5+ APIs with parallel requests, JWT auth, bounded retries and timeouts, and graceful degradation (98% test coverage). It ran across Kubernetes datacenters with KEDA autoscaling, Prometheus metrics, and Vault secrets; I also architected three Module Federation entry points for host apps.',
      stack: 'Node · Express · React · TypeScript · SSE · FastAPI · Kubernetes',
      href: undefined,
      linkLabel: undefined,
      repoHref: undefined
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
  lookingFor: {
    role: {
      title: 'A role close to the product',
      body: 'Senior full-stack work where the interface, APIs, and data model are shaped together—and I can stay close to the people using what we build.'
    },
    collaboration: {
      title: 'A real problem and someone to chase it with',
      body: 'I’d like to meet designers, engineers, or operators with a sharp problem and an early product idea worth exploring together.'
    }
  },
  contact: {
    email: 'mohaiminx@gmail.com',
    github: 'https://github.com/mohaiminalaoun',
    linkedin: 'https://linkedin.com/in/mohaiminalaoun'
  }
} as const;

// Kept for future copy exploration, not displayed.
export const alternateHeroCopy =
  'Founding-style engineer. I take products from blank repo to real users, and I build them with AI from day one.';
