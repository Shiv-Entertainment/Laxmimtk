import { trackSubscribe } from '../utils/metaPixel';

export default function Markets() {
  const markets = [
    { title: 'Kalyan Matka', players: '45,000+', tags: ['Live Results', 'Fast Bidding', 'Rate 1:950'], open: '04:10 PM', close: '06:10 PM', rating: '4.9' },
    { title: 'Main Bazar', players: '38,200+', tags: ['Highest Bidding', 'Instant Deposit', 'Auto Payout'], open: '09:35 PM', close: '12:05 AM', rating: '4.8' },
    { title: 'Milan Day', players: '29,100+', tags: ['Day Special', 'Single & Jodi', 'Live Panna'], open: '03:00 PM', close: '05:00 PM', rating: '4.9' },
    { title: 'Rajdhani Night', players: '31,000+', tags: ['Night Special', '100% Trusted', 'Verified Result'], open: '09:25 PM', close: '11:35 PM', rating: '4.8' },
    { title: 'Time Bazar', players: '22,900+', tags: ['Fast Results', 'Min ₹100', '24/7 Support'], open: '01:00 PM', close: '02:00 PM', rating: '4.9' },
    { title: 'Sridevi Day', players: '25,500+', tags: ['Morning Market', 'Instant Withdrawal', 'App Exclusive'], open: '11:35 AM', close: '12:35 PM', rating: '4.9' }
  ];

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
    <section id="markets" className="py-16 md:py-24 bg-slate-50/70 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <i className="fas fa-coins text-amber-500"></i> Top Matka Play Markets
          </div>
          <h2 className="section-title">Live <span className="gradient-text">Matka Markets & Timings</span></h2>
          <p className="text-slate-600 mt-4">Download our official Android APK to play all markets with 100% verified results and instant payouts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, idx) => (
            <div key={idx} className="market-card">
              <div className="flex items-center justify-between mb-4">
                <span className="badge">Verified Market</span>
                <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-lg border border-amber-200 text-xs font-bold">
                  <i className="fas fa-star text-amber-400"></i> {market.rating}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">{market.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{market.players} Players • {market.tags.join(' • ')}</p>
              <div className="grid grid-cols-2 gap-3 bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100 text-xs mb-4">
                <div>
                  <span className="text-slate-500 font-bold text-xs uppercase">OPEN</span>
                  <strong className="text-blue-700">{market.open}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold text-xs uppercase">CLOSE</span>
                  <strong className="text-indigo-700">{market.close}</strong>
                </div>
              </div>
              <button 
                className="w-full gradient-button text-sm"
                onClick={downloadApp}
              >
                <i className="fas fa-download mr-2 animate-bounce"></i> Download App Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
