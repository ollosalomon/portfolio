// Create a translations object with all text content in both languages
const translations = {
    en: {
      // Navigation
      nav__logo: "Ollo Salomon",
      home: "Home",
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
      download_cv: "Download CV",
      // Home section
      home__title: "Hi,<br>I'am <span class='home__title-color'>Ollo Salomon</span><br> Data Engineer",
      contact_button: "Contact",
      
      // About section
      about_title: "About",
      about_subtitle: "I'am Ollo Salomon",
      about_text: "Data engineer with over 2 years of experience in ETL pipeline design, complex data management and development of analytical solutions using modern technologies. I have contributed to data integration and automation projects, with a particular interest in AI and natural language processing.",
      
      // Skills section
      skills_title: "Skills",
      development: "Development",
      storage: "Storage",
      cloud_containers: "Cloud and containers",
      metrics_visualization: "Metrics & Visualisation",
      
      // Work section
      work_title: "Work",
      project1_title: "ETL Pipeline with Airflow, PySpark and PostgreSQL",
      project1_desc: "Orchestration of an ETL pipeline for analyzing data from autonomous vehicle sensors. Technologies: Apache Airflow, PySpark, PostgreSQL, Docker.",
      project2_title: "Twitter Pipeline for Sentiment Analysis",
      project2_desc: "Real-time tweet extraction, data preprocessing, sentiment analysis with an NLP model hosted on Hugging Face, report generation and interactive visualizations with Power BI.",
      project3_title: "CSV to PostgreSQL",
      project3_desc: "Importing and saving data to PostgreSQL from CSV files. Technologies: Docker, Mkdocs, Pandas, Python, PostgreSQL.",
      project4_title: "Data Monitoring System",
      project4_desc: "Complete monitoring system with file generation and loading via FastAPI, metric collection with Prometheus and visualization with Grafana dashboards. Technologies: Docker, Python, MinIO, Prometheus, Grafana.",
      project5_title: "MinIO Data Storage Project",
      project5_desc: "S3-compatible object storage system using MinIO with web administration interface and Grafana integration for metrics visualization. Fully containerized deployment with Docker Compose and custom configuration.",
      project6_title: "Arabic Hate Speech Detection System based on AraBERT",
      project6_desc: "IEEE Publication: Development of an automatic hate speech detection system in Arabic language based on the AraBERT model, with significant results in terms of accuracy.",
      project8_title: "Data Engineering Project – Netethic Solution (Smart Conseil)",
      project8_desc: "Participated in the development of Netethic, an innovative software solution to combat bullying and cyberbullying. Designed a GDPR-compliant system for scraping and analyzing social profiles using FastAPI, PostgreSQL, and Apache Airflow. Built robust ETL/ELT pipelines with Python and SQL, resulting in a 30% reduction in processing time. Accurate implementation of business indicators defined by Product Owners (processing time, types of bullying, alerts). Performance optimization on PostgreSQL, MySQL, and MongoDB. CI/CD deployment with Docker and GitLab, orchestration via Portainer. KPI visualization via Power BI and real-time monitoring with Grafana & Prometheus.",
      project9_title: "RAG application for personalized questions and answers",
      project9_desc: "This AI application, developed with Streamlit, uses a Large Language Model (LLM) to answer questions from PDF documents about an entity (company, person, etc.). It combines advanced retrieval-augmented generation (RAG) techniques and modern AI tools to provide accurate and contextualized answers.",

      // Contact section
      contact_title: "Contact",
      name_placeholder: "Name",
      email_placeholder: "Email",
      message_placeholder: "Message",
      send_button: "Send",
      
      // Footer
      footer_title: "Ollo Salomon",
      footer_copy: "© Ollosalomon. All rights reserved"
    },
    fr: {
      // Navigation
      nav__logo: "Ollo Salomon",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      work: "Projets",
      contact: "Contact",
      download_cv: "Télécharger mon CV",

      // Home section
      home__title: "Hello,<br>Je suis <span class='home__title-color'>Ollo Salomon</span><br> Ingénieur Data",
      contact_button: "Contact",
      
      // About section
      about_title: "À propos",
      about_subtitle: "Je suis Ollo Salomon",
      about_text: "Ingénieur data avec plus de 2 ans d'expérience dans la conception de pipelines ETL, la gestion complexe de données et le développement de solutions analytiques utilisant des technologies modernes. J'ai contribué à des projets d'intégration et d'automatisation de données, avec un intérêt particulier pour l'IA et le traitement du langage naturel.",
      
      // Skills section
      skills_title: "Compétences",
      development: "Développement",
      storage: "Stockage",
      cloud_containers: "Cloud et conteneurs",
      metrics_visualization: "Métriques & Visualisation",
      
      // Work section
      work_title: "Projets",
      project1_title: "Pipeline ETL avec Airflow, PySpark et PostgreSQL",
      project1_desc: "Orchestration d'un pipeline ETL pour l'analyse de données issues de capteurs de véhicules autonomes. Technologies : Apache Airflow, PySpark, PostgreSQL, Docker.",
      project2_title: "Pipeline Twitter pour l'Analyse de Sentiments",
      project2_desc: "Extraction de tweets en temps réel, prétraitement des données, analyse des sentiments avec un modèle NLP hébergé sur Hugging Face, génération de rapports et visualisations interactives avec Power BI.",
      project3_title: "CSV vers PostgreSQL",
      project3_desc: "Importation et sauvegarde de données dans PostgreSQL à partir de fichiers CSV. Technologies : Docker, Mkdocs, Pandas, Python, PostgreSQL.",
      project4_title: "Système de Monitoring de Données",
      project4_desc: "Système complet de monitoring avec génération et chargement de fichiers via FastAPI, collecte de métriques avec Prometheus et visualisation avec des tableaux de bord Grafana. Technologies : Docker, Python, MinIO, Prometheus, Grafana.",
      project5_title: "Projet de Stockage de Données avec MinIO",
      project5_desc: "Système de stockage objet compatible S3 utilisant MinIO avec interface d'administration web et intégration Grafana pour la visualisation des métriques. Déploiement entièrement conteneurisé avec Docker Compose et configuration personnalisée.",
      project6_title: "Système de Détection de Discours Haineux en Arabe basé sur AraBERT",
      project6_desc: "Publication IEEE : Développement d'un système de détection automatique de discours haineux en langue arabe basé sur le modèle AraBERT, avec des résultats significatifs en matière de précision.",
      project8_title: "Data Engineering Project – Solution Netethic (Smart Conseil)",
      project8_desc: "Participation au développement de Netethic, une solution logicielle innovante de lutte contre le harcèlement scolaire et le cyberharcèlement. Conception d’un système RGPD-compliant de scraping et d’analyse de profils sociaux à l’aide de FastAPI, PostgreSQL et Apache Airflow. Réalisation de pipelines ETL/ELT robustes avec Python et SQL, ayant permis une réduction de 30 % des temps de traitement. Implémentation précise des indicateurs métier définis par les Product Owners (temps de traitement, typologies de harcèlement, alertes). Optimisation des performances sur PostgreSQL, MySQL et MongoDB. Déploiement CI/CD avec Docker et GitLab, orchestration via Portainer. Visualisation des KPIs via Power BI et supervision temps réel avec Grafana & Prometheus.",
      project9_title: "Application RAG pour des questions-réponses personnalisées",
      project9_desc: "Cette application d'IA, développée avec Streamlit, utilise un Large Language Model (LLM) pour répondre à des questions à partir de documents PDF concernant une entité (entreprise, personne, etc.). Elle combine des techniques avancées de génération augmentée par récupération (RAG) et des outils modernes d'IA pour offrir des réponses précises et contextualisées.",

      // Contact section
      contact_title: "Contact",
      name_placeholder: "Nom",
      email_placeholder: "Email",
      message_placeholder: "Message",
      send_button: "Envoyer",
      
      // Footer
      footer_title: "Ollo Salomon",
      footer_copy: "© Ollosalomon. Tous droits réservés"
    }
  };
  
  // Initialize default language
  let currentLanguage = 'en';

// Fonction utilitaire pour appliquer la traduction
function applyTranslation(element, key) {
    if (key === 'home__title' || key.includes('_title') && translations[currentLanguage][key].includes('<span')) {
      element.innerHTML = translations[currentLanguage][key];
    } else {
      element.textContent = translations[currentLanguage][key];
    }
  }
  
  // Modifions la fonction changeLanguage pour gérer le cache
  function changeLanguage(language) {
    if (currentLanguage !== language) {
      currentLanguage = language;
      localStorage.setItem('preferredLanguage', language);
  
      // Vider le cache des autres langues
      const otherLanguage = language === 'en' ? 'fr' : 'en';
      localStorage.removeItem(`translations_${otherLanguage}`);
  
      translatePage();
  
      // Mettre à jour le bouton de langue
      document.getElementById('current-lang').textContent = language.toUpperCase();
    }
  }
  
  // Initialisation au chargement
  document.addEventListener('DOMContentLoaded', initTranslation);
  
// Fonction pour appliquer les traductions avec cache
function translatePage() {
    const cacheKey = `translations_${currentLanguage}`;
    let cachedTranslations = localStorage.getItem(cacheKey);
  
    if (!cachedTranslations) {
      // Si les traductions ne sont pas en cache, les appliquer et les sauvegarder
      const elements = document.querySelectorAll('[data-translate]');
      cachedTranslations = {};
  
      elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
          cachedTranslations[key] = translations[currentLanguage][key];
          applyTranslation(element, key);
        }
  
        // Gérer les placeholders pour les champs de formulaire
        if (element.hasAttribute('placeholder')) {
          const placeholderKey = element.getAttribute('data-placeholder');
          if (translations[currentLanguage][placeholderKey]) {
            element.setAttribute('placeholder', translations[currentLanguage][placeholderKey]);
          }
        }
      });
  
      // Enregistrer les traductions dans le cache
      localStorage.setItem(cacheKey, JSON.stringify(cachedTranslations));
    } else {
      // Appliquer les traductions depuis le cache
      cachedTranslations = JSON.parse(cachedTranslations);
      for (const [key, value] of Object.entries(cachedTranslations)) {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) applyTranslation(element, key);
      }
    }
  }
  // Function to initialize the translation system
  function initTranslation() {
    // Add data-translate attributes to all elements needing translation
    const elementsToTranslate = [
      { selector: '.nav__logo', key: 'nav__logo' },
      { selector: '.nav__list li:nth-child(1) .nav__link', key: 'home' },
      { selector: '.nav__list li:nth-child(2) .nav__link', key: 'about' },
      { selector: '.nav__list li:nth-child(3) .nav__link', key: 'skills' },
      { selector: '.nav__list li:nth-child(4) .nav__link', key: 'work' },
      { selector: '.nav__list li:nth-child(5) .nav__link', key: 'contact' },
      { selector: '.nav__list li:nth-child(6) .nav__link', key: 'download_cv' },
      { selector: '.home__title', key: 'home__title' },
      { selector: '.home__data .button', key: 'contact_button' },
      { selector: '#about .section-title', key: 'about_title' },
      { selector: '.about__subtitle', key: 'about_subtitle' },
      { selector: '.about__text', key: 'about_text' },
      { selector: '#skills .section-title', key: 'skills_title' },
      { selector: '.skills__column:nth-child(1) .skills__subtitle', key: 'development' },
      { selector: '.skills__column:nth-child(2) .skills__subtitle', key: 'storage' },
      { selector: '.skills__column:nth-child(3) .skills__subtitle', key: 'cloud_containers' },
      { selector: '.skills__column:nth-child(4) .skills__subtitle', key: 'metrics_visualization' },
      { selector: '#work .section-title', key: 'work_title' },
      { selector: '.work__img:nth-child(1) .work__desc h3', key: 'project1_title' },
      { selector: '.work__img:nth-child(1) .work__desc p', key: 'project1_desc' },
      { selector: '.work__img:nth-child(2) .work__desc h3', key: 'project2_title' },
      { selector: '.work__img:nth-child(2) .work__desc p', key: 'project2_desc' },
      { selector: '.work__img:nth-child(3) .work__desc h3', key: 'project3_title' },
      { selector: '.work__img:nth-child(3) .work__desc p', key: 'project3_desc' },
      { selector: '.work__img:nth-child(4) .work__desc h3', key: 'project4_title' },
      { selector: '.work__img:nth-child(4) .work__desc p', key: 'project4_desc' },
      { selector: '.work__img:nth-child(5) .work__desc h3', key: 'project5_title' },
      { selector: '.work__img:nth-child(5) .work__desc p', key: 'project5_desc' },
      { selector: '.work__img:nth-child(6) .work__desc h3', key: 'project6_title' },
      { selector: '.work__img:nth-child(6) .work__desc p', key: 'project6_desc' },
      { selector: '.work__img:nth-child(7) .work__desc h3', key: 'project8_title' },
      { selector: '.work__img:nth-child(7) .work__desc p', key: 'project8_desc' },
      { selector: '.work__img:nth-child(7) .work__desc h3', key: 'project9_title' },
      { selector: '.work__img:nth-child(7) .work__desc p', key: 'project9_desc' },
      { selector: '#contact .section-title', key: 'contact_title' },
      { selector: '.contact__form input[type="submit"]', key: 'send_button' },
      { selector: '.footer__title', key: 'footer_title' },
      { selector: '.footer__copy', key: 'footer_copy' }
    ];
    
    // Form placeholders
    const placeholders = [
      { selector: 'input[name="name"]', key: 'name_placeholder' },
      { selector: 'input[name="email"]', key: 'email_placeholder' },
      { selector: 'textarea[name="message"]', key: 'message_placeholder' }
    ];
    
    // Add data-translate attributes
    elementsToTranslate.forEach(item => {
      const element = document.querySelector(item.selector);
      if (element) {
        element.setAttribute('data-translate', item.key);
      }
    });
    
    // Add data-placeholder attributes
    placeholders.forEach(item => {
      const element = document.querySelector(item.selector);
      if (element) {
        element.setAttribute('data-translate', item.key);
        element.setAttribute('data-placeholder', item.key);
      }
    });
    
    // Create and add language selector
    createLanguageSelector();
    
    // Check for stored language preference
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      currentLanguage = storedLanguage;
    } else {
      // Use browser language as default if available
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'fr') {
        currentLanguage = 'fr';
      }
    }
    
    // Initial translation
    translatePage();
    
    // Update language selector state
    document.getElementById('lang-en').classList.toggle('active-lang', currentLanguage === 'en');
    document.getElementById('lang-fr').classList.toggle('active-lang', currentLanguage === 'fr');
  }
  
// Fonction pour créer le sélecteur de langue
function createLanguageSelector() {
    // Au lieu de l'ajouter au header, ajoutons-le directement à la barre de navigation
    const navList = document.querySelector('.nav__list');
    
    // Créer le conteneur du sélecteur de langue comme élément de navigation
    const langListItem = document.createElement('li');
    langListItem.className = 'nav__item';
    
    // Créer le bouton avec icône globe et menu déroulant
    langListItem.innerHTML = `
      <div class="lang-dropdown">
        <button id="language-btn" class="lang-btn-globe nav__link">
          <i class="fas fa-globe"></i>
          <span id="current-lang">${currentLanguage.toUpperCase()}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="lang-dropdown-content">
          <a href="#" id="lang-en" onclick="changeLanguage('en'); return false;">EN</a>
          <a href="#" id="lang-fr" onclick="changeLanguage('fr'); return false;">FR</a>
        </div>
      </div>
    `;
    
    // Ajouter le sélecteur de langue à la fin de la liste de navigation
    navList.appendChild(langListItem);
    
    // Ajouter les icônes Font Awesome si elles ne sont pas déjà incluses
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }
    
    // Ajouter du CSS pour le nouveau sélecteur de langue
    const style = document.createElement('style');
    style.textContent = `
      .lang-dropdown {
        position: relative;
        display: inline-block;
      }
      
      .lang-btn-globe {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        font-size: var(--normal-font-size);
        transition: color 0.3s;
      }
      
      .fas.fa-globe {
        margin-right: 0.3rem;
      }
      
      .fas.fa-chevron-down {
        margin-left: 0.3rem;
        font-size: 0.8rem;
      }
      
      .lang-dropdown-content {
        display: none;
        position: absolute;
        background-color: var(--bg-color);
        min-width: 100px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        right: 0;
        border-radius: 4px;
        overflow: hidden;
      }
      
      .lang-dropdown-content a {
        color: var(--second-color);
        padding: 0.75rem 1rem;
        text-decoration: none;
        display: block;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;
      }
      
      .lang-dropdown-content a:hover {
        background-color: rgba(0,0,0,0.1);
        color: var(--first-color);
      }
      
      .lang-dropdown:hover .lang-dropdown-content {
        display: block;
      }
      
      /* Adaptation pour le menu mobile */
      @media screen and (max-width: 768px) {
        .lang-dropdown {
          margin-top: 1rem;
        }
        
        .lang-dropdown-content {
          position: relative;
          box-shadow: none;
          margin-top: 0.5rem;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  function changeLanguage(language) {
    currentLanguage = language;
    translatePage();
    
    // Mettre à jour le texte affiché dans le bouton
    document.getElementById('current-lang').textContent = language.toUpperCase();
    
    // Stocker la préférence de l'utilisateur
    localStorage.setItem('preferredLanguage', language);
  }
  // Initialize translation system when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initTranslation);
