// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: {
      nav: {
        communities: "Communities | Themes",
        partner: "Partners",
        explore: "Explore",
        gallery: "Gallery",
        about: "About Us",
        contact: "Contact Us",
        signup: "Sign up",
        login: "Log in",
        language: "Language",
        selectYourLanguage: "Select your language",
      },
      gallery: {
  title: "Gallery",
  filters: {
    All: "All",
    Workshop: "Workshop",
    Speaker: "Speaker",
  },
},
      footer: {
        rights1:
          "©{{year}} African Union Commission (WGYD, HHSD) & AU CIEFFA. All rights reserved.",
        rights2:
          "In partnership with the World Bank under the EAGER Programme.",
        alt: { au: "African Union", worldBank: "World Bank" },
      },
      downloadPanel: {
        title: "DOWNLOAD",
        desc: "Key documents for the 1–2 Oct 2025 Egumeni & Coordination Meeting",
        ctaConcept: "Concept Note (PDF)",
        ctaAgenda: "Draft Agenda (PDF)",
        alt: "Illustration of downloadable documents",
      },

      readPanel: {
        title: "READ",
        desc: "Background, Rationale & Methodology for the Egumeni Knowledge Platform",
        ctaBackground: "Background & Rationale",
        ctaMethodology: "Methodology / Format",
        alt: "People reading resources",
      },

      partnersPanel: {
        heading: "MEET OUR PARTNERS",
        visit: "VISIT!",
        blurb:
          "Egumeni is convened by the African Union (WGYD, HHSD, AU CIEFFA) with the World Bank and EAGER country teams (Madagascar, Mozambique) to strengthen regional coordination on GEWE and gender-responsive education.",
        linkAbout: "About Egumeni (Community of Practice)",
        linkAucPartners: "AUC partners: WGYD • HHSD • AU CIEFFA",
        linkEagerCountries: "EAGER countries: Madagascar • Mozambique",
        cta: "SIGN UP FOR MORE HERE!",
      },
      participate: {
        heading: "PARTICIPATE",
        desc: "In-person Egumeni & Coordination Meeting (Pillar 3 – Enabling Environment / Knowledge Hub): aligning partners on roles, governance and the 2025 roadmap for the Community of Practice.",
        btnObjectives: "Objectives & Expected Outcomes",
      },
      meet: {
        heading: "MEET",
        desc: "Join the Egumeni Community of Practice to connect with the AUC, AU CIEFFA, the World Bank, and country teams.",
        btnJoin: "Join the Community of Practice",
        btnCoord: "Coordination & Announcements",
        alt: "Portrait of practitioner",
      },
      hero: {
        title: "Egumeni: EAGER Knowledge Hub",
        subtitle: "1–2 Oct 2025 • Addis Ababa — Coordination & peer learning.",
        alt: "Welcome background",
        login: "Log in",
        cta: "Not a member yet? Join the community!",
      },
      panels: {
        engage: {
          title: "ENGAGE",
          cta: "Explore Themes: Policy • Data Systems • Institutional Capacity",
        },
      },
      comingSoon: "Coming Soon",
      backHome: "Back to Home",
      partner: {
        subtitle: "We’re crafting this page. Check back shortly.",
        alt: "Animated woman illustration",
      },
      yes: "Yes",
      no: "No",
      contact: {
        title: "Contact Us",
        firstNameLabel: "First name",
        firstNamePlaceholder: "First name",
        lastNameLabel: "Last name",
        lastNamePlaceholder: "Last name",
        emailLabel: "Email address",
        emailPlaceholder: "you@example.com",
        reasonLabel: "Tell us the reason why you would like to contact us",
        reasonPlaceholder: "Type your message or reason here",
        partnerAucCheckbox:
          "Select if your organization is an AUC (WGYD/HHSD/AU CIEFFA) partner in the EAGER programme.",
        spotlightCheckbox:
          "Select if your organization is part of the World Bank–supported EAGER programme.",
        submit: "Submit",
        sending: "Sending...",
        sentSuccess: "Thanks! Your message has been sent.",
        sentError: "Could not send message. Please try again.",
        requiredError: "Email and reason are required.",
      },
      validation: {
        required: "Required",
        invalidEmail: "Invalid email",
        passwordTooShort: "Must be at least 8 characters",
      },
      errors: { error: "Error", registrationFailed: "Registration failed" },
      fields: {
        email: "Email address",
        username: "Username",
        password: "Password",
        firstName: "First name",
        lastName: "Last name",
        affiliation: "Affiliation Tag",
        expertise: "Countries/territories of expertise",
        residence: "Country/territory of residence",
        organization: "Organization",
        function: "Function",
      },
      placeholders: {
        email: "you@example.com",
        username: "Your username",
        password: "••••••••",
        firstName: "First name",
        lastName: "Last name",
        organization: "Organization",
        function: "Job title",
        select: "- Select -",
      },
      help: {
        emailPrivacy:
          "The email address is not made public. It will only be used if you need to be contacted about your account or for opted-in notifications.",
        usernameChars:
          "Several special characters are allowed, including space, period (.), hyphen (-), apostrophe ('), underscore (_), and the @ sign.",
      },
      register: {
        pageTitle: "Create new account",
        cardTitle: "Sign up with email",
        intro:
          "Welcome to Egumeni Hub! A welcome message with further instructions will be sent to your email address after you successfully enter your email address and a username. Didn't receive the email? Make sure to check your spam or junk folders or contact us at untf-evaw@unwomen.org",
        agree: "I agree with the <1>data policy</1><2> *</2>",
        haveAccount: "Have an account already?",
        login: "Login",
        submit: "Create new account",
        creating: "Creating...",
        successAlert: "Registered successfully!",
        side: {
          title: "Sign up",
          welcome: "Welcome to Egumeni Hub!",
          enterInfo: "Please enter the following information:",
          usernameNote:
            "it will appear next to your photo when you post a comment",
          tagsNote: "you have the option to select multiple tags.",
          jobTitle: "Job Title",
          readMore: "Read more",
        },
        affiliationOptions: [
          "Not affiliated",
          "Staff Member of a Civil Society Organisation",
          "UN Staff",
          "Practitioner",
          "Researcher",
        ],
        countryOptions: [
          "Cameroon",
          "Nigeria",
          "Ghana",
          "Kenya",
          "Rwanda",
          "Morocco",
          "South Africa",
        ],
      },
    },
    about: {
      pageLabel: "PAGE",
      title: "About us",
      heroAlt: "About us banner",
      shareThisPage: "Share this page",
      shareOnX: "Share on X",
      shareOnFacebook: "Share on Facebook",
      p1: "Egumeni Hub is convened by the African Union...",
      p2: "EAGER (East Africa Girls’ Empowerment and Resilience) is...",
      p3: "The Egumeni & Coordination Meeting (1–2 Oct 2025, Addis Ababa, Ethiopia)...",
    },
    auth: {
      fields: { password: "Password" },
      login: {
        pageTitle: "Log in",
        cardTitle: "Log in with username or email",
        welcomeBack: "Welcome back to Egumeni Hub!",
        identifier: "Username or email address",
        identifierHelp: "Enter your SHINE username or email.",
        forgot: "Forgot password?",
        noAccount: "Don’t have an account yet?",
        signupLink: "Sign up",
        button: "Log in",
        loggingIn: "Logging in...",
      },
    },
  },

  fr: {
    common: {
      nav: {
        communities: "Communautés | Thèmes",
        partner: "Partenaires",
        explore: "Explorer",
        gallery: "Galerie",
        about: "À propos",
        contact: "Nous contacter",
        signup: "S’inscrire",
        login: "Se connecter",
        language: "Langue",
        selectYourLanguage: "Choisissez votre langue",
      },
      gallery: {
  title: "Galerie",
  filters: {
    All: "Tout",
    Workshop: "Atelier",
    Speaker: "Intervenant·e",
  },
},

      footer: {
        rights1:
          "©{{year}} Commission de l’Union africaine (WGYD, HHSD) & AU CIEFFA. Tous droits réservés.",
        rights2:
          "En partenariat avec la Banque mondiale dans le cadre du programme EAGER.",
        alt: { au: "Union africaine", worldBank: "Banque mondiale" },
      },
      downloadPanel: {
        title: "TÉLÉCHARGER",
        desc: "Documents clés pour la réunion Egumeni & de coordination des 1–2 oct. 2025",
        ctaConcept: "Note conceptuelle (PDF)",
        ctaAgenda: "Projet d’ordre du jour (PDF)",
        alt: "Illustration de documents à télécharger",
      },

      readPanel: {
        title: "LIRE",
        desc: "Contexte, justification et méthodologie de la plateforme de connaissances Egumeni",
        ctaBackground: "Contexte et justification",
        ctaMethodology: "Méthodologie / Format",
        alt: "Des personnes lisant des ressources",
      },

      partnersPanel: {
        heading: "RENCONTREZ NOS PARTENAIRES",
        visit: "VISITEZ !",
        blurb:
          "Egumeni est convoqué par l’Union africaine (WGYD, HHSD, AU CIEFFA) avec la Banque mondiale et les équipes-pays EAGER (Madagascar, Mozambique) afin de renforcer la coordination régionale sur l’égalité de genre et l’éducation sensible au genre.",
        linkAbout: "À propos d’Egumeni (Communauté de pratique)",
        linkAucPartners: "Partenaires de l’UA : WGYD • HHSD • AU CIEFFA",
        linkEagerCountries: "Pays EAGER : Madagascar • Mozambique",
        cta: "INSCRIVEZ-VOUS ICI POUR EN SAVOIR PLUS !",
      },
      participate: {
        heading: "PARTICIPEZ",
        desc: "Réunion présentielle Egumeni & Coordination (Pilier 3 – Environnement habilitant / Plateforme de connaissances) : aligner les partenaires sur les rôles, la gouvernance et la feuille de route 2025 de la Communauté de pratique.",
        btnObjectives: "Objectifs et résultats attendus",
      },

      meet: {
        heading: "RENCONTREZ",
        desc: "Rejoignez la Communauté de pratique Egumeni pour entrer en relation avec l’UA, l’AU CIEFFA, la Banque mondiale et les équipes pays.",
        btnJoin: "Rejoindre la Communauté de pratique",
        btnCoord: "Coordination et annonces",
        alt: "Portrait de praticien·ne",
      },
      hero: {
        title: "Egumeni : Hub de connaissances EAGER",
        subtitle:
          "1–2 oct. 2025 • Addis-Abeba — Coordination et apprentissage entre pairs.",
        alt: "Image d’accueil",
        login: "Se connecter",
        cta: "Pas encore membre ? Rejoignez la communauté !",
      },
      panels: {
        engage: {
          title: "PARTICIPEZ",
          cta: "Explorer les thèmes : Politiques • Systèmes de données • Capacité institutionnelle",
        },
      },
      comingSoon: "Bientôt disponible",
      backHome: "Retour à l’accueil",
      partner: {
        subtitle: "Nous préparons cette page. Revenez bientôt.",
        alt: "Illustration animée d’une femme",
      },
      yes: "Oui",
      no: "Non",
      contact: {
        title: "Nous contacter",
        firstNameLabel: "Prénom",
        firstNamePlaceholder: "Prénom",
        lastNameLabel: "Nom",
        lastNamePlaceholder: "Nom",
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "vous@exemple.com",
        reasonLabel:
          "Dites-nous la raison pour laquelle vous souhaitez nous contacter",
        reasonPlaceholder: "Saisissez votre message ou raison ici",
        partnerAucCheckbox:
          "Sélectionnez si votre organisation est partenaire AUC (WGYD/HHSD/AU CIEFFA) dans le programme EAGER.",
        spotlightCheckbox:
          "Sélectionnez si votre organisation fait partie du programme EAGER soutenu par la Banque mondiale.",
        submit: "Envoyer",
        sending: "Envoi…",
        sentSuccess: "Merci ! Votre message a été envoyé.",
        sentError: "Impossible d’envoyer le message. Veuillez réessayer.",
        requiredError: "L’e-mail et la raison sont obligatoires.",
      },
      validation: {
        required: "Obligatoire",
        invalidEmail: "E-mail invalide",
        passwordTooShort: "Au moins 8 caractères",
      },
      errors: { error: "Erreur", registrationFailed: "Échec de l’inscription" },
      fields: {
        email: "Adresse e-mail",
        username: "Nom d’utilisateur",
        password: "Mot de passe",
        firstName: "Prénom",
        lastName: "Nom",
        affiliation: "Étiquette d’affiliation",
        expertise: "Pays/territoires d’expertise",
        residence: "Pays/territoire de résidence",
        organization: "Organisation",
        function: "Fonction",
      },
      placeholders: {
        email: "vous@exemple.com",
        username: "Votre identifiant",
        password: "••••••••",
        firstName: "Prénom",
        lastName: "Nom",
        organization: "Organisation",
        function: "Intitulé du poste",
        select: "- Sélectionner -",
      },
      help: {
        emailPrivacy:
          "L’adresse e-mail n’est pas rendue publique. Elle sera uniquement utilisée pour vous contacter au sujet de votre compte ou pour des notifications auxquelles vous avez souscrit.",
        usernameChars:
          "Plusieurs caractères spéciaux sont autorisés : espace, point (.), tiret (-), apostrophe ('), underscore (_) et @.",
      },
      register: {
        pageTitle: "Créer un nouveau compte",
        cardTitle: "S’inscrire avec e-mail",
        intro: "Bienvenue sur Egumeni Hub ! ...",
        agree: "J’accepte la <1>politique de données</1><2> *</2>",
        haveAccount: "Vous avez déjà un compte ?",
        login: "Se connecter",
        submit: "Créer un compte",
        creating: "Création…",
        successAlert: "Inscription réussie !",
        side: {
          title: "Inscription",
          welcome: "Bienvenue sur Egumeni Hub !",
          enterInfo: "Veuillez saisir les informations suivantes :",
          usernameNote:
            "il apparaîtra à côté de votre photo lorsque vous publierez un commentaire",
          tagsNote: "vous pouvez sélectionner plusieurs étiquettes.",
          jobTitle: "Intitulé du poste",
          readMore: "En savoir plus",
        },
        affiliationOptions: [
          "Sans affiliation",
          "Membre du personnel d’une organisation de la société civile",
          "Personnel de l’ONU",
          "Praticien·ne",
          "Chercheur·e",
        ],
        countryOptions: [
          "Cameroun",
          "Nigéria",
          "Ghana",
          "Kenya",
          "Rwanda",
          "Maroc",
          "Afrique du Sud",
        ],
      },
    },
    about: {
      pageLabel: "PAGE",
      title: "À propos",
      heroAlt: "Bannière À propos",
      shareThisPage: "Partager cette page",
      shareOnX: "Partager sur X",
      shareOnFacebook: "Partager sur Facebook",
      p1: "Le Hub Egumeni est convoqué par l’Union africaine...",
      p2: "EAGER ...",
      p3: "La réunion de coordination Egumeni ...",
    },
    auth: {
      fields: { password: "Mot de passe" },
      login: {
        pageTitle: "Se connecter",
        cardTitle: "Connexion avec identifiant ou e-mail",
        welcomeBack: "Bon retour sur Egumeni Hub !",
        identifier: "Identifiant ou adresse e-mail",
        identifierHelp: "Saisissez votre identifiant SHINE ou votre e-mail.",
        forgot: "Mot de passe oublié ?",
        noAccount: "Vous n’avez pas encore de compte ?",
        signupLink: "S’inscrire",
        button: "Se connecter",
        loggingIn: "Connexion…",
      },
    },
  },

  ar: {
    common: {
      nav: {
        communities: "المجتمعات | المحاور",
        partner: "الشركاء",
        explore: "استكشاف",
        gallery: "المعرض",
        about: "من نحن",
        contact: "اتصل بنا",
        signup: "إنشاء حساب",
        login: "تسجيل الدخول",
        language: "اللغة",
        selectYourLanguage: "اختر لغتك",
      },
      gallery: {
  title: "المعرض",
  filters: {
    All: "الكل",
    Workshop: "ورشة عمل",
    Speaker: "متحدث/ة",
  },
},
      footer: {
        rights1:
          "©{{year}} مفوضية الاتحاد الأفريقي (WGYD, HHSD) وAU CIEFFA. جميع الحقوق محفوظة.",
        rights2: "بالشراكة مع مجموعة البنك الدولي ضمن برنامج EAGER.",
        alt: { au: "الاتحاد الأفريقي", worldBank: "البنك الدولي" },
      },
      downloadPanel: {
        title: "التحميل",
        desc: "الوثائق الأساسية لاجتماع إيغوميني والتنسيق (1–2 أكتوبر 2025)",
        ctaConcept: "الورقة المفاهيمية (PDF)",
        ctaAgenda: "مسودة جدول الأعمال (PDF)",
        alt: "رسم توضيحي لمستندات قابلة للتنزيل",
      },

      readPanel: {
        title: "اقرأ",
        desc: "الخلفية والمبررات والمنهجية لمنصة المعارف إيغوميني",
        ctaBackground: "الخلفية والمبررات",
        ctaMethodology: "المنهجية / الصيغة",
        alt: "أشخاص يقرؤون الموارد",
      },

      partnersPanel: {
        heading: "تعرّف على شركائنا",
        visit: "زُوروا!",
        blurb:
          "يُنظَّم «إيغوميني» برعاية الاتحاد الأفريقي (WGYD وHHSD وAU CIEFFA) وبالشراكة مع مجموعة البنك الدولي وفِرق بلدان برنامج EAGER (مدغشقر، موزمبيق) لتعزيز التنسيق الإقليمي بشأن تمكين المرأة والمساواة بين الجنسين والتعليم المستجيب للنوع الاجتماعي.",
        linkAbout: "حول إيغوميني (مجتمع الممارسة)",
        linkAucPartners:
          "شركاء مفوضية الاتحاد الأفريقي: WGYD • HHSD • AU CIEFFA",
        linkEagerCountries: "بلدان برنامج EAGER: مدغشقر • موزمبيق",
        cta: "سجّل هنا للمزيد!",
      },
      participate: {
        heading: "شارِك",
        desc: "اجتماع «إيغوميني والتنسيق» حضوريًا (الركيزة 3 – البيئة الممكنة / منصة المعرفة): مواءمة الشركاء بشأن الأدوار والحوكمة وخارطة طريق 2025 لمجتمع الممارسة.",
        btnObjectives: "الأهداف والنتائج المتوقعة",
      },
      meet: {
        heading: "التقِ",
        desc: "انضم إلى مجتمع Egumeni للممارسة للتواصل مع مفوضية الاتحاد الأفريقي، AU CIEFFA، البنك الدولي، وفِرَق البلدان.",
        btnJoin: "انضم إلى مجتمع الممارسة",
        btnCoord: "التنسيق والإعلانات",
        alt: "صورة لممارس/ة",
      },
      hero: {
        title: "إيغومِني: منصة معارف EAGER",
        subtitle: "1–2 أكتوبر 2025 • أديس أبابا — تنسيق وتعلّم الأقران.",
        alt: "خلفية ترحيبية",
        login: "تسجيل الدخول",
        cta: "لست عضوًا بعد؟ انضم إلى المجتمع!",
      },

      panels: {
        engage: {
          title: "شارك",
          cta: "استكشف المحاور: السياسات • نظم البيانات • القدرات المؤسسية",
        },
      },
      comingSoon: "قريباً",
      backHome: "العودة إلى الصفحة الرئيسية",
      partner: {
        subtitle: "نقوم بإعداد هذه الصفحة. عُد قريبًا.",
        alt: "رسم متحرك لامرأة",
      },
      yes: "نعم",
      no: "لا",
      contact: {
        title: "اتصل بنا",
        firstNameLabel: "الاسم الأول",
        firstNamePlaceholder: "الاسم الأول",
        lastNameLabel: "اسم العائلة",
        lastNamePlaceholder: "اسم العائلة",
        emailLabel: "عنوان البريد الإلكتروني",
        emailPlaceholder: "you@example.com",
        reasonLabel: "أخبرنا سبب رغبتك في التواصل معنا",
        reasonPlaceholder: "اكتب رسالتك أو سبب التواصل هنا",
        partnerAucCheckbox: "اختر إذا كانت منظمتك شريكًا للاتحاد الأفريقي ...",
        spotlightCheckbox:
          "اختر إذا كانت منظمتك ضمن برنامج EAGER بدعم من البنك الدولي.",
        submit: "إرسال",
        sending: "جارٍ الإرسال…",
        sentSuccess: "شكرًا! تم إرسال رسالتك.",
        sentError: "تعذّر إرسال الرسالة. حاول مرة أخرى.",
        requiredError: "البريد الإلكتروني والسبب مطلوبان.",
      },
      validation: {
        required: "مطلوب",
        invalidEmail: "بريد إلكتروني غير صالح",
        passwordTooShort: "يجب ألا يقل عن 8 أحرف",
      },
      errors: { error: "خطأ", registrationFailed: "فشل التسجيل" },
      fields: {
        email: "عنوان البريد الإلكتروني",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        affiliation: "وسم الانتماء",
        expertise: "بلدان/أقاليم الخبرة",
        residence: "بلد/إقليم الإقامة",
        organization: "المنظمة",
        function: "المسمى الوظيفي",
      },
      placeholders: {
        email: "you@example.com",
        username: "اسم المستخدم",
        password: "••••••••",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        organization: "المنظمة",
        function: "المسمى الوظيفي",
        select: "- اختر -",
      },
      help: {
        emailPrivacy: "لن يتم نشر عنوان بريدك الإلكتروني...",
        usernameChars: "مسموح بعدة رموز خاصة...",
      },
      register: {
        pageTitle: "إنشاء حساب جديد",
        cardTitle: "التسجيل عبر البريد الإلكتروني",
        intro: "مرحبًا بك في Egumeni Hub! ...",
        agree: "أوافق على <1>سياسة البيانات</1><2> *</2>",
        haveAccount: "هل لديك حساب بالفعل؟",
        submit: "إنشاء حساب جديد",
        creating: "جاري الإنشاء…",
        successAlert: "تم التسجيل بنجاح!",
        side: {
          title: "إنشاء حساب",
          welcome: "مرحبًا بك في Egumeni Hub!",
          enterInfo: "يرجى إدخال المعلومات التالية:",
          usernameNote: "سيظهر بجانب صورتك عند نشر تعليق",
          tagsNote: "يمكنك اختيار عدة وسوم.",
          jobTitle: "المسمى الوظيفي",
          readMore: "اقرأ المزيد",
        },
        affiliationOptions: [
          "غير منتسب",
          "موظف في منظمة مجتمع مدني",
          "موظف أممي",
          "ممارس/ة",
          "باحث/ة",
        ],
        countryOptions: [
          "الكاميرون",
          "نيجيريا",
          "غانا",
          "كينيا",
          "رواندا",
          "المغرب",
          "جنوب أفريقيا",
        ],
      },
    },
    about: {
      pageLabel: "الصفحة",
      title: "من نحن",
      heroAlt: "لافتة صفحة من نحن",
      shareThisPage: "شارك هذه الصفحة",
      shareOnX: "المشاركة على X",
      shareOnFacebook: "المشاركة على فيسبوك",
      p1: "يُنظَّم مركز إيغوميني ...",
      p2: "برنامج EAGER ...",
      p3: "ستعمل «اجتماعات إيغوميني ...",
    },
    auth: {
      fields: { password: "كلمة المرور" },
      login: {
        pageTitle: "تسجيل الدخول",
        cardTitle: "تسجيل الدخول باسم المستخدم أو البريد الإلكتروني",
        welcomeBack: "مرحبًا بعودتك إلى Egumeni Hub!",
        identifier: "اسم المستخدم أو البريد الإلكتروني",
        identifierHelp: "أدخل اسم مستخدم SHINE أو بريدك الإلكتروني.",
        forgot: "هل نسيت كلمة المرور؟",
        noAccount: "ليس لديك حساب بعد؟",
        signupLink: "إنشاء حساب",
        button: "تسجيل الدخول",
        loggingIn: "جارٍ تسجيل الدخول…",
      },
    },
  },

  sw: {
    common: {
      nav: {
        communities: "Jamii | Mada",
        partner: "Washirika",
        explore: "Gundua",
        gallery: "Matunzio",
        about: "Kuhusu Sisi",
        contact: "Wasiliana Nasi",
        signup: "Jisajili",
        login: "Ingia",
        language: "Lugha",
        selectYourLanguage: "Chagua lugha yako",
      },
      gallery: {
  title: "Matunzio",
  filters: {
    All: "Zote",
    Workshop: "Warsha",
    Speaker: "Mzungumzaji",
  },
},
      footer: {
        rights1:
          "©{{year}} Tume ya Umoja wa Afrika (WGYD, HHSD) & AU CIEFFA. Haki zote zimehifadhiwa.",
        rights2: "Kwa ushirikiano na Benki ya Dunia chini ya Mpango wa EAGER.",
        alt: { au: "Umoja wa Afrika", worldBank: "Benki ya Dunia" },
      },
      downloadPanel: {
        title: "PAKUA",
        desc: "Nyaraka muhimu kwa Mkutano wa Egumeni & Uratibu tarehe 1–2 Oktoba 2025",
        ctaConcept: "Karatasi ya dhana (PDF)",
        ctaAgenda: "Rasimu ya ajenda (PDF)",
        alt: "Mchoro wa nyaraka zinazopakuliwa",
      },

      readPanel: {
        title: "SOMA",
        desc: "Historia, sababu na mbinu za Jukwaa la Maarifa la Egumeni",
        ctaBackground: "Historia na sababu",
        ctaMethodology: "Mbinu / Muundo",
        alt: "Watu wakisoma rasilimali",
      },

      partnersPanel: {
        heading: "KUTANA NA WASHIRIKA WETU",
        visit: "TEMBELEA!",
        blurb:
          "Egumeni inaandaliwa na Umoja wa Afrika (WGYD, HHSD, AU CIEFFA) kwa ushirikiano na Benki ya Dunia na timu za nchi za EAGER (Madagascar, Msumbiji) ili kuimarisha uratibu wa kikanda kuhusu GEWE na elimu inayozingatia jinsia.",
        linkAbout: "Kuhusu Egumeni (Jumuiya ya Utendaji)",
        linkAucPartners: "Washirika wa AUC: WGYD • HHSD • AU CIEFFA",
        linkEagerCountries: "Nchi za EAGER: Madagascar • Msumbiji",
        cta: "JISAJILI HAPA KUPATA ZAIDI!",
      },
      participate: {
        heading: "SHIRIKI",
        desc: "Mkutano wa ana kwa ana wa Egumeni & Uratibu (Nguzo ya 3 – Mazingira Wezeshi / Kituo cha Maarifa): kuoanisha washirika kuhusu majukumu, utawala na ramani ya njia ya 2025 ya Jamii ya Utendaji.",
        btnObjectives: "Malengo na Matokeo Yanayotarajiwa",
      },
      meet: {
        heading: "KUTANA",
        desc: "Jiunge na Jamii ya Utendaji ya Egumeni ili kuungana na AUC, AU CIEFFA, Benki ya Dunia na timu za nchi.",
        btnJoin: "Jiunge na Jamii ya Utendaji",
        btnCoord: "Uratibu na Taarifa",
        alt: "Picha ya mtendaji",
      },
      hero: {
        title: "Egumeni: Kituo cha Maarifa cha EAGER",
        subtitle: "1–2 Okt 2025 • Addis Ababa — Uratibu na ujifunzaji rika.",
        alt: "Mandhari ya kukaribisha",
        login: "Ingia",
        cta: "Si mwanachama bado? Jiunge na jamii!",
      },
      panels: {
        engage: {
          title: "SHIRIKI",
          cta: "Gundua Mada: Sera • Mifumo ya Data • Uwezo wa Taasisi",
        },
      },
      comingSoon: "Inakuja Hivi Karibuni",
      backHome: "Rudi Nyumbani",
      partner: {
        subtitle: "Tunaandaa ukurasa huu. Rudi hivi karibuni.",
        alt: "Mchoro uliohuishwa wa mwanamke",
      },
      yes: "Ndiyo",
      no: "Hapana",
      contact: {
        title: "Wasiliana Nasi",
        firstNameLabel: "Jina la kwanza",
        firstNamePlaceholder: "Jina la kwanza",
        lastNameLabel: "Jina la ukoo",
        lastNamePlaceholder: "Jina la ukoo",
        emailLabel: "Anwani ya barua pepe",
        emailPlaceholder: "wewe@mfano.com",
        reasonLabel: "Tuambie sababu ya kutaka kuwasiliana nasi",
        reasonPlaceholder: "Andika ujumbe wako au sababu hapa",
        partnerAucCheckbox: "Chagua ikiwa shirika lako ni mshirika wa AUC ...",
        spotlightCheckbox:
          "Chagua ikiwa shirika lako ni sehemu ya programu ya EAGER ...",
        submit: "Tuma",
        sending: "Inatuma…",
        sentSuccess: "Asante! Ujumbe wako umetumwa.",
        sentError: "Imeshindikana kutuma ujumbe. Jaribu tena.",
        requiredError: "Barua pepe na sababu zinahitajika.",
      },
      validation: {
        required: "Lazima",
        invalidEmail: "Barua pepe si sahihi",
        passwordTooShort: "Angalau herufi 8",
      },
      errors: {
        error: "Hitilafu",
        registrationFailed: "Imeshindikana kujiandikisha",
      },
      fields: {
        email: "Anwani ya barua pepe",
        username: "Jina la mtumiaji",
        password: "Nenosiri",
        firstName: "Jina la kwanza",
        lastName: "Jina la ukoo",
        affiliation: "Lebo ya uhusiano",
        expertise: "Nchi/maeneo ya utaalamu",
        residence: "Nchi/eneo la makazi",
        organization: "Shirika",
        function: "Kazi/cheo",
      },
      placeholders: {
        email: "wewe@mfano.com",
        username: "Jina la mtumiaji",
        password: "••••••••",
        firstName: "Jina la kwanza",
        lastName: "Jina la ukoo",
        organization: "Shirika",
        function: "Cheo cha kazi",
        select: "- Chagua -",
      },
      help: {
        emailPrivacy: "Anwani yako ya barua pepe haitachapishwa...",
        usernameChars:
          "Wanaruhusiwa: nafasi, nukta (.), alama ya kuunganisha (-), apostrofi ('), mstari wa chini (_) na @.",
      },
      register: {
        pageTitle: "Unda akaunti mpya",
        cardTitle: "Jisajili kwa barua pepe",
        intro: "Karibu Egumeni Hub! ...",
        agree: "Nakubaliana na <1>sera ya data</1><2> *</2>",
        haveAccount: "Tayari una akaunti?",
        submit: "Unda akaunti mpya",
        creating: "Inaundwa…",
        successAlert: "Usajili umefanikiwa!",
        side: {
          title: "Jisajili",
          welcome: "Karibu Egumeni Hub!",
          enterInfo: "Tafadhali jaza taarifa zifuatazo:",
          usernameNote: "litaonekana karibu na picha yako unapotuma maoni",
          tagsNote: "unaweza kuchagua lebo kadhaa.",
          jobTitle: "Cheo cha kazi",
          readMore: "Soma zaidi",
        },
        affiliationOptions: [
          "Hana uhusiano",
          "Mfanyakazi wa Asasi ya Kiraia",
          "Mfanyakazi wa Umoja wa Mataifa",
          "Mtaalamu",
          "Mtafiti",
        ],
        countryOptions: [
          "Kamerun",
          "Nigeria",
          "Ghana",
          "Kenya",
          "Rwanda",
          "Morocco",
          "Afrika Kusini",
        ],
      },
    },
    about: {
      pageLabel: "UKURASA",
      title: "Kuhusu sisi",
      heroAlt: "Bango la ukurasa Kuhusu sisi",
      shareThisPage: "Shiriki ukurasa huu",
      shareOnX: "Shiriki kwenye X",
      shareOnFacebook: "Shiriki kwenye Facebook",
      p1: "Egumeni Hub inaandaliwa na Umoja wa Afrika...",
      p2: "EAGER ni mpango wa kikanda ...",
      p3: "Mkutano wa Egumeni & Uratibu ...",
    },
    auth: {
      fields: { password: "Nenosiri" },
      login: {
        pageTitle: "Ingia",
        cardTitle: "Ingia kwa jina la mtumiaji au barua pepe",
        welcomeBack: "Karibu tena Egumeni Hub!",
        identifier: "Jina la mtumiaji au barua pepe",
        identifierHelp: "Ingiza jina lako la mtumiaji SHINE au barua pepe.",
        forgot: "Umesahau nenosiri?",
        noAccount: "Huna akaunti?",
        signupLink: "Jisajili",
        button: "Ingia",
        loggingIn: "Inaingia…",
      },
    },
  },
};

export const LANGS = {
  en: { label: "English", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
  sw: { label: "Kiswahili", dir: "ltr" },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: Object.keys(LANGS),
    nonExplicitSupportedLngs: true, // map 'en-US' -> 'en'
    interpolation: { escapeValue: false },
    ns: ["common", "about", "auth"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "querystring", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

const setDir = (lng) => {
  const dir = LANGS[lng]?.dir || "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.lang = lng;
};
setDir(i18n.resolvedLanguage);
i18n.on("languageChanged", setDir);

export default i18n;
