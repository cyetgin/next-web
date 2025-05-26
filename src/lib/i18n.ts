
export type Locale = 'en' | 'de' | 'tr'; // English, German, Turkish

export const DEFAULT_LOCALE: Locale = 'en';
export const AVAILABLE_LOCALES: {value: Locale, label: string}[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' }, // German
  { value: 'tr', label: 'Türkçe' },   // Turkish
];

export type TranslationKey =
  | 'app.name'
  | 'nav.home'
  | 'nav.products'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.news'
  | 'nav.settings' // New
  | 'home.welcomeTitle'
  | 'home.welcomeSubtitle'
  | 'home.featuresTitle'
  | 'home.capabilities.crossBorder.title'
  | 'home.capabilities.crossBorder.description'
  | 'home.capabilities.autonomousData.title'
  | 'home.capabilities.autonomousData.description'
  | 'home.companyInfo.title'
  | 'home.companyInfo.description'
  | 'home.cta.title'
  | 'home.cta.description'
  | 'home.cta.button'
  | 'about.title'
  | 'about.mission.title'
  | 'about.mission.content'
  | 'about.story.title'
  | 'about.story.content'
  | 'contact.title'
  | 'contact.description'
  | 'contact.form.name.label'
  | 'contact.form.name.placeholder'
  | 'contact.form.email.label'
  | 'contact.form.email.placeholder'
  | 'contact.form.message.label'
  | 'contact.form.message.placeholder'
  | 'contact.form.submitButton'
  | 'contact.info.title'
  | 'contact.info.address'
  | 'contact.info.phone'
  | 'contact.info.email'
  | 'products.title'
  | 'products.description'
  | 'products.mainPlatformIntro'
  | 'products.visitPlatformButton'
  | 'products.exploreButton'
  | 'products.category.customsCompliance'
  | 'products.category.aiSolutions'
  | 'products.category.declarationFiling'
  | 'products.category.other'
  | 'products.product.tariff'
  | 'products.product.tariff.description'
  | 'products.product.logicust'
  | 'products.product.logicust.description'
  | 'products.product.customsShield'
  | 'products.product.customsShield.description'
  | 'products.product.customsXRay'
  | 'products.product.customsXRay.description'
  | 'products.product.transitAI'
  | 'products.product.transitAI.description'
  | 'products.product.declarantAI'
  | 'products.product.declarantAI.description'
  | 'products.product.transcode'
  | 'products.product.transcode.description'
  | 'products.product.declarant'
  | 'products.product.declarant.description'
  | 'products.product.relayhub'
  | 'products.product.relayhub.description'
  | 'products.product.greenpulse'
  | 'products.product.greenpulse.description'
  | 'products.product.tradeloupe'
  | 'products.product.tradeloupe.description'
  // News Section Keys
  | 'news.title'
  | 'news.description'
  | 'news.readMore'
  | 'news.category.industryUpdates'
  | 'news.category.technology'
  | 'news.category.companyNews'
  | 'news.post1.title'
  | 'news.post1.excerpt'
  | 'news.post2.title'
  | 'news.post2.excerpt'
  | 'news.post3.title'
  | 'news.post3.excerpt'
  // Settings Page Keys
  | 'settings.title'
  | 'settings.description'
  | 'settings.appearance.title'
  | 'settings.appearance.description'
  | 'settings.appearance.theme.label'
  | 'settings.appearance.theme.light'
  | 'settings.appearance.theme.dark'
  | 'settings.appearance.theme.system'
  | 'settings.appearance.fontSize.label'
  | 'settings.appearance.fontSize.sm'
  | 'settings.appearance.fontSize.md'
  | 'settings.appearance.fontSize.lg'
  | 'settings.language.title'
  | 'settings.language.description'
  | 'settings.language.select.label';

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.news': 'News',
    'nav.settings': 'Settings',
    'home.welcomeTitle': 'ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Revolutionizing cross-border trade with intelligent solutions for customs compliance, goods movement, and autonomous data handling, powered by Blockchain, AI, ML, and BI.',
    'home.featuresTitle': 'Core Capabilities',
    'home.capabilities.crossBorder.title': 'Streamlined Cross-Border Logistics & Customs',
    'home.capabilities.crossBorder.description': 'Navigate international trade complexities with ease. Our solutions optimize customs declarations, ensure compliance, and accelerate the movement of goods across borders.',
    'home.capabilities.autonomousData.title': 'Autonomous Data Flow & Process Automation',
    'home.capabilities.autonomousData.description': 'Leverage AI and ML to automate end-to-end data flows and procedure handling for customs and transit, minimizing manual intervention and maximizing efficiency.',
    'home.companyInfo.title': 'About ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies specializes in high-end software solutions for international trade, focusing on customs compliance, cross-border goods movement, and autonomous process automation through Blockchain, AI, ML, and BI.',
    'home.cta.title': 'Transform Your Trade Operations with ATEZ',
    'home.cta.description': 'Partner with us to implement cutting-edge solutions for autonomous customs declarations, compliance, and efficient cross-border logistics.',
    'home.cta.button': 'Discuss Your Needs',
    'about.title': 'About ATEZ Software Technologies',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To empower businesses engaged in international trade by providing sophisticated software solutions that automate customs processes, ensure compliance, and streamline the cross-border movement of goods, all driven by next-generation technologies.',
    'about.story.title': 'Our Story',
    'about.story.content': 'ATEZ Software Technologies was founded to address the growing complexities of global trade. We deliver innovative platforms that make cross-border logistics, customs compliance, and transit declarations more efficient and autonomous. By harnessing Blockchain, AI, ML, and Business Intelligence, we help businesses reduce operational friction and unlock new potentials in international commerce.',
    'contact.title': 'Get In Touch',
    'contact.description': 'Discuss how our specialized solutions for customs, logistics, and autonomous trade can benefit your business. We\'d love to hear from you!',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'john.doe@example.com',
    'contact.form.message.label': 'Your Inquiry',
    'contact.form.message.placeholder': 'Describe your challenges or project ideas...',
    'contact.form.submitButton': 'Send Inquiry',
    'contact.info.title': 'Our Contact Information',
    'contact.info.address': '123 Innovation Dr, Tech City, World 54321',
    'contact.info.phone': '+1 (555) 987-6543',
    'contact.info.email': 'solutions@atezsoftware.com',
    'products.title': 'Our Products',
    'products.description': 'Discover our suite of advanced software solutions designed to streamline international trade and customs operations. All our products are accessible through our central platform.',
    'products.mainPlatformIntro': 'Our comprehensive suite of products is available through our central platform:',
    'products.visitPlatformButton': 'Visit SingleWindow.io',
    'products.exploreButton': 'Explore',
    'products.category.customsCompliance': 'Customs Compliance',
    'products.category.aiSolutions': 'AI Solutions for Customs',
    'products.category.declarationFiling': 'Declaration Filing',
    'products.category.other': 'Other Solutions',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': 'Advanced tariff classification and management for streamlined customs processes.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Optimize logistics and customs documentation for efficient international trade.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'AI-powered risk assessment and compliance verification for customs operations.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Gain deep insights into customs data for enhanced compliance and decision-making.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Automated management of transit procedures for smoother cross-border movements.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Intelligent assistance for accurate and efficient customs declaration preparation.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Automated commodity code conversion and validation for international trade.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Comprehensive solution for efficient and compliant customs declaration filing.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Centralized data exchange platform connecting trade partners and customs authorities.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Track and manage sustainability metrics and carbon footprint in logistics.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Platform for trade development, market analysis, and accessing new opportunities.',
    'news.title': 'News & Insights',
    'news.description': 'Stay updated with the latest news, industry insights, and technology updates from ATEZ Software.',
    'news.readMore': 'Read More',
    'news.category.industryUpdates': 'Industry Updates',
    'news.category.technology': 'Technology',
    'news.category.companyNews': 'Company News',
    'news.post1.title': 'Navigating the Future of Customs with AI',
    'news.post1.excerpt': 'Discover how Artificial Intelligence is reshaping customs compliance and simplifying international trade for businesses worldwide.',
    'news.post2.title': 'ATEZ Software Launches New Blockchain Initiative for Supply Chains',
    'news.post2.excerpt': 'We are excited to announce our latest project utilizing blockchain technology to enhance transparency and security in global supply chains.',
    'news.post3.title': 'The Impact of Autonomous Data Handling on Cross-Border Logistics',
    'news.post3.excerpt': 'An in-depth look at how autonomous systems are streamlining data flow and revolutionizing procedure handling in the logistics sector.',
    'settings.title': 'Settings',
    'settings.description': 'Customize your application experience.',
    'settings.appearance.title': 'Appearance',
    'settings.appearance.description': 'Adjust the look and feel of the application.',
    'settings.appearance.theme.label': 'Theme',
    'settings.appearance.theme.light': 'Light',
    'settings.appearance.theme.dark': 'Dark',
    'settings.appearance.theme.system': 'System',
    'settings.appearance.fontSize.label': 'Font Size',
    'settings.appearance.fontSize.sm': 'Small',
    'settings.appearance.fontSize.md': 'Medium',
    'settings.appearance.fontSize.lg': 'Large',
    'settings.language.title': 'Language',
    'settings.language.description': 'Choose your preferred language for the application.',
    'settings.language.select.label': 'Select Language',
  },
  de: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.news': 'Aktuelles',
    'nav.settings': 'Einstellungen',
    'home.welcomeTitle': 'ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Revolutionierung des grenzüberschreitenden Handels mit intelligenten Lösungen für Zollkonformität, Warenverkehr und autonome Datenverarbeitung, unterstützt durch Blockchain, KI, ML und BI.',
    'home.featuresTitle': 'Kernkompetenzen',
    'home.capabilities.crossBorder.title': 'Optimierte Grenzüberschreitende Logistik & Zoll',
    'home.capabilities.crossBorder.description': 'Meistern Sie die Komplexität des internationalen Handels mühelos. Unsere Lösungen optimieren Zollanmeldungen, gewährleisten Konformität und beschleunigen den Warenverkehr über Grenzen hinweg.',
    'home.capabilities.autonomousData.title': 'Autonomer Datenfluss & Prozessautomatisierung',
    'home.capabilities.autonomousData.description': 'Nutzen Sie KI und ML, um End-to-End-Datenflüsse und die Abwicklung von Zoll- und Transitverfahren zu automatisieren, manuelle Eingriffe zu minimieren und die Effizienz zu maximieren.',
    'home.companyInfo.title': 'Über ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies ist spezialisiert auf High-End-Softwarelösungen für den internationalen Handel, mit Fokus auf Zollkonformität, grenzüberschreitenden Warenverkehr und autonome Prozessautomatisierung durch Blockchain, KI, ML und BI.',
    'home.cta.title': 'Transformieren Sie Ihre Handelsoperationen mit ATEZ',
    'home.cta.description': 'Arbeiten Sie mit uns zusammen, um innovative Lösungen für autonome Zollanmeldungen, Compliance und effiziente grenzüberschreitende Logistik zu implementieren.',
    'home.cta.button': 'Besprechen Sie Ihre Bedürfnisse',
    'about.title': 'Über ATEZ Software Technologies',
    'about.mission.title': 'Unsere Mission',
    'about.mission.content': 'Unternehmen im internationalen Handel durch hochentwickelte Softwarelösungen zu stärken, die Zollprozesse automatisieren, Konformität sicherstellen und den grenzüberschreitenden Warenverkehr optimieren – alles angetrieben durch Technologien der nächsten Generation.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.content': 'ATEZ Software Technologies wurde gegründet, um den wachsenden Komplexitäten des globalen Handels zu begegnen. Wir liefern innovative Plattformen, die grenzüberschreitende Logistik, Zollkonformität und Transitanmeldungen effizienter und autonomer gestalten. Durch den Einsatz von Blockchain, KI, ML und Business Intelligence helfen wir Unternehmen, operative Reibungsverluste zu reduzieren und neue Potenziale im internationalen Handel zu erschließen.',
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Besprechen Sie, wie unsere spezialisierten Lösungen für Zoll, Logistik und autonomen Handel Ihrem Unternehmen zugutekommen können. Wir freuen uns, von Ihnen zu hören!',
    'contact.form.name.label': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Max Mustermann',
    'contact.form.email.label': 'E-Mail-Adresse',
    'contact.form.email.placeholder': 'max.mustermann@example.com',
    'contact.form.message.label': 'Ihre Anfrage',
    'contact.form.message.placeholder': 'Beschreiben Sie Ihre Herausforderungen oder Projektideen...',
    'contact.form.submitButton': 'Anfrage senden',
    'contact.info.title': 'Unsere Kontaktinformationen',
    'contact.info.address': 'Innovationsstraße 123, Tech City, Welt 54321',
    'contact.info.phone': '+49 (123) 987-6543',
    'contact.info.email': 'solutions@atezsoftware.com',
    'products.title': 'Unsere Produkte',
    'products.description': 'Entdecken Sie unsere Suite fortschrittlicher Softwarelösungen zur Optimierung internationaler Handels- und Zollabläufe. Alle unsere Produkte sind über unsere zentrale Plattform zugänglich.',
    'products.mainPlatformIntro': 'Unsere umfassende Produktpalette ist über unsere zentrale Plattform verfügbar:',
    'products.visitPlatformButton': 'SingleWindow.io besuchen',
    'products.exploreButton': 'Entdecken',
    'products.category.customsCompliance': 'Zollkonformität',
    'products.category.aiSolutions': 'KI-Lösungen für den Zoll',
    'products.category.declarationFiling': 'Zollanmeldung',
    'products.category.other': 'Weitere Lösungen',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': 'Erweiterte Tarifklassifizierung und -verwaltung für optimierte Zollprozesse.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Optimierte Logistik- und Zolldokumentation für effizienten internationalen Handel.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'KI-gestützte Risikobewertung und Compliance-Überprüfung für Zolloperationen.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Tiefe Einblicke in Zolldaten für verbesserte Compliance und Entscheidungsfindung.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Automatisierte Verwaltung von Transitverfahren für reibungslosere grenzüberschreitende Bewegungen.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Intelligente Unterstützung für die genaue und effiziente Erstellung von Zollanmeldungen.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Automatisierte Konvertierung und Validierung von Warencodes für den internationalen Handel.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Umfassende Lösung für die effiziente und konforme Einreichung von Zollanmeldungen.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Zentralisierte Datenaustauschplattform, die Handelspartner und Zollbehörden verbindet.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Verfolgung und Verwaltung von Nachhaltigkeitskennzahlen und CO2-Fußabdruck in der Logistik.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Plattform für Handelsentwicklung, Marktanalyse und Erschließung neuer Möglichkeiten.',
    'news.title': 'Aktuelles & Einblicke',
    'news.description': 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Brancheneinblicken und Technologie-Updates von ATEZ Software.',
    'news.readMore': 'Weiterlesen',
    'news.category.industryUpdates': 'Branchen-Updates',
    'news.category.technology': 'Technologie',
    'news.category.companyNews': 'Unternehmensnachrichten',
    'news.post1.title': 'Die Zukunft des Zolls mit KI gestalten',
    'news.post1.excerpt': 'Entdecken Sie, wie Künstliche Intelligenz die Zollkonformität neu gestaltet und den internationalen Handel für Unternehmen weltweit vereinfacht.',
    'news.post2.title': 'ATEZ Software startet neue Blockchain-Initiative für Lieferketten',
    'news.post2.excerpt': 'Wir freuen uns, unser neuestes Projekt bekannt zu geben, das Blockchain-Technologie zur Verbesserung der Transparenz und Sicherheit in globalen Lieferketten einsetzt.',
    'news.post3.title': 'Die Auswirkungen autonomer Datenverarbeitung auf die grenzüberschreitende Logistik',
    'news.post3.excerpt': 'Ein detaillierter Blick darauf, wie autonome Systeme den Datenfluss optimieren und die Verfahrensabwicklung im Logistiksektor revolutionieren.',
    'settings.title': 'Einstellungen',
    'settings.description': 'Passen Sie Ihre Anwendungserfahrung an.',
    'settings.appearance.title': 'Erscheinungsbild',
    'settings.appearance.description': 'Passen Sie das Aussehen und Verhalten der Anwendung an.',
    'settings.appearance.theme.label': 'Thema',
    'settings.appearance.theme.light': 'Hell',
    'settings.appearance.theme.dark': 'Dunkel',
    'settings.appearance.theme.system': 'System',
    'settings.appearance.fontSize.label': 'Schriftgröße',
    'settings.appearance.fontSize.sm': 'Klein',
    'settings.appearance.fontSize.md': 'Mittel',
    'settings.appearance.fontSize.lg': 'Groß',
    'settings.language.title': 'Sprache',
    'settings.language.description': 'Wählen Sie Ihre bevorzugte Sprache für die Anwendung.',
    'settings.language.select.label': 'Sprache auswählen',
  },
  tr: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.news': 'Haberler',
    'nav.settings': 'Ayarlar',
    'home.welcomeTitle': 'ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası ile desteklenen gümrük uyumluluğu, mal hareketi ve otonom veri işleme için akıllı çözümlerle sınır ötesi ticareti devrimleştiriyoruz.',
    'home.featuresTitle': 'Temel Yetenekler',
    'home.capabilities.crossBorder.title': 'Optimize Edilmiş Sınır Ötesi Lojistik ve Gümrük',
    'home.capabilities.crossBorder.description': 'Uluslararası ticaretin karmaşıklıklarını kolaylıkla yönetin. Çözümlerimiz gümrük beyannamelerini optimize eder, uyumluluğu sağlar ve malların sınırlar arasında hareketini hızlandırır.',
    'home.capabilities.autonomousData.title': 'Otonom Veri Akışı ve Süreç Otomasyonu',
    'home.capabilities.autonomousData.description': 'Gümrük ve transit için uçtan uca veri akışlarını ve prosedür yönetimini otomatikleştirmek, manuel müdahaleyi en aza indirmek ve verimliliği en üst düzeye çıkarmak için Yapay Zeka ve Makine Öğreniminden yararlanın.',
    'home.companyInfo.title': 'ATEZ Software Technologies Hakkında',
    'home.companyInfo.description': 'ATEZ Software Technologies, Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası aracılığıyla gümrük uyumluluğu, sınır ötesi mal hareketi ve otonom süreç otomasyonuna odaklanarak uluslararası ticaret için üst düzey yazılım çözümlerinde uzmanlaşmıştır.',
    'home.cta.title': 'ATEZ ile Ticaret Operasyonlarınızı Dönüştürün',
    'home.cta.description': 'Otonom gümrük beyannameleri, uyumluluk ve verimli sınır ötesi lojistik için en son çözümleri uygulamak üzere bizimle ortak olun.',
    'home.cta.button': 'İhtiyaçlarınızı Görüşelim',
    'about.title': 'ATEZ Software Technologies Hakkında',
    'about.mission.title': 'Misyonumuz',
    'about.mission.content': 'Gümrük süreçlerini otomatikleştiren, uyumluluğu sağlayan ve malların sınır ötesi hareketini kolaylaştıran, tamamı yeni nesil teknolojilerle desteklenen gelişmiş yazılım çözümleri sunarak uluslararası ticarette faaliyet gösteren işletmeleri güçlendirmek.',
    'about.story.title': 'Hikayemiz',
    'about.story.content': 'ATEZ Software Technologies, küresel ticaretin artan karmaşıklıklarına çözüm bulmak amacıyla kurulmuştur. Sınır ötesi lojistiği, gümrük uyumluluğunu ve transit beyannamelerini daha verimli ve otonom hale getiren yenilikçi platformlar sunuyoruz. Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekasını kullanarak, işletmelerin operasyonel engelleri azaltmasına ve uluslararası ticarette yeni potansiyellerin kilidini açmasına yardımcı oluyoruz.',
    'contact.title': 'İletişime Geçin',
    'contact.description': 'Gümrük, lojistik ve otonom ticaret için özel çözümlerimizin işletmenize nasıl fayda sağlayabileceğini görüşün. Sizden haber almak isteriz!',
    'contact.form.name.label': 'Tam Adınız',
    'contact.form.name.placeholder': 'Ahmet Yılmaz',
    'contact.form.email.label': 'E-posta Adresi',
    'contact.form.email.placeholder': 'ahmet.yilmaz@example.com',
    'contact.form.message.label': 'Talebiniz',
    'contact.form.message.placeholder': 'Zorluklarınızı veya proje fikirlerinizi açıklayın...',
    'contact.form.submitButton': 'Talep Gönder',
    'contact.info.title': 'İletişim Bilgilerimiz',
    'contact.info.address': 'İnovasyon Cd. No:123, Teknoloji Şehri, Dünya 54321',
    'contact.info.phone': '+90 (555) 987-6543',
    'contact.info.email': 'solutions@atezsoftware.com',
    'products.title': 'Ürünlerimiz',
    'products.description': 'Uluslararası ticaret ve gümrük operasyonlarını kolaylaştırmak için tasarlanmış gelişmiş yazılım çözümlerimizi keşfedin. Tüm ürünlerimize merkezi platformumuz üzerinden erişilebilir.',
    'products.mainPlatformIntro': 'Kapsamlı ürün yelpazemiz merkezi platformumuz aracılığıyla sunulmaktadır:',
    'products.visitPlatformButton': 'SingleWindow.io\'yu Ziyaret Et',
    'products.exploreButton': 'Keşfet',
    'products.category.customsCompliance': 'Gümrük Uyumluluğu',
    'products.category.aiSolutions': 'Gümrük için Yapay Zeka Çözümleri',
    'products.category.declarationFiling': 'Beyanname Dosyalama',
    'products.category.other': 'Diğer Çözümler',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': 'Optimize edilmiş gümrük süreçleri için gelişmiş tarife sınıflandırması ve yönetimi.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Verimli uluslararası ticaret için optimize edilmiş lojistik ve gümrük dokümantasyonu.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'Gümrük operasyonları için yapay zeka destekli risk değerlendirmesi ve uyumluluk doğrulaması.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Gelişmiş uyumluluk ve karar verme için gümrük verilerine derinlemesine bakış.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Daha sorunsuz sınır ötesi hareketler için otomatikleştirilmiş transit prosedürleri yönetimi.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Doğru ve verimli gümrük beyannamesi hazırlama için akıllı yardım.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Uluslararası ticaret için otomatik emtia kodu dönüştürme ve doğrulama.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Verimli ve uyumlu gümrük beyannamesi dosyalama için kapsamlı çözüm.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Ticaret ortaklarını ve gümrük yetkililerini birbirine bağlayan merkezi veri alışveriş platformu.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Lojistikte sürdürülebilirlik ölçümlerini ve karbon ayak izini takip edin ve yönetin.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Ticaret geliştirme, pazar analizi ve yeni fırsatlara erişim platformu.',
    'news.title': 'Haberler & Analizler',
    'news.description': 'ATEZ Software\'den en son haberler, sektör analizleri ve teknoloji güncellemeleri ile haberdar olun.',
    'news.readMore': 'Devamını Oku',
    'news.category.industryUpdates': 'Sektör Güncellemeleri',
    'news.category.technology': 'Teknoloji',
    'news.category.companyNews': 'Şirket Haberleri',
    'news.post1.title': 'Yapay Zeka ile Gümrüğün Geleceğine Yön Vermek',
    'news.post1.excerpt': 'Yapay Zekanın gümrük uyumunu nasıl yeniden şekillendirdiğini ve dünya genelindeki işletmeler için uluslararası ticareti nasıl basitleştirdiğini keşfedin.',
    'news.post2.title': 'ATEZ Software, Tedarik Zincirleri için Yeni Blockchain Girişimini Başlattı',
    'news.post2.excerpt': 'Küresel tedarik zincirlerinde şeffaflığı ve güvenliği artırmak için blockchain teknolojisini kullanan en son projemizi duyurmaktan heyecan duyuyoruz.',
    'news.post3.title': 'Otonom Veri İşlemenin Sınır Ötesi Lojistiğe Etkisi',
    'news.post3.excerpt': 'Otonom sistemlerin lojistik sektöründe veri akışını nasıl optimize ettiğine ve prosedür yönetimini nasıl devrimleştirdiğine derinlemesine bir bakış.',
    'settings.title': 'Ayarlar',
    'settings.description': 'Uygulama deneyiminizi özelleştirin.',
    'settings.appearance.title': 'Görünüm',
    'settings.appearance.description': 'Uygulamanın görünümünü ve hissini ayarlayın.',
    'settings.appearance.theme.label': 'Tema',
    'settings.appearance.theme.light': 'Açık',
    'settings.appearance.theme.dark': 'Koyu',
    'settings.appearance.theme.system': 'Sistem',
    'settings.appearance.fontSize.label': 'Yazı Tipi Boyutu',
    'settings.appearance.fontSize.sm': 'Küçük',
    'settings.appearance.fontSize.md': 'Orta',
    'settings.appearance.fontSize.lg': 'Büyük',
    'settings.language.title': 'Dil',
    'settings.language.description': 'Uygulama için tercih ettiğiniz dili seçin.',
    'settings.language.select.label': 'Dil Seçin',
  },
};
