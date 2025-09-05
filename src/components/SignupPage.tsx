import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Eye, EyeOff, Shield, Award, Users, FileText } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    college: '',
    course: '',
    year: '',
    category: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
              <Link to="/" className="flex items-center gov-accent hover:text-blue-900 font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government of India"
                className="h-12 w-12"
              />
              <div className="text-right">
                <h1 className="text-xl font-bold gov-text-primary">PM Internship Scheme</h1>
                <p className="text-sm gov-text-secondary">Ministry of Skill Development and Entrepreneurship</p>
                <p className="text-xs gov-text-muted">Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gov-text-primary">Join the Program</h1>
                  <p className="gov-text-secondary">Create your account to start your internship journey</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold gov-text-primary text-lg">Free Registration</h3>
                  <p className="gov-text-secondary">No registration fees or hidden charges. Completely free for all eligible students.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold gov-text-primary text-lg">Multiple Opportunities</h3>
                  <p className="gov-text-secondary">Access to 1000+ internship positions across various sectors and domains.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold gov-text-primary text-lg">Government Certified</h3>
                  <p className="gov-text-secondary">Official certificates from Government of India with industry recognition.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold gov-text-primary text-lg">Monthly Stipend</h3>
                  <p className="gov-text-secondary">Earn while you learn with competitive stipends ranging from ₹10,000 to ₹50,000.</p>
                </div>
              </div>
            </div>

            <div className="gov-alert-info">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm mb-3">
                Contact our support team for assistance with registration or technical issues.
              </p>
              <div className="text-sm space-y-1">
                <p><strong>📞 Helpline:</strong> 1800-123-4567 (Toll Free)</p>
                <p><strong>📧 Email:</strong> support@pminternship.gov.in</p>
                <p><strong>🕒 Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="gov-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold gov-text-primary mb-2">Student Registration</h2>
                <p className="gov-text-secondary">Fill in your details to create your account</p>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <div className="gov-section-header">
                  <h3 className="text-lg font-semibold gov-text-primary">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="gov-form-group">
                    <label className="gov-form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="gov-input"
                      required
                    />
                  </div>
                  <div className="gov-form-group">
                    <label className="gov-form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="gov-input"
                      required
                    />
                  </div>
                </div>

                <div className="gov-form-group">
                  <label className="gov-form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="gov-input"
                    required
                  />
                  <p className="gov-form-help">We'll use this email for all official communications</p>
                </div>

                <div className="gov-form-group">
                  <label className="gov-form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="gov-input"
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <div className="gov-section-header">
                  <h3 className="text-lg font-semibold gov-text-primary">Academic Information</h3>
                </div>
                
                <div className="gov-form-group">
                  <label className="gov-form-label">
                    College/University *
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="gov-input"
                    placeholder="Enter your institution name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="gov-form-group">
                    <label className="gov-form-label">
                      Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="gov-select"
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="engineering">Engineering</option>
                      <option value="management">Management</option>
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="gov-form-group">
                    <label className="gov-form-label">
                      Year of Study *
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="gov-select"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="final">Final Year</option>
                    </select>
                  </div>
                </div>

                <div className="gov-form-group">
                  <label className="gov-form-label">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="gov-select"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="obc">OBC (Other Backward Classes)</option>
                    <option value="sc">SC (Scheduled Caste)</option>
                    <option value="st">ST (Scheduled Tribe)</option>
                    <option value="ews">EWS (Economically Weaker Section)</option>
                  </select>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <div className="gov-section-header">
                  <h3 className="text-lg font-semibold gov-text-primary">Account Security</h3>
                </div>
                
                <div className="gov-form-group">
                  <label className="gov-form-label">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="gov-input pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="gov-form-help">Password must be at least 8 characters long</p>
                </div>

                <div className="gov-form-group">
                  <label className="gov-form-label">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="gov-input"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm gov-text-secondary">
                  I agree to the{' '}
                  <Link to="/terms" className="gov-accent hover:underline font-medium">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="gov-accent hover:underline font-medium">
                    Privacy Policy
                  </Link>{' '}
                  of the PM Internship Scheme. I understand that providing false information may lead to disqualification.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full gov-button py-4 text-lg font-semibold"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm gov-text-secondary">
                  Already have an account?{' '}
                  <Link to="/dashboard" className="gov-accent hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;