export default function HowItWorks() {
  const downloadApp = () => {
    const apkUrl = "./Shiv.apk";
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

  const steps = [
    { num: '01', title: 'Click "Download Official APK"', desc: 'Click any Download button to immediately download the verified Android APK package.', badge: 'STEP 1 • DOWNLOAD' },
    { num: '02', title: 'Install & Instant Registration', desc: 'Install the app on your mobile phone and create your verified account in less than 1 minute.', badge: 'STEP 2 • QUICK INSTALL' },
    { num: '03', title: 'Play Matka & Instant Withdrawal', desc: 'Access Kalyan, Main Bazar, Milan Day, Rajdhani, and Starline. Enjoy 10 ka 950 game rates with instant 2-minute automated UPI payout.', badge: 'STEP 3 • PLAY & PAYOUT' }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <i className="fas fa-list-check"></i> Fast 3-Step Process
          </div>
          <h2 className="section-title">How To <span className="gradient-text">Download & Play App</span></h2>
          <p className="text-slate-600 mt-4">Getting started takes less than 1 minute. Follow these 3 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-4xl font-black">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 mb-6">{step.desc}</p>
              <span className="inline-block badge">{step.badge}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready To Download The App Right Now?</h3>
          <p className="text-slate-600 mb-6">Join 100,000+ active members on Laxmi Online. Direct fast-download CDN servers active!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="gradient-button text-base"
              onClick={downloadApp}
            >
              <i className="fas fa-download animate-bounce mr-2"></i> Download App Now
            </button>
            <button className="px-6 py-3 bg-white border border-blue-200 text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition">
              <i className="fas fa-info-circle mr-2"></i> View App Specs & Version (v4.8.2)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
