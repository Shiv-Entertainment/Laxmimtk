export default function Header() {
  const downloadApp = () => {
    const apkUrl = "./Shiv.apk";
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        value: 'download',
        currency: 'INR'
      });
    }
    try {
      const link = document.createElement('a');
      link.href = apkUrl;
      link.setAttribute('download', 'laxmi.apk');
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.location.href = apkUrl;
    }
  };

  return (
    <>
      {/* Compliance Bar */}
      <div className="compliance-bar">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-1 rounded text-xs font-bold uppercase">18+ Only</span>
            <span className="text-blue-300/60 hidden sm:inline">•</span>
            <span className="text-blue-100">18+ Only | Strictly for entertainment and skill gaming. Play Responsibly.</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-blue-200">
            <span className="flex items-center gap-1">✓ Meta Approved Landing Page</span>
            <span>•</span>
            <button onClick={() => alert('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => alert('Terms & Conditions')} className="hover:text-white transition-colors">Terms & Conditions</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header-sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-400 p-2.5 rounded-xl text-white">
                <i className="fas fa-bolt text-lg"></i>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-slate-900 uppercase">
                  Laxmi <span className="gradient-text">Online</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">India's #1 Online Matka Play App</div>
              </div>
            </div>

            {/* Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
              <a href="#markets" className="hover:text-blue-600 transition-colors">Matka Markets</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button 
                className="gradient-button text-sm"
                onClick={downloadApp}
              >
                <i className="fas fa-download mr-2 animate-bounce"></i> Download Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
