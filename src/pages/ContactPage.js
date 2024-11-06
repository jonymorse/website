import { Mail, MapPin, Building2, Calendar, Github, Linkedin } from 'lucide-react';

// Custom Google Scholar Icon Component
const ScholarIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 4.038c.115-.468.273-.924.468-1.363L12 6.5l6.694 5.675c.195.439.353.895.468 1.363L24 9.5 12 0Z" />
  </svg>
);

const ContactPage = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jmorse8@lsu.edu';
  };

  const handleCalendarClick = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0uJ4QDmcH9FHMTIy-2AtZ30BTSPqCS-rsbxVDsbv-Q7zTXovOUiw6jQZMcs8Gxyl-vG2YmjRlG', '_blank');
  };

  return (
    <div className="p-2 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always interested in research collaborations, academic discussions, 
          and opportunities to work on challenging problems across domains. The best way to contact me is via{' '}
          <button 
            onClick={handleEmailClick}
            className="text-primary-light dark:text-primary-dark hover:text-primary-hoverLight dark:hover:text-primary-hoverDark font-medium underline decoration-dotted"
          >
            email
          </button>!
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Contact Information</h2>
          
          <div className="space-y-4">
            {/* Email */}
            <button 
              onClick={handleEmailClick}
              className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div className="text-left">
                <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                <p className="text-gray-600 dark:text-gray-300">jmorse8@lsu.edu</p>
              </div>
            </button>

            {/* Office */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <Building2 className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Office</p>
                <p className="text-gray-600 dark:text-gray-300">Patrick F. Taylor, Room 2323</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <MapPin className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Address</p>
                <p className="text-gray-600 dark:text-gray-300">Louisiana State University</p>
                <p className="text-gray-600 dark:text-gray-300">Baton Rouge, LA 70803</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Office Hours</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Fall 2024</p>
                <p className="text-gray-600 dark:text-gray-300">Tuesday: 3:00 PM - 4:00 PM</p>
                <p className="text-gray-600 dark:text-gray-300">Thursday: 3:00 PM - 4:00 PM</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Or by appointment</p>
              </div>
            </div>
            <button
              onClick={handleCalendarClick}
              className="w-full mt-4 px-4 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-hoverLight dark:hover:bg-primary-hoverDark transition-colors"
            >
              Schedule a Meeting
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Connect</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/jonymorse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/jonymorse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">LinkedIn</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=e8cemwoAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ScholarIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
