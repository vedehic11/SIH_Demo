import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Zap,
  Target,
  Brain,
  Shield,
  Globe,
  Upload,
  Play,
  Building,
  GraduationCap,
  FileText,
  Phone,
  Mail
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [showResumeAnalysis, setShowResumeAnalysis] = useState(false);

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Interns', color: 'text-blue-600' },
    { icon: Building, value: '1,200+', label: 'Partner Organizations', color: 'text-green-600' },
    { icon: BookOpen, value: '25+', label: 'Domains', color: 'text-purple-600' },
    { icon: TrendingUp, value: '85%', label: 'Placement Rate', color: 'text-orange-600' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match your skills with perfect internship opportunities',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Government Certified',
      description: 'Official certificates from Government of India with industry recognition',
      color: 'text-green-600'
    },
    {
      icon: Globe,
      title: 'Pan-India Network',
      description: 'Access opportunities across all major cities and emerging tech hubs',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Structured learning paths with mentorship from industry experts',
      color: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The PM Internship Scheme transformed my career. The AI matching system found me the perfect role that aligned with my skills.',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Data Scientist at Microsoft',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Incredible experience! The mentorship and real-world projects prepared me for my dream job in tech.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Product Manager at Amazon',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The structured learning path and industry exposure gave me confidence to pursue leadership roles.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header */}
      <header className="gov-header">
        <div className="bg-blue-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <span>📞 Helpline: 1800-123-4567</span>
                <span>📧 support@pminternship.gov.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/accessibility" className="hover:underline">Accessibility</Link>
                <Link to="/sitemap" className="hover:underline">Site Map</Link>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government of India Emblem"
                className="h-16 w-16 gov-emblem"
              />
              <div>
                <h1 className="text-2xl font-bold gov-text-primary">Prime Minister's Internship Scheme</h1>
                <p className="gov-text-secondary">Ministry of Skill Development and Entrepreneurship</p>
                <p className="text-sm gov-text-muted">Government of India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/signup" className="gov-button-outline">
                Register
              </Link>
              <Link to="/dashboard" className="gov-button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-700/50 backdrop-blur border border-blue-600 rounded-full px-6 py-2 mb-6">
              <Award className="h-5 w-5 mr-2" />
              <span className="font-medium">India's Premier Internship Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Prime Minister's Internship Scheme
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Empowering India's youth through structured internship opportunities 
              with leading organizations across the nation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => {
                window.location.href = '/signup';
              }}
              className="bg-white text-blue-800 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-md transition-colors duration-200"
            >
              <Upload className="mr-3 h-6 w-6 inline" />
              Apply for Internship
            </button>
            <Link to="/signup" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg px-8 py-4 rounded-md transition-all duration-200">
              <FileText className="mr-3 h-6 w-6 inline" />
              View Guidelines
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="opacity-90 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gov-text-primary mb-6">
              Program Features
            </h2>
            <p className="text-xl gov-text-secondary max-w-3xl mx-auto">
              Comprehensive internship program designed to bridge the gap between academic learning and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="gov-feature-card">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold gov-text-primary mb-4">{feature.title}</h3>
                  <p className="gov-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gov-text-primary mb-6">
              How It Works
            </h2>
            <p className="text-xl gov-text-secondary max-w-3xl mx-auto">
              Simple and transparent process to get you started on your internship journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="text-xl font-bold gov-text-primary mb-4">Register & Apply</h3>
              <p className="gov-text-secondary">Create your profile and submit your application with required documents</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-800">2</span>
              </div>
              <h3 className="text-xl font-bold gov-text-primary mb-4">Get Matched</h3>
              <p className="gov-text-secondary">Our AI system matches you with suitable internship opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-800">3</span>
              </div>
              <h3 className="text-xl font-bold gov-text-primary mb-4">Start Learning</h3>
              <p className="gov-text-secondary">Begin your internship journey with mentorship and real projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gov-text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl gov-text-secondary max-w-3xl mx-auto">
              Hear from our alumni who transformed their careers through the PM Internship Scheme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="gov-card p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="gov-text-primary font-bold">{testimonial.name}</h4>
                    <p className="gov-accent text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="gov-text-secondary italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Join thousands of students who have already accelerated their careers through 
            our comprehensive internship program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                window.location.href = '/signup';
              }}
              className="bg-white text-blue-800 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-md transition-colors duration-200"
            >
              <Zap className="mr-3 h-6 w-6 inline" />
              Apply Now
            </button>
            <Link to="/signup" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg px-8 py-4 rounded-md transition-all duration-200">
              <ArrowRight className="mr-3 h-6 w-6 inline" />
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="Government of India"
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="font-bold text-white">PM Internship Scheme</h3>
                  <p className="text-gray-400 text-sm">Government of India</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering youth through quality internship opportunities and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/internships" className="hover:text-white transition-colors">Internships</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link to="/guidelines" className="hover:text-white transition-colors">Guidelines</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
                <li><Link to="/grievance" className="hover:text-white transition-colors">Grievance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact Info</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Ministry of Skill Development<br />and Entrepreneurship</p>
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" />support@pminternship.gov.in</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" />1800-123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Government of India. All rights reserved. | 
              <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;