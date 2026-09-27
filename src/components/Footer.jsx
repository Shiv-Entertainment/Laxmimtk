import { trackSubscribe } from '../utils/metaPixel';

export default function Footer() {
  const downloadApp = (event) => {
    const apkUrl = "./Shiv.apk";
    trackSubscribe(event);
    try {
      const link = document.createElement('a');
      link.href = apkUrl;
      link.setAttribute('download', 'Shiv.apk');
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
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="fas fa-bolt text-blue-400 text-xl"></i>
              <h4 className="text-lg font-black">Shiv Online</h4>
            </div>
            <p className="text-sm text-slate-300 mb-4">India's most trusted 24/7 verified online gaming app portal. Download our official Android APK to enjoy instant automated UPI withdrawals, 256-bit SSL security, and round-the-clock support.</p>
            <div className="flex gap-2">
              <span className="badge">Meta Approved</span>
              <span className="badge">SSL Encrypted</span>
              <span className="badge">18+ Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition">Home Portal</a></li>
              <li><a href="#features" className="hover:text-white transition">Why Choose Us</a></li>
              <li><a href="#markets" className="hover:text-white transition">Available IDs</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How To Get Started</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Customer Reviews</a></li>
              <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Legal & Download */}
          <div>
            <h4 className="font-black mb-4">Download Official App</h4>
            <button 
              className="w-full gradient-button text-base mb-4"
              onClick={downloadApp}
            >
              <i className="fas fa-download mr-2 animate-bounce"></i> Download App Now
            </button>
            <div className="text-sm text-slate-300 space-y-1">
              <p><strong>Support:</strong> support@Shivonline.site</p>
              <p><strong>APK Version:</strong> v4.8.2 (Latest)</p>
              <p><strong>24/7 Payout:</strong> UPI • PhonePe • GPay • Paytm • IMPS</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2026 Shiv Online. All Rights Reserved. <button onClick={downloadApp} className="text-blue-400 hover:text-blue-300">Download App Now</button></p>
        </div>
      </div>
    </footer>
  )
}
