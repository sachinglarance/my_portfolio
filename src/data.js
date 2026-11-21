// All resume content lives here — edit this file to update the site.

export const profile = {
  name: 'SachinCharles A',
  roles: ['Mobile Developer', 'Flutter Developer', 'Android · Kotlin', 'iOS · Swift', 'Cross-Platform Builder'],
  email: 'sachinglarance@gmail.com',
  phone: '+91 63790 80998',
  phoneRaw: '+916379080998',
  linkedin: 'https://www.linkedin.com/in/sachinglarance',
  github: 'https://github.com/sachinglarance/',
}

export const stats = [
  { to: 3, suffix: '+', label: 'Years Experience' },
  { to: 3, label: 'Apps Live on Both Stores' },
  { to: 2, label: 'Platforms · Android & iOS' },
]

export const skills = [
  { icon: '📱', title: 'Languages', tags: ['Dart', 'Kotlin', 'Swift', 'SQL'] },
  { icon: '🎨', title: 'Frameworks & UI', tags: ['Flutter', 'SwiftUI', 'Material 3', 'Responsive UI', 'Animations'] },
  { icon: '⚙️', title: 'Native Android & iOS', tags: ['Platform Channels', 'Android SDK', 'UIKit', 'Permissions', 'Background Tasks', 'Deep Linking'] },
  { icon: '🧠', title: 'Architecture & State', tags: ['Clean Architecture', 'MVVM', 'Riverpod', 'Provider', 'SOLID', 'Dependency Injection'] },
  { icon: '🔥', title: 'Backend, Data & Offline', tags: ['REST APIs', 'Dio', 'WebSocket', 'MQTT', 'Firebase Auth', 'Firestore', 'FCM', 'SQLite', 'Offline Sync'] },
  { icon: '🧪', title: 'Quality & Performance', tags: ['Unit / Widget Tests', 'Integration Tests', 'Sentry', 'Flutter DevTools', 'Secure Storage'] },
  { icon: '🚀', title: 'CI/CD & Release', tags: ['Fastlane', 'Jenkins', 'Play Console', 'App Store Connect', 'TestFlight'] },
  { icon: '🛠️', title: 'Tools & Workflow', tags: ['Git', 'Android Studio', 'Xcode', 'Jira', 'Postman', 'Bruno'] },
  { icon: '🤖', title: 'AI-Assisted Development', tags: ['ChatGPT', 'Claude', 'Cursor'], wide: true,
    note: 'I use AI tools every day to speed up development, debugging, code reviews and documentation.' },
]

export const softSkills = ['🤝 Teamwork', '⏱️ Time Management', '🧩 Problem Solving', '💡 Critical Thinking']

export const marquee = ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Platform Channels', 'Clean Architecture', 'MVVM', 'Riverpod', 'Firebase', 'REST APIs', 'WebSocket', 'MQTT', 'SQLite', 'Offline Sync', 'Sentry', 'Fastlane', 'Jenkins', 'TestFlight', 'Claude', 'Cursor']

export const experience = [
  {
    role: 'Mobile Developer (Flutter)',
    company: 'E2 Infosystems Pvt Ltd · Chennai',
    period: 'MAR 2023 — PRESENT',
    points: [
      'Built and shipped <b>scalable cross-platform apps for Android & iOS</b>, owning features end-to-end from design to release.',
      'Wrote <b>native Kotlin (Android) and Swift (iOS)</b> modules via Platform Channels for camera/QR, permissions and background sync.',
      'Integrated <b>REST APIs</b>, <b>Firebase</b> (Auth, Firestore, FCM) and <b>MQTT</b> for real-time data sync and push notifications.',
      'Optimized UI rendering and data flows using <b>Flutter DevTools</b> profiling for smooth performance.',
      '<b>Reduced crash rates</b> using Sentry monitoring; added unit & widget tests to catch regressions early.',
      'Automated builds with <b>CI/CD (Fastlane, Jenkins)</b>; managed releases via Play Console, App Store Connect & TestFlight.',
    ],
  },
  {
    role: 'Flutter & UI/UX Developer Intern',
    company: 'FintechGie',
    period: 'INTERNSHIP',
    points: [
      '<b>UI/UX design</b> and <b>Flutter development</b> for health & ed-tech mobile apps.',
      'Gained hands-on experience building and maintaining mobile applications.',
    ],
  },
]

export const projects = [
  {
    id: 'care',
    tag: 'Health-tech · Live on App Store & Play Store',
    name: 'Home Care Companion',
    subtitle: 'Caregiver & Family Care App',
    points: [
      'Connects <b>caregivers and families</b> with secure, <b>role-based access</b> to care information.',
      'Caregivers view assigned communities and resident info, and coordinate care tasks with a <b>native QR scanner</b> (Kotlin / Swift) for hands-free workflows.',
      'Family members select their loved one and get <b>real-time updates</b> from anywhere.',
      'Care dashboard, effortless check-in, <b>vitals tracking</b> and organised care checklists.',
      'Secure login for caregivers and <b>family members</b>, with <b>Forgot Password</b> account recovery.',
    ],
    tags: ['Flutter', 'Kotlin / Swift', 'Role-based Auth', 'QR Scanner', 'Real-time'],
  },
  {
    id: 'car',
    tag: 'Automotive · Multi-tenant · Live on App Store & Play Store',
    name: 'Roadside Assist',
    subtitle: 'One-Call Car Repair & Roadside Help',
    points: [
      'Helps car owners after an <b>unexpected breakdown or accident</b>: <b>one request</b> dispatches towing, repair, car rental and insurance as a single service.',
      'Developed a <b>multi-tenant</b> mobile application for managing vehicle service bookings.',
      'Integrated <b>Firebase</b>, <b>WebSocket</b> and <b>Google Maps</b> for real-time updates.',
      'Service scheduling, dashboard tracking, user management and the option to <b>cancel a request</b>.',
      'Improved booking workflow efficiency and the overall user experience.',
    ],
    tags: ['Flutter', 'Firebase', 'WebSocket', 'Google Maps', 'Location Services', 'Multi-tenant'],
  },
  {
    id: 'form',
    tag: 'NGO · Offline Forms · Live on App Store & Play Store',
    name: 'Field Forms',
    subtitle: 'Offline Form App for an NGO',
    points: [
      'An <b>offline-first form application</b> for NGO field teams who work on water pumps.',
      'Teams fill in and submit <b>installation</b>, <b>community assessment</b> and <b>maintenance</b> report forms on the go.',
      'Works <b>fully offline</b>: form data is saved on the device in areas with low connectivity.',
      '<b>Auto-syncs</b> all collected data with the web application once the device is back online.',
      'Keeps project data centralised and up to date for efficient project management.',
    ],
    tags: ['Flutter', 'Offline-first', 'SQLite', 'Background Sync', 'Web Sync'],
  },
]

// Dart snippet typed out in the About section. Tokens: [text, className]
export const codeTokens = [
  ['class ', 'k'], ['Developer ', 't'], ['extends ', 'k'], ['StatelessWidget', 't'], [' {\n', ''],
  ['  final ', 'k'], ['name ', ''], ['= ', ''], ["'SachinCharles A'", 's'], [';\n', ''],
  ['  final ', 'k'], ['role ', ''], ['= ', ''], ["'Mobile Developer'", 's'], [';\n', ''],
  ['  final ', 'k'], ['experience ', ''], ['= ', ''], ['3', 'n'], [';  ', ''], ['// years+\n', 'c'],
  ['  final ', 'k'], ['stack ', ''], ['= [', ''], ["'Flutter'", 's'], [', ', ''], ["'Kotlin'", 's'], [', ', ''], ["'Swift'", 's'], ['];\n\n', ''],
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
