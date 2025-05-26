
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
  // | 'nav.translate' // Removed
  | 'nav.about'
  | 'nav.contact'
  | 'home.welcomeTitle'
  | 'home.welcomeSubtitle'
  | 'home.featuresTitle'
  | 'home.contentManagement.title'
  | 'home.contentManagement.description'
  // | 'home.aiTranslation.title' // Removed
  // | 'home.aiTranslation.description' // Removed
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
    'app.name': 'Global Hub',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'home.welcomeTitle': 'Welcome to Global Hub',
    'home.welcomeSubtitle': 'Your integrated solution for global content presence.',
    'home.featuresTitle': 'Core Features',
    'home.contentManagement.title': 'Content Management',
    'home.contentManagement.description': 'Easily manage your website text, images, and videos for all your products, services, and company news.',
    'home.languageSelector.title': 'Language Selector',
    'home.languageSelector.description': 'Allow users to seamlessly switch the website\'s language for a truly global experience.',
    'home.companyInfo.title': 'Company Information',
    'home.companyInfo.description': 'Share your story, mission, and contact details with a dedicated company information section.',
    'home.contactForm.title': 'Contact Form',
    'home.contactForm.description': 'Enable users to easily send inquiries or feedback directly through your website.',
    'about.title': 'About Global Hub',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To empower businesses to connect with a global audience through seamless content localization and management.',
    'about.story.title': 'Our Story',
    'about.story.content': 'Founded with the vision of breaking down language barriers, Global Hub provides cutting-edge tools and intuitive platforms for companies aiming for international reach. We believe in the power of clear communication to foster understanding and growth across cultures.',
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
    'contact.info.address': '123 Global Ave, Innovation City, World 12345',
    'contact.info.phone': '+1 (555) 123-4567',
    'contact.info.email': 'info@globalhub.com',
  },
  de: { 
    'app.name': 'Global Hub',
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'home.welcomeTitle': 'Willkommen bei Global Hub',
    'home.welcomeSubtitle': 'Ihre integrierte Lösung für globale Content-Präsenz.',
    'home.featuresTitle': 'Kernfunktionen',
    'home.contentManagement.title': 'Content-Management',
    'home.contentManagement.description': 'Verwalten Sie einfach Texte, Bilder und Videos Ihrer Website für all Ihre Produkte, Dienstleistungen und Unternehmensnachrichten.',
    'home.languageSelector.title': 'Sprachauswahl',
    'home.languageSelector.description': 'Ermöglichen Sie Benutzern den nahtlosen Wechsel der Website-Sprache für ein wirklich globales Erlebnis.',
    'home.companyInfo.title': 'Firmeninformation',
    'home.companyInfo.description': 'Teilen Sie Ihre Geschichte, Mission und Kontaktdaten in einem speziellen Firmeninformationsbereich.',
    'home.contactForm.title': 'Kontaktformular',
    'home.contactForm.description': 'Ermöglichen Sie Benutzern, Anfragen oder Feedback direkt über Ihre Website zu senden.',
    'about.title': 'Über Global Hub',
    'about.mission.title': 'Unsere Mission',
    'about.mission.content': 'Unternehmen zu befähigen, durch nahtlose Content-Lokalisierung und -Verwaltung eine globale Zielgruppe zu erreichen.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.content': 'Gegründet mit der Vision, Sprachbarrieren abzubauen, bietet Global Hub modernste Werkzeuge und intuitive Plattformen für Unternehmen, die internationale Reichweite anstreben. Wir glauben an die Kraft klarer Kommunikation, um Verständnis und Wachstum über Kulturen hinweg zu fördern.',
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
    'contact.info.address': 'Global Allee 123, Innovationsstadt, Welt 12345',
    'contact.info.phone': '+49 (123) 456-7890',
    'contact.info.email': 'info@globalhub.com',
  },
  tr: { 
    'app.name': 'Global Hub',
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'home.welcomeTitle': 'Global Hub\'a Hoş Geldiniz',
    'home.welcomeSubtitle': 'Küresel içerik varlığınız için entegre çözümünüz.',
    'home.featuresTitle': 'Temel Özellikler',
    'home.contentManagement.title': 'İçerik Yönetimi',
    'home.contentManagement.description': 'Tüm ürünleriniz, hizmetleriniz ve şirket haberleriniz için web sitenizin metinlerini, resimlerini ve videolarını kolayca yönetin.',
    'home.languageSelector.title': 'Dil Seçici',
    'home.languageSelector.description': 'Kullanıcıların gerçekten küresel bir deneyim için web sitesinin dilini sorunsuz bir şekilde değiştirmesine olanak tanıyın.',
    'home.companyInfo.title': 'Şirket Bilgileri',
    'home.companyInfo.description': 'Hikayenizi, misyonunuzu ve iletişim bilgilerinizi özel bir şirket bilgileri bölümünde paylaşın.',
    'home.contactForm.title': 'İletişim Formu',
    'home.contactForm.description': 'Kullanıcıların doğrudan web siteniz üzerinden kolayca soru sormasını veya geri bildirim göndermesini sağlayın.',
    'about.title': 'Global Hub Hakkında',
    'about.mission.title': 'Misyonumuz',
    'about.mission.content': 'İşletmeleri, sorunsuz içerik yerelleştirme ve yönetimi yoluyla küresel bir kitleyle buluşturmak.',
    'about.story.title': 'Hikayemiz',
    'about.story.content': 'Dil engellerini yıkma vizyonuyla kurulan Global Hub, uluslararası erişim hedefleyen şirketler için son teknoloji araçlar ve sezgisel platformlar sunmaktadır. Kültürler arası anlayış ve büyümeyi teşvik etmek için açık iletişimin gücüne inanıyoruz.',
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
    'contact.info.address': 'Global Cad. No:123, İnovasyon Şehri, Dünya 12345',
    'contact.info.phone': '+90 (555) 123-4567',
    'contact.info.email': 'info@globalhub.com',
  },
};
