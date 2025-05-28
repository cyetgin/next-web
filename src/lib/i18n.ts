
export type Locale = 'en' | 'de' | 'tr'; // English, German, Turkish

export const DEFAULT_LOCALE: Locale = 'en';
export const AVAILABLE_LOCALES: {value: Locale, label: string}[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' }, // German
  { value: 'tr', label: 'Türkçe' },   // Turkish
];

export type TranslationKey =
  | 'app.name'
  | 'logo.text'
  | 'nav.home'
  | 'nav.products'
  | 'nav.solutions'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.news'
  // | 'nav.settings' // Intentionally keeping this commented as per previous request
  | 'home.welcomeTitle'
  | 'home.blockchainReadySlogan'
  | 'home.welcomeSubtitle'
  | 'home.featuresTitle'
  | 'home.capabilities.crossBorder.title'
  | 'home.capabilities.crossBorder.description'
  | 'home.capabilities.autonomousData.title'
  | 'home.capabilities.autonomousData.description'
  | 'home.capabilities.streamlinedCustomsTransit.title'
  | 'home.capabilities.streamlinedCustomsTransit.description'
  | 'home.capabilities.autonomousDataFlowAutomation.title'
  | 'home.capabilities.autonomousDataFlowAutomation.description'
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
  | 'contact.form.title'
  | 'contact.form.description'
  | 'contact.form.name.label'
  | 'contact.form.name.placeholder'
  | 'contact.form.email.label'
  | 'contact.form.email.placeholder'
  | 'contact.form.message.label'
  | 'contact.form.message.placeholder'
  | 'contact.form.submitButton'
  | 'contact.info.title'
  | 'contact.info.address.hq.title'
  | 'contact.info.address.hq.address'
  | 'contact.info.address.uk.title'
  | 'contact.info.address.uk.address'
  | 'contact.info.address.de.title'
  | 'contact.info.address.de.address'
  | 'contact.info.address.us.title'
  | 'contact.info.address.us.address'
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
  | 'products.product.logicust.tooltip.productTrigger'
  | 'products.product.logicust.tooltip.productContent'
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
  | 'products.product.greenpulse'
  | 'products.product.greenpulse.description'
  | 'products.product.customsLoupe'
  | 'products.product.customsLoupe.description'
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
  | 'settings.language.select.label'
  | 'settings.density.title'
  | 'settings.density.description'
  | 'settings.density.label'
  | 'settings.density.compact'
  | 'settings.density.default'
  | 'settings.density.spacious'
  // Solutions Page Keys
  | 'solutions.title'
  | 'solutions.description'
  | 'solutions.solution.htsClassification'
  | 'solutions.solution.landedCost'
  | 'solutions.solution.customsCompliance'
  | 'solutions.solution.exportControls'
  | 'solutions.solution.findHtsCode'
  | 'solutions.solution.taxCalculation'
  | 'solutions.solution.sapIntegration'
  | 'solutions.solution.transitDeclarationFiling'
  | 'solutions.solution.guaranteeManagement'
  | 'solutions.solution.preClearanceControl'
  | 'solutions.solution.postDeclarationControl'
  | 'solutions.solution.cbamReporting'
  | 'solutions.solution.dataVisualization'
  | 'solutions.solution.declarantAI'
  | 'solutions.solution.transitAI'
  | 'solutions.solution.relayhub'
  | 'solutions.solution.smartSuggestions'
  | 'solutions.solution.historicalDataTariff'
  | 'solutions.viewProductDetails'
  // Tariff Detail Page
  | 'products.tariff.pageTitle'
  | 'products.tariff.generalDescription'
  | 'products.tariff.modules.title'
  | 'products.tariff.module.basicQuery.title'
  | 'products.tariff.module.basicQuery.description'
  | 'products.tariff.module.detailedQuery.title'
  | 'products.tariff.module.detailedQuery.description'
  | 'products.tariff.module.taxCalculation.title'
  | 'products.tariff.module.taxCalculation.description'
  | 'products.tariff.module.findMyCommodityCode.title'
  | 'products.tariff.module.findMyCommodityCode.description'
  | 'products.tariff.keyBenefits.title'
  | 'products.tariff.keyBenefit.realTimeUpdates.title'
  | 'products.tariff.keyBenefit.realTimeUpdates.description'
  | 'products.tariff.keyBenefit.multiCountrySupport.title'
  | 'products.tariff.keyBenefit.multiCountrySupport.description'
  | 'products.tariff.keyBenefit.eliminateLanguageBarriers.title'
  | 'products.tariff.keyBenefit.eliminateLanguageBarriers.description'
  | 'products.tariff.keyBenefit.upToDateNomenclatures.title'
  | 'products.tariff.keyBenefit.upToDateNomenclatures.description'
  | 'products.tariff.cta.title'
  | 'products.tariff.cta.button'
  // Common
  | 'common.backToProducts'
  | 'nav.settings' // Re-added for Settings page title and link
  // GDPR & Legal
  | 'legal.cookieConsent.text'
  | 'legal.cookieConsent.acceptButton'
  | 'legal.privacyPolicy.link'
  | 'legal.privacyPolicy.title'
  | 'legal.privacyPolicy.placeholder'
  | 'legal.termsOfService.link'
  | 'legal.termsOfService.title'
  | 'legal.termsOfService.placeholder'
  | 'footer.copyright';


export const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.name': 'ATEZ Software Technologies',
    'logo.text': 'ATEZ Software Technologies',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.news': 'News',
    'nav.settings': 'Settings',
    'home.welcomeTitle': 'Automating Global Trade, Intelligently.',
    'home.blockchainReadySlogan': 'Blockchain ready',
    'home.welcomeSubtitle': 'Revolutionizing cross-border trade with intelligent solutions for customs compliance, cross-border movement of goods, and autonomous data handling, powered by Artificial Intelligence, Machine Learning, and Business Intelligence.',
    'home.featuresTitle': 'Core Capabilities',
    'home.capabilities.crossBorder.title': 'Comprehensive Customs Compliance Solutions',
    'home.capabilities.crossBorder.description': 'Ensure adherence to global trade regulations with our advanced tools. Leverage Tariff for up-to-date regulations, Logicust for operational efficiency, and AI-powered solutions for risk management and accuracy.',
    'home.capabilities.autonomousData.title': 'Automated End-to-End Customs Procedures',
    'home.capabilities.autonomousData.description': 'Streamline your customs processes from start to finish. Our systems enable seamless data flow, including automated conversion of export declaration data into import declaration data, minimizing errors and saving time.',
    'home.capabilities.streamlinedCustomsTransit.title': 'Streamlined Cross-Border Customs & Transit Procedures',
    'home.capabilities.streamlinedCustomsTransit.description': 'Facilitate smoother movement of goods across borders with optimized customs and transit procedures, reducing delays and enhancing supply chain velocity.',
    'home.capabilities.autonomousDataFlowAutomation.title': 'Autonomous Data Flow & Process Automation',
    'home.capabilities.autonomousDataFlowAutomation.description': 'Implement intelligent automation for data exchange and process handling, minimizing manual intervention and improving operational efficiency throughout your trade lifecycle.',
    'home.companyInfo.title': 'About ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies specializes in high-end software solutions for international trade, focusing on customs compliance, cross-border goods movement, and autonomous process automation through Blockchain, Artificial Intelligence, Machine Learning, and Business Intelligence.',
    'home.cta.title': 'Transform Your Trade Operations with ATEZ',
    'home.cta.description': 'Partner with us to implement cutting-edge solutions for autonomous customs declarations, compliance, and efficient cross-border logistics.',
    'home.cta.button': 'Discuss Your Needs',
    'about.title': 'About ATEZ Software Technologies',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'Our mission is to create an autonomous, digital, secure and integrated ecosystem for all stakeholders of cross-border trade. We aim to contribute to environment and sustainability by digitizing processes, related to cross-border movement of goods, while increasing efficiency and transparency with our solutions.',
    'about.story.title': 'Our Story',
    'about.story.content': 'Atez Software Technologies, established in 2017, embodies a rich convergence of field and academic proficiency, with a legacy exceeding 30 years in cross-border trade procedures, logistics, customs brokerage, and IT solutions for customs brokerage as well as finance and reporting. This enterprise flourishes under the guidance of seasoned managers and is bolstered by a dynamic fusion of consultants and innovative minds, ensuring a deep reservoir of industry-specific knowledge. Central to Atez’s ethos is the symbiotic relationship between domain experts and software developers, a collaboration that is pivotal in harnessing new technologies, particularly Blockchain, to devise solutions that are both revolutionary and aligned with customer demands. Our foundational principles are: a robust commitment to teamwork, innovation, and the strategic integration of domain expertise with cutting-edge technology to address the multifaceted challenges of international trade and logistics.',
    'contact.title': 'Get In Touch',
    'contact.description': 'Discuss how our specialized solutions for customs, logistics, and autonomous trade can benefit your business. We\'d love to hear from you!',
    'contact.form.title': 'Contact Form',
    'contact.form.description': 'Send us your inquiries or questions.',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'john.doe@example.com',
    'contact.form.message.label': 'Your Inquiry',
    'contact.form.message.placeholder': 'Describe your challenges or project ideas...',
    'contact.form.submitButton': 'Send Inquiry',
    'contact.info.title': 'Our Offices',
    'contact.info.address.hq.title': 'HQ',
    'contact.info.address.hq.address': 'Huzur Mh, Azerbaycan Cd. Skyland B Blok 4b/29, 34485 Sarıyer/İstanbul, Türkiye',
    'contact.info.address.uk.title': 'UK Branch',
    'contact.info.address.uk.address': 'China Works, 100 Black Prince Road SE1 7SJ London',
    'contact.info.address.de.title': 'Germany Branch',
    'contact.info.address.de.address': 'Friedrich-Ebert-Anlage 49 Nr: 2227 60308 Frankfurt am Main',
    'contact.info.address.us.title': 'US Branch',
    'contact.info.address.us.address': '1775 Tysons Blvd., Suite 4161 McLean, VA 22102 Virginia',
    'contact.info.email': 'solutions@atez.com',
    'products.title': 'Our Products',
    'products.description': 'Discover our suite of advanced software solutions designed to streamline international trade and customs operations. All our products are accessible through our central platform.',
    'products.mainPlatformIntro': 'Our comprehensive suite of products is available through our central platform:',
    'products.visitPlatformButton': 'Visit singlewindow.io',
    'products.exploreButton': 'Explore Product',
    'products.category.customsCompliance': 'Customs Compliance',
    'products.category.aiSolutions': 'AI Solutions for Customs',
    'products.category.declarationFiling': 'Declaration Filing',
    'products.category.other': 'Other Solutions',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': '24/7 updated official (historically indexed) customs regulations database',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Product based, dynamically updated, customs and regulatory compliance data manager',
    'products.product.logicust.tooltip.productTrigger': 'Product',
    'products.product.logicust.tooltip.productContent': '(Article, raw material, semi or finished product, that is internationally traded by an economic operator)',
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
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Track and manage sustainability metrics and carbon footprint in logistics.',
    'products.product.customsLoupe': 'Customs Loupe',
    'products.product.customsLoupe.description': 'A tool that provides data visualization for customs transactions.',
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
    'settings.density.title': 'Content Density',
    'settings.density.description': 'Adjust the spacing and density of content.',
    'settings.density.label': 'Density Level',
    'settings.density.compact': 'Compact',
    'settings.density.default': 'Default',
    'settings.density.spacious': 'Spacious',
    'solutions.title': 'Our Solutions',
    'solutions.description': 'Explore how ATEZ Software Technologies leverages its products to deliver targeted solutions for your international trade and customs challenges.',
    'solutions.solution.htsClassification': 'HTS Code Classification',
    'solutions.solution.landedCost': 'Landed Cost Simulation',
    'solutions.solution.customsCompliance': 'Customs Compliance Management',
    'solutions.solution.exportControls': 'Export Controls & Sanction Screening',
    'solutions.solution.findHtsCode': 'Find Your HTS Code',
    'solutions.solution.taxCalculation': 'Duty & Tax Calculation',
    'solutions.solution.sapIntegration': 'SAP Plugins for Data Sync',
    'solutions.solution.transitDeclarationFiling': 'Transit Declaration Filing',
    'solutions.solution.guaranteeManagement': 'Guarantee Management',
    'solutions.solution.preClearanceControl': 'Pre-Clearance Control & Risk Assessment',
    'solutions.solution.postDeclarationControl': 'Post-Declaration Control & Audit Support',
    'solutions.solution.cbamReporting': 'CBAM Reporting & Carbon Accounting',
    'solutions.solution.dataVisualization': 'Trade Data Visualization & Analytics',
    'solutions.solution.declarantAI': 'AI-Assisted Customs Declaration Preparation',
    'solutions.solution.transitAI': 'AI-Assisted Transit Declaration Preparation',
    'solutions.solution.relayhub': 'Relayhub Data Exchange Integration',
    'solutions.solution.smartSuggestions': 'Smart Suggestions',
    'solutions.solution.historicalDataTariff': 'Historically Indexed Regulative Data',
    'solutions.viewProductDetails': 'View Product Details',
    'products.tariff.pageTitle': 'Tariff',
    'products.tariff.generalDescription': 'Tariff is the digital customs regulations databank solution for users and systems to reach historically indexed customs duties, taxes and measures, applied in accordance with Tariff Schedules used across customs territories. Tariff currently covers the European Union, United Kingdom, Switzerland, and Türkiye regulations and provides customs regulations, duties, and control measures with just a few clicks, Tariff enables users to access critical information, tailored to their trade routes, ensuring a smoother, more efficient, and compliant import or export readiness.',
    'products.tariff.modules.title': 'Product Modules',
    'products.tariff.module.basicQuery.title': 'Basic Query',
    'products.tariff.module.basicQuery.description': 'Quickly identify the essential duty rates and regulatory measures for your selected export or import trade route by simply inputting the commodity code. The Basic Query provides a straightforward list of applicable tariffs.',
    'products.tariff.module.detailedQuery.title': 'Detailed Query',
    'products.tariff.module.detailedQuery.description': 'Detailed Query, offers a comprehensive insights including footnotes, conditions, legal bases, and the start and end dates of measures. Ideal for users requiring in-depth information on specific tariffs and regulations for informed decision-making.',
    'products.tariff.module.taxCalculation.title': 'Duty & Tax Calculation',
    'products.tariff.module.taxCalculation.description': 'Tariff offers a tax calculation module for your import inquiries, letting you estimate customs duties and other import taxes with a few clicks.',
    'products.tariff.module.findMyCommodityCode.title': 'Find Your HTS Code',
    'products.tariff.module.findMyCommodityCode.description': 'Simply define your good with keywords and search it. Tariff helps you identify the appropriate commodity codes for your goods based on keywords you enter. Benefit from always up-to-date nomenclature for European Union, United Kingdom, Switzerland, and Türkiye.',
    'products.tariff.keyBenefits.title': 'Key Benefits',
    'products.tariff.keyBenefit.realTimeUpdates.title': 'Real-Time Updates',
    'products.tariff.keyBenefit.realTimeUpdates.description': 'Benefit from real-time updates for your articles, guaranteeing constant alignment with the latest legislations.',
    'products.tariff.keyBenefit.multiCountrySupport.title': 'Multi-Country Support',
    'products.tariff.keyBenefit.multiCountrySupport.description': 'Access customs regulation data for European Union, United Kingdom, Switzerland, and Türkiye, with ongoing expansion efforts to include more countries. Establishing Tariff as a truly international resource for trade facilitation.',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.title': 'Eliminate Language Barriers',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.description': 'Tariff provides comprehensive customs regulations for European Union, United Kingdom, Switzerland, and Türkiye in English, German and Turkish.',
    'products.tariff.keyBenefit.upToDateNomenclatures.title': 'Up-to-Date Tariff Nomenclatures',
    'products.tariff.keyBenefit.upToDateNomenclatures.description': 'Stay ahead with always up-to-date tariff nomenclatures. Every change tracked by Tariff to serve its users.',
    'products.tariff.cta.title': 'Ready to Explore Tariff?',
    'products.tariff.cta.button': 'Use Tariff for FREE',
    'common.backToProducts': 'Back to Products',
    'legal.cookieConsent.text': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    'legal.cookieConsent.acceptButton': 'Accept',
    'legal.privacyPolicy.link': 'Privacy Policy',
    'legal.privacyPolicy.title': 'Privacy Policy',
    'legal.privacyPolicy.placeholder': 'Your detailed Privacy Policy content goes here. Explain how you collect, use, and protect user data in compliance with GDPR and other relevant regulations.',
    'legal.termsOfService.link': 'Terms of Service',
    'legal.termsOfService.title': 'Terms of Service',
    'legal.termsOfService.placeholder': 'Your comprehensive Terms of Service content goes here. Outline the rules and guidelines for using your application.',
    'footer.copyright': `© ${new Date().getFullYear()} ATEZ Software Technologies. All rights reserved.`,
  },
  de: {
    'app.name': 'ATEZ Software Technologies',
    'logo.text': 'ATEZ Softwaretechnologien',
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.solutions': 'Lösungen',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.news': 'Aktuelles',
    'nav.settings': 'Einstellungen',
    'home.welcomeTitle': 'Globalen Handel intelligent automatisieren.',
    'home.blockchainReadySlogan': 'Blockchain-fähig',
    'home.welcomeSubtitle': 'Revolutionierung des grenzüberschreitenden Handels mit intelligenten Lösungen für Zollkonformität, Warenverkehr und autonome Datenverarbeitung, unterstützt durch Künstliche Intelligenz, Maschinelles Lernen und Business Intelligence.',
    'home.featuresTitle': 'Kernkompetenzen',
    'home.capabilities.crossBorder.title': 'Umfassende Lösungen für Zollkonformität',
    'home.capabilities.crossBorder.description': 'Stellen Sie die Einhaltung globaler Handelsvorschriften mit unseren fortschrittlichen Werkzeugen sicher. Nutzen Sie Tariff für aktuelle Vorschriften, Logicust für betriebliche Effizienz und KI-gestützte Lösungen für Risikomanagement und Genauigkeit.',
    'home.capabilities.autonomousData.title': 'Automatisierte End-to-End-Zollverfahren',
    'home.capabilities.autonomousData.description': 'Optimieren Sie Ihre Zollprozesse von Anfang bis Ende. Unsere Systeme ermöglichen einen nahtlosen Datenfluss, einschließlich der automatisierten Umwandlung von Ausfuhrdeklarationsdaten in Einfuhrdeklarationsdaten, wodurch Fehler minimiert und Zeit gespart wird.',
    'home.capabilities.streamlinedCustomsTransit.title': 'Optimierte grenzüberschreitende Zoll- und Transitverfahren',
    'home.capabilities.streamlinedCustomsTransit.description': 'Erleichtern Sie reibungslosere Warenbewegungen über Grenzen hinweg mit optimierten Zoll- und Transitverfahren, wodurch Verzögerungen reduziert und die Geschwindigkeit der Lieferkette erhöht wird.',
    'home.capabilities.autonomousDataFlowAutomation.title': 'Autonomer Datenfluss & Prozessautomatisierung',
    'home.capabilities.autonomousDataFlowAutomation.description': 'Implementieren Sie intelligente Automatisierung für den Datenaustausch und die Prozessabwicklung, minimieren Sie manuelle Eingriffe und verbessern Sie die betriebliche Effizienz während Ihres gesamten Handelszyklus.',
    'home.companyInfo.title': 'Über ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies ist spezialisiert auf High-End-Softwarelösungen für den internationalen Handel, mit Fokus auf Zollkonformität, grenzüberschreitenden Warenverkehr und autonome Prozessautomatisierung durch Blockchain, Künstliche Intelligenz, Maschinelles Lernen und Business Intelligence.',
    'home.cta.title': 'Transformieren Sie Ihre Handelsoperationen mit ATEZ',
    'home.cta.description': 'Arbeiten Sie mit uns zusammen, um innovative Lösungen für autonome Zollanmeldungen, Compliance und effiziente grenzüberschreitende Logistik zu implementieren.',
    'home.cta.button': 'Besprechen Sie Ihre Bedürfnisse',
    'about.title': 'Über ATEZ Software Technologies',
    'about.mission.title': 'Unsere Mission',
    'about.mission.content': 'Unsere Mission ist es, ein autonomes, digitales, sicheres und integriertes Ökosystem für alle Akteure des grenzüberschreitenden Handels zu schaffen. Wir wollen zur Umwelt und Nachhaltigkeit beitragen, indem wir Prozesse im Zusammenhang mit dem grenzüberschreitenden Warenverkehr digitalisieren und gleichzeitig mit unseren Lösungen Effizienz und Transparenz steigern.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.content': 'Atez Software Technologies, gegründet 2017, verkörpert eine reiche Konvergenz von Feld- und akademischer Kompetenz mit einer über 30-jährigen Erfahrung in grenzüberschreitenden Handelsverfahren, Logistik, Zollabfertigung und IT-Lösungen für die Zollabfertigung sowie Finanz- und Berichtswesen. Dieses Unternehmen gedeiht unter der Leitung erfahrener Manager und wird durch eine dynamische Fusion von Beratern und innovativen Köpfen gestärkt, was einen tiefen Wissensschatz in der Branche sicherstellt. Zentral für das Ethos von Atez ist die symbiotische Beziehung zwischen Fachexperten und Softwareentwicklern, eine Zusammenarbeit, die entscheidend ist, um neue Technologien, insbesondere Blockchain, zu nutzen und Lösungen zu entwickeln, die sowohl revolutionär als auch auf die Kundenanforderungen abgestimmt sind. Unsere Grundprinzipien sind: ein starkes Engagement für Teamarbeit, Innovation und die strategische Integration von Fachwissen mit modernster Technologie, um die vielschichtigen Herausforderungen des internationalen Handels und der Logistik zu bewältigen.',
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Besprechen Sie, wie unsere spezialisierten Lösungen für Zoll, Logistik und autonomen Handel Ihrem Unternehmen zugutekommen können. Wir freuen uns, von Ihnen zu hören!',
    'contact.form.title': 'Kontaktformular',
    'contact.form.description': 'Senden Sie uns Ihre Anfragen oder Fragen.',
    'contact.form.name.label': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Max Mustermann',
    'contact.form.email.label': 'E-Mail-Adresse',
    'contact.form.email.placeholder': 'max.mustermann@example.com',
    'contact.form.message.label': 'Ihre Anfrage',
    'contact.form.message.placeholder': 'Beschreiben Sie Ihre Herausforderungen oder Projektideen...',
    'contact.form.submitButton': 'Anfrage senden',
    'contact.info.title': 'Unsere Büros',
    'contact.info.address.hq.title': 'Hauptsitz',
    'contact.info.address.hq.address': 'Huzur Mh, Azerbaycan Cd. Skyland B Blok 4b/29, 34485 Sarıyer/İstanbul, Türkei',
    'contact.info.address.uk.title': 'Niederlassung UK',
    'contact.info.address.uk.address': 'China Works, 100 Black Prince Road SE1 7SJ London',
    'contact.info.address.de.title': 'Niederlassung Deutschland',
    'contact.info.address.de.address': 'Friedrich-Ebert-Anlage 49 Nr: 2227 60308 Frankfurt am Main',
    'contact.info.address.us.title': 'Niederlassung US',
    'contact.info.address.us.address': '1775 Tysons Blvd., Suite 4161 McLean, VA 22102 Virginia',
    'contact.info.email': 'solutions@atez.com',
    'products.title': 'Unsere Produkte',
    'products.description': 'Entdecken Sie unsere Suite fortschrittlicher Softwarelösungen zur Optimierung internationaler Handels- und Zollabläufe. Alle unsere Produkte sind über unsere zentrale Plattform zugänglich.',
    'products.mainPlatformIntro': 'Unsere umfassende Produktpalette ist über unsere zentrale Plattform verfügbar:',
    'products.visitPlatformButton': 'singlewindow.io besuchen',
    'products.exploreButton': 'Produkt entdecken',
    'products.category.customsCompliance': 'Zollkonformität',
    'products.category.aiSolutions': 'KI-Lösungen für den Zoll',
    'products.category.declarationFiling': 'Zollanmeldung',
    'products.category.other': 'Weitere Lösungen',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': '24/7 aktualisierte offizielle (historisch indizierte) Zolldatenbank',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Produkt basierter, dynamisch aktualisierter Datenmanager für Zoll- und Regulierungskonformität',
    'products.product.logicust.tooltip.productTrigger': 'Produkt',
    'products.product.logicust.tooltip.productContent': '(Artikel, Rohmaterial, Halb- oder Fertigprodukt, das von einem Wirtschaftsbeteiligten international gehandelt wird)',
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
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Verfolgung und Verwaltung von Nachhaltigkeitskennzahlen und CO2-Fußabdruck in der Logistik.',
    'products.product.customsLoupe': 'Customs Loupe',
    'products.product.customsLoupe.description': 'Ein Werkzeug, das Datenvisualisierung für Zolltransaktionen bereitstellt.',
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
    'settings.density.title': 'Inhaltsdichte',
    'settings.density.description': 'Passen Sie den Abstand und die Dichte des Inhalts an.',
    'settings.density.label': 'Dichtestufe',
    'settings.density.compact': 'Kompakt',
    'settings.density.default': 'Standard',
    'settings.density.spacious': 'Großzügig',
    'solutions.title': 'Unsere Lösungen',
    'solutions.description': 'Entdecken Sie, wie ATEZ Software Technologies seine Produkte einsetzt, um gezielte Lösungen für Ihre internationalen Handels- und Zollherausforderungen zu liefern.',
    'solutions.solution.htsClassification': 'HS-Code-Klassifizierung',
    'solutions.solution.landedCost': 'Landed-Cost-Simulation',
    'solutions.solution.customsCompliance': 'Zoll-Compliance-Management',
    'solutions.solution.exportControls': 'Exportkontrollen & Sanktionslistenprüfung',
    'solutions.solution.findHtsCode': 'Finden Sie Ihren HS-Code',
    'solutions.solution.taxCalculation': 'Zoll- & Steuerberechnung',
    'solutions.solution.sapIntegration': 'SAP Plugins für Datensynchronisation',
    'solutions.solution.transitDeclarationFiling': 'Transitanmeldung',
    'solutions.solution.guaranteeManagement': 'Bürgschaftsmanagement',
    'solutions.solution.preClearanceControl': 'Vorfeldkontrolle & Risikobewertung',
    'solutions.solution.postDeclarationControl': 'Nachverzollungskontrolle & Audit-Unterstützung',
    'solutions.solution.cbamReporting': 'CBAM-Berichterstattung & CO2-Bilanzierung',
    'solutions.solution.dataVisualization': 'Handelsdatenvisualisierung & -analyse',
    'solutions.solution.declarantAI': 'KI-gestützte Erstellung von Zollanmeldungen',
    'solutions.solution.transitAI': 'KI-gestützte Erstellung von Transitanmeldungen',
    'solutions.solution.relayhub': 'Relayhub Daten Austausch Integration',
    'solutions.solution.smartSuggestions': 'Intelligente Vorschläge',
    'solutions.solution.historicalDataTariff': 'Historisch indexierte Regulierungsdaten',
    'solutions.viewProductDetails': 'Produktdetails anzeigen',
    'products.tariff.pageTitle': 'Tariff',
    'products.tariff.generalDescription': 'Tariff ist die digitale Zolldatenbanklösung für Benutzer und Systeme, um auf historisch indexierte Zölle, Steuern und Maßnahmen zuzugreifen, die gemäß den in Zollgebieten verwendeten Zolltarifplänen angewendet werden. Tariff deckt derzeit die Vorschriften der Europäischen Union, des Vereinigten Königreichs, der Schweiz und der Türkei ab und stellt mit nur wenigen Klicks Zollvorschriften, Zölle und Kontrollmaßnahmen bereit. Tariff ermöglicht es Benutzern, auf kritische Informationen zuzugreifen, die auf ihre Handelsrouten zugeschnitten sind, und gewährleistet so eine reibungslosere, effizientere und konforme Import- oder Exportbereitschaft.',
    'products.tariff.modules.title': 'Produktmodule',
    'products.tariff.module.basicQuery.title': 'Basisabfrage',
    'products.tariff.module.basicQuery.description': 'Identifizieren Sie schnell die wesentlichen Zollsätze und regulatorischen Maßnahmen für Ihre ausgewählte Export- oder Importhandelsroute, indem Sie einfach den Warencode eingeben. Die Basisabfrage liefert eine unkomplizierte Liste der anwendbaren Tarife.',
    'products.tariff.module.detailedQuery.title': 'Detaillierte Abfrage',
    'products.tariff.module.detailedQuery.description': 'Die detaillierte Abfrage bietet umfassende Einblicke einschließlich Fußnoten, Bedingungen, Rechtsgrundlagen sowie Start- und Enddaten von Maßnahmen. Ideal für Benutzer, die detaillierte Informationen zu spezifischen Tarifen und Vorschriften für fundierte Entscheidungen benötigen.',
    'products.tariff.module.taxCalculation.title': 'Zoll- & Steuerberechnung',
    'products.tariff.module.taxCalculation.description': 'Tariff bietet ein Steuerberechnungsmodul für Ihre Importanfragen, mit dem Sie Zollabgaben und andere Importsteuern mit wenigen Klicks schätzen können.',
    'products.tariff.module.findMyCommodityCode.title': 'Finden Sie Ihren HS-Code',
    'products.tariff.module.findMyCommodityCode.description': 'Definieren Sie Ihre Ware einfach mit Schlüsselwörtern und suchen Sie danach. Tariff hilft Ihnen, die passenden Warencodes für Ihre Waren basierend auf den von Ihnen eingegebenen Schlüsselwörtern zu identifizieren. Profitieren Sie von stets aktueller Nomenklatur für die Europäische Union, das Vereinigte Königreich, die Schweiz und die Türkei.',
    'products.tariff.keyBenefits.title': 'Wichtige Vorteile',
    'products.tariff.keyBenefit.realTimeUpdates.title': 'Echtzeit-Updates',
    'products.tariff.keyBenefit.realTimeUpdates.description': 'Profitieren Sie von Echtzeit-Updates für Ihre Artikel, die eine ständige Anpassung an die neuesten Gesetze gewährleisten.',
    'products.tariff.keyBenefit.multiCountrySupport.title': 'Unterstützung mehrerer Länder',
    'products.tariff.keyBenefit.multiCountrySupport.description': 'Greifen Sie auf Zollvorschriftsdaten für die Europäische Union, das Vereinigte Königreich, die Schweiz und die Türkei zu, mit laufenden Erweiterungsbemühungen um weitere Länder. Tariff etabliert sich als eine wirklich internationale Ressource für Handelserleichterungen.',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.title': 'Sprachbarrieren beseitigen',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.description': 'Tariff bietet umfassende Zollvorschriften für die Europäische Union, das Vereinigte Königreich, die Schweiz und die Türkei in Englisch, Deutsch und Türkisch.',
    'products.tariff.keyBenefit.upToDateNomenclatures.title': 'Aktuelle Tarifnomenklaturen',
    'products.tariff.keyBenefit.upToDateNomenclatures.description': 'Bleiben Sie mit stets aktuellen Tarifnomenklaturen immer einen Schritt voraus. Jede Änderung wird von Tariff verfolgt, um seinen Benutzern zu dienen.',
    'products.tariff.cta.title': 'Bereit, Tariff zu entdecken?',
    'products.tariff.cta.button': 'Tariff KOSTENLOS nutzen',
    'common.backToProducts': 'Zurück zu den Produkten',
    'legal.cookieConsent.text': 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch den weiteren Besuch dieser Website stimmen Sie unserer Verwendung von Cookies zu.',
    'legal.cookieConsent.acceptButton': 'Akzeptieren',
    'legal.privacyPolicy.link': 'Datenschutz-Bestimmungen',
    'legal.privacyPolicy.title': 'Datenschutz-Bestimmungen',
    'legal.privacyPolicy.placeholder': 'Ihre detaillierten Datenschutzbestimmungen finden Sie hier. Erklären Sie, wie Sie Benutzerdaten gemäß der DSGVO und anderen relevanten Vorschriften sammeln, verwenden und schützen.',
    'legal.termsOfService.link': 'Nutzungsbedingungen',
    'legal.termsOfService.title': 'Nutzungsbedingungen',
    'legal.termsOfService.placeholder': 'Ihre umfassenden Nutzungsbedingungen finden Sie hier. Beschreiben Sie die Regeln und Richtlinien für die Nutzung Ihrer Anwendung.',
    'footer.copyright': `© ${new Date().getFullYear()} ATEZ Softwaretechnologien. Alle Rechte vorbehalten.`,
  },
  tr: {
    'app.name': 'ATEZ Software Technologies',
    'logo.text': 'ATEZ Yazılım Teknolojileri',
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.solutions': 'Çözümler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.news': 'Haberler',
    'nav.settings': 'Ayarlar',
    'home.welcomeTitle': 'Küresel Ticareti Akıllıca Otomatikleştirin.',
    'home.blockchainReadySlogan': 'Blockchain hazır',
    'home.welcomeSubtitle': 'Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası ile desteklenen gümrük uyumluluğu, mal hareketi ve otonom veri işleme için akıllı çözümlerle sınır ötesi ticareti devrimleştiriyoruz.',
    'home.featuresTitle': 'Temel Yetenekler',
    'home.capabilities.crossBorder.title': 'Kapsamlı Gümrük Uyumluluk Çözümleri',
    'home.capabilities.crossBorder.description': 'Gelişmiş araçlarımızla küresel ticaret düzenlemelerine uyumu sağlayın. Güncel mevzuat için Tariff\'i, operasyonel verimlilik için Logicust\'u ve risk yönetimi ile doğruluk için yapay zeka destekli çözümleri kullanın.',
    'home.capabilities.autonomousData.title': 'Otomatikleştirilmiş Uçtan Uca Gümrük Prosedürleri',
    'home.capabilities.autonomousData.description': 'Gümrük süreçlerinizi baştan sona optimize edin. Sistemlerimiz, ihracat beyannamesi verilerinin ithalat beyannamesi verilerine otomatik olarak dönüştürülmesi dahil olmak üzere kesintisiz veri akışı sağlayarak hataları en aza indirir ve zaman kazandırır.',
    'home.capabilities.streamlinedCustomsTransit.title': 'Optimize Edilmiş Sınır Ötesi Gümrük ve Transit Prosedürleri',
    'home.capabilities.streamlinedCustomsTransit.description': 'Optimize edilmiş gümrük ve transit prosedürleri ile malların sınırlar arasında daha sorunsuz hareketini kolaylaştırın, gecikmeleri azaltın ve tedarik zinciri hızını artırın.',
    'home.capabilities.autonomousDataFlowAutomation.title': 'Otonom Veri Akışı ve Süreç Otomasyonu',
    'home.capabilities.autonomousDataFlowAutomation.description': 'Veri alışverişi ve süreç yönetimi için akıllı otomasyon uygulayın, manuel müdahaleyi en aza indirin ve tüm ticaret yaşam döngünüz boyunca operasyonel verimliliği artırın.',
    'home.companyInfo.title': 'ATEZ Software Technologies Hakkında',
    'home.companyInfo.description': 'ATEZ Software Technologies, Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası aracılığıyla gümrük uyumluluğu, sınır ötesi mal hareketi ve otonom süreç otomasyonuna odaklanarak uluslararası ticaret için üst düzey yazılım çözümlerinde uzmanlaşmıştır.',
    'home.cta.title': 'ATEZ ile Ticaret Operasyonlarınızı Dönüştürün',
    'home.cta.description': 'Otonom gümrük beyannameleri, uyumluluk ve verimli sınır ötesi lojistik için en son çözümleri uygulamak üzere bizimle ortak olun.',
    'home.cta.button': 'İhtiyaçlarınızı Görüşelim',
    'about.title': 'ATEZ Software Technologies Hakkında',
    'about.mission.title': 'Misyonumuz',
    'about.mission.content': 'Misyonumuz, sınır ötesi ticaretin tüm paydaşları için otonom, dijital, güvenli ve entegre bir ekosistem oluşturmaktır. Çözümlerimizle verimliliği ve şeffaflığı artırırken, malların sınır ötesi hareketleriyle ilgili süreçleri dijitalleştirerek çevreye ve sürdürülebilirliğe katkıda bulunmayı amaçlıyoruz.',
    'about.story.title': 'Hikayemiz',
    'about.story.content': '2017 yılında kurulan Atez Yazılım Teknolojileri, sınır ötesi ticaret prosedürleri, lojistik, gümrük müşavirliği ve gümrük müşavirliği için IT çözümlerinin yanı sıra finans ve raporlama alanlarında 30 yılı aşan bir mirasa sahip, saha ve akademik yeterliliğin zengin bir birleşimini temsil etmektedir. Bu girişim, deneyimli yöneticilerin rehberliğinde gelişmekte ve danışmanlar ile yenilikçi beyinlerin dinamik bir birleşimiyle desteklenmekte, böylece sektöre özgü derin bir bilgi birikimi sağlanmaktadır. Atez’in temel felsefesi, alan uzmanları ile yazılım geliştiriciler arasındaki simbiyotik ilişkidir; bu işbirliği, özellikle Blockchain olmak üzere yeni teknolojilerin devrimci ve müşteri taleplerine uygun çözümler geliştirmek için kullanılmasında hayati öneme sahiptir. Temel ilkelerimiz: ekip çalışmasına, yeniliğe ve uluslararası ticaret ve lojistiğin çok yönlü zorluklarını ele almak için alan uzmanlığını en son teknolojiyle stratejik entegrasyonuna güçlü bir bağlılık.',
    'contact.title': 'İletişime Geçin',
    'contact.description': 'Gümrük, lojistik ve otonom ticaret için özel çözümlerimizin işletmenize nasıl fayda sağlayabileceğini görüşün. Sizden haber almak isteriz!',
    'contact.form.title': 'İletişim Formu',
    'contact.form.description': 'Sorularınızı veya taleplerinizi bize gönderin.',
    'contact.form.name.label': 'Tam Adınız',
    'contact.form.name.placeholder': 'Ahmet Yılmaz',
    'contact.form.email.label': 'E-posta Adresi',
    'contact.form.email.placeholder': 'ahmet.yilmaz@example.com',
    'contact.form.message.label': 'Talebiniz',
    'contact.form.message.placeholder': 'Zorluklarınızı veya proje fikirlerinizi açıklayın...',
    'contact.form.submitButton': 'Talep Gönder',
    'contact.info.title': 'Ofislerimiz',
    'contact.info.address.hq.title': 'Genel Merkez',
    'contact.info.address.hq.address': 'Huzur Mh, Azerbaycan Cd. Skyland B Blok 4b/29, 34485 Sarıyer/İstanbul, Türkiye',
    'contact.info.address.uk.title': 'İngiltere Şubesi',
    'contact.info.address.uk.address': 'China Works, 100 Black Prince Road SE1 7SJ London',
    'contact.info.address.de.title': 'Almanya Şubesi',
    'contact.info.address.de.address': 'Friedrich-Ebert-Anlage 49 Nr: 2227 60308 Frankfurt am Main',
    'contact.info.address.us.title': 'ABD Şubesi',
    'contact.info.address.us.address': '1775 Tysons Blvd., Suite 4161 McLean, VA 22102 Virginia',
    'contact.info.email': 'solutions@atez.com',
    'products.title': 'Ürünlerimiz',
    'products.description': 'Uluslararası ticaret ve gümrük operasyonlarını kolaylaştırmak için tasarlanmış gelişmiş yazılım çözümlerimizi keşfedin. Tüm ürünlerimize merkezi platformumuz üzerinden erişilebilir.',
    'products.mainPlatformIntro': 'Kapsamlı ürün yelpazemiz merkezi platformumuz aracılığıyla sunulmaktadır:',
    'products.visitPlatformButton': 'singlewindow.io\'yu ziyaret et',
    'products.exploreButton': 'Ürünü Keşfet',
    'products.category.customsCompliance': 'Gümrük Uyumluluğu',
    'products.category.aiSolutions': 'Gümrük için Yapay Zeka Çözümleri',
    'products.category.declarationFiling': 'Beyanname Dosyalama',
    'products.category.other': 'Diğer Çözümler',
    'products.product.tariff': 'Tariff',
    'products.product.tariff.description': '7/24 güncel resmi (tarihsel olarak endekslenmiş) gümrük mevzuatı veritabanı',
    'products.product.logicust': 'Logicust',
    'products.product.logicust.description': 'Ürün bazlı, dinamik olarak güncellenen, gümrük ve düzenleyici uyumluluk veri yöneticisi',
    'products.product.logicust.tooltip.productTrigger': 'Ürün',
    'products.product.logicust.tooltip.productContent': '(Bir ekonomik operatör tarafından uluslararası ticareti yapılan eşya, hammadde, yarı mamul veya bitmiş ürün)',
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
    'products.product.greenpulse': 'Greenpulse',
    'products.product.greenpulse.description': 'Lojistikte sürdürülebilirlik ölçümlerini ve karbon ayak izini takip edin ve yönetin.',
    'products.product.customsLoupe': 'Customs Loupe',
    'products.product.customsLoupe.description': 'Gümrük işlemleri için veri görselleştirme sağlayan bir araçtır.',
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
    'settings.density.title': 'İçerik Yoğunluğu',
    'settings.density.description': 'İçeriğin aralıklarını ve yoğunluğunu ayarlayın.',
    'settings.density.label': 'Yoğunluk Seviyesi',
    'settings.density.compact': 'Kompakt',
    'settings.density.default': 'Varsayılan',
    'settings.density.spacious': 'Geniş',
    'solutions.title': 'Çözümlerimiz',
    'solutions.description': 'ATEZ Software Technologies\'in uluslararası ticaret ve gümrük zorluklarınız için ürünlerini nasıl kullanarak hedefe yönelik çözümler sunduğunu keşfedin.',
    'solutions.solution.htsClassification': 'GTİP Kodu Sınıflandırması',
    'solutions.solution.landedCost': 'Toplam Maliyet Simülasyonu',
    'solutions.solution.customsCompliance': 'Gümrük Uyumluluk Yönetimi',
    'solutions.solution.exportControls': 'İhracat Kontrolleri ve Yaptırım Taraması',
    'solutions.solution.findHtsCode': 'GTİP Kodunuzu Bulun',
    'solutions.solution.taxCalculation': 'Gümrük Vergisi ve Vergi Hesaplaması',
    'solutions.solution.sapIntegration': 'Veri Senkronizasyonu için SAP Eklentileri',
    'solutions.solution.transitDeclarationFiling': 'Transit Beyannamesi Dosyalama',
    'solutions.solution.guaranteeManagement': 'Teminat Yönetimi',
    'solutions.solution.preClearanceControl': 'Ön Gümrük Kontrolü ve Risk Değerlendirmesi',
    'solutions.solution.postDeclarationControl': 'Sonradan Kontrol ve Denetim Desteği',
    'solutions.solution.cbamReporting': 'CBAM Raporlaması ve Karbon Muhasebesi',
    'solutions.solution.dataVisualization': 'Ticaret Veri Görselleştirme ve Analizi',
    'solutions.solution.declarantAI': 'Yapay Zeka Destekli Gümrük Beyannamesi Hazırlama',
    'solutions.solution.transitAI': 'Yapay Zeka Destekli Transit Beyannamesi Hazırlama',
    'solutions.solution.relayhub': 'Relayhub Veri Değişim Entegrasyonu',
    'solutions.solution.smartSuggestions': 'Akıllı Öneriler',
    'solutions.solution.historicalDataTariff': 'Tarihsel Endeksli Düzenleyici Veriler',
    'solutions.viewProductDetails': 'Ürün Detaylarını Görüntüle',
    'products.tariff.pageTitle': 'Tariff',
    'products.tariff.generalDescription': 'Tariff, kullanıcıların ve sistemlerin, gümrük bölgelerinde kullanılan Gümrük Tarife Cetvellerine uygun olarak uygulanan, tarihsel olarak endekslenmiş gümrük vergilerine, diğer vergilere ve önlemlere ulaşmaları için dijital gümrük mevzuatı veri bankası çözümüdür. Tariff şu anda Avrupa Birliği, Birleşik Krallık, İsviçre ve Türkiye mevzuatlarını kapsamakta ve sadece birkaç tıklama ile gümrük düzenlemelerini, gümrük vergilerini ve kontrol önlemlerini sunmaktadır. Tariff, kullanıcıların ticaret rotalarına göre uyarlanmış kritik bilgilere erişmelerini sağlayarak daha sorunsuz, daha verimli ve uyumlu bir ithalat veya ihracat hazırbulunuşluğu temin eder.',
    'products.tariff.modules.title': 'Ürün Modülleri',
    'products.tariff.module.basicQuery.title': 'Temel Sorgulama',
    'products.tariff.module.basicQuery.description': 'Sadece GTİP kodunu girerek seçtiğiniz ihracat veya ithalat ticaret rotası için temel gümrük vergisi oranlarını ve düzenleyici önlemleri hızla belirleyin. Temel Sorgulama, uygulanabilir tarifelerin basit bir listesini sunar.',
    'products.tariff.module.detailedQuery.title': 'Detaylı Sorgulama',
    'products.tariff.module.detailedQuery.description': 'Detaylı Sorgulama, dipnotlar, koşullar, yasal dayanaklar ve önlemlerin başlangıç ve bitiş tarihleri dahil olmak üzere kapsamlı bilgiler sunar. Bilinçli karar verme için belirli tarifeler ve düzenlemeler hakkında derinlemesine bilgiye ihtiyaç duyan kullanıcılar için idealdir.',
    'products.tariff.module.taxCalculation.title': 'Gümrük Vergisi ve Vergi Hesaplaması',
    'products.tariff.module.taxCalculation.description': 'Tariff, ithalat sorgularınız için bir vergi hesaplama modülü sunarak, birkaç tıklama ile gümrük vergilerini ve diğer ithalat vergilerini tahmin etmenizi sağlar.',
    'products.tariff.module.findMyCommodityCode.title': 'GTİP Kodunuzu Bulun',
    'products.tariff.module.findMyCommodityCode.description': 'Malınızı anahtar kelimelerle tanımlayın ve arayın. Tariff, girdiğiniz anahtar kelimelere göre mallarınız için uygun GTİP kodlarını belirlemenize yardımcı olur. Avrupa Birliği, Birleşik Krallık, İsviçre ve Türkiye için her zaman güncel nomanklatürden yararlanın.',
    'products.tariff.keyBenefits.title': 'Temel Avantajlar',
    'products.tariff.keyBenefit.realTimeUpdates.title': 'Gerçek Zamanlı Güncellemeler',
    'products.tariff.keyBenefit.realTimeUpdates.description': 'Maddeleriniz için gerçek zamanlı güncellemelerden yararlanın, en son mevzuatlarla sürekli uyumu garanti edin.',
    'products.tariff.keyBenefit.multiCountrySupport.title': 'Çoklu Ülke Desteği',
    'products.tariff.keyBenefit.multiCountrySupport.description': 'Avrupa Birliği, Birleşik Krallık, İsviçre ve Türkiye için gümrük düzenleme verilerine erişin, daha fazla ülkeyi dahil etmek için devam eden genişletme çabalarıyla. Tariff\'i ticaret kolaylaştırması için gerçekten uluslararası bir kaynak olarak konumlandırın.',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.title': 'Dil Engellerini Ortadan Kaldırın',
    'products.tariff.keyBenefit.eliminateLanguageBarriers.description': 'Tariff, Avrupa Birliği, Birleşik Krallık, İsviçre ve Türkiye için İngilizce, Almanca ve Türkçe dillerinde kapsamlı gümrük düzenlemeleri sunar.',
    'products.tariff.keyBenefit.upToDateNomenclatures.title': 'Güncel Tarife Nomanklatürleri',
    'products.tariff.keyBenefit.upToDateNomenclatures.description': 'Her zaman güncel tarife nomanklatürleri ile bir adım önde olun. Her değişiklik, kullanıcılarına hizmet vermek için Tariff tarafından takip edilir.',
    'products.tariff.cta.title': 'Tariff\'i Keşfetmeye Hazır mısınız?',
    'products.tariff.cta.button': 'Tariff\'i ÜCRETSİZ Kullanın',
    'common.backToProducts': 'Ürünlere Geri Dön',
    'legal.cookieConsent.text': 'Deneyiminizi geliştirmek için çerezleri kullanıyoruz. Bu siteyi ziyaret etmeye devam ederek çerez kullanımımızı kabul etmiş olursunuz.',
    'legal.cookieConsent.acceptButton': 'Kabul Et',
    'legal.privacyPolicy.link': 'Gizlilik Politikası',
    'legal.privacyPolicy.title': 'Gizlilik Politikası',
    'legal.privacyPolicy.placeholder': 'Detaylı Gizlilik Politikası içeriğiniz buraya gelecek. Kullanıcı verilerini GDPR ve diğer ilgili düzenlemelere uygun olarak nasıl topladığınızı, kullandığınızı ve koruduğunuzu açıklayın.',
    'legal.termsOfService.link': 'Hizmet Şartları',
    'legal.termsOfService.title': 'Hizmet Şartları',
    'legal.termsOfService.placeholder': 'Kapsamlı Hizmet Şartları içeriğiniz buraya gelecek. Uygulamanızı kullanma kurallarını ve yönergelerini belirtin.',
    'footer.copyright': `© ${new Date().getFullYear()} ATEZ Yazılım Teknolojileri. Tüm hakları saklıdır.`,
  },
};


    