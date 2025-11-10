export const I18N = (()=>{
  const langs = ['fr','en','es','de','it','zh-Hant'];
  const t = {
    fr: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      videos: 'Vidéos',
      contact: 'Contact',
      account_login: 'Compte / Se connecter',
      my_account: 'Mon compte',
      testimonials: 'Avis',
      all_videos_title: 'Toutes les vidéos',
      footer_rights: 'Tous droits réservés.',
      // Home page
      hero_badge_1: 'Abordable',
      hero_badge_2: "À l'écoute des retours",
      hero_h1_html: 'Montage vidéo <span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">créatif</span> pour créateurs',
      hero_cta_portfolio: 'Voir portfolio',
      hero_cta_contact: 'Me contacter',
      hero_preview_label: 'Aperçu portfolio',
      services_title: 'Services',
      service1_title: 'Shorts / TikTok',
      service1_desc: 'Cuts dynamiques, sous-titres stylés.',
      service2_title: 'Vidéos longues',
      service2_desc: 'Narration, rythme, habillage graphique, export multi-plateformes.',
      service3_title: 'Jingle',
      service3_desc: 'Intro/outro, logo reveal, sonorités percutantes.',
      portfolio_title: 'Portfolio',
      portfolio_more: "Demander plus d'exemples →",
      portfolio_shorts: 'Shorts',
      portfolio_longs: 'Vidéos longues',
      open_youtube: 'Ouvrir sur YouTube ↗',
      contact_title: 'Contact :',
      contact_email_label: 'email :',
      contact_instagram_label: 'Instagram :',
      contact_discord_label: 'Discord :',
      copy_btn: '📋 Copier',
      copied: '✔ Copié',
      form_name_label: 'Nom',
      form_name_ph: 'Ton nom',
      form_email_label: 'Email',
      form_email_ph: 'ton@email.com',
      form_message_label: 'Message',
      form_message_ph: 'Parle-moi de ton projet...',
      form_send: 'Envoyer',
      // Auth pages
      auth_signup_title: 'Créer un compte',
      auth_login_title: 'Connexion',
      auth_forgot_title: 'Réinitialiser le mot de passe',
      auth_email: 'Email',
      auth_password: 'Mot de passe',
      auth_create_account: 'Créer le compte',
      auth_login: 'Connexion',
      auth_send_link: 'Envoyer le lien',
      auth_already_account: 'Déjà un compte ?',
      auth_no_account: "Pas de compte ?",
      auth_sign_in: 'Se connecter',
      auth_sign_up: 'Créer un compte',
      auth_back_login: 'Retour connexion',
      auth_forgot: 'Mot de passe oublié ?',
      auth_unverified_notice: 'Email non vérifié.',
      auth_resend_verify: 'Renvoyer l’email de vérification'
    },
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      videos: 'Videos',
      contact: 'Contact',
      account_login: 'Account / Sign in',
      my_account: 'My account',
      testimonials: 'Testimonials',
      all_videos_title: 'All videos',
      footer_rights: 'All rights reserved.',
      hero_badge_1: 'Affordable',
      hero_badge_2: 'Feedback-friendly',
      hero_h1_html: 'Creative video <span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">editing</span> for creators',
      hero_cta_portfolio: 'View portfolio',
      hero_cta_contact: 'Contact me',
      hero_preview_label: 'Portfolio preview',
      services_title: 'Services',
      service1_title: 'Shorts / TikTok',
      service1_desc: 'Dynamic cuts, styled subtitles.',
      service2_title: 'Long videos',
      service2_desc: 'Storytelling, pacing, graphics, multi-platform export.',
      service3_title: 'Jingle',
      service3_desc: 'Intro/outro, logo reveal, impactful sounds.',
      portfolio_title: 'Portfolio',
      portfolio_more: 'Request more samples →',
      portfolio_shorts: 'Shorts',
      portfolio_longs: 'Long videos',
      open_youtube: 'Open on YouTube ↗',
      contact_title: 'Contact:',
      contact_email_label: 'email:',
      contact_instagram_label: 'Instagram:',
      contact_discord_label: 'Discord:',
      copy_btn: '📋 Copy',
      copied: '✔ Copied',
      form_name_label: 'Name',
      form_name_ph: 'Your name',
      form_email_label: 'Email',
      form_email_ph: 'you@email.com',
      form_message_label: 'Message',
      form_message_ph: 'Tell me about your project...',
      form_send: 'Send',
      auth_signup_title: 'Create account',
      auth_login_title: 'Sign in',
      auth_forgot_title: 'Reset password',
      auth_email: 'Email',
      auth_password: 'Password',
      auth_create_account: 'Create account',
      auth_login: 'Sign in',
      auth_send_link: 'Send link',
      auth_already_account: 'Already have an account?',
      auth_no_account: "No account?",
      auth_sign_in: 'Sign in',
      auth_sign_up: 'Sign up',
      auth_back_login: 'Back to sign in',
      auth_forgot: 'Forgot password?',
      auth_unverified_notice: 'Email not verified.',
      auth_resend_verify: 'Resend verification email'
    },
    es: {
      home: 'Inicio',
      services: 'Servicios',
      portfolio: 'Portafolio',
      videos: 'Videos',
      contact: 'Contacto',
      account_login: 'Cuenta / Iniciar sesión',
      my_account: 'Mi cuenta',
      testimonials: 'Opiniones',
      all_videos_title: 'Todos los videos',
      footer_rights: 'Todos los derechos reservados.',
      hero_badge_1: 'Asequible',
      hero_badge_2: 'Abierto a comentarios',
      hero_h1_html: 'Edición de video <span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">creativa</span> para creadores',
      hero_cta_portfolio: 'Ver portafolio',
      hero_cta_contact: 'Contáctame',
      hero_preview_label: 'Vista previa del portafolio',
      services_title: 'Servicios',
      service1_title: 'Shorts / TikTok',
      service1_desc: 'Cortes dinámicos, subtítulos con estilo.',
      service2_title: 'Videos largos',
      service2_desc: 'Narrativa, ritmo, gráficos, exportación multiplataforma.',
      service3_title: 'Jingle',
      service3_desc: 'Intro/outro, logo reveal, sonidos impactantes.',
      portfolio_title: 'Portafolio',
      portfolio_more: 'Pedir más ejemplos →',
      portfolio_shorts: 'Shorts',
      portfolio_longs: 'Videos largos',
      open_youtube: 'Abrir en YouTube ↗',
      contact_title: 'Contacto:',
      contact_email_label: 'email:',
      contact_instagram_label: 'Instagram:',
      contact_discord_label: 'Discord:',
      copy_btn: '📋 Copiar',
      copied: '✔ Copiado',
      form_name_label: 'Nombre',
      form_name_ph: 'Tu nombre',
      form_email_label: 'Email',
      form_email_ph: 'tu@email.com',
      form_message_label: 'Mensaje',
      form_message_ph: 'Cuéntame sobre tu proyecto...',
      form_send: 'Enviar',
      auth_signup_title: 'Crear cuenta',
      auth_login_title: 'Iniciar sesión',
      auth_forgot_title: 'Restablecer la contraseña',
      auth_email: 'Correo',
      auth_password: 'Contraseña',
      auth_create_account: 'Crear cuenta',
      auth_login: 'Iniciar sesión',
      auth_send_link: 'Enviar enlace',
      auth_already_account: '¿Ya tienes cuenta?',
      auth_no_account: '¿No tienes cuenta?',
      auth_sign_in: 'Iniciar sesión',
      auth_sign_up: 'Registrarse',
      auth_back_login: 'Volver a iniciar sesión',
      auth_forgot: '¿Olvidaste tu contraseña?',
      auth_unverified_notice: 'Correo no verificado.',
      auth_resend_verify: 'Reenviar correo de verificación'
    },
    de: {
      home: 'Start',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      videos: 'Videos',
      contact: 'Kontakt',
      account_login: 'Konto / Anmelden',
      my_account: 'Mein Konto',
      testimonials: 'Bewertungen',
      all_videos_title: 'Alle Videos',
      footer_rights: 'Alle Rechte vorbehalten.',
      hero_badge_1: 'Preiswert',
      hero_badge_2: 'Feedback-freundlich',
      hero_h1_html: 'Kreativer Video-<span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">Schnitt</span> für Creator',
      hero_cta_portfolio: 'Portfolio ansehen',
      hero_cta_contact: 'Kontakt aufnehmen',
      hero_preview_label: 'Portfolio-Vorschau',
      services_title: 'Leistungen',
      service1_title: 'Shorts / TikTok',
      service1_desc: 'Dynamische Schnitte, stylische Untertitel.',
      service2_title: 'Lange Videos',
      service2_desc: 'Storytelling, Rhythmus, Grafik, Multi-Plattform-Export.',
      service3_title: 'Jingle',
      service3_desc: 'Intro/Outro, Logo-Reveal, prägnante Sounds.',
      portfolio_title: 'Portfolio',
      portfolio_more: 'Mehr Beispiele anfragen →',
      portfolio_shorts: 'Shorts',
      portfolio_longs: 'Lange Videos',
      open_youtube: 'Auf YouTube öffnen ↗',
      contact_title: 'Kontakt:',
      contact_email_label: 'email:',
      contact_instagram_label: 'Instagram:',
      contact_discord_label: 'Discord:',
      copy_btn: '📋 Kopieren',
      copied: '✔ Kopiert',
      form_name_label: 'Name',
      form_name_ph: 'Dein Name',
      form_email_label: 'E-Mail',
      form_email_ph: 'du@email.com',
      form_message_label: 'Nachricht',
      form_message_ph: 'Erzähl mir von deinem Projekt...',
      form_send: 'Senden',
      auth_signup_title: 'Konto erstellen',
      auth_login_title: 'Anmelden',
      auth_forgot_title: 'Passwort zurücksetzen',
      auth_email: 'E-Mail',
      auth_password: 'Passwort',
      auth_create_account: 'Konto erstellen',
      auth_login: 'Anmelden',
      auth_send_link: 'Link senden',
      auth_already_account: 'Bereits ein Konto?',
      auth_no_account: 'Kein Konto?',
      auth_sign_in: 'Anmelden',
      auth_sign_up: 'Registrieren',
      auth_back_login: 'Zurück zur Anmeldung',
      auth_forgot: 'Passwort vergessen?',
      auth_unverified_notice: 'E-Mail nicht verifiziert.',
      auth_resend_verify: 'Bestätigungs-E-Mail erneut senden'
    },
    it: {
      home: 'Home',
      services: 'Servizi',
      portfolio: 'Portfolio',
      videos: 'Video',
      contact: 'Contatto',
      account_login: 'Account / Accedi',
      my_account: 'Il mio account',
      testimonials: 'Testimonianze',
      all_videos_title: 'Tutti i video',
      footer_rights: 'Tutti i diritti riservati.',
      hero_badge_1: 'Accessibile',
      hero_badge_2: 'Attento ai feedback',
      hero_h1_html: 'Montaggio video <span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">creativo</span> per creator',
      hero_cta_portfolio: 'Vedi portfolio',
      hero_cta_contact: 'Contattami',
      hero_preview_label: 'Anteprima portfolio',
      services_title: 'Servizi',
      service1_title: 'Shorts / TikTok',
      service1_desc: 'Tagli dinamici, sottotitoli stilizzati.',
      service2_title: 'Video lunghi',
      service2_desc: 'Storytelling, ritmo, grafica, export multipiattaforma.',
      service3_title: 'Jingle',
      service3_desc: 'Intro/outro, svelamento logo, suoni incisivi.',
      portfolio_title: 'Portfolio',
      portfolio_more: 'Richiedi altri esempi →',
      portfolio_shorts: 'Shorts',
      portfolio_longs: 'Video lunghi',
      open_youtube: 'Apri su YouTube ↗',
      contact_title: 'Contatto:',
      contact_email_label: 'email:',
      contact_instagram_label: 'Instagram:',
      contact_discord_label: 'Discord:',
      copy_btn: '📋 Copia',
      copied: '✔ Copiato',
      form_name_label: 'Nome',
      form_name_ph: 'Il tuo nome',
      form_email_label: 'Email',
      form_email_ph: 'tu@email.com',
      form_message_label: 'Messaggio',
      form_message_ph: 'Parlami del tuo progetto...',
      form_send: 'Invia',
      auth_signup_title: 'Crea account',
      auth_login_title: 'Accedi',
      auth_forgot_title: 'Reimposta password',
      auth_email: 'Email',
      auth_password: 'Password',
      auth_create_account: 'Crea account',
      auth_login: 'Accedi',
      auth_send_link: 'Invia link',
      auth_already_account: 'Hai già un account?',
      auth_no_account: 'Non hai un account?',
      auth_sign_in: 'Accedi',
      auth_sign_up: 'Registrati',
      auth_back_login: 'Torna all’accesso',
      auth_forgot: 'Password dimenticata?',
      auth_unverified_notice: 'Email non verificata.',
      auth_resend_verify: 'Reinvia email di verifica'
    },
    'zh-Hant': {
      home: '首頁',
      services: '服務',
      portfolio: '作品集',
      videos: '影片',
      contact: '聯絡',
      account_login: '帳戶 / 登入',
      my_account: '我的帳戶',
      testimonials: '評價',
      all_videos_title: '全部影片',
      footer_rights: '版權所有。',
      // Home page
      hero_badge_1: '平價',
      hero_badge_2: '重視回饋',
      hero_h1_html: '為創作者提供<span class="text-transparent bg-clip-text animated-gradient" style="--g1:#7C3AED; --g2:#EC4899;">創意</span>影片剪輯',
      hero_cta_portfolio: '查看作品集',
      hero_cta_contact: '聯絡我',
      hero_preview_label: '作品集預覽',
      services_title: '服務',
      service1_title: 'Shorts / TikTok',
      service1_desc: '動態剪輯、風格化字幕。',
      service2_title: '長影片',
      service2_desc: '敘事、節奏、圖像包裝、多平台輸出。',
      service3_title: 'Jingle',
      service3_desc: '片頭/片尾、Logo 展示、強烈音效。',
      portfolio_title: '作品集',
      portfolio_more: '索取更多範例 →',
      portfolio_shorts: '短片',
      portfolio_longs: '長片',
      open_youtube: '在 YouTube 開啟 ↗',
      contact_title: '聯絡方式：',
      contact_email_label: '電子郵件：',
      contact_instagram_label: 'Instagram：',
      contact_discord_label: 'Discord：',
      copy_btn: '📋 複製',
      copied: '✔ 已複製',
      form_name_label: '姓名',
      form_name_ph: '你的名字',
      form_email_label: '電子郵件',
      form_email_ph: '你的郵箱',
      form_message_label: '訊息',
      form_message_ph: '告訴我你的專案...',
      form_send: '送出',
      // Auth pages
      auth_signup_title: '建立帳戶',
      auth_login_title: '登入',
      auth_forgot_title: '重設密碼',
      auth_email: '電子郵件',
      auth_password: '密碼',
      auth_create_account: '建立帳戶',
      auth_login: '登入',
      auth_send_link: '寄送連結',
      auth_already_account: '已有帳戶？',
      auth_no_account: '尚未有帳戶？',
      auth_sign_in: '登入',
      auth_sign_up: '註冊',
      auth_back_login: '返回登入',
      auth_forgot: '忘記密碼？',
      auth_unverified_notice: '電子郵件未驗證。',
      auth_resend_verify: '重新寄送驗證信'
    }
  };

  let current = localStorage.getItem('lang') || 'fr';
  if (!langs.includes(current)) current = 'fr';

  function apply(page){
    const dict = t[current];
    const $ = (sel)=> document.querySelector(sel);
    const nav = {
      home: document.querySelector('a[href="index.html"]'),
      services: document.querySelector('a[href="#services"], a[href="index.html#services"]'),
      portfolio: document.querySelector('a[href="#portfolio"], a[href="index.html#portfolio"]'),
      videos: document.querySelector('a[href="videos.html"]'),
      contact: document.querySelector('a[href="#contact"], a[href="index.html#contact"]'),
      testimonials: document.querySelector('a[href="#avis"]')
    };
    if (nav.home) nav.home.textContent = dict.home;
    if (nav.services) nav.services.textContent = dict.services;
    if (nav.portfolio) nav.portfolio.textContent = dict.portfolio;
    if (nav.videos) nav.videos.textContent = dict.videos;
    if (nav.contact) nav.contact.textContent = dict.contact;
    if (nav.testimonials) nav.testimonials.textContent = dict.testimonials;

    const accountBtn = document.getElementById('account-btn');
    if (accountBtn && !accountBtn.dataset.authState) accountBtn.textContent = dict.account_login;

    const titleAllVideos = document.getElementById('title-all-videos');
    if (titleAllVideos) titleAllVideos.textContent = dict.all_videos_title;

    const footer = document.querySelector('footer');
    if (footer) {
      const yearSpan = document.getElementById('y');
      const year = yearSpan ? yearSpan.textContent : new Date().getFullYear();
      footer.innerHTML = `© <span id="y">${year}</span> Glazo. ${dict.footer_rights}`;
    }

    // Generic data-i18n mapping (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) {
        el.textContent = dict[key];
      }
    });

    // data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const key = el.getAttribute('data-i18n-html');
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // data-i18n-placeholder (placeholder attribute)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Localize copy buttons label and copied text
    const copyEmail = document.getElementById('copy-email');
    const copyDiscord = document.getElementById('copy-discord');
    if (copyEmail){ copyEmail.textContent = dict.copy_btn; copyEmail.dataset.copied = dict.copied; }
    if (copyDiscord){ copyDiscord.textContent = dict.copy_btn; copyDiscord.dataset.copied = dict.copied; }
  }

  function setLang(lang, page){
    if (!langs.includes(lang)) return;
    current = lang;
    localStorage.setItem('lang', lang);
    apply(page);
  }

  function init(selectEl, page){
    if (selectEl){
      if (selectEl.querySelector(`option[value="${current}"]`)) selectEl.value = current;
      selectEl.addEventListener('change', ()=> setLang(selectEl.value, page));
    }
    apply(page);
  }

  function setAuthState(user){
    const dict = t[current];
    const btn = document.getElementById('account-btn');
    if (!btn) return;
    if (user){
      btn.dataset.authState = 'in';
      btn.textContent = dict.my_account;
    } else {
      btn.dataset.authState = '';
      btn.textContent = dict.account_login;
    }
  }

  return { init, setLang, setAuthState };
})();
