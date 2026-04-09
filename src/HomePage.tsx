import React, { useState, FormEvent, useEffect } from 'react';
import { Phone, CheckCircle, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Search, ChevronRight, ArrowUp, Briefcase, FileText, Calculator, TrendingUp, User, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [testimonials, setTestimonials] = useState<{name: string, feedback: string}[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);
  const [formErrors, setFormErrors] = useState<{name?: string, email?: string, subject?: string, message?: string}>({});
  const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});

  const validateForm = () => {
    const errors: any = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent successfully!');
      setFormData({name: '', email: '', subject: '', message: ''});
    }
  };

  const handleAddTestimonial = (testimonial: {name: string, feedback: string}) => {
    setTestimonials([...testimonials, testimonial]);
  };
  const [filterCategory, setFilterCategory] = useState('All');
  const [isTestimonialsExpanded, setIsTestimonialsExpanded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const taxationServices = [
    "Training of Tax Compliance & Awareness",
    "Monthly Filing of VAT, SDL, PAYE, WHT",
    "Tax Audit & Examination",
    "VAT Verification & Objections",
    "Transfer Pricing Documents",
    "Demand Notices & Tax Objection Position",
    "Amicable Settlement of Tax Queries",
    "Application for Waiver of Interest & Penalties",
    "Review of Financial Statements before TRA",
    "Tax Planning & Advisory"
  ];

  const accountingServices = [
    "Preparation of Annual Financial Statements",
    "Audit & Compliance Review",
    "Tax Risk Assessment",
    "Financial Statements for Bank Loans",
    "Directors & Governance Reports",
    "Assets Register Management",
    "Financial Manuals & Policies",
    "Monthly Reconciliation (VAT vs Bank)",
    "Financial Analysis & Reporting"
  ];

  const consultancyServices = [
    "BRELA Registration",
    "TIC Certificate of Incentives",
    "Business Licenses",
    "Memorandum & Articles of Association",
    "Business Plan Development",
    "HR Services & Payroll"
  ];

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    const allServices = [
      { category: 'Taxation', items: taxationServices },
      { category: 'Accounting', items: accountingServices },
      { category: 'Consultancy', items: consultancyServices }
    ];

    let foundCategory = null;
    for (const cat of allServices) {
      if (cat.items.some(item => item.toLowerCase().includes(query))) {
        foundCategory = cat.category.toLowerCase().replace(/\s+/g, '-');
        break;
      }
    }

    setIsSearching(false);
    if (foundCategory) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert(`No results found for "${searchQuery}". Please try searching for "Tax", "Audit", "Payroll", etc.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Bar */}
      <div className="bg-green-950 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 0713 375 392</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@lexmas.org</span>
          </div>
          <div className="flex gap-3">
            <Facebook size={16} className="cursor-pointer hover:text-orange-400" />
            <Twitter size={16} className="cursor-pointer hover:text-orange-400" />
            <Linkedin size={16} className="cursor-pointer hover:text-orange-400" />
            <Instagram size={16} className="cursor-pointer hover:text-orange-400" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center text-white font-bold text-2xl">L</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-900 leading-tight uppercase">LEXMAS COMPANY LIMITED</h1>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Tax and Financial Excellence</p>
            </div>
          </div>
          <form onSubmit={handleSearch} className="relative w-full md:w-80 flex items-center gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-bold text-sm shadow-sm whitespace-nowrap cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-1">
            <li><a href="#home" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium cursor-pointer">HOME</a></li>
            <li><a href="#about" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium cursor-pointer">ABOUT US</a></li>
            <li><a href="#services" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium cursor-pointer">OUR SERVICES</a></li>
            <li><a href="#testimonials-section" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium cursor-pointer">TESTIMONIALS</a></li>
            <li><a href="#contact" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium cursor-pointer">CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-10">
            <section id="home" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">Welcome to Lexmas Company Limited</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="text-xl font-medium text-orange-600 italic">"Your Success, Our Expertise!"</p>
                <p>Lexmas Company Limited is a premier professional services firm dedicated to providing top-tier tax, accounting, and business consultancy solutions.</p>
              </div>
            </section>

            <section id="about" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-900">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">About Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                    <CheckCircle size={20} /> Our Vision
                  </h3>
                  <p className="text-gray-700">To be the leading provider of innovative tax and financial solutions.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                    <CheckCircle size={20} /> Our Mission
                  </h3>
                  <p className="text-gray-700">To deliver exceptional, professional, and ethical financial and consultancy services.</p>
                </div>
              </div>
            </section>

            <section id="services" className="space-y-8">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">Our Services</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {['All', 'Taxation', 'Accounting', 'Consultancy'].map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors cursor-pointer ${filterCategory === cat ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="space-y-6">
                {(filterCategory === 'All' || filterCategory === 'Taxation') && <ServiceBlock title="Taxation Services" services={taxationServices} bgColor="bg-green-50" link="/taxation" />}
                {(filterCategory === 'All' || filterCategory === 'Accounting') && <ServiceBlock title="Accounting Services" services={accountingServices} bgColor="bg-orange-50" link="/accounting" />}
                {(filterCategory === 'All' || filterCategory === 'Consultancy') && <ServiceBlock title="General Business Consultancy" services={consultancyServices} bgColor="bg-green-50" link="/consultancy" />}
              </div>
            </section>

            <section id="testimonials-section" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsTestimonialsExpanded(!isTestimonialsExpanded)}>
                <h2 className="text-3xl font-bold text-green-900 mb-8 border-b pb-2">What Our Clients Say</h2>
                <ChevronRight className={`transition-transform ${isTestimonialsExpanded ? 'rotate-90' : ''}`} />
              </div>
              {isTestimonialsExpanded && (
                <>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {testimonials.length > 0 ? (
                      testimonials.map((t, i) => <TestimonialItem key={i} name={t.name} feedback={t.feedback} />)
                    ) : (
                      <p className="text-gray-500 italic col-span-2">No testimonials yet. Be the first to share your feedback!</p>
                    )}
                  </div>
                  <TestimonialForm onAdd={handleAddTestimonial} />
                </>
              )}
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-green-900 text-white px-4 py-3 font-bold">Quick Contact</div>
              <div className="p-4 space-y-4 text-sm">
                <p>0713 375 392 / 0623 453 061</p>
                <p>info@lexmas.org</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-green-900 text-white px-4 py-3 font-bold">Quick Links</div>
              <ul className="divide-y divide-gray-100 text-sm">
                <li><a href="#home" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Home <ChevronRight size={14} /></a></li>
                <li><a href="#about" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">About Us <ChevronRight size={14} /></a></li>
                <li><a href="#services" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Our Services <ChevronRight size={14} /></a></li>
                <li><a href="#contact" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Contact Us <ChevronRight size={14} /></a></li>
              </ul>
            </div>
            <section id="contact-form" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-900">
              <h2 className="text-xl font-bold text-green-900 mb-6 border-b pb-2">Send Us a Message</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                  {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
                <div>
                  <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg" />
                  {formErrors.subject && <p className="text-sm text-red-500">{formErrors.subject}</p>}
                </div>
                <div>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>
                <button type="submit" className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">Send Message</button>
              </form>
            </section>
          </aside>
        </div>
      </main>

      <footer id="contact" className="bg-green-950 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-orange-500 pb-2 inline-block">About Lexmas</h4>
            <p className="text-sm text-gray-300 leading-relaxed">Lexmas Company Limited is your trusted partner in tax and financial excellence. We provide professional services that empower businesses to thrive through compliance and strategic financial management.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-orange-500 pb-2 inline-block">Our Services</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2"><ChevronRight size={12} className="text-orange-500" /> Taxation Services</li>
              <li className="flex items-center gap-2"><ChevronRight size={12} className="text-orange-500" /> Accounting Services</li>
              <li className="flex items-center gap-2"><ChevronRight size={12} className="text-orange-500" /> Business Consultancy</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-orange-500 pb-2 inline-block">Contact Info</h4>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-3"><Phone size={16} className="text-orange-500 mt-1" /> 0713 375 392 / 0623 453 061</li>
              <li className="flex items-start gap-3"><Mail size={16} className="text-orange-500 mt-1" /> info@lexmas.co.tz</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-orange-500 mt-1" /> Dar es Salaam, Tanzania</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-green-900 text-center text-xs text-gray-400">
          <p>&copy; 2026 Lexmas Company Limited. All rights reserved. | Designed and Developed by Jackson Mandela Tel: +255 689 460 993</p>
        </div>
      </footer>

      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

function ServiceBlock({ title, services, bgColor, link }: { title: string; services: string[]; bgColor: string, link: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const getIcon = (service: string) => {
    const s = service.toLowerCase();
    if (s.includes('tax')) return <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
    if (s.includes('audit') || s.includes('account') || s.includes('financial')) return <Calculator className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
    if (s.includes('consult') || s.includes('business') || s.includes('plan')) return <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
    if (s.includes('payroll') || s.includes('hr')) return <User className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
    return <FileText className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
  };
  return (
    <div className={`${bgColor} p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-lg hover:scale-[1.01]`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-2xl font-bold text-green-900 mb-6 pb-2 border-b-2 border-orange-500 inline-block">{title}</h3>
        <ChevronRight className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </div>
      {isExpanded && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <div key={index} title={service} className="flex items-start justify-between gap-3 text-gray-700 bg-white/50 p-3 rounded-lg hover:bg-white hover:border-orange-500 hover:border transition-all cursor-pointer group">
              <div className="flex items-start gap-3">
                {getIcon(service)}
                <span className="text-sm font-medium">{service}</span>
              </div>
              <button onClick={() => alert(`Shared: ${service}`)} className="text-gray-400 hover:text-orange-500 cursor-pointer">Share</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TestimonialItem({ name, feedback, key }: { name: string; feedback: string, key?: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 100;
  const isLong = feedback.length > limit;
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
      <p className="text-gray-700 italic mb-4">
        "{isExpanded ? feedback : feedback.substring(0, limit) + (isLong ? '...' : '')}"
      </p>
      {isLong && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-orange-600 font-bold text-sm hover:underline">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
      <p className="font-bold text-green-900 mt-2">- {name}</p>
    </div>
  );
}

function TestimonialForm({ onAdd }: { onAdd: (t: {name: string, feedback: string}) => void }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !feedback) return;
    onAdd({ name, feedback });
    setName('');
    setFeedback('');
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-900 mt-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">Share Your Feedback</h3>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg mb-2" required />
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="Your Feedback" className="w-full p-3 border border-gray-300 rounded-lg h-24 mb-2" required></textarea>
      <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">Submit</button>
    </form>
  );
}
