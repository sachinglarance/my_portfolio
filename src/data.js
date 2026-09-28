// All resume content lives here — edit this file to update the site.

export const profile = {
  name: 'SachinCharles A',
  roles: ['Flutter Developer', 'Mobile App Engineer', 'Dart Enthusiast', 'Cross-Platform Builder', 'UI Craftsman'],
  email: 'sachinglarance@gmail.com',
  phone: '+91 63790 80998',
  phoneRaw: '+916379080998',
  linkedin: 'https://www.linkedin.com/in/sachinglarance',
  github: 'https://github.com/sachinglarance/',
}

export const stats = [
  { to: 3, suffix: '+', label: 'Years Experience' },
  { to: 25, prefix: '~', suffix: '%', label: 'Faster API Response' },
  { to: 2, label: 'Platforms · Android & iOS' },
]

export const skills = [
  { icon: '📱', title: 'Languages & Frameworks', tags: ['Flutter', 'Dart'] },
  { icon: '🧠', title: 'Architecture & State', tags: ['Clean Architecture', 'Provider', 'Riverpod'] },
  { icon: '🔥', title: 'Backend & Database', tags: ['Firebase Auth', 'Firestore', 'FCM', 'REST APIs', 'JSON Parsing', 'SQLite'] },
  { icon: '🧩', title: 'Third-Party Integrations', tags: ['Google Maps', 'Push Notifications', 'Sentry', 'WebSocket'] },
  { icon: '🚀', title: 'DevOps & Deployment', tags: ['CI/CD', 'Fastlane', 'Jenkins', 'Play Store', 'App Store'] },
  { icon: '🛠️', title: 'Tools & Version Control', tags: ['Git', 'GitHub', 'Jira', 'VS Code', 'Android Studio', 'Xcode'] },
  { icon: '🤖', title: 'AI-Assisted Development', tags: ['ChatGPT', 'Cursor'], wide: true,
    note: 'I use AI tools every day to speed up development, debugging, code reviews and documentation.' },
]

export const softSkills = ['🤝 Teamwork', '⏱️ Time Management', '🧩 Problem Solving', '💡 Critical Thinking']

export const marquee = ['Flutter', 'Dart', 'Clean Architecture', 'Firebase', 'Riverpod', 'Provider', 'REST APIs', 'WebSocket', 'Google Maps', 'SQLite', 'Sentry', 'Fastlane', 'Jenkins', 'ChatGPT', 'Cursor']

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'E2 Infosystems Americas · Chennai',
    period: 'MAR 2023 — PRESENT',
    points: [
      'Designed and developed scalable Flutter applications for <b>Android & iOS</b>.',
      'Integrated <b>REST APIs</b> and <b>Firebase</b> services for real-time data synchronization.',
      'Improved app performance by optimizing UI rendering and reducing API response time by <b>~25%</b>.',
      'Implemented push notifications and <b>reduced crash rates</b> using Sentry monitoring.',
      'Collaborated with backend and UI/UX teams to deliver scalable, user-friendly apps.',
      'Handled <b>end-to-end feature development</b> from requirement to deployment.',
      'Followed clean code practices, version control and efficient debugging techniques.',
    ],
  },
  {
    role: 'Flutter & UI/UX Developer Intern',
    company: 'FintechGie',
    period: 'INTERNSHIP',
    points: [
      'Worked on <b>UI/UX design</b> and Flutter development for real-world applications.',
      'Gained hands-on experience building and maintaining mobile applications.',
      'Contributed to <b>health-tech</b> and <b>ed-tech</b> project modules.',
    ],
  },
]

export const projects = [
  {
    id: 'care',
    tag: 'Health-tech · Published on Play Store',
    name: 'Home Care Companion',
    subtitle: 'Caregiver & Family Care App',
    points: [
      'Connects <b>caregivers and families</b> with secure, <b>role-based access</b> to care information.',
      'Caregivers view assigned communities and resident info, and coordinate care tasks with a built-in <b>QR scanner</b> for hands-free workflows.',
      'Family members select their loved one and get <b>real-time updates</b> from anywhere.',
      'Care dashboard, effortless check-in, <b>vitals tracking</b> and organised care checklists.',
      'Secure login for caregivers and <b>family members</b>, with <b>Forgot Password</b> account recovery.',
    ],
    tags: ['Flutter', 'Role-based Auth', 'QR Scanner', 'Real-time Updates', 'Play Store'],
  },
  {
    id: 'car',
    tag: 'Automotive · Multi-tenant · Published on Play Store',
    name: 'Roadside Assist',
    subtitle: 'One-Call Car Repair & Roadside Help',
    points: [
      'Helps car owners after an <b>unexpected breakdown or accident</b>: <b>one request</b> dispatches towing, repair, car rental and insurance as a single service.',
      'Developed a <b>multi-tenant</b> mobile application for managing vehicle service bookings.',
      'Integrated <b>Firebase</b>, <b>WebSocket</b> and <b>Google Maps</b> for real-time updates.',
      'Service scheduling, dashboard tracking, user management and the option to <b>cancel a request</b>.',
      'Improved booking workflow efficiency and the overall user experience.',
    ],
    tags: ['Flutter', 'Firebase', 'WebSocket', 'Google Maps', 'Multi-tenant'],
  },
  {
    id: 'form',
    tag: 'NGO · Offline Forms · Published on Play Store',
    name: 'Field Forms',
    subtitle: 'Offline Form App for an NGO',
    points: [
      'An <b>offline-first form application</b> for NGO field teams who work on water pumps.',
      'Teams fill in and submit <b>installation</b>, <b>community assessment</b> and <b>maintenance</b> report forms on the go.',
      'Works <b>fully offline</b>: form data is saved on the device in areas with low connectivity.',
      '<b>Auto-syncs</b> all collected data with the web application once the device is back online.',
      'Keeps project data centralised and up to date for efficient project management.',
    ],
    tags: ['Flutter', 'Offline-first', 'Forms', 'Auto Sync', 'Web Sync'],
  },
]

// Dart snippet typed out in the About section. Tokens: [text, className]
export const codeTokens = [
  ['class ', 'k'], ['Developer ', 't'], ['extends ', 'k'], ['StatelessWidget', 't'], [' {\n', ''],
  ['  final ', 'k'], ['name ', ''], ['= ', ''], ["'SachinCharles A'", 's'], [';\n', ''],
  ['  final ', 'k'], ['role ', ''], ['= ', ''], ["'Flutter Developer'", 's'], [';\n', ''],
  ['  final ', 'k'], ['experience ', ''], ['= ', ''], ['3', 'n'], [';  ', ''], ['// years+\n', 'c'],
  ['  final ', 'k'], ['stack ', ''], ['= [', ''], ["'Flutter'", 's'], [', ', ''], ["'Dart'", 's'], [', ', ''], ["'Firebase'", 's'], ['];\n\n', ''],
  ['  @override\n', 'c'],
  ['  Widget ', 't'], ['build', 'f'], ['(BuildContext context) {\n', ''],
  ['    return ', 'k'], ['HighPerformanceApp', 't'], ['(\n', ''],
  ['      platforms: ', ''], ['[Android, iOS]', 'n'], [',\n', ''],
  ['      crashes: ', ''], ['Sentry', 't'], ['.', ''], ['reduce', 'f'], ['(),\n', ''],
  ['      ux: ', ''], ["'seamless'", 's'], [',\n', ''],
  ['    );\n', ''],
  ['  }\n', ''],
  ['}', ''],
]
