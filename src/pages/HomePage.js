import { BookOpen, Award, Radio, Lightbulb, FileText, Search } from 'lucide-react';
import PublicationsPage from '../pages/PublicationsPage';
import ContactPage from '../pages/ContactPage';


const HomePage = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-8 py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex gap-8">
        {/* Contact Section */}
        <aside className="w-96 flex-shrink-0">
          <div className="sticky top-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <ContactPage />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="md:flex items-start gap-16">
              <div className="md:w-1/3 mb-8 md:mb-0 flex-shrink-0">
                <img 
                  src="/images/profile.jpg" 
                  alt="Jonathan Morse"
                  className="rounded-xl shadow-lg w-64 h-64 object-cover object-center mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Jonathan Morse</h1>
                <a
                href="/pdfs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 
                            bg-primary-light dark:bg-primary-dark text-white rounded-lg 
                            hover:bg-primary-hoverLight dark:hover:bg-primary-hoverDark transition-colors"
                >
                <FileText className="w-5 h-5" />
                Resume
                </a>

                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Masters Student in Computer Science
                </p>
                <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
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
          {/* PhD Program Interest Section */}
          <section className="mb-12 p-6 rounded-lg shadow-lg border-l-4 border-primary-light dark:border-primary-dark bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 text-primary-light dark:text-primary-dark mr-2" />
              <h2 className="text-2xl font-semibold text-primary-light dark:text-primary-dark">PhD Program Interest</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="font-bold text-primary-light dark:text-primary-dark">I am actively seeking PhD programs</strong> for the Fall 2025 semester, specifically in areas related to Human-Computer Interaction. I am particularly interested in programs that offer funding opportunities, and I am open to collaborative, interdisciplinary research environments.
            </p>
          </section>

          {/* Publications Section */}
          <section className="mb-12">
            <div className="space-y-8">
              <PublicationsPage />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
