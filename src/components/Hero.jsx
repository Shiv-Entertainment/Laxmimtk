import { trackSubscribe } from '../utils/metaPixel';

export default function Hero() {
  const downloadApp = (event) => {
    const apkUrl = "https://dpboss365.site/dpboss365.apk";
    trackSubscribe(event);
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
    <section id="hero" className="py-12 md:py-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
              <span className="pulse-dot"></span>
              Verified Official Mobile App - Fast APK Download
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Welcome to <br /> <span className="gradient-text">Laxmi Online Matka App</span> <br />
              <span className="text-2xl font-extrabold text-slate-800">India's Trusted Online Matka Play Application</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Download the official Android APK for Kalyan Matka, Main Bazar, Milan Day/Night, and Rajdhani. Enjoy 
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded mx-1">10 ka 950 Rates</span>, 
              live chart updates, and instant 
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded mx-1">2-Minute UPI Withdrawals</span>.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-white border border-blue-100 p-3 rounded-xl text-sm text-slate-800">
                <i className="fas fa-check text-blue-600"></i>
                <span className="font-semibold">Instant UPI Payouts</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-blue-100 p-3 rounded-xl text-sm text-slate-800">
                <i className="fas fa-check text-blue-600"></i>
                <span className="font-semibold">Official APK v4.8.2</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-blue-100 p-3 rounded-xl text-sm text-slate-800 col-span-2">
                <i className="fas fa-check text-blue-600"></i>
                <span className="font-semibold">Min Deposit ₹100 Only</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="gradient-button text-base flex items-center justify-center gap-2"
                onClick={downloadApp}
              >
                <i className="fas fa-download animate-bounce"></i> Download App Now
              </button>
              <button className="px-6 py-3 bg-white border border-blue-200 text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition">
                <i className="fas fa-info-circle mr-2"></i> App Info (18.5 MB)
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                <i className="fas fa-lock text-blue-600"></i> 256-Bit SSL Encrypted
              </span>
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                <i className="fas fa-star text-amber-500"></i> Meta Ad Policy Approved
              </span>
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                <i className="fas fa-users text-blue-600"></i> 100,000+ Downloads
              </span>
            </div>
          </div>

          {/* Right: App Info Card */}
          <div className="relative">
            <div className="bg-white border border-blue-200 rounded-3xl p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-600">
                    <i className="fas fa-download text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Official Android APK</h3>
                    <p className="text-xs text-slate-500 font-medium">Verified Direct Download</p>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">v4.8.2</span>
              </div>

              <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-800 rounded-2xl p-5 space-y-4 text-white">
                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>PACKAGE: <strong className="text-sky-300">com.laxmionline.app</strong></span>
                  <span className="text-amber-300 font-mono font-bold">18.5 MB</span>
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">App Compatibility</span>
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot"></span>
                    <span className="font-bold">Android 6.0+ & iOS Ready</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-blue-900/60">
                    <span className="text-slate-400 block text-xs">SINGLE DIGIT</span>
                    <strong className="text-sky-300 text-lg">10 KA 95</strong>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-blue-900/60">
                    <span className="text-slate-400 block text-xs">JODI DIGIT</span>
                    <strong className="text-amber-300 text-lg">10 KA 950</strong>
                  </div>
                </div>
              </div>

              <button 
                className="w-full gradient-button text-base"
                onClick={downloadApp}
              >
                <i className="fas fa-download animate-bounce mr-2"></i> Download App Now
              </button>
              <p className="text-center text-xs text-slate-500">⚡ Over <strong>12,500+ APK downloads</strong> today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
