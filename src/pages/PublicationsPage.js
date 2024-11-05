import { useState } from 'react';

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
    <span>{message}</span>
    <button 
      onClick={onClose}
      className="text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500"
    >
      ×
    </button>
  </div>
);

const PublicationCard = ({ title, authors, journal, year, volume, doi, image, pdfUrl }) => {
  const [showPdfError, setShowPdfError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handlePdfClick = () => {
    if (pdfUrl) {
      if (pdfUrl.startsWith('http')) {
        window.open(pdfUrl, '_blank', 'noopener noreferrer');
      } else {
        const link = document.createElement('a');
        link.href = pdfUrl;
        const filename = pdfUrl.split('/').pop() || 'paper.pdf';
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      setShowPdfError(true);
      setTimeout(() => setShowPdfError(false), 3000);
    }
  };

  const handleCitationClick = async () => {
    const plainAuthors = authors.replace(/<[^>]+>/g, '');
    const citation = `${plainAuthors} (${year}). ${title}. ${journal}, ${volume}. https://doi.org/${doi}`;
    
    try {
      await navigator.clipboard.writeText(citation);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy citation:', err);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700 p-6 flex items-center justify-center">
            <img 
              src={image} 
              alt={`${title} cover`} 
              className="rounded-lg w-full max-w-[200px] object-cover shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3" dangerouslySetInnerHTML={{ __html: authors }} />
              <p className="text-gray-500 dark:text-gray-400 italic mb-2">
                {journal}, {year}; <span className="font-semibold">{volume}</span>
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="flex flex-wrap gap-3">
              <a 
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
              >
                DOI: {doi}
              </a>
              <button 
                onClick={handleCitationClick}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-900 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 transition-colors"
              >
                Copy Citation
              </button>
              <button 
                onClick={handlePdfClick}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${pdfUrl ? 'text-green-600 dark:text-green-300 bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-700' : 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                PDF
              </button>
              {showPdfError && (
                <span className="text-red-500 dark:text-red-400 text-sm">PDF not available</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <Toast 
          message="Citation copied to clipboard!" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </>
  );
};

const PublicationsPage = () => {
  const publications = [
    {
      title: "Real-time augmentation of diagnostic nasal endoscopy video using AI-enabled edge computing",
      authors: "Bidwell J, Gyawali D, <strong>Morse J</strong>, Ganeshan V, Nguyen T, McCoul ED.",
      journal: "International Forum of Allergy & Rhinology",
      year: "2024",
      volume: "11111",
      doi: "10.1002/alr.23458",
      image: `${process.env.PUBLIC_URL}/images/publications/edge-paper.jpg`,  // Updated line
      pdfUrl: `${process.env.PUBLIC_URL}/pdfs/Int Forum Allergy Rhinol - 2024 - Bidwell - Real‐time augmentation of diagnostic nasal endoscopy video using AI‐enabled.pdf`  // Updated line
    },
    {
      title: "Enhancing nasal endoscopy: Classification, detection, and segmentation of anatomic landmarks using a convolutional neural network",
      authors: "Ganeshan V, Bidwell J, Gyawali D, <strong>Morse J</strong>, et al.",
      journal: "International Forum of Allergy & Rhinology",
      year: "2024",
      volume: "14:1521–1524",
      doi: "10.1002/alr.23384",
      image: `${process.env.PUBLIC_URL}/images/publications/cnn-paper.jpg`,  // Updated line
      pdfUrl: `${process.env.PUBLIC_URL}/pdfs/Int Forum Allergy Rhinol - 2024 - Ganeshan - Enhancing nasal endoscopy  Classification  detection  and segmentation of.pdf`  // Updated line
    }
  ];
  

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">Publications</h1>
      </div>

      {/* Publications Grid */}
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <PublicationCard key={index} {...pub} />
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
