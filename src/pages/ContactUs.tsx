import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      

      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <div className="md:w-2/5 p-10 bg-gradient-to-br from-blue-100 to-blue-200 text-gray-800 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full opacity-50 transform -translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
            
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h2>
              <p className="text-lg text-gray-700">
                Whether you have a question about our events, projects, or anything else, our team is ready to answer all your questions. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <p className="text-lg text-gray-700 mt-6">
                We value your feedback and look forward to connecting with you!
              </p>
            </div>
          </div>

          <div className="md:w-3/5 p-10 bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Send us a message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all bg-gray-50"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all bg-gray-50"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all bg-gray-50"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">College/University</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all bg-gray-50"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all bg-gray-50"
                  required
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-3 rounded-lg text-white font-medium transition-all ${
                    isSubmitting 
                      ? "bg-blue-300 cursor-not-allowed" 
                      : "bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;