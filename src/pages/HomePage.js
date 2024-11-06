import { BookOpen, Award, Radio, Lightbulb, FileText, Search } from 'lucide-react';
import PublicationsPage from '../pages/PublicationsPage';
import ContactPage from '../pages/ContactPage';

const HomePage = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-6 sm:py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <HeroSection />
        {/* PhD Program Interest Section - Mobile */}
        <PhDSection />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Section */}
        <aside className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
          <div className="sticky top-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <ContactPage />
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:flex-1">
          {/* Hero Section - Desktop Only */}
          <div className="hidden md:block">
            <HeroSection />
          </div>

          {/* PhD Program Interest Section - Desktop Only */}
          <div className="hidden md:block">
            <PhDSection />
          </div>

          {/* Publications Section */}
          <section className="mb-12">
            <PublicationsPage />
          </section>
        </main>
      </div>
    </div>
  );
};

// Extracted PhD Section Component
const PhDSection = () => {
  return (
    <section className="mb-12 p-6 rounded-lg shadow-lg border-l-4 border-primary-light dark:border-primary-dark bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center mb-4">
        <Search className="w-6 h-6 text-primary-light dark:text-primary-dark mr-2" />
        <h2 className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-primary-dark">PhD Program Interest</h2>
      </div>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong className="font-bold text-primary-light dark:text-primary-dark">I am actively seeking PhD programs</strong> for the Fall 2025 semester, specifically in areas related to Human-Computer Interaction. I am particularly interested in programs that offer funding opportunities, and I am open to collaborative, interdisciplinary research environments.
      </p>
    </section>
  );
};

// Extracted Hero Section Component
const HeroSection = () => {
    return (
      <section className="mb-10 sm:mb-20">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <img 
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
              alt="Jonathan Morse"
              className="rounded-xl shadow-lg w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover object-center mx-auto"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Jonathan Morse</h1>
                <a
                  href={`${process.env.PUBLIC_URL}/pdfs/Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-hoverLight dark:hover:bg-primary-hoverDark transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Masters Student in Computer Science
            </p>
            <div className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a research assistant and graduate student in Computer Science at Louisiana State University, conducting research under{' '}
              <a 
                href="https://csc.lsu.edu/~webb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark hover:text-primary-hoverLight dark:hover:text-primary-hoverDark font-medium underline decoration-dotted"
              >
                Dr. Andrew Webb
              </a>. My primary interests span Human-Computer Interaction (HCI), Mixed/Extended Reality, Robotics, and Health Informatics. 
              Currently, I'm working on a{' '}
              <a 
                href="https://www.lsu.edu/eng/news/2022/10/howdowebuildinspace.php"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark hover:text-primary-hoverLight dark:hover:text-primary-hoverDark font-medium underline decoration-dotted"
              >
                project
              </a> that leverages Virtual Reality to support future construction efforts in space environments. Additionally, I collaborate with a research team at Ochsner Health in New Orleans, where we apply machine learning to enhance 
              and automate nasal imaging processes.
            </div>
          </div>
        </div>
      </section>
    );
  };

export default HomePage;