
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
  | 'nav.about'
  | 'nav.contact'
  | 'home.welcomeTitle'
  | 'home.welcomeSubtitle'
  | 'home.featuresTitle' // Kept for consistency, will be "Core Capabilities"
  | 'home.capabilities.crossBorder.title'
  | 'home.capabilities.crossBorder.description'
  | 'home.capabilities.autonomousData.title'
  | 'home.capabilities.autonomousData.description'
  | 'home.companyInfo.title'
  | 'home.companyInfo.description'
  | 'home.contactForm.title' // This key might be unused on homepage now, but good to keep for other potential uses
  | 'home.contactForm.description' // Same as above
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
  | 'contact.info.email';

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'home.welcomeTitle': 'ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Revolutionizing cross-border trade with intelligent solutions for customs compliance, goods movement, and autonomous data handling, powered by Blockchain, AI, ML, and BI.',
    'home.featuresTitle': 'Core Capabilities',
    'home.capabilities.crossBorder.title': 'Streamlined Cross-Border Logistics & Customs',
    'home.capabilities.crossBorder.description': 'Navigate international trade complexities with ease. Our solutions optimize customs declarations, ensure compliance, and accelerate the movement of goods across borders.',
    'home.capabilities.autonomousData.title': 'Autonomous Data Flow & Process Automation',
    'home.capabilities.autonomousData.description': 'Leverage AI and ML to automate end-to-end data flows and procedure handling for customs and transit, minimizing manual intervention and maximizing efficiency.',
    'home.companyInfo.title': 'About ATEZ Software Technologies', // Used on About page primarily
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
    'contact.info.email': 'solutions@atezsoftware.com', // Updated email
  },
  de: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
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
  },
  tr: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
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
  },
};

