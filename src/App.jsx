import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  // הנתיבים מעודכנים לפי הקבצים שלך ותמונת ההדמיה מהאתר של עינב
  const images = {
    hero: "https://enav.co.il/wp-content/uploads/2024/12/0077_final-scaled.jpg",
    kitchen: "/חומרים/מטבח.jpg",
    livingRoom: "/חומרים/סלון מטבח.jpg",
    bathroom: "/חומרים/אמבטיה.jpg",
    bedroom: "/חומרים/חדר שינה.jpg",
    balcony: "/חומרים/מרפסת.jpg"
  };

  const projectUrl = "https://enav.co.il/new-projects/%d7%94%d7%a0%d7%95%d7%a8%d7%99%d7%aa-%d7%99%d7%a8%d7%95%d7%a9%d7%9c%d7%99%d7%9d/";

  // --- States ---
  const [showSticky, setShowSticky] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // מערך תמונות לגלריה (לפי הסדר שמוצג בסקשן)
  const galleryImages = [images.livingRoom, images.kitchen, images.bathroom, images.bedroom];

  // מעקב אחר גלילה כדי להציג את הכפתור הצף רק אחרי ההירו
  useEffect(() => {
    const handleScroll = () => {
      // אם גללנו יותר מ-80% מגובה המסך (בערך סוף ההירו)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-200 scroll-smooth" dir="rtl">

      {/* 1. Hero Section - Full Screen Mobile Optimized */}
      <header className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center">

        {/* רקע עם גרדיאנט */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/95"></div>
        </div>

        <div className="relative z-20 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-between w-full min-h-[100dvh] pt-16 pb-12">

          {/* אזור הטקסטים המרכזי */}
          <div className="flex flex-col items-center justify-center flex-grow w-full">
            <span className="bg-slate-900 text-slate-50 font-extrabold px-6 py-2 rounded-full text-sm sm:text-base tracking-wide mb-2 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              ההשקעה החכמה הבאה שלך:
            </span>

            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              <span className="inline-block">הכנסה <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">מובטחת</span> היום,</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">פינוי בינוי</span> מחר.
            </h1>

            <p className="text-lg md:text-xl text-slate-100 font-normal max-w-xl leading-relaxed drop-shadow-md px-2 mt-8">
              <span className="font-bold text-white">דירת 50 מ"ר משופצת</span> בעיר גנים ירושלים. <br />
              תזרים יציב של <span className="font-bold text-white">4,500 ש״ח</span> בחודש מהרגע הראשון,<br />
              <span className="font-bold text-white">דירת תמורה של 75 מ"ר</span> בפרויקט "בינוי-פינוי".
            </p>
          </div>

          {/* קרוסלת תמונות לחיצה -> גוללת לגלריה המלאה */}
          <a href="#gallery-section" className="w-[calc(100%+2rem)] sm:w-full max-w-2xl my-6 overflow-hidden relative py-2 block cursor-pointer group">
            
            <div className="absolute top-2 right-1/2 translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
              לחץ לצפייה בגלריה
            </div>
            
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4 shrink-0">
                  <img src={images.livingRoom} alt="סלון מואר" className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-xl shadow-md border border-white/10" />
                  <img src={images.kitchen} alt="מטבח משופץ" className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-xl shadow-md border border-white/10" />
                  <img src={images.bathroom} alt="חדר רחצה" className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-xl shadow-md border border-white/10" />
                  <img src={images.bedroom} alt="חדר שינה" className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-xl shadow-md border border-white/10" />
                </div>
              ))}
            </div>
          </a>

          {/* כפתור גולל רק לסקשן הבא */}
          <div className="mt-8 flex-shrink-0">
            <a
              href="#roi-section"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-xl font-bold py-4 px-10 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(245,158,11,0.5)] cursor-pointer"
            >
              לפרטים ותיאום סיור
              {/* חץ שמצביע למטה (במקום שמאלה) כי אנחנו יורדים סקשן */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </div>

        </div>
      </header>

      {/* 2. ROI Section - הוספנו מזהה roi-section */}
      <section id="roi-section" className="bg-slate-900 relative z-20 px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-amber-500 text-center transition hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ₪
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">4,500 ש"ח בחודש</h3>
            <p className="text-slate-600 leading-relaxed">
              הכנסה נוכחית גבוהה (כ-1,000 ש"ח מעל מחירי השוק). מושכרת כעת – אפס התעסקות (Plug & Play).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-amber-500 text-center transition hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">מצב הנכס כיום</h3>
            <p className="text-slate-600 leading-relaxed">
              3 חדרים (כ-50 מ"ר), סלון, מטבח, 2 חדרי שינה ומרפסת. משופצת קומפלט ברמה גבוהה.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-amber-500 text-center transition hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">2,090,000 ש"ח</h3>
            <p className="text-slate-600 leading-relaxed">
              המחיר המבוקש. ישנה גמישות לרציניים לקראת סגירה מהירה.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Gallery Section - הוספנו מזהה gallery-section ופתיחת Lightbox */}
      <section id="gallery-section" className="bg-slate-900 py-20 px-4 md:px-8 text-white text-center pt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">מוכנה להשכרה: הדירה כיום</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
          רמת גימור גבוהה המבטיחה ביקוש שיא בקרב שוכרים ו-0 ימי ריק בנכס. 
          <br /><span className="text-sm text-amber-500">(לחצו על התמונות להגדלה)</span>
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((imgSrc, index) => (
            <img 
              key={index}
              src={imgSrc} 
              alt={`תמונה ${index + 1}`} 
              onClick={() => setLightboxIndex(index)}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:opacity-80 transition cursor-pointer bg-slate-800 hover:scale-[1.02]" 
            />
          ))}
        </div>
      </section>

      {/* 3. Future Project Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              פרויקט ההתחדשות העירונית <br /><span className="text-amber-600">(האקזיט שלך)</span>
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-amber-500 ml-3 mt-1">✔</span>
                <p className="text-lg"><strong>סטטוס הפרויקט:</strong> תב"ע מאושרת. מסיימים תכנון מפורט והשלמות משפטיות. צפי לתחילת בינוי: כשנתיים+.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 ml-3 mt-1">✔</span>
                <p className="text-lg"><strong>היזם:</strong> חברת עינב.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 ml-3 mt-1">✔</span>
                <p className="text-lg"><strong>יתרון "בינוי-פינוי":</strong> בונים קודם, מפנים אחר כך! עוברים ישירות לדירה החדשה ללא שכירויות זמניות.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 ml-3 mt-1">✔</span>
                <p className="text-lg"><strong>דירת התמורה:</strong> כ-75 מ"ר + מרפסת שמש, מחסן וחניה פרטית.</p>
              </li>
            </ul>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-slate-800 transition">
              למעבר לעמוד הפרויקט באתר היזם
            </a>
          </div>

          <div className="lg:w-1/2 bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
            <img src={images.hero} alt="הדמיית הפרויקט העתידי" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 5. Environment & Location Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">סביבה ומיקום – פוטנציאל ההשבחה האזורי</h2>
        <p className="text-xl text-slate-600 mb-4">
          <strong>המיקום:</strong> רחוב הנורית, עיר גנים, ירושלים.
        </p>
        <p className="text-lg text-slate-600 mb-8">
          שכונת עיר גנים עוברת מתיחת פנים דרמטית. מבנייני רכבות ישנים לסערת פיתוח הכוללת מגדלים, מרכזי מסחר, קניות, שטחים ציבוריים וגינות ירוקות.
        </p>

        <div className="bg-amber-50 border-r-4 border-amber-500 text-right p-6 rounded-l-lg shadow-sm">
          <h4 className="text-xl font-bold text-amber-800 mb-2">הזדמנות נדל"נית ייחודית</h4>
          <p className="text-amber-900 leading-relaxed">
            האזור כולו מוקף בפרויקטים של התחדשות עירונית. בזמן שהפרויקטים הסמוכים ייכנסו לשלב ההריסה, הדיירים שלהם יחפשו נואשות פתרונות דיור חלופיים לשכירות בשכונה. <strong>התוצאה? זינוק מובטח בביקוש ובמחירי השכירות לדירה שלכם עד לרגע המעבר.</strong>
          </p>
        </div>
      </section>

      {/* 6. Lead Capture Section */}
      <section id="lead-capture" className="bg-slate-100 border-t border-slate-200 py-20 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 ">בואו נדבר.</h2>
          <p className="text-2xl text-slate-600 mb-6">
            חייגו לקביעת סיור בנכס  <br />ולקבלת נתוני העסקה המלאים.
          </p>
          <a
            href="tel:0515505062"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-md text-xl w-full sm:w-auto inline-flex items-center justify-center gap-2 no-underline cursor-pointer"
          >
            <span className="dir-ltr font-bold">051-5505062</span>
            <span>: חייגו עכשיו</span>
            <span>📞</span>
          </a>
        </div>
      </section>

      {/* Lightbox / Modal Modal לגלריה המוגדלת */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
          <button 
            onClick={() => setLightboxIndex(null)} 
            className="absolute top-6 right-6 text-white text-5xl hover:text-amber-500 transition focus:outline-none z-[110]"
          >
            &times;
          </button>
          
          <div className="relative flex items-center justify-between w-full max-w-5xl h-full">
            {/* כפתור הקודם (ימינה ב-RTL) */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1); }}
              className="text-white text-4xl sm:text-6xl hover:text-amber-500 transition z-[110] p-2"
            >
              &#10095;
            </button>
            
            <img 
              src={galleryImages[lightboxIndex]} 
              alt="תצוגה מוגדלת" 
              className="max-w-[75%] max-h-[85vh] object-contain shadow-2xl rounded-lg" 
            />

            {/* כפתור הבא (שמאלה ב-RTL) */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1); }}
              className="text-white text-4xl sm:text-6xl hover:text-amber-500 transition z-[110] p-2"
            >
              &#10094;
            </button>
          </div>
        </div>
      )}

      {/* Sticky Call Button - מופיע רק כשאנחנו גוללים למטה כדי לא להסתיר את ההירו */}
      <a
        href="tel:0515505062"
        className={`fixed bottom-6 left-6 bg-amber-500 text-slate-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:bg-amber-400 hover:scale-110 transition-all duration-300 z-50 ${showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="חייג עכשיו"
      >
        📞
      </a>

    </div>
  );
};

export default LandingPage;