
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
  | 'home.featuresTitle'
  | 'home.contentManagement.title'
  | 'home.contentManagement.description'
  | 'home.languageSelector.title'
  | 'home.languageSelector.description'
  | 'home.companyInfo.title'
  | 'home.companyInfo.description'
  | 'home.contactForm.title'
  | 'home.contactForm.description'
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
    'home.welcomeTitle': 'Welcome to ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Delivering high-end software solutions powered by next-gen technologies like Blockchain, AI, Machine Learning, and Business Intelligence.',
    'home.featuresTitle': 'Core Capabilities',
    'home.contentManagement.title': 'Custom Software Development',
    'home.contentManagement.description': 'Tailored software solutions to meet your unique business needs, from enterprise applications to specialized tools.',
    'home.languageSelector.title': 'Technology Consulting',
    'home.languageSelector.description': 'Expert guidance to help you leverage cutting-edge technologies for strategic advantage and growth.',
    'home.companyInfo.title': 'About ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies specializes in high-end software solutions, leveraging next-generation technologies including Blockchain, Artificial Intelligence, Machine Learning, and Business Intelligence to drive innovation and excellence.',
    'home.contactForm.title': 'Contact Form',
    'home.contactForm.description': 'Enable users to easily send inquiries or feedback directly through your website.',
    'about.title': 'About ATEZ Software Technologies',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To empower businesses with transformative high-end software solutions, leveraging Blockchain, AI, ML, and Business Intelligence to solve complex challenges and unlock new opportunities.',
    'about.story.title': 'Our Story',
    'about.story.content': 'Founded with the vision of delivering cutting-edge software solutions, ATEZ Software Technologies provides innovative tools and intuitive platforms for companies aiming for technological excellence. We specialize in harnessing the power of next-generation technologies such as Blockchain, Artificial Intelligence, Machine Learning, and Business Intelligence to foster understanding, drive efficiency, and unlock new possibilities for growth across industries.',
    'contact.title': 'Get In Touch',
    'contact.description': 'We\'d love to hear from you! Whether you have a question, feedback, or a project proposal, feel free to reach out.',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'john.doe@example.com',
    'contact.form.message.label': 'Your Message',
    'contact.form.message.placeholder': 'Enter your message here...',
    'contact.form.submitButton': 'Send Message',
    'contact.info.title': 'Our Contact Information',
    'contact.info.address': '123 Innovation Dr, Tech City, World 54321',
    'contact.info.phone': '+1 (555) 987-6543',
    'contact.info.email': 'info@atezsoftware.com',
  },
  de: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'home.welcomeTitle': 'Willkommen bei ATEZ Software Technologies',
    'home.welcomeSubtitle': 'Bereitstellung von High-End-Softwarelösungen, die auf Next-Gen-Technologien wie Blockchain, KI, Maschinelles Lernen und Business Intelligence basieren.',
    'home.featuresTitle': 'Kernkompetenzen',
    'home.contentManagement.title': 'Individuelle Softwareentwicklung',
    'home.contentManagement.description': 'Maßgeschneiderte Softwarelösungen, die Ihren einzigartigen Geschäftsanforderungen entsprechen, von Unternehmensanwendungen bis hin zu spezialisierten Tools.',
    'home.languageSelector.title': 'Technologieberatung',
    'home.languageSelector.description': 'Expertenberatung, um Ihnen zu helfen, Spitzentechnologien für strategische Vorteile und Wachstum zu nutzen.',
    'home.companyInfo.title': 'Über ATEZ Software Technologies',
    'home.companyInfo.description': 'ATEZ Software Technologies ist spezialisiert auf High-End-Softwarelösungen und nutzt Technologien der nächsten Generation wie Blockchain, Künstliche Intelligenz, Maschinelles Lernen und Business Intelligence, um Innovation und Exzellenz voranzutreiben.',
    'home.contactForm.title': 'Kontaktformular',
    'home.contactForm.description': 'Ermöglichen Sie Benutzern, Anfragen oder Feedback direkt über Ihre Website zu senden.',
    'about.title': 'Über ATEZ Software Technologies',
    'about.mission.title': 'Unsere Mission',
    'about.mission.content': 'Unternehmen mit transformativen High-End-Softwarelösungen zu stärken, indem Blockchain, KI, ML und Business Intelligence genutzt werden, um komplexe Herausforderungen zu lösen und neue Möglichkeiten zu erschließen.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.content': 'Gegründet mit der Vision, innovative Softwarelösungen zu liefern, bietet ATEZ Software Technologies modernste Werkzeuge und intuitive Plattformen für Unternehmen, die technologische Exzellenz anstreben. Wir sind darauf spezialisiert, die Kraft von Next-Generation-Technologien wie Blockchain, Künstliche Intelligenz, Maschinelles Lernen und Business Intelligence zu nutzen, um Verständnis zu fördern, Effizienz zu steigern und neue Wachstumsmöglichkeiten branchenübergreifend zu erschließen.',
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Wir würden uns freuen, von Ihnen zu hören! Ob Sie eine Frage, Feedback oder einen Projektvorschlag haben, zögern Sie nicht, uns zu kontaktieren.',
    'contact.form.name.label': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Max Mustermann',
    'contact.form.email.label': 'E-Mail-Adresse',
    'contact.form.email.placeholder': 'max.mustermann@example.com',
    'contact.form.message.label': 'Ihre Nachricht',
    'contact.form.message.placeholder': 'Geben Sie hier Ihre Nachricht ein...',
    'contact.form.submitButton': 'Nachricht senden',
    'contact.info.title': 'Unsere Kontaktinformationen',
    'contact.info.address': 'Innovationsstraße 123, Tech City, Welt 54321',
    'contact.info.phone': '+49 (123) 987-6543',
    'contact.info.email': 'info@atezsoftware.com',
  },
  tr: {
    'app.name': 'ATEZ Software Technologies',
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'home.welcomeTitle': 'ATEZ Software Technologies\'e Hoş Geldiniz',
    'home.welcomeSubtitle': 'Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası gibi yeni nesil teknolojilerle desteklenen üst düzey yazılım çözümleri sunuyoruz.',
    'home.featuresTitle': 'Temel Yetenekler',
    'home.contentManagement.title': 'Özel Yazılım Geliştirme',
    'home.contentManagement.description': 'Kurumsal uygulamalardan özel araçlara kadar benzersiz iş ihtiyaçlarınızı karşılamak için özel yazılım çözümleri.',
    'home.languageSelector.title': 'Teknoloji Danışmanlığı',
    'home.languageSelector.description': 'Stratejik avantaj ve büyüme için en son teknolojilerden yararlanmanıza yardımcı olacak uzman rehberliği.',
    'home.companyInfo.title': 'ATEZ Software Technologies Hakkında',
    'home.companyInfo.description': 'ATEZ Software Technologies, inovasyonu ve mükemmelliği teşvik etmek için Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası dahil olmak üzere yeni nesil teknolojilerden yararlanarak üst düzey yazılım çözümlerinde uzmanlaşmıştır.',
    'home.contactForm.title': 'İletişim Formu',
    'home.contactForm.description': 'Kullanıcıların doğrudan web siteniz üzerinden kolayca soru sormasını veya geri bildirim göndermesini sağlayın.',
    'about.title': 'ATEZ Software Technologies Hakkında',
    'about.mission.title': 'Misyonumuz',
    'about.mission.content': 'Karmaşık zorlukları çözmek ve yeni fırsatlar yaratmak için Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekasını kullanarak işletmeleri dönüştürücü üst düzey yazılım çözümleriyle güçlendirmek.',
    'about.story.title': 'Hikayemiz',
    'about.story.content': 'Son teknoloji yazılım çözümleri sunma vizyonuyla kurulan ATEZ Software Technologies, teknolojik mükemmelliği hedefleyen şirketler için yenilikçi araçlar ve sezgisel platformlar sunmaktadır. Anlayışı teşvik etmek, verimliliği artırmak ve sektörler arasında yeni büyüme olanakları sağlamak için Blockchain, Yapay Zeka, Makine Öğrenimi ve İş Zekası gibi yeni nesil teknolojilerin gücünden yararlanma konusunda uzmanız.',
    'contact.title': 'İletişime Geçin',
    'contact.description': 'Sizden haber almak isteriz! Bir sorunuz, geri bildiriminiz veya bir proje öneriniz varsa çekinmeyin.',
    'contact.form.name.label': 'Tam Adınız',
    'contact.form.name.placeholder': 'Ahmet Yılmaz',
    'contact.form.email.label': 'E-posta Adresi',
    'contact.form.email.placeholder': 'ahmet.yilmaz@example.com',
    'contact.form.message.label': 'Mesajınız',
    'contact.form.message.placeholder': 'Mesajınızı buraya girin...',
    'contact.form.submitButton': 'Mesaj Gönder',
    'contact.info.title': 'İletişim Bilgilerimiz',
    'contact.info.address': 'İnovasyon Cd. No:123, Teknoloji Şehri, Dünya 54321',
    'contact.info.phone': '+90 (555) 987-6543',
    'contact.info.email': 'info@atezsoftware.com',
  },
};

