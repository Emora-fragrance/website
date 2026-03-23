// ============================================
// DARK MODE / LIGHT MODE THEME SWITCHER
// ============================================
const themeToggle = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('emoraTheme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('emoraTheme', theme);
    
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.setAttribute('title', 'Switch to Light Mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
});

// Theme toggle button click handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// ============================================
// TRANSLATIONS DATA
// ============================================
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_perfumes: "Perfumes",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        
        // Hero Section
        hero_tagline: "woven by time, merging in the trace of an unforgettable scent",
        btn_shop: "Shop Now",
        
        // About Section
        about_title: "The Essence of Elegance",
        about_desc1: "ÉMORA is a luxury perfume brand inspired by the timeless elegance of Paris and the sophistication of modern French craftsmanship. Each fragrance is meticulously created to tell a unique story of luxury, femininity, and refinement.",
        about_desc2: "Our collection combines the finest ingredients with artistic vision, creating scents that transcend time and captivate the senses. ÉMORA is more than a perfume—it's an expression of your unique personality and style.",
        about_story_start: "Émora began with one simple question:<br><em>What if feelings could be worn?</em>",
        about_story_desc1: "From there, each scent is crafted not just with ingredients, but with emotion. Some are inspired by the warmth of an unforgettable embrace. Others are born from unspoken longing. Some bring the peace of coming home after a long journey.",
        about_story_desc2: "We don't create perfumes just to smell good.",
        about_story_memory: "We create memories.",
        about_story_desc3: "We weave emotions, then transform them into something that can stay on the skin and live with time.",
        about_story_desc4: "Each Émora spray is a different story. Sometimes gentle, sometimes mysterious, sometimes leaving traces that are hard to forget like someone who once stopped by, then settled in memory.",
        about_story_desc5: "Émora is not about becoming someone else.",
        about_story_authentic: "It's about becoming the most honest version of yourself.",
        about_story_desc6: "Because for us, the best fragrance is not the strongest…",
        about_story_feel: "but the one that feels the most.",
        placeholder_about: "✧ Signature Collection ✧",
        
        // Products Section
        products_title: "Our Perfumes",
        filter_all: "All",
        filter_edp: "EDP",
        filter_extrait: "Extrait",
        product_type_edp: "EDP",
        product_type_extrait: "EXTRAIT",
        btn_view_details: "View Details",
        product_story: "Story Behind",
        product_notes: "Notes Description",
        btn_shop_now: "Shop Now",
        
        // Product Descriptions
        product_belle_fleur: "A delicate blend of rose and jasmine that captures the essence of a blooming garden.",
        product_dots_vanille: "Warm vanilla notes blended with subtle spices create an irresistible, comforting fragrance.",
        product_lumer_citrus: "Serika is a variant with a soft and sweet vanilla scent, feminine and elegant, combining a gentle sweetness with a calming fresh touch.",
        product_be_influencer: "A bold and empowering fragrance that makes a statement wherever you go.",
        product_douce_vanille: "Sweet vanilla powdery aroma with a touch of fresh natural",
        product_nuit_elixir: "Citrus floral aroma with sweet vanilla fresh combination creating an authentic distinctive fragrance.",
        product_baie_en_fleurs: "Aroma manis romantic buah dengan kombinasi sweet candy & caramel",
        
        // Testimonials Section
        testimonials_title: "What Our Customers Say",
        testimonial_1: '"ÉMORA perfumes are absolutely divine! The quality and elegance are unmatched. I\'ve never felt more confident wearing a fragrance."',
        testimonial_2: '"The attention to detail and sophistication in every perfume is remarkable. ÉMORA has become my daily indulgence and I couldn\'t ask for anything better."',
        testimonial_3: '"Investing in ÉMORA was the best decision for my fragrance collection. Each scent tells a beautiful story and lasts throughout the entire day."',
        
        // Social Section
        social_title: "Connect With Us",
        social_subtitle: "Follow ÉMORA for exclusive updates and special offers",
        
        // TikTok Modal
        tiktok_choose: "Choose TikTok Channel",
        tiktok_subtitle: "Select which channel you want to follow",
        tiktok_live: "Live Channel",
        tiktok_live_desc: "Watch live streaming & daily content",
        tiktok_store: "Official Store",
        tiktok_store_desc: "Shop our products & exclusive deals",
        
        // Shop Options
        shop_choose: "Choose Your Shopping Platform",
        shop_whatsapp: "WhatsApp",
        shop_whatsapp_desc: "Chat with us directly for orders",
        
        // Footer
        footer_tagline: "Luxury Perfume Brand",
        footer_nav: "Navigation",
        footer_home: "Home",
        footer_about: "About",
        footer_perfumes: "Perfumes",
        footer_reviews: "Reviews",
        footer_follow: "Follow Us",
        footer_copyright: "© 2026 ÉMORA Perfume. All rights reserved."
    },
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_perfumes: "Parfum",
        nav_reviews: "Ulasan",
        nav_contact: "Kontak",
        
        // Hero Section
        hero_tagline: "dirajut oleh waktu, menyatu dalam jejak aroma yang tak terlupa",
        btn_shop: "Belanja Sekarang",
        
        // About Section
        about_title: "Esensi Elegance",
        about_desc1: "ÉMORA adalah merek parfum mewah yang terinspirasi dari keanggunan abadi Paris dan kecanggihan keahlian Prancis modern. Setiap wewangian dibuat dengan cermat untuk menceritakan kisah unik tentang kemewahan, feminitas, dan kesempurnaan.",
        about_desc2: "Koleksi kami menggabungkan bahan-bahan terbaik dengan visi artistik, menciptakan aromaterapi yang melampaui waktu dan memikat indra. ÉMORA bukan hanya parfum—ini adalah ekspresi kepribadian dan gaya unik Anda.",
        about_story_start: "Émora dimulai dari satu pertanyaan sederhana:<br><em>Bagaimana jika perasaan bisa dikenakan?</em>",
        about_story_desc1: "Dari sana, setiap aroma diracik bukan hanya dengan bahan, tapi dengan rasa. Ada yang terinspirasi dari hangatnya pelukan yang sulit dilupakan. Ada yang lahir dari rindu yang tak sempat diungkapkan. Ada juga yang membawa ketenangan seperti pulang, setelah perjalanan panjang.",
        about_story_desc2: "Kami tidak menciptakan parfum untuk sekadar wangi.",
        about_story_memory: "Kami menciptakan memori.",
        about_story_desc3: "Kami merangkai emosi, lalu mengubahnya menjadi sesuatu yang bisa tinggal di kulit, dan hidup bersama waktu.",
        about_story_desc4: "Setiap semprotan Émora adalah cerita yang berbeda. Kadang lembut, kadang misterius, kadang meninggalkan jejak yang sulit dilupakan seperti seseorang yang pernah singgah, lalu menetap dalam ingatan.",
        about_story_desc5: "Émora bukan tentang menjadi orang lain.",
        about_story_authentic: "Ini tentang menjadi versi paling jujur dari diri sendiri.",
        about_story_desc6: "Karena bagi kami, wangi terbaik bukan yang paling kuat…",
        about_story_feel: "tapi yang paling terasa.",
        placeholder_about: "✧ Koleksi Tanda Tangan ✧",
        
        // Products Section
        products_title: "Parfum Kami",
        filter_all: "Semua",
        filter_edp: "Eau De Parfum",
        filter_extrait: "Extrait",
        product_type_edp: "Eau De Parfum",
        product_type_extrait: "EXTRAIT",
        btn_view_details: "Lihat Detail",
        product_story: "Cerita Di Balik",
        product_notes: "Deskripsi Aroma",
        btn_shop_now: "Belanja Sekarang",
        
        // Product Descriptions
        product_belle_fleur: "Perpaduan halus mawar dan bunga melati yang menangkap esensi taman yang mekar.",
        product_dots_vanille: "Catatan vanilla hangat dipadukan dengan rempah halus menciptakan wewangian yang tak tertahankan dan menenangkan.",
        product_lumer_citrus: "Serika adalah varian dengan karakter aroma yang lembut manis  vanilla, feminin, dan elegan, memadukan nuansa manis yang halus dengan sentuhan segar yang menenangkan.    ",
        product_be_influencer: "Wewangian berani dan memberdayakan yang membuat pernyataan di mana pun Anda berada.",
        product_douce_vanille: "Aroma powdery manis vanilla dengan sentuhan fresh natural",
        product_nuit_elixir: "Aroma bunga citrus dengan kombinasi manis vanilla fresh menghasilkan aroma otentik yang khas",
        product_baie_en_fleurs: "Aroma manis romantic buah dengan kombinasi sweet candy & caramel",
        
        // Testimonials Section
        testimonials_title: "Apa Kata Pelanggan Kami",
        testimonial_1: '"Parfum ÉMORA benar-benar indah! Kualitas dan elegansinya tak tertandingi. Saya tidak pernah merasa lebih percaya diri mengenakan wewangian."',
        testimonial_2: '"Perhatian terhadap detail dan kecanggihan di setiap parfum luar biasa. ÉMORA telah menjadi kemewahan harian saya dan saya tidak bisa meminta lebih."',
        testimonial_3: '"Berinvestasi di ÉMORA adalah keputusan terbaik untuk koleksi wewangian saya. Setiap aroma menceritakan kisah indah dan bertahan sepanjang hari."',
        
        // Social Section
        social_title: "Hubungi Kami",
        social_subtitle: "Ikuti ÉMORA untuk penawaran eksklusif dan promosi spesial",
        
        // TikTok Modal
        tiktok_choose: "Pilih Channel TikTok",
        tiktok_subtitle: "Pilih channel mana yang ingin Anda ikuti",
        tiktok_live: "Channel Live",
        tiktok_live_desc: "Tonton live streaming & konten harian",
        tiktok_store: "Toko Resmi",
        tiktok_store_desc: "Belanja produk & penawaran eksklusif",
        
        // Shop Options
        shop_choose: "Pilih Platform Belanja Anda",
        shop_whatsapp: "WhatsApp",
        shop_whatsapp_desc: "Chat dengan kami langsung untuk pemesanan",
        
        // Footer
        footer_tagline: "Merek Parfum Mewah",
        footer_nav: "Navigasi",
        footer_home: "Beranda",
        footer_about: "Tentang",
        footer_perfumes: "Parfum",
        footer_reviews: "Ulasan",
        footer_follow: "Ikuti Kami",
        footer_copyright: "© 2026 ÉMORA Perfume. Semua hak dilindungi."
    },
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_perfumes: "Parfums",
        nav_reviews: "Avis",
        nav_contact: "Contact",
        
        // Hero Section
        hero_tagline: "tissé par le temps, fusionnant dans la trace d'un parfum inoubliable",
        btn_shop: "Acheter Maintenant",
        
        // About Section
        about_title: "L'Essence de l'Élégance",
        about_desc1: "ÉMORA est une marque de parfum de luxe inspirée par l'élégance intemporelle de Paris et la sophistication de l'artisanat français moderne. Chaque fragrance est méticuleusement créée pour raconter une histoire unique de luxe, de féminité et de raffinement.",
        about_desc2: "Notre collection combine les ingrédients les plus fins avec une vision artistique, créant des senteurs qui transcendent le temps et captivent les sens. ÉMORA n'est pas seulement un parfum—c'est une expression de votre personnalité et de votre style uniques.",
        about_story_start: "Émora a commencé par une question simple :",
        about_story_question: "Et si les sentiments pouvaient être portés ?",
        about_story_desc1: "De là, chaque arôme est élaboré non seulement avec des ingrédients, mais avec émotion. Certains sont inspirés par la chaleur d'une étreinte inoubliable. D'autres naissent d'un désir inexprimé. Certains apportent la paix du retour à la maison après un long voyage.",
        about_story_desc2: "Nous ne créons pas des parfums juste pour sentir bon.",
        about_story_memory: "Nous créons des souvenirs.",
        about_story_desc3: "Nous tissons des émotions, puis les transformons en quelque chose qui peut rester sur la peau et vivre avec le temps.",
        about_story_desc4: "Chaque vaporisation Émora est une histoire différente. Parfois douce, parfois mystérieuse, parfois laissant des traces difficiles à oublier comme quelqu'un qui s'est arrêté un jour, puis s'est installé dans la mémoire.",
        about_story_desc5: "Émora ne consiste pas à devenir quelqu'un d'autre.",
        about_story_authentic: "Il s'agit de devenir la version la plus honnête de soi-même.",
        about_story_desc6: "Parce que pour nous, le meilleur parfum n'est pas le plus fort...",
        about_story_feel: "mais celui qui se fait le plus sentir.",
        placeholder_about: "✧ Collection Signature ✧",
        
        // Products Section
        products_title: "Nos Parfums",
        filter_all: "Tous",
        filter_edp: "EDP",
        filter_extrait: "Extrait",
        product_type_edp: "EDP",
        product_type_extrait: "EXTRAIT",
        btn_view_details: "Voir les Détails",
        product_story: "L'Histoire Derrière",
        product_notes: "Description des Notes",
        btn_shop_now: "Acheter Maintenant",
        
        // Product Descriptions
        product_belle_fleur: "Un délicat mélange de rose et de jasmin qui capture l'essence d'un jardin en fleurs.",
        product_dots_vanille: "Des notes de vanille chaude mélangées à des épices subtiles créent un parfum irrésistible et apaisant.",
        product_lumer_citrus: "Serika est une variante avec un parfum doux et sucré de vanille, féminin et élégant, combinant une douceur délicate avec une touche fraîche apaisante.",
        product_be_influencer: "Un parfum audacieux et stimulant qui fait une déclaration où que vous alliez.",
        product_douce_vanille: "Arôme poudré sucré vanille avec une touche fraîche naturelle",
        product_nuit_elixir: "Arôme floral d'agrumes avec combinaison sucrée vanille fraîche créant un parfum authentique distinctif.",
        product_baie_en_fleurs: "Arôme sucré romantique de fruits avec combinaison de bonbons sucrés et caramel",
        
        // Testimonials Section
        testimonials_title: "Ce Que Disent Nos Clients",
        testimonial_1: '"Les parfums ÉMORA sont absolument divins ! La qualité et l\'élégance sont incomparables. Je ne me suis jamais sentie aussi confiante en portant un parfum."',
        testimonial_2: '"L\'attention aux détails et la sophistication de chaque parfum sont remarquables. ÉMORA est devenu mon luxe quotidien et je ne pourrais pas demander mieux."',
        testimonial_3: '"Investir dans ÉMORA a été la meilleure décision pour ma collection de parfums. Chaque senteur raconte une belle histoire et dure toute la journée."',
        
        // Social Section
        social_title: "Contactez-Nous",
        social_subtitle: "Suivez ÉMORA pour des mises à jour exclusives et des offres spéciales",
        
        // TikTok Modal
        tiktok_choose: "Choisir la Chaîne TikTok",
        tiktok_subtitle: "Sélectionnez quelle chaîne vous souhaitez suivre",
        tiktok_live: "Chaîne Live",
        tiktok_live_desc: "Regardez le streaming en direct et le contenu quotidien",
        tiktok_store: "Boutique Officielle",
        tiktok_store_desc: "Achetez nos produits et offres exclusives",
        
        // Shop Options
        shop_choose: "Choisissez Votre Plateforme d'Achat",
        shop_whatsapp: "WhatsApp",
        shop_whatsapp_desc: "Chattez avec nous directement pour les commandes",
        
        // Footer
        footer_tagline: "Marque de Parfum de Luxe",
        footer_nav: "Navigation",
        footer_home: "Accueil",
        footer_about: "À Propos",
        footer_perfumes: "Parfums",
        footer_reviews: "Avis",
        footer_follow: "Suivez-Nous",
        footer_copyright: "© 2026 ÉMORA Parfum. Tous droits réservés."
    }
};

// ============================================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================================
let currentLanguage = localStorage.getItem('emoraLanguage') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('emoraLanguage', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});


window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// NAVIGATION BAR - Mobile Menu Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// TIKTOK MODAL FUNCTIONALITY
// ============================================
const tiktokBtn = document.getElementById('tiktok-modal-btn');
const tiktokModal = document.getElementById('tiktok-modal');
const modalClose = document.getElementById('modal-close');

if (tiktokBtn && tiktokModal) {
    // Open modal on TikTok button click
    tiktokBtn.addEventListener('click', () => {
        tiktokModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Close modal on X button click
    modalClose.addEventListener('click', () => {
        tiktokModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the modal content
    tiktokModal.addEventListener('click', (e) => {
        if (e.target === tiktokModal) {
            tiktokModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tiktokModal.classList.contains('show')) {
            tiktokModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// ============================================
// PRODUCT FILTER FUNCTIONALITY
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === category) {
                // Show card with animation
                card.classList.remove('hidden');
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'slideUp 0.6s ease-out';
                }, 10);
            } else {
                // Hide card
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials (optional)
    // setInterval(() => {
    //     currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    //     showTestimonial(currentTestimonial);
    // }, 5000);
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Remove observer to prevent re-triggering
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards and other fade-in elements
document.querySelectorAll('.product-card, .about-text, .about-image, .testimonial-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// ENHANCED BUTTON INTERACTIONS
// ============================================
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// PARALLAX EFFECT (Optional)
// ============================================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroSection.querySelectorAll('.hero::before, .hero::after');
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// FEATURED PRODUCT ANIMATION
// ============================================
const featuredProduct = document.querySelector('.featured-product');
if (featuredProduct) {
    // Add floating animation
    const floatingAnimation = setInterval(() => {
        const randomY = Math.sin(Date.now() / 1000) * 10;
        featuredProduct.style.transform = `translateY(${randomY}px)`;
    }, 50);

    // Add glow effect on featured product
    featuredProduct.style.animation = 'glow 3s ease-in-out infinite';
}

// ============================================
// CTA BUTTON SCROLL TO PRODUCTS
// ============================================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            const offsetTop = productsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// DYNAMIC HOVER EFFECTS ON PRODUCT CARDS
// ============================================
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.webkitFilter = 'drop-shadow(0 20px 40px rgba(200, 162, 122, 0.3))';
    });

    card.addEventListener('mouseleave', function() {
        this.style.webkitFilter = 'drop-shadow(0 5px 20px rgba(62, 44, 35, 0.1))';
    });
});

// ============================================
// FORM VALIDATION (if contact form exists)
// ============================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        this.reset();
        // Show success message
        alert('Thank you for your message!');
    });
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ACCESSIBILITY - FOCUS MANAGEMENT
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ============================================
// PERFORMANCE - DEBOUNCE SCROLL
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PAGE INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    console.log('ÉMORA Website Loaded Successfully');

    // Animate elements on page load
    const elementsToAnimate = document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '1';
    });

    // Add loading animation completion
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// ============================================
// TRACK USER INTERACTIONS (Analytics)
// ============================================
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        const targetText = target.textContent || target.getAttribute('href') || 'Button';
        console.log('User interaction:', targetText);
    }
});

// ============================================
// RESPONSIVE NAVBAR ADJUSTMENTS
// ============================================
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
}, 250));

// ============================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// ============================================
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js').catch(() => {
//         console.log('Service Worker not registered');
//     });
// }

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to toggle class
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Function to add scroll listener
function onScroll(callback) {
    window.addEventListener('scroll', debounce(callback, 100));
}

// Function to get element position
function getElementPosition(element) {
    return element.getBoundingClientRect();
}

// ============================================
// PRODUCT STORIES DATA
// ============================================
const productStories = {
    'Serika': {
        subtitle: 'Manis yang tidak ingin dilupakan',
        story: [
            'Serika lahir dari kenangan sederhana yang hangat tawa ringan, sore yang santai, dan aroma manis yang tertinggal di udara.',
            'Perpaduan vanilla, coconut, dan cookies bukan sekadar manis… tapi tentang momen kecil yang terasa begitu hidup.',
            'Ada sisi ceria di dalamnya, tapi juga kehangatan yang diam-diam menetap.',
            'Serika adalah rasa bahagia yang tidak dibuat-buat.'
        ]
    },
    'Sekarjiwa': {
        subtitle: 'Hati yang tenang, dalam diam',
        story: [
            'Sekarjiwa terinspirasi dari ketenangan yang jarang ditemukan bukan yang ramai, tapi yang lembut dan dalam.',
            'Aroma jasmine dan rose menyatu seperti perasaan yang perlahan tumbuh… tanpa terburu-buru.',
            'Ia tidak berusaha menarik perhatian, tapi justru itulah yang membuatnya begitu memikat.',
            'Sekarjiwa adalah keindahan yang hadir tanpa suara.'
        ]
    },
    'Nirya': {
        subtitle: 'Segar seperti awal yang baru',
        story: [
            'Nirya adalah tentang memulai kembali.',
            'Seperti pagi pertama setelah malam yang panjang, ketika udara terasa lebih ringan dan harapan kembali ada.',
            'Melon, apple, goji berry, dan lemon menciptakan kesegaran yang jujur tanpa beban, tanpa drama.',
            'Nirya adalah rasa bebas, seperti hidup yang dimulai ulang.'
        ]
    },
    'Cendara': {
        subtitle: 'Ketegasan dalam kesederhanaan',
        story: [
            'Cendara lahir dari sosok yang tidak banyak bicara, tapi selalu terasa kehadirannya.',
            'Aroma fresh maskulin ini tidak berisik, tidak berlebihan namun meninggalkan kesan yang kuat.',
            'Ia adalah tentang kepercayaan diri yang tenang, bukan yang dipaksakan.',
            'Cendara adalah karakter, bukan sekadar aroma.'
        ]
    },
    'Douce Vanille': {
        subtitle: 'Hangat yang selalu pulang',
        story: [
            'Douce Vanille adalah pelukan dalam bentuk aroma.',
            'Vanilla yang lembut dan powdery membawa rasa aman seperti kembali ke tempat yang selalu menerima kita apa adanya.',
            'Ada kehangatan yang tidak mencolok, tapi perlahan mengisi ruang dan hati.',
            'Douce Vanille adalah rasa pulang, tanpa perlu dicari.'
        ]
    },
    'Lumiere Citrus': {
        subtitle: 'Cahaya yang lembut menyentuh',
        story: [
            'Lumière Citrus terinspirasi dari cahaya pagi yang jatuh perlahan tidak menyilaukan, tapi cukup untuk menghidupkan segalanya.',
            'Perpaduan citrus floral dan vanilla soft menciptakan kesegaran yang elegan, halus, dan berkelas.',
            'Ia bukan tentang menjadi terang… tapi tentang bersinar dengan cara yang lembut.',
            'Lumière adalah keindahan yang tidak memaksa untuk dilihat.'
        ]
    },
    'Baie En Fleurs': {
        subtitle: 'Manis yang berani bermain',
        story: [
            'Baie en Fleurs adalah sisi diri yang bebas yang tertawa tanpa alasan dan menikmati hidup tanpa batas.',
            'Berries, caramel, dan sentuhan candy menciptakan aroma yang playful namun tetap memikat.',
            'Ada keceriaan, ada godaan, ada energi yang sulit diabaikan.',
            'Baie en Fleurs adalah keberanian untuk menjadi diri sendiri dengan manisnya.'
        ]
    }
};

// ============================================
// PRODUCT DETAILS MODAL FUNCTIONALITY
// ============================================
const productDetailsModal = document.getElementById('product-details-modal');
const productModalClose = document.getElementById('product-modal-close');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
const productModalTitle = document.getElementById('product-modal-title');
let currentProduct = '';

if (productDetailsModal && viewDetailsButtons.length > 0) {
    // Open modal on View Details button click
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            currentProduct = e.target.getAttribute('data-product');
            productModalTitle.textContent = currentProduct;
            productDetailsModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal on X button click
    if (productModalClose) {
        productModalClose.addEventListener('click', () => {
            productDetailsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside the modal content
    productDetailsModal.addEventListener('click', (e) => {
        if (e.target === productDetailsModal) {
            productDetailsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productDetailsModal.classList.contains('show')) {
            productDetailsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Option buttons functionality
    const storyBtn = document.getElementById('story-btn');
    const shopBtn = document.getElementById('shop-btn');
    const backFromStoryBtn = document.getElementById('back-from-story');
    const productOptionsView = document.getElementById('product-options-view');
    const storyContentView = document.getElementById('story-content-view');
    const storyContentContainer = document.getElementById('story-content-container');
    const shopOptionsView = document.getElementById('shop-options-view');
    const backFromShopBtn = document.getElementById('back-from-shop');

    function displayStory(productName) {
        if (productStories[productName]) {
            const storyData = productStories[productName];
            let storyHTML = `<h4 class="story-title">${storyData.subtitle}</h4>`;
            
            storyData.story.forEach(paragraph => {
                storyHTML += `<p class="story-text story-paragraph">${paragraph}</p>`;
            });
            
            storyContentContainer.innerHTML = storyHTML;
            productOptionsView.style.display = 'none';
            storyContentView.style.display = 'block';
        }
    }

    function backToOptions() {
        productOptionsView.style.display = 'flex';
        storyContentView.style.display = 'none';
        shopOptionsView.style.display = 'none';
    }

    if (storyBtn) {
        storyBtn.addEventListener('click', () => {
            displayStory(currentProduct);
        });
    }

    if (backFromStoryBtn) {
        backFromStoryBtn.addEventListener('click', backToOptions);
    }

    // Shop options view
    function displayShopOptions() {
        productOptionsView.style.display = 'none';
        shopOptionsView.style.display = 'block';
    }

    if (shopBtn) {
        shopBtn.addEventListener('click', () => {
            displayShopOptions();
        });
    }

    if (backFromShopBtn) {
        backFromShopBtn.addEventListener('click', backToOptions);
    }
}

// ============================================
// GLOBAL ERROR HANDLING
// ============================================
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%cÉMORA Luxury Perfume Brand', 'font-size: 20px; font-weight: bold; color: #C8A27A; font-family: Playfair Display, serif;');
console.log('%cUnveil Your Signature Scent', 'font-size: 14px; color: #D4AF37; font-family: Poppins, sans-serif;');
