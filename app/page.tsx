const campuses = [
  ['إيميلات العمل', 'مساعد يكتب ويراجع الردود حسب سياقك ونبرة شركتك.', '✉️'],
  ['تقارير الإدارة', 'يحوّل النقاط والبيانات إلى تقرير مرتب قابل للإرسال.', '📊'],
  ['تلخيص الاجتماعات', 'قرارات، مهام، مخاطر، ومتابعات من كل نقاش.', '🎙️'],
  ['العروض التنفيذية', 'يبني هيكل عرض واضح من فكرة أو ملف أو تقرير.', '🖥️'],
  ['مراجعة الملفات', 'يلتقط النواقص ويحسن المخرجات قبل إرسالها.', '🧾'],
  ['متابعة المهام', 'يحول المتابعة اليومية إلى قائمة واضحة ومنظمة.', '✅'],
  ['محتوى العمل', 'ثَمبنيلات، مقاطع قصيرة، ومواد داخلية عند الحاجة.', '🎬'],
  ['أتمتة شخصية', 'قوالب قابلة للتعديل حسب دورك وطريقة عملك.', '⚙️'],
];
const wins = [
  ['/proof/reem-claude-fast.png', 'ريم', 'تعلم Claude بسرعة'],
  ['/proof/khalid-app-2-weeks.png', 'خالد', 'بناء تطبيق خلال أسبوعين'],
  ['/proof/abdulwahab-automation-certificate.png', 'عبدالوهاب', 'تعلم الأتمتة مع شهادة'],
];
const faqs = [
  ['هل أحتاج خبرة تقنية؟', 'لا. تبدأ من مهمة واضحة في عملك، ثم تبني مساعدًا أو أتمتة بخطوات عملية وبشرح عربي.'],
  ['هل هذا مجرد برومبتات؟', 'لا. البرومبت جزء صغير. الأهم هو تحويل المهمة إلى مساعد قابل للتكرار والمراجعة.'],
  ['ماذا أفعل أول أسبوع؟', 'تختار مهمة واحدة، تستخدم قالبًا جاهزًا، تعدله على شغلك، ثم تعرض المخرج للمراجعة.'],
  ['هل يناسب المديرين؟', 'نعم إذا لديك تقارير، متابعة فرق، اجتماعات، مراجعة ملفات، أو قرارات تحتاج مخرجات أوضح.'],
  ['هل يناسب الطلاب؟', 'الأولوية لمن لديه مهام عمل حقيقية. إذا لم تملك مهمة قابلة للتطبيق الآن، الفائدة ستكون أقل.'],
  ['متى أرى نتيجة؟', 'الهدف أن تبني أول مساعد ذكي خلال 7 أيام، وليس أن تنتظر نهاية كورس طويل.'],
];
function CTA({ children = 'انضم الآن' }: { children?: string }) { return <a className="cta" href="#checkout">{children}<span>←</span></a>; }
function ProofLine() { return <div className="proofLine"><div className="faces"><i/><i/><i/><i/></div><span>30+ تنفيذي ومدير سعودي · مئات الموظفين في الخليج · نتائج حقيقية من أتمتها</span></div>; }
export default function Page() {
  return <main>
    <nav className="nav"><a className="brand" href="#top"><span className="logoWrap"><img src="/atmatha-logo.png" alt="أتمتها" /></span><span>مجلس الأتمتة+</span></a><div className="navLinks"><a href="#method">الطريقة</a><a href="#campuses">المساعدات</a><a href="#wins">النتائج</a><a href="#checkout">الاشتراك</a></div><CTA>ابدأ الآن</CTA></nav>
    <section className="hero" id="top"><div className="heroLight"/><div className="container heroGrid"><div className="heroCopy"><div className="micro">REAL WORK AI MAJLIS</div><h1>لا تتعلم أدوات.<br/><span>ابنِ مساعدًا ذكيًا</span><br/>لمهمة من عملك.</h1><p>مجلس الأتمتة+ للمحترفين الذين يريدون تحويل التقارير، الإيميلات، العروض، الاجتماعات، ومراجعة الملفات إلى مساعدين أذكياء يوفرون الوقت ويحسنون جودة المخرجات.</p><div className="heroActions"><CTA>ابدأ أول مساعد ذكي هذا الأسبوع</CTA><a className="ghost" href="#method">شاهد الطريقة</a></div><ProofLine/></div><div className="heroVisual"><div className="videoShell"><img src="/osama-portrait.jpg" alt="أسامة الكلثمي في فعالية"/><div className="play">▶</div><div className="videoText"><b>إذا عندك مهمة تتكرر… فهي مرشحة للأتمتة.</b><span>مهمة حقيقية → مساعد ذكي → مراجعة بشرية → مخرج أفضل</span></div></div><div className="notice n1"><b>7 أيام</b><span>أول مساعد ذكي</span></div></div></div></section>
    <section className="ticker"><div><span>مهمة حقيقية</span><span>أتمتة</span><span>مساعد ذكي</span><span>مشروع عملي</span><span>يوفر وقتك</span><span>يحسن جودة مخرجاتك</span><span>مهمة حقيقية</span><span>أتمتة</span><span>مساعد ذكي</span></div></section>
    <section className="proofStats container"><div><strong>30+</strong><span>تنفيذي ومدير سعودي</span></div><div><strong>100s</strong><span>موظفين في الخليج</span></div><div><strong>15+ ساعة</strong><span>تطبيقات مسجلة</span></div><div><strong>كل أسبوع</strong><span>لايف ومراجعة</span></div></section>
    <section className="section container" id="method"><div className="sectionIntro"><small>THE ENEMY</small><h2>المشكلة ليست أنك لا تعرف ChatGPT. المشكلة أنك لا تملك طريقة.</h2><p>الطريقة العشوائية تجعلك تطارد أدوات وبرومبتات. طريقة المجلس تبدأ من مهمة حقيقية، ثم تبني لها مساعدًا قابلًا للتكرار.</p></div><div className="versus"><article className="path bad"><small>طريقتهم</small><h3>تجربة أدوات وبرومبتات</h3><ul><li>شرح عام لا يشبه عملك.</li><li>برومبت محفوظ ثم يُنسى.</li><li>نتائج غير ثابتة.</li><li>لا يوجد مخرج واضح.</li></ul></article><article className="path good"><small>طريقتنا</small><h3>مهمة واحدة تتحول لمساعد</h3><ul><li>تختار مهمة فعلية.</li><li>تبدأ من قالب جاهز.</li><li>تضيف سياق عملك.</li><li>تراجع المخرج حتى يصلح للاستخدام.</li></ul></article></div></section>
    <section className="phaseSection"><div className="container"><div className="sectionIntro centered"><small>3-PHASE TRANSFORMATION</small><h2>من مهمة مزعجة إلى مساعد ذكي خلال أسبوع.</h2></div><div className="phases"><div><span>STEP 1</span><h3>اختر المهمة</h3><p>تقرير، إيميل، عرض، اجتماع، مراجعة ملف، أو متابعة.</p></div><div><span>STEP 2</span><h3>ركّب النظام</h3><p>استخدم قالبًا جاهزًا، ثم أضف سياق عملك وطريقة مخرجاتك.</p></div><div><span>STEP 3</span><h3>حسّن المخرج</h3><p>راجع النتيجة في المجتمع أو اللايف حتى تصبح قابلة للاستخدام.</p></div></div><CTA>ابدأ الخطة</CTA><ProofLine/></div></section>
    <section className="section container" id="campuses"><div className="sectionIntro"><small>AI SYSTEMS</small><h2>مساعدات جاهزة تشبه عملك، لا أمثلة عامة.</h2><p>كل كرت يمثل مهمة عملية يراها الموظف أو المدير في يومه.</p></div><div className="campusGrid">{campuses.map(([title, body, icon]) => <article className="campus" key={title}><div className="campusIcon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="appShowcase"><div className="container appGrid"><div className="assetFrame"><img src="/generated/gold-scene.svg" alt="خلفية واجهة مساعد ذكي"/><div className="appMock"><div className="appTop"><i/><i/><i/></div><div className="chat mine">جهّز تقريرًا أسبوعيًا من هذه الملاحظات.</div><div className="chat ai">سأقسمه إلى ملخص تنفيذي، مؤشرات، مخاطر، وقرارات مطلوبة.</div><div className="report"><b>مخرج جاهز</b><span>تقرير مرتب + مهام متابعة + نقاط قرار</span></div></div></div><div className="appCopy"><small>CUSTOM LEARNING PATH</small><h2>التعلم هنا مرتبط بمخرج، وليس بعدد الدروس.</h2><p>كل قسم في الصفحة يدفع نفس الفكرة: لا تشتري معلومات. اشترِ طريقة تحول مهمة متكررة إلى مساعد ذكي قابل للمراجعة والتكرار.</p><CTA>ادخل المجلس</CTA><ProofLine/></div></div></section>
    <section className="section container" id="wins"><div className="sectionIntro centered"><small>REAL WINS</small><h2>نتائج حقيقية بدل وعود فارغة.</h2><p>لقطات إثبات فعلية تم استرجاعها من Google Drive.</p></div><div className="wins">{wins.map(([src, name, result]) => <article className="win" key={src}><img src={src} alt={`${name} - ${result}`}/><div><b>{name}</b><span>{result}</span></div></article>)}</div></section>
    <section className="choice"><div className="container choiceGrid"><div className="choiceCard muted"><small>THEIR WAY</small><h3>تبقى تجرب عشوائيًا</h3><p>تدفع وقتك في أدوات ومقاطع وبرومبتات لا تتحول إلى نظام داخل عملك.</p><a href="https://www.youtube.com/">استمر في البحث</a></div><div className="vs">VS</div><div className="choiceCard active"><small>OUR WAY</small><h3>تبدأ بمهمة واحدة</h3><p>تدخل بمهمة حقيقية وتبني لها مساعدًا ذكيًا مع تدريب، قوالب، ولايف أسبوعي.</p><CTA>انضم الآن</CTA></div></div></section>
    <section className="checkout" id="checkout"><div className="container checkoutGrid"><div className="priceBox"><small>CHOOSE YOUR PATH</small><h2>$80</h2><p>شهريًا — أقل من ورشة واحدة أو استشارة واحدة، ومصمم ليعطيك نتيجة عملية هذا الشهر.</p><CTA>انضم إلى مجلس الأتمتة+</CTA><ProofLine/></div><div className="stack"><h3>ما الذي تستبدله؟</h3><ul><li>ورشة AI عملية: 300–700 ريال.</li><li>استشارة واحدة: 300 ريال أو أكثر.</li><li>قوالب وأنظمة جاهزة: مئات الريالات.</li><li>مجتمع ولايف أسبوعي ومراجعة تطبيق.</li></ul></div></div></section>
    <section className="section container" id="faq"><div className="sectionIntro centered"><small>FAQ</small><h2>أسئلة قبل الانضمام</h2></div><div className="faqGrid">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="final"><div className="container"><h2>ادخل بمهمة واحدة. اخرج بمساعد ذكي.</h2><p>لا تحتاج أن تتعلم كل أدوات الذكاء الاصطناعي. تحتاج طريقة عملية تبدأ من شغلك.</p><CTA>ابدأ هذا الأسبوع</CTA><ProofLine/></div></section>
    <footer>مجلس الأتمتة+ — Next.js funnel with generated cinematic assets + recovered Osama proof.</footer><div className="mobileSticky"><CTA>انضم الآن — 80 دولار شهريًا</CTA></div>
  </main>;
}
