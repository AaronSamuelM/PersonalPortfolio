import React, { useState } from 'react';
import { Mail, User, Building2, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.organization.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields with valid content.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_kwy6lua',
          template_id: 'template_m78jh3q',
          user_id: '7uPl-bljzVcLyL0uJ', 
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            organization: formData.organization,
            message: formData.message,
            to_email: 'aaronsamuel0605@gmail.com'
          }
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try emailing directly at aaronsamuel0605@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-auto pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="border-4 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center text-sm font-semibold text-white mb-2">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="flex items-center text-sm font-semibold text-white mb-2">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                Your Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="organization" className="flex items-center text-sm font-semibold text-white mb-2">
                <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                Your Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white"
                placeholder="Company or Institution"
              />
            </div>
            <div>
              <label htmlFor="message" className="flex items-center text-sm font-semibold text-white mb-2">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none text-white"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {status.message && (
              <div
                className={`flex items-center p-4 rounded-xl ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-8  pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-white">
              Or email me directly at{' '}
              <a
                href="mailto:aaronsamuel0605@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                aaronsamuel0605@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;