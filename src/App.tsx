import { useState, FormEvent } from 'react';
import { Phone, CheckCircle, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Search, ChevronRight } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    // Search through all services
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

    if (foundCategory) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
        // Add a temporary highlight effect if possible, or just scroll
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
            <span className="flex items-center gap-1"><Mail size={14} /> info@lexmas.co.tz</span>
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
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-bold text-sm shadow-sm whitespace-nowrap cursor-pointer active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-1">
            <li><a href="#home" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium">HOME</a></li>
            <li><a href="#about" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium">ABOUT US</a></li>
            <li><a href="#services" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium">OUR SERVICES</a></li>
            <li><a href="#contact" className="block px-4 py-3 hover:bg-orange-500 transition-colors font-medium">CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb Section */}
      <div className="bg-gray-200 py-2 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-xs text-gray-600 flex items-center gap-2">
          <a href="#" className="hover:text-green-900">Home</a>
          <ChevronRight size={12} />
          <span className="font-semibold text-green-900 uppercase">Profile</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-10">
            {/* Home/Welcome Section */}
            <section id="home" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">Welcome to Lexmas Company Limited</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="text-xl font-medium text-orange-600 italic">"Your Success, Our Expertise!"</p>
                <p>Lexmas Company Limited is a premier professional services firm dedicated to providing top-tier tax, accounting, and business consultancy solutions. We pride ourselves on being your trusted partner in navigating the complexities of financial management and regulatory compliance.</p>
                <p>Our team of experts brings years of experience and a deep understanding of the Tanzanian business landscape, ensuring that your organization remains compliant while maximizing its financial potential.</p>
              </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-900">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">About Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                    <CheckCircle size={20} /> Our Vision
                  </h3>
                  <p className="text-gray-700">To be the leading provider of innovative tax and financial solutions, empowering businesses to achieve sustainable growth and excellence through professional integrity and technical expertise.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                    <CheckCircle size={20} /> Our Mission
                  </h3>
                  <p className="text-gray-700">To deliver exceptional, professional, and ethical financial and consultancy services that add value to our clients, ensure compliance, and foster business success in an ever-evolving market.</p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="space-y-8">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">Our Services</h2>
              <div className="space-y-6">
                <ServiceBlock title="Taxation Services" services={taxationServices} bgColor="bg-green-50" />
                <ServiceBlock title="Accounting Services" services={accountingServices} bgColor="bg-orange-50" />
                <ServiceBlock title="General Business Consultancy" services={consultancyServices} bgColor="bg-green-50" />
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-green-900 text-white px-4 py-3 font-bold">Quick Contact</div>
              <div className="p-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="text-orange-500 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-bold">Phone Numbers:</p>
                    <p>0713 375 392</p>
                    <p>0623 453 061</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-orange-500 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-bold">Email Address:</p>
                    <p>info@lexmas.co.tz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange-500 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-bold">Location:</p>
                    <p>Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="bg-green-900 text-white px-4 py-3 font-bold">Quick Links</div>
              <ul className="divide-y divide-gray-100 text-sm">
                <li><a href="#home" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Home <ChevronRight size={14} /></a></li>
                <li><a href="#about" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">About Us <ChevronRight size={14} /></a></li>
                <li><a href="#services" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Our Services <ChevronRight size={14} /></a></li>
                <li><a href="#contact" className="block px-4 py-3 hover:bg-gray-50 hover:text-orange-600 transition-colors flex items-center justify-between">Contact Us <ChevronRight size={14} /></a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Multi-column Footer */}
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
          <p>&copy; 2026 Lexmas Company Limited. All rights reserved. | Designed for Excellence</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceBlock({ title, services, bgColor }: { title: string; services: string[]; bgColor: string }) {
  return (
    <div className={`${bgColor} p-8 rounded-xl shadow-sm border border-gray-200`}>
      <h3 className="text-2xl font-bold text-green-900 mb-6 pb-2 border-b-2 border-orange-500 inline-block">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-3 text-gray-700 bg-white/50 p-3 rounded-lg">
            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
