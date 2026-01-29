import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, Instagram, Linkedin, Dribbble, 
  Mail, Phone, MapPin, Download, ExternalLink, ChevronRight,
  Home, User, Briefcase, MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import './App.css';

// Project data
const projects = [
  {
    id: 1,
    title: 'Ethereal Brand Identity',
    category: 'branding',
    categoryLabel: 'Брендинг',
    description: 'Люкс wellness спа-д зориулсан бүрэн бренд хөтлөлөөний дизайн',
    image: '/project-branding.jpg',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Urban Magazine Layout',
    category: 'editorial',
    categoryLabel: 'Editorial',
    description: 'Орчин үеийн lifestyle сэтгүүлийн editorial дизайн',
    image: '/project-editorial.jpg',
    size: 'short',
  },
  {
    id: 3,
    title: 'Tech Startup Website',
    category: 'webdesign',
    categoryLabel: 'Вэб Дизайн',
    description: 'Шинэлэг tech стартапын UI/UX дизайн',
    image: '/project-webdesign.jpg',
    size: 'short',
  },
  {
    id: 4,
    title: 'Artisan Coffee Packaging',
    category: 'packaging',
    categoryLabel: 'Баглаа боодол',
    description: 'Онцгой кофе брэндийн баглаа боодлын дизайн',
    image: '/project-packaging.jpg',
    size: 'short',
  },
  {
    id: 5,
    title: 'Motion Campaign',
    category: 'motion',
    categoryLabel: 'Motion Дизайн',
    description: 'Дэлхийн загварын брэндийн хөдөлгөөнт кампанит ажил',
    image: '/project-motion.jpg',
    size: 'featured',
  },
];

const categories = [
  { id: 'all', label: 'Бүгд' },
  { id: 'branding', label: 'Брендинг' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'webdesign', label: 'Вэб Дизайн' },
  { id: 'packaging', label: 'Баглаа боодол' },
  { id: 'motion', label: 'Motion' },
];

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Нүүр', icon: Home },
    { href: '#about', label: 'Тухай', icon: User },
    { href: '#projects', label: 'Ажлууд', icon: Briefcase },
    { href: '#contact', label: 'Холбогдох', icon: MessageCircle },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
        isScrolled
          ? 'glass shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-2xl font-bold text-charcoal transition-all duration-300 hover:tracking-wider"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors duration-300 hover-underline py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 rounded-full px-6"
            >
              <a href="#contact">Холбогдох</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-charcoal-light hover:text-charcoal transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon size={18} />
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-charcoal text-white hover:bg-charcoal-dark"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Холбогдох
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Accent Shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gold/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div
              className={`transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                График Дизайнер
              </p>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] mb-6">
              {['Бүтээх', 'Дижитал', 'Туршлага'].map((word, index) => (
                <span
                  key={word}
                  className={`block transition-all duration-700 ease-expo-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className={`text-charcoal-light text-lg md:text-xl max-w-lg mb-8 leading-relaxed transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Би бренд хөтлөлөө, вэб дизайн болон визуал өгүүллэгийн чиглэлээр
              мэргэшсэн график дизайнер. Хамтдаа гайхамшигтай зүйл бүтээе.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 mb-10 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Button
                asChild
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal-dark rounded-full px-8 group transition-all duration-300"
              >
                <a href="#projects">
                  Ажлуудыг үзэх
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full px-8 transition-all duration-300"
              >
                <a href="#contact">Холбогдох</a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-sm text-charcoal-light">Дагах:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${900 + index * 80}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '400ms', perspective: '1000px' }}
            >
              {/* Image Frame */}
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-lg transform rotate-3 transition-transform duration-500 hover:rotate-6" />
                <div className="absolute -inset-4 border-2 border-charcoal/10 rounded-lg transform -rotate-2 transition-transform duration-500 hover:-rotate-4" />
                
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-lg shadow-large animate-breathe">
                  <img
                    src="/hero-portrait.jpg"
                    alt="Portrait"
                    className="w-full max-w-md lg:max-w-lg object-cover aspect-[3/4]"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-4 -left-4 bg-white shadow-medium rounded-lg p-4 transition-all duration-700 ease-spring ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <p className="text-3xl font-display font-bold text-charcoal">5+</p>
                <p className="text-sm text-charcoal-light">Жилийн туршлага</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50', suffix: '+', label: 'Төслүүд' },
    { value: '30', suffix: '+', label: 'Үйлчлүүлэгчид' },
    { value: '5', suffix: '+', label: 'Жил туршлага' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-6 border border-gold/20 rounded-lg" />
              <div className="absolute -inset-3 border border-charcoal/10 rounded-lg transform rotate-1" />
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg image-hover">
                <img
                  src="/about-portrait.jpg"
                  alt="About"
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal text-white rounded-lg p-6 shadow-large">
              <p className="text-4xl font-display font-bold">5+</p>
              <p className="text-sm text-white/70">Жилийн туршлага</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className={`text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Миний тухай
            </p>

            <h2
              className={`font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Утга учиртай дизайн бүтээхэд чинээлэг
            </h2>

            <div
              className={`space-y-4 text-charcoal-light leading-relaxed transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p>
                График дизайны чиглэлээр 5+ жилийн туршлагатай би стартапуудаас эхлээд
                томоохон брэндүүд хүртэл олон төрлийн үйлчлүүлэгчидтэй хамтран ажилласан.
                Миний хандлага нь стратегийн сэтгэлгээг бүтээлч гүйцэтгэлтэй хослуулж,
                зөвхөн үзэсгэлэнтэй харагдахаас гадна бизнесийн зорилгодоо хүрдэг
                дизайн бүтээхэд чиглэгддэг.
              </p>
              <p>
                Визуал өгүүллэгийн хүч чадал болон брэндүүдээ үзэгчидтэйгээ холбоход
                үзүүлэх нөлөөнд би итгэдэг. Бүрэлдэхүүн хэсэг бүр нь өвөрмөц, мартагдашгүй
                зүйл бүтээх боломж юм.
              </p>
            </div>

            <div
              className={`mt-8 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Button
                variant="outline"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full px-6 group transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4" />
                CV татах
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-2">
                {stat.value}
                <span className="text-gold">{stat.suffix}</span>
              </p>
              <p className="text-sm text-charcoal-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={`text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Сонгосон ажлууд
          </p>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold text-charcoal transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Намайг тодорхойлдог төслүүд
          </h2>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal-light hover:bg-charcoal hover:text-white border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-soft card-3d transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${project.size === 'tall' ? 'md:row-span-2' : ''} ${
                project.size === 'featured' ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="card-3d-inner h-full">
                {/* Image */}
                <div className="relative overflow-hidden image-hover h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover ${
                      project.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    } ${project.size === 'featured' ? 'aspect-[21/9]' : ''}`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-gold text-sm font-medium mb-2">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <Button
                      size="sm"
                      className="w-fit bg-white text-charcoal hover:bg-gold hover:text-white rounded-full px-4"
                    >
                      Төслийг үзэх
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Category Tag (visible when not hovered) */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-charcoal group-hover:opacity-0 transition-opacity duration-300">
                  {project.categoryLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full px-8 group transition-all duration-300"
          >
            Бүх ажлуудыг үзэх
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Мессеж илгээгдлээ! Баярлалаа.');
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Имэйл', value: 'hello@portfolio.com' },
    { icon: Phone, label: 'Утас', value: '+976 9911 2233' },
    { icon: MapPin, label: 'Байршил', value: 'Улаанбаатар, Монгол' },
  ];

  const socialLinks = [
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform origin-top-right" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <p
              className={`text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Холбогдох
            </p>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-tight transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Хамтдаа гайхамшигтай зүйл бүтээе
            </h2>
            <p
              className={`text-charcoal-light mb-8 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Танд төсөл байна уу? Сонсохыг хүсэж байна.
            </p>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Нэр
                </label>
                <Input
                  type="text"
                  placeholder="Таны нэр"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Имэйл
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Мессеж
                </label>
                <Textarea
                  placeholder="Таны мессеж..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-charcoal text-white hover:bg-charcoal-dark rounded-full py-6 group transition-all duration-300"
              >
                Мессеж илгээх
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <div
              className={`space-y-8 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">{item.label}</p>
                    <p className="text-lg font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`mt-12 pt-8 border-t border-border transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <p className="text-sm text-charcoal-light mb-4">Сошиал хаягууд</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 hover:scale-110 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 60}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const navLinks = [
    { href: '#home', label: 'Нүүр' },
    { href: '#about', label: 'Тухай' },
    { href: '#projects', label: 'Ажлууд' },
    { href: '#contact', label: 'Холбогдох' },
  ];

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-xl font-bold text-charcoal hover:tracking-wider transition-all duration-300"
          >
            Portfolio
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal-light hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-charcoal-light">
            © 2024 Portfolio. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
