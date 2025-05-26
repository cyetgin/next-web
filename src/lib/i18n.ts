export type Locale = 'en' | 'es' | 'fr' | 'de'; // Added German

export const DEFAULT_LOCALE: Locale = 'en';
export const AVAILABLE_LOCALES: {value: Locale, label: string}[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
];

export type TranslationKey =
  | 'app.name'
  | 'nav.home'
  | 'nav.translate'
  | 'nav.about'
  | 'nav.contact'
  | 'home.welcomeTitle'
  | 'home.welcomeSubtitle'
  | 'home.featuresTitle'
  | 'home.contentManagement.title'
  | 'home.contentManagement.description'
  | 'home.aiTranslation.title'
  | 'home.aiTranslation.description'
  | 'home.languageSelector.title'
  | 'home.languageSelector.description'
  | 'home.companyInfo.title'
  | 'home.companyInfo.description'
  | 'home.contactForm.title'
  | 'home.contactForm.description'
  | 'translate.title'
  | 'translate.description'
  | 'translate.form.textToTranslate.label'
  | 'translate.form.textToTranslate.placeholder'
  | 'translate.form.targetLanguage.label'
  | 'translate.form.customTerminology.label'
  | 'translate.form.customTerminology.placeholder'
  | 'translate.form.submitButton'
  | 'translate.result.title'
  | 'translate.result.noResult'
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
    'nav.translate': 'Translate Content',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'home.welcomeTitle': 'Welcome to Global Hub',
    'home.welcomeSubtitle': 'Your integrated solution for global content presence.',
    'home.featuresTitle': 'Core Features',
    'home.contentManagement.title': 'Content Management',
    'home.contentManagement.description': 'Easily manage your website text, images, and videos for all your products, services, and company news.',
    'home.aiTranslation.title': 'AI-Powered Translation',
    'home.aiTranslation.description': 'Generate high-quality translations for your content in multiple languages, with support for custom terminology.',
    'home.languageSelector.title': 'Language Selector',
    'home.languageSelector.description': 'Allow users to seamlessly switch the website\'s language for a truly global experience.',
    'home.companyInfo.title': 'Company Information',
    'home.companyInfo.description': 'Share your story, mission, and contact details with a dedicated company information section.',
    'home.contactForm.title': 'Contact Form',
    'home.contactForm.description': 'Enable users to easily send inquiries or feedback directly through your website.',
    'translate.title': 'AI Content Translation',
    'translate.description': 'Use our AI-powered tool to translate your content into various languages. Provide custom terminology for domain-specific accuracy.',
    'translate.form.textToTranslate.label': 'Text to Translate',
    'translate.form.textToTranslate.placeholder': 'Enter the content you want to translate...',
    'translate.form.targetLanguage.label': 'Target Language',
    'translate.form.customTerminology.label': 'Custom Terminology (Optional)',
    'translate.form.customTerminology.placeholder': 'e.g., product_name: specific_translation, feature_x: translated_feature_x',
    'translate.form.submitButton': 'Translate',
    'translate.result.title': 'Translated Text',
    'translate.result.noResult': 'Translation will appear here.',
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
  es: {
    'app.name': 'Global Hub',
    'nav.home': 'Inicio',
    'nav.translate': 'Traducir Contenido',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'home.welcomeTitle': 'Bienvenido a Global Hub',
    'home.welcomeSubtitle': 'Su solución integrada para la presencia global de contenido.',
    'home.featuresTitle': 'Características Principales',
    'home.contentManagement.title': 'Gestión de Contenido',
    'home.contentManagement.description': 'Gestione fácilmente el texto, las imágenes y los vídeos de su sitio web para todos sus productos, servicios y noticias de la empresa.',
    'home.aiTranslation.title': 'Traducción con IA',
    'home.aiTranslation.description': 'Genere traducciones de alta calidad para su contenido en múltiples idiomas, con soporte para terminología personalizada.',
    'home.languageSelector.title': 'Selector de Idioma',
    'home.languageSelector.description': 'Permita a los usuarios cambiar sin problemas el idioma del sitio web para una experiencia verdaderamente global.',
    'home.companyInfo.title': 'Información de la Empresa',
    'home.companyInfo.description': 'Comparta su historia, misión y datos de contacto con una sección dedicada a la información de la empresa.',
    'home.contactForm.title': 'Formulario de Contacto',
    'home.contactForm.description': 'Permita a los usuarios enviar fácilmente consultas o comentarios directamente a través de su sitio web.',
    'translate.title': 'Traducción de Contenido con IA',
    'translate.description': 'Utilice nuestra herramienta impulsada por IA para traducir su contenido a varios idiomas. Proporcione terminología personalizada para una precisión específica del dominio.',
    'translate.form.textToTranslate.label': 'Texto a Traducir',
    'translate.form.textToTranslate.placeholder': 'Ingrese el contenido que desea traducir...',
    'translate.form.targetLanguage.label': 'Idioma de Destino',
    'translate.form.customTerminology.label': 'Terminología Personalizada (Opcional)',
    'translate.form.customTerminology.placeholder': 'ej., nombre_producto: traducción_específica, característica_x: característica_x_traducida',
    'translate.form.submitButton': 'Traducir',
    'translate.result.title': 'Texto Traducido',
    'translate.result.noResult': 'La traducción aparecerá aquí.',
    'about.title': 'Sobre Global Hub',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.content': 'Empoderar a las empresas para que se conecten con una audiencia global a través de una gestión y localización de contenido fluidas.',
    'about.story.title': 'Nuestra Historia',
    'about.story.content': 'Fundada con la visión de derribar las barreras del idioma, Global Hub proporciona herramientas de vanguardia y plataformas intuitivas para empresas que buscan un alcance internacional. Creemos en el poder de la comunicación clara para fomentar la comprensión y el crecimiento entre culturas.',
    'contact.title': 'Póngase en Contacto',
    'contact.description': '¡Nos encantaría saber de usted! Ya sea que tenga una pregunta, comentarios o una propuesta de proyecto, no dude en comunicarse.',
    'contact.form.name.label': 'Nombre Completo',
    'contact.form.name.placeholder': 'Juan Pérez',
    'contact.form.email.label': 'Dirección de Correo Electrónico',
    'contact.form.email.placeholder': 'juan.perez@example.com',
    'contact.form.message.label': 'Su Mensaje',
    'contact.form.message.placeholder': 'Ingrese su mensaje aquí...',
    'contact.form.submitButton': 'Enviar Mensaje',
    'contact.info.title': 'Nuestra Información de Contacto',
    'contact.info.address': '123 Av. Global, Ciudad Innovación, Mundo 12345',
    'contact.info.phone': '+1 (555) 123-4567',
    'contact.info.email': 'info@globalhub.com',
  },
  fr: { // Basic French translations - can be expanded
    'app.name': 'Global Hub',
    'nav.home': 'Accueil',
    'nav.translate': 'Traduire Contenu',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'home.welcomeTitle': 'Bienvenue sur Global Hub',
    'home.welcomeSubtitle': 'Votre solution intégrée pour une présence de contenu mondiale.',
    'translate.form.targetLanguage.label': 'Langue Cible',
    'translate.form.submitButton': 'Traduire',
    // ... other keys as needed
  },
  de: { // Basic German translations - can be expanded
    'app.name': 'Global Hub',
    'nav.home': 'Startseite',
    'nav.translate': 'Inhalt Übersetzen',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'home.welcomeTitle': 'Willkommen bei Global Hub',
    'home.welcomeSubtitle': 'Ihre integrierte Lösung für globale Content-Präsenz.',
    'translate.form.targetLanguage.label': 'Zielsprache',
    'translate.form.submitButton': 'Übersetzen',
    // ... other keys as needed
  },
};
