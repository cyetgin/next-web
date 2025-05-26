
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
  | 'translate.title'
  | 'translate.description'
  | 'translate.form.textToTranslate.label'
  | 'translate.form.textToTranslate.placeholder'
  | 'translate.form.targetLanguage.label'
  | 'translate.form.customTerminology.label'
  | 'translate.form.customTerminology.placeholder'
  | 'translate.form.submitButton'
  | 'translate.result.title'
  | 'translate.result.noResult';

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
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
    'products.product.tariff.description': 'Advanced tariff classification and management.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Streamlined logistics and customs documentation.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'AI-powered risk assessment for customs.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Deep insight into customs data and compliance.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Automated transit procedure management.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Intelligent customs declaration assistance.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Automated commodity code conversion.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Efficient customs declaration filing.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Centralized data exchange for trade partners.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Sustainability and carbon footprint tracking for logistics.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Trade development and market access platform.',
    'translate.title': 'AI Content Translation',
    'translate.description': 'Use our AI-powered tool to translate your website content into multiple languages. Define custom terminology for precise translations.',
    'translate.form.textToTranslate.label': 'Text to Translate',
    'translate.form.textToTranslate.placeholder': 'Enter the content you want to translate...',
    'translate.form.targetLanguage.label': 'Target Language',
    'translate.form.customTerminology.label': 'Custom Terminology (Optional)',
    'translate.form.customTerminology.placeholder': 'e.g., product names, specific phrases',
    'translate.form.submitButton': 'Translate Content',
    'translate.result.title': 'Translated Content',
    'translate.result.noResult': 'The translated text will appear here once the translation is complete.',
  },
  de: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
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
    'products.product.tariff.description': 'Erweiterte Tarifklassifizierung und -verwaltung.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Optimierte Logistik- und Zolldokumentation.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'KI-gestützte Risikobewertung für den Zoll.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Tiefe Einblicke in Zolldaten und Compliance.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Automatisierte Verwaltung von Transitverfahren.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Intelligente Unterstützung bei Zollanmeldungen.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Automatisierte Konvertierung von Warencodes.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Effiziente Einreichung von Zollanmeldungen.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Zentralisierter Datenaustausch für Handelspartner.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Nachverfolgung von Nachhaltigkeit und CO2-Fußabdruck für die Logistik.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Plattform für Handelsentwicklung und Marktzugang.',
    'translate.title': 'KI-Inhaltsübersetzung',
    'translate.description': 'Nutzen Sie unser KI-gestütztes Tool, um Ihre Website-Inhalte in mehrere Sprachen zu übersetzen. Definieren Sie benutzerdefinierte Terminologie für präzise Übersetzungen.',
    'translate.form.textToTranslate.label': 'Zu übersetzender Text',
    'translate.form.textToTranslate.placeholder': 'Geben Sie den Inhalt ein, den Sie übersetzen möchten...',
    'translate.form.targetLanguage.label': 'Zielsprache',
    'translate.form.customTerminology.label': 'Benutzerdefinierte Terminologie (Optional)',
    'translate.form.customTerminology.placeholder': 'z.B. Produktnamen, spezifische Phrasen',
    'translate.form.submitButton': 'Inhalt übersetzen',
    'translate.result.title': 'Übersetzter Inhalt',
    'translate.result.noResult': 'Der übersetzte Text erscheint hier, sobald die Übersetzung abgeschlossen ist.',
  },
  tr: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
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
    'products.product.tariff.description': 'Gelişmiş tarife sınıflandırması ve yönetimi.',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Optimize edilmiş lojistik ve gümrük dokümantasyonu.',
    'products.product.customsShield': 'Customs Shield',
    'products.product.customsShield.description': 'Gümrük için yapay zeka destekli risk değerlendirmesi.',
    'products.product.customsXRay': 'Customs X-Ray',
    'products.product.customsXRay.description': 'Gümrük verileri ve uyumluluğuna derinlemesine bakış.',
    'products.product.transitAI': 'TransitAI',
    'products.product.transitAI.description': 'Otomatik transit prosedür yönetimi.',
    'products.product.declarantAI': 'Declarant AI',
    'products.product.declarantAI.description': 'Akıllı gümrük beyannamesi yardımı.',
    'products.product.transcode': 'Transcode',
    'products.product.transcode.description': 'Otomatik emtia kodu dönüştürme.',
    'products.product.declarant': 'Declarant',
    'products.product.declarant.description': 'Verimli gümrük beyannamesi dosyalama.',
    'products.product.relayhub': 'Relayhub',
    'products.product.relayhub.description': 'Ticaret ortakları için merkezi veri alışverişi.',
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Lojistik için sürdürülebilirlik ve karbon ayak izi takibi.',
    'products.product.tradeloupe': 'Tradeloupe',
    'products.product.tradeloupe.description': 'Ticaret geliştirme ve pazar erişim platformu.',
    'translate.title': 'Yapay Zeka İçerik Çevirisi',
    'translate.description': 'Web sitesi içeriğinizi birden çok dile çevirmek için yapay zeka destekli aracımızı kullanın. Kesin çeviriler için özel terminoloji tanımlayın.',
    'translate.form.textToTranslate.label': 'Çevrilecek Metin',
    'translate.form.textToTranslate.placeholder': 'Çevirmek istediğiniz içeriği girin...',
    'translate.form.targetLanguage.label': 'Hedef Dil',
    'translate.form.customTerminology.label': 'Özel Terminoloji (İsteğe Bağlı)',
    'translate.form.customTerminology.placeholder': 'örn. ürün adları, özel ifadeler',
    'translate.form.submitButton': 'İçeriği Çevir',
    'translate.result.title': 'Çevrilmiş İçerik',
    'translate.result.noResult': 'Çevrilen metin, çeviri tamamlandığında burada görünecektir.',
  },
};

    