import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ResumeAnalysis from './ResumeAnalysis';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Award,
  Clock,
  MapPin,
  DollarSign,
  Star,
  Upload,
  Zap,
  Target,
  Brain,
  Eye,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  FileText,
  Building
} from 'lucide-react';

const demoResumes = [
  {
    name: 'Rahul Sharma',
    degree: 'B.Tech Computer Science',
    college: 'IIT Delhi',
    skills: ['React.js', 'Node.js', 'Python', 'Machine Learning'],
    experience: 'Software Development Intern at TechStart Solutions',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    location: 'Bangalore, Karnataka',
  },
  {
    name: 'Sneha Reddy',
    degree: 'B.E Electronics',
    college: 'BITS Pilani',
    skills: ['VLSI', 'Embedded Systems', 'C++', 'Python'],
    experience: 'Research Intern at ISRO',
    email: 'sneha.reddy@email.com',
    phone: '+91 9123456780',
    location: 'Hyderabad, Telangana',
  },
];

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResumeAnalysis, setShowResumeAnalysis] = useState(false);
  const [showDemoResumes, setShowDemoResumes] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Active Applications',
      value: '3',
      change: '+2 this month',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Interview Scheduled',
      value: '1',
      change: 'Tomorrow at 2:00 PM',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Profile Views',
      value: '47',
      change: '+12 this week',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Achievements',
      value: '2',
      change: 'Certificates earned',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Bangalore, Karnataka',
      stipend: '₹20,000',
      duration: '6 months',
      deadline: '15 Dec 2024',
      rating: 4.8,
      applied: false,
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Creative Agency',
      location: 'Mumbai, Maharashtra',
      stipend: '₹15,000',
      duration: '3 months',
      deadline: '20 Dec 2024',
      rating: 4.5,
      applied: true,
      type: 'Part-time'
    },
    {
      id: 3,
      title: 'Data Analytics Intern',
      company: 'Analytics Corp',
      location: 'Hyderabad, Telangana',
      stipend: '₹25,000',
      duration: '6 months',
      deadline: '25 Dec 2024',
      rating: 4.9,
      applied: false,
      type: 'Full-time'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Interview - Tech Solutions',
      date: 'Dec 10, 2024',
      time: '2:00 PM',
      type: 'interview',
      status: 'confirmed'
    },
    {
      title: 'Webinar: Resume Building',
      date: 'Dec 12, 2024',
      time: '4:00 PM',
      type: 'webinar',
      status: 'registered'
    },
    {
      title: 'Application Deadline',
      date: 'Dec 15, 2024',
      time: '11:59 PM',
      type: 'deadline',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 md:ml-0">
        <Header onMenuToggle={() => setSidebarOpen(true)} showMenuButton={true} />
        
        <main className="p-6">
          {/* Welcome Section */}
          <div className="gov-card p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold gov-text-primary mb-2">
                  Welcome back, John Doe
                </h1>
                <p className="gov-text-secondary">
                  Student ID: PM2024001 | Here's your internship dashboard overview
                </p>
              </div>
              <div className="text-right">
                <div className="gov-badge-green mb-2">
                  Profile: 85% Complete
                </div>
                <p className="text-sm gov-text-muted">Last login: Today, 9:30 AM</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="gov-alert-info mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Important Notice</h3>
                <p className="text-sm">New internship opportunities have been added. Complete your profile to get better matches.</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <div key={index} className="gov-stats-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold gov-text-primary mb-1">{stat.value}</p>
                    <p className="text-sm font-medium gov-text-secondary mb-1">{stat.title}</p>
                    <p className="text-xs gov-text-muted">{stat.change}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Internships */}
            <div className="lg:col-span-2">
              <div className="gov-card">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold gov-text-primary">Latest Opportunities</h2>
                    <button className="gov-accent text-sm font-medium flex items-center hover:underline">
                      View All
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {recentInternships.map((internship) => (
                    <div key={internship.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold gov-text-primary">{internship.title}</h3>
                            <span className={`gov-badge ${internship.type === 'Full-time' ? 'gov-badge-blue' : 'gov-badge-yellow'}`}>
                              {internship.type}
                            </span>
                          </div>
                          <p className="gov-accent text-sm mb-2 flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {internship.company}
                          </p>
                          <div className="flex items-center space-x-4 text-sm gov-text-muted">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {internship.stipend}/month
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {internship.duration}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-2">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm gov-text-secondary">{internship.rating}</span>
                          </div>
                          {internship.applied ? (
                            <span className="gov-badge-green">
                              Applied
                            </span>
                          ) : (
                            <button className="gov-button text-sm px-4 py-2">
                              Apply Now
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="text-xs gov-text-muted">
                        Application Deadline: {internship.deadline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Resume Upload */}
              <div className="gov-card p-6 text-center">
                <div className="mb-4">
                  <Upload className="h-12 w-12 gov-accent mx-auto mb-3" />
                  <h3 className="text-lg font-bold gov-text-primary mb-2">Upload Resume</h3>
                  <p className="text-sm gov-text-secondary mb-4">
                    Get AI-powered internship matches based on your skills
                  </p>
                </div>
                <button
                  onClick={() => setShowResumeAnalysis(true)}
                  className="gov-button w-full mb-3"
                >
                  Upload & Analyze Resume
                </button>
                <button
                  onClick={() => {
                    if (!isSignedIn) {
                      navigate('/signup');
                    } else {
                      setShowDemoResumes(true);
                    }
                  }}
                  className="gov-button-secondary w-full"
                >
                  <Eye className="h-4 w-4 mr-2 inline" />
                  View Demo Resumes
                </button>
              </div>

              {/* Upcoming Events */}
              <div className="gov-card">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold gov-text-primary">Upcoming Events</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        event.type === 'interview' 
                          ? 'bg-blue-50 text-blue-600' 
                          : event.type === 'webinar'
                          ? 'bg-green-50 text-green-600'
                          : 'bg-red-50 text-red-600'
                      }`}>
                        {event.type === 'interview' ? (
                          <Users className="h-4 w-4" />
                        ) : event.type === 'webinar' ? (
                          <Calendar className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium gov-text-primary">{event.title}</p>
                        <p className="text-xs gov-text-muted">{event.date} • {event.time}</p>
                        <span className={`text-xs ${
                          event.status === 'confirmed' ? 'gov-success' :
                          event.status === 'registered' ? 'gov-accent' : 'gov-warning'
                        }`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="gov-card">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold gov-text-primary">Quick Actions</h2>
                </div>
                <div className="p-6 space-y-3">
                  <button className="gov-button-secondary w-full text-sm py-3 flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Complete Profile
                  </button>
                  <button className="gov-button-secondary w-full text-sm py-3 flex items-center justify-center">
                    <Target className="h-4 w-4 mr-2" />
                    Browse Internships
                  </button>
                  <button className="gov-button-secondary w-full text-sm py-3 flex items-center justify-center">
                    <Brain className="h-4 w-4 mr-2" />
                    Schedule Mock Interview
                  </button>
                </div>
              </div>

              {/* Progress Card */}
              <div className="gov-card">
                <div className="p-6">
                  <h3 className="font-semibold gov-text-primary mb-4">Profile Completion</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="gov-text-secondary">Basic Information</span>
                      <span className="gov-success font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="gov-text-secondary">Resume Upload</span>
                      <span className="gov-warning font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="gov-text-secondary">Skills Assessment</span>
                      <span className="gov-error font-medium">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Resume Analysis Modal */}
      {showResumeAnalysis && (
        <ResumeAnalysis onClose={() => setShowResumeAnalysis(false)} />
      )}

      {/* Demo Resume Modal */}
      {showDemoResumes && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gov-card max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setShowDemoResumes(false)}
              className="absolute top-4 right-4 gov-button-secondary px-4 py-2 rounded-md"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold gov-text-primary mb-6 text-center">Demo Resumes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demoResumes.map((resume, idx) => (
                <div key={idx} className="gov-card p-6">
                  <h3 className="text-xl font-bold gov-accent mb-2">{resume.name}</h3>
                  <p className="gov-text-secondary mb-1">{resume.degree} - {resume.college}</p>
                  <p className="gov-text-muted mb-2">{resume.experience}</p>
                  <div className="mb-2">
                    <span className="font-semibold gov-text-primary">Skills:</span>
                    <ul className="list-disc ml-5 gov-text-secondary">
                      {resume.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm gov-text-muted mb-1"><strong>Email:</strong> {resume.email}</div>
                  <div className="text-sm gov-text-muted mb-1"><strong>Phone:</strong> {resume.phone}</div>
                  <div className="text-sm gov-text-muted mb-1"><strong>Location:</strong> {resume.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;