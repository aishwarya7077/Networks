import {
  Headset, ShieldCheck, Cloud, Code2, Network, Server,
  MonitorSmartphone, Cctv, BrainCircuit, Building2, Mail, Store,
} from 'lucide-react'

export const company = {
  name: 'RYG Networks',
  tagline: 'Simplifying Technology. Securing Your Future.',
  intro:
    'Complete IT products, services and solutions — managed support, Microsoft cloud & licensing, cybersecurity, software development, hardware procurement and in-house CCTV surveillance, all under one roof.',
  phone: '+91 93810 00232',
  phoneHref: '+919381000232',
  email: 'info@rygnetworks.com',
  website: 'https://rygnetworks.com/',
  whatsapp: 'https://wa.me/919381000232',
  address: 'R Hub, 100 Feet Road, Madhapur, Hyderabad 500081',
}

export const services = [
  {
    id: 'managed-it',
    icon: Headset,
    title: 'Managed IT Support',
    short: 'Proactive maintenance, fast troubleshooting and a friendly helpdesk that keeps your systems healthy and your team productive.',
    points: [
      'Proactive monitoring & maintenance',
      'Rapid-response helpdesk',
      'Full-lifecycle technical support',
    ],
  },
  {
    id: 'microsoft-cloud',
    icon: Cloud,
    title: 'Microsoft Cloud & Licensing',
    short: 'A trusted Microsoft Channel Partner for official licensing, email plans and enterprise tools that digitize and secure your operations.',
    points: [
      'Microsoft Channel Partner services',
      'Email licensing sized to your team',
      'Setup, migration & ongoing management',
    ],
  },
  {
    id: 'web-development',
    icon: Code2,
    title: 'Website & Software Development',
    short: 'Custom, responsive and secure websites plus web/mobile applications built by our in-house team to automate workflows and delight users.',
    points: [
      'In-house development team',
      'Corporate sites to complex web apps',
      'Tailored to your business goals',
    ],
  },
  {
    id: 'network-security',
    icon: Network,
    title: 'Network Setup & Security',
    short: 'Firewall configuration, VPNs and enterprise-grade security to defend your network and enable safe remote access.',
    points: [
      'Firewalls, VPNs & secure Wi-Fi',
      'Switches, routers & access points',
      'Enterprise-grade perimeter security',
    ],
  },
  {
    id: 'it-equipment',
    icon: Store,
    title: 'IT Equipment Sales & Service',
    short: 'Hardware procurement, installation and support — new and certified refurbished laptops, desktops, servers and networking gear.',
    points: [
      'Desktops, laptops & servers',
      'Networking infrastructure & peripherals',
      'Sales, install, configure & maintain',
    ],
  },
  {
    id: 'surveillance',
    icon: Cctv,
    title: 'Security & Surveillance (CCTV)',
    short: 'In-house manufactured surveillance hardware — PTZ, day/night and 360° cameras — with tailored security software setups.',
    points: [
      'In-house manufactured cameras',
      'PTZ, night-vision & 360° panoramic',
      'Custom builds & monitoring options',
    ],
  },
  {
    id: 'cloud-solutions',
    icon: Server,
    title: 'Cloud Solutions',
    short: 'Cloud migration, backup strategies and productivity suites including Office 365 and Google Workspace to scale securely.',
    points: [
      'Cloud migration & backup',
      'Office 365 & Google Workspace',
      'Secure, scalable infrastructure',
    ],
  },
  {
    id: 'consulting',
    icon: Building2,
    title: 'IT Consulting & Infrastructure',
    short: 'Strategic planning, server installation and system integration to build a reliable IT backbone aligned with your goals.',
    points: [
      'Strategic IT planning & cost optimization',
      'Server install & system integration',
      'Process automation',
    ],
  },
  {
    id: 'data-ai',
    icon: BrainCircuit,
    title: 'Data Analytics & AI',
    short: 'BI dashboards, predictive analytics and AI solutions that turn your data into actionable business insights.',
    points: [
      'BI dashboards & reporting',
      'Predictive analytics',
      'Custom AI solutions',
    ],
  },
]

export const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'End-to-End Delivery',
    text: 'All hardware, software and networking handled under one roof — no juggling multiple vendors.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Customized Approach',
    text: 'Solutions engineered specifically around your business workflow, not an off-the-shelf template.',
  },
  {
    icon: Cctv,
    title: 'In-House Manufacturing',
    text: 'We design and build our own CCTV and surveillance hardware tailored to your exact needs.',
  },
  {
    icon: Headset,
    title: 'Reliable Support',
    text: 'Ongoing technical maintenance and prompt, friendly customer care you can count on.',
  },
]

export const stats = [
  { value: '8+', label: 'IT service domains' },
  { value: '1', label: 'Roof — everything in-house' },
  { value: '24/7', label: 'Support availability' },
  { value: '100%', label: 'Tailored solutions' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export { Mail }
