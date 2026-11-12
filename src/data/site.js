import {
  Headset, ShieldCheck, Cloud, Code2, Network, Server,
  MonitorSmartphone, Cctv, BrainCircuit, Building2, Mail, Store,
  PhoneCall, Layers, Rocket,
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

// Order, copy and imagery follow the official RYG Networks "Our Services" document.
export const services = [
  {
    id: 'microsoft-cloud',
    image: '/images/microsoft-cloud.jpg',
    icon: Cloud,
    title: 'Microsoft Cloud & Licensing',
    short: 'Empower your business with modern Microsoft cloud solutions and genuine software licensing. We help organizations improve productivity, collaboration and security through reliable Microsoft technologies — fully set up, migrated and managed for you.',
    points: [
      'Microsoft 365 Business & Enterprise Licensing',
      'Microsoft Azure Cloud Solutions',
      'Exchange Online & Business Email Solutions',
      'Microsoft Teams & SharePoint Integration',
      'Cloud Migration & Data Management',
      'License Management and Technical Support',
    ],
  },
  {
    id: 'web-development',
    image: '/images/web-development.jpg',
    icon: Code2,
    title: 'Website & Software Development',
    short: 'Build a strong digital presence with customized website and software development. Our in-house team creates modern, responsive and user-friendly platforms — from corporate sites to complex business applications — all tailored to your goals.',
    points: [
      'Corporate Website Design & Development',
      'E-commerce Website Development',
      'Custom Software Development',
      'Web Applications & Business Portals',
      'Website Maintenance & Support',
      'Domain, Hosting & SSL Configuration',
    ],
  },
  {
    id: 'data-ai',
    image: '/images/data-ai.jpg',
    icon: BrainCircuit,
    title: 'Data Analytics & AI',
    short: 'Transform your business data into meaningful insights with intelligent analytics and AI-powered solutions. We help you automate processes, improve decision-making and uncover new opportunities through modern, custom-built technologies that scale with your business.',
    points: [
      'Business Intelligence & Data Analytics',
      'AI-Powered Business Solutions',
      'Workflow & Process Automation',
      'Custom AI Integration',
      'Data Visualization & Reporting',
      'Intelligent Business Applications',
    ],
  },
  {
    id: 'it-consulting',
    image: '/images/it-consulting.jpg',
    icon: Building2,
    title: 'IT Consulting & Infrastructure',
    short: 'Strengthen your IT environment with expert consulting, infrastructure planning and implementation. We design and manage technology that supports your operations, improves efficiency and ensures long-term reliability — backed by dependable ongoing support.',
    points: [
      'IT Infrastructure Planning & Setup',
      'Server Installation & Configuration',
      'Hardware & Software Management',
      'IT Annual Maintenance Contracts (AMC)',
      'Technical Support & Troubleshooting',
      'IT Infrastructure Upgrades',
    ],
  },
  {
    id: 'network-security',
    image: '/images/network-security.jpg',
    icon: Network,
    title: 'Network Setup & Security',
    short: 'Build a secure, stable and high-performance network with our end-to-end solutions. We ensure seamless connectivity, efficient communication and robust protection against threats — from structured cabling to firewalls, enterprise Wi-Fi and secure remote access.',
    points: [
      'LAN & WAN Network Setup',
      'Structured Cabling & Cable Management',
      'Router, Switch & Firewall Configuration',
      'Enterprise Wi-Fi & Wireless Solutions',
      'VPN & Secure Remote Access',
      'Network Monitoring & Troubleshooting',
    ],
  },
  {
    id: 'it-equipment',
    image: '/images/it-equipment.jpg',
    icon: Store,
    title: 'IT Equipment Sales & Service',
    short: 'Get the right technology for your business with quality IT products and professional service. We supply desktops, laptops, servers and networking gear, plus expert installation, configuration, maintenance and reliable after-sales support.',
    points: [
      'Desktops, Laptops & Workstations',
      'Servers & Storage Solutions',
      'Network Switches & Routers',
      'Wireless Access Points',
      'Printers, Scanners & Peripherals',
      'Hardware Installation & Maintenance',
    ],
  },
  {
    id: 'surveillance',
    image: '/images/surveillance.jpg',
    icon: Cctv,
    title: 'Security & Surveillance (CCTV)',
    short: 'Protect your business, property and people with advanced CCTV and surveillance solutions. We deploy modern camera technologies — HD, IP, PTZ and 360° — for reliable monitoring, enhanced visibility and improved safety across your premises.',
    points: [
      'HD & IP CCTV Camera Installation',
      'PTZ & 360° Panoramic Cameras',
      'Day & Night Vision Cameras',
      'Two-Way Audio Security Cameras',
      'DVR & NVR Installation and Configuration',
      'Remote Monitoring & Mobile Access',
      'CCTV Maintenance & Technical Support',
    ],
  },
  {
    id: 'intercom',
    image: '/images/intercom.jpg',
    icon: PhoneCall,
    title: 'Intercom Setups',
    short: 'Improve communication, convenience and access management with professional intercom solutions. We design and install reliable audio and video systems for offices, commercial buildings, apartments and residential properties of every size.',
    points: [
      'Audio & Video Intercom Systems',
      'IP-Based Intercom Solutions',
      'Office & Multi-Location Intercom Setup',
      'Apartment & Residential Intercom Systems',
      'Door Phone & Visitor Communication',
      'Installation, Configuration & Maintenance',
    ],
  },
]

export const whyChooseUs = [
  {
    icon: Layers,
    title: 'All-in-One IT Solutions',
    text: 'Everything your business needs under one roof.',
  },
  {
    icon: Headset,
    title: 'Expert Professionals',
    text: 'Experienced technical team and dedicated support.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Secure',
    text: 'Dependable solutions with a focus on security.',
  },
  {
    icon: Rocket,
    title: 'Future-Ready Technology',
    text: 'Scalable solutions designed for business growth.',
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
  { to: '/clients', label: 'Clients' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// Clients / partners. Add an entry per client.
// { name: 'Acme Corp', logo: '/images/clients/acme.png', industry: 'Manufacturing', url: 'https://...' }
// `logo` is optional — without it a clean monogram tile is shown instead.
export const clients = [
  { name: 'Client One', industry: 'Enterprise' },
  { name: 'Client Two', industry: 'Healthcare' },
  { name: 'Client Three', industry: 'Retail' },
  { name: 'Client Four', industry: 'Finance' },
  { name: 'Client Five', industry: 'Education' },
  { name: 'Client Six', industry: 'Logistics' },
  { name: 'Client Seven', industry: 'Hospitality' },
  { name: 'Client Eight', industry: 'Real Estate' },
]

export { Mail }
