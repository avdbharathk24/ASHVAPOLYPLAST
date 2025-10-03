// ASHVA POLYPLAST Interactive Features - Indian Flag Theme

// Product data with Indian focus
const productData = {
  'cpvc-valves': {
    name: 'CPVC Ball Valves - Made in India',
    description: 'Premium quality CPVC ball valves manufactured in India with ISI certification. Available in various sizes and pressure ratings, specially designed for Indian climate conditions and tested for durability across diverse weather patterns.',
    features: ['ISI Certified Quality', 'Made in India', 'Indian Climate Tested', 'BIS Compliance', 'Pan-India Warranty', 'Local Technical Support'],
    sizes: ['15mm', '20mm', '25mm', '32mm', '40mm', '50mm', '65mm', '80mm'],
    applications: ['Indian Residential Plumbing', 'Commercial Buildings', 'Industrial Applications', 'Government Projects', 'Smart City Initiatives'],
    specifications: {
      'Material': 'CPVC (Indian Grade)',
      'Temperature Range': '0°C to 95°C (Indian Climate Suitable)',
      'Pressure Rating': 'Up to 25 bar (Indian Standards)',
      'Connection Type': 'Threaded/Socket (Indian Fittings)',
      'Standards': 'IS 15778, BIS Certified, Make in India',
      'Warranty': '5 Years Pan-India Coverage',
      'Technical Support': 'Available in Hindi & Regional Languages'
    }
  },
  'solvent-cement': {
    name: 'FLOW SEAL PVC Solvent Cement - Indian Innovation',
    description: 'FLOW SEAL PVC Solvent Cement - proudly manufactured in India for strong and permanent bonding of PVC pipes and fittings. Specially formulated and extensively tested for Indian weather conditions including monsoons, heat waves, and humidity.',
    features: ['Indian Weather Tested', 'Monsoon Resistant', 'Made in India', 'Quick Setting Formula', 'Multi-Climate Suitable', 'Cost-Effective for Indian Market'],
    volumes: ['50ml', '100ml', '200ml', '500ml', '1L', '5L (Bulk for Contractors)'],
    applications: ['Indian PVC Pipe Systems', 'Plumbing Networks', 'Irrigation Projects', 'Construction Sites', 'Government Infrastructure'],
    specifications: {
      'Base': 'Solvent based (Indian Formulation)',
      'Setting Time': '2-3 minutes (Indian Climate Optimized)',
      'Full Cure': '24 hours (All Indian Weather Conditions)',
      'Temperature Range': '-10°C to 60°C (Indian Extremes)',
      'Shelf Life': '18 months (Indian Storage Conditions)',
      'Compliance': 'BIS Approved, Make in India Initiative',
      'Packaging': 'Eco-friendly Indian Manufacturing'
    }
  },
  'pipes-fittings': {
    name: 'CPVC Pipes & Fittings - Indian Manufacturing Excellence',
    description: 'Complete range of CPVC pipes and fittings manufactured in India for hot and cold water distribution systems. Non-toxic, ISI marked, and safe for potable water applications nationwide with full BIS certification.',
    features: ['BIS Certified', 'ISI Marked', 'Made in India', 'Non-Toxic for Indian Homes', 'Smooth Flow Design', 'Pan-India Distribution'],
    applications: ['Indian Hot Water Systems', 'Cold Water Distribution', 'Industrial Piping', 'Hospital & School Projects', 'Smart City Infrastructure'],
    specifications: {
      'Material': 'CPVC (Indian Manufacturing Grade)',
      'Size Range': '15mm to 200mm (Indian Standard Sizes)',
      'Pressure Class': 'PN 10, PN 16 (Indian Requirements)',
      'Temperature Rating': 'Up to 95°C (Indian Applications)',
      'Standards': 'IS 15778, BIS Approved, Make in India',
      'Certification': 'ISI Mark, Indian Quality Assurance',
      'Distribution': 'Available Across All Indian States'
    }
  }
};

// DOM Elements - Initialize after DOM is ready
let hamburger, navMenu, backToTop, heroSlides, heroDots, heroNext, heroPrev;
let productCards, productModal, modalClose, modalBody, contactForm, dealerForm;

// State
let currentSlide = 0;
let slideInterval;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeDOMElements();
  initializeApp();
});

function initializeDOMElements() {
  hamburger = document.getElementById('hamburger');
  navMenu = document.getElementById('nav-menu');
  backToTop = document.getElementById('back-to-top');
  heroSlides = document.querySelectorAll('.hero-slide');
  heroDots = document.querySelectorAll('.hero-dot');
  heroNext = document.querySelector('.hero-next');
  heroPrev = document.querySelector('.hero-prev');
  productCards = document.querySelectorAll('.product-card');
  productModal = document.getElementById('product-modal');
  modalClose = document.getElementById('modal-close');
  modalBody = document.getElementById('modal-body');
  contactForm = document.getElementById('contact-form');
  dealerForm = document.getElementById('dealer-form');
}

function initializeApp() {
  setupNavigation();
  setupHeroSlider();
  setupScrollEffects();
  setupProductModals();
  setupForms();
  setupScrollAnimations();
  setupSmoothScrolling();
  console.log('ASHVA POLYPLAST website with Indian Flag theme initialized successfully! 🇮🇳');
}

// Navigation - Enhanced with Indian theme
function setupNavigation() {
  if (hamburger && navMenu) {
    console.log('Setting up Indian-themed navigation...');
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Hamburger menu activated');
      toggleMobileMenu();
    });
  } else {
    console.error('Navigation elements not found');
  }

  // Close mobile menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log('Navigation link clicked:', link.href);
      if (navMenu && navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      toggleMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  console.log('Toggling Indian-themed mobile menu...');
  if (hamburger && navMenu) {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    console.log('Menu active:', navMenu.classList.contains('active'));
  }
}

// Hero Slider with Indian patriotic content
function setupHeroSlider() {
  if (heroSlides.length === 0) return;

  console.log('Setting up Indian flag themed hero slider...');

  // Auto-slide functionality
  startSlideShow();

  // Navigation buttons
  if (heroNext) {
    heroNext.addEventListener('click', () => {
      nextSlide();
      resetSlideInterval();
    });
  }

  if (heroPrev) {
    heroPrev.addEventListener('click', () => {
      prevSlide();
      resetSlideInterval();
    });
  }

  // Dots navigation
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetSlideInterval();
    });
  });

  // Pause on hover
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlideShow);
    heroSection.addEventListener('mouseleave', startSlideShow);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

function updateSlide() {
  // Update slides
  heroSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  // Update dots
  heroDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 6000); // 6 seconds for better readability of Indian content
}

function stopSlideShow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

function resetSlideInterval() {
  stopSlideShow();
  startSlideShow();
}

// Scroll Effects with Indian theme enhancements
function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (backToTop) {
      backToTop.classList.toggle('show', scrollTop > 300);
    }

    // Header with Indian flag theme shadow
    const header = document.querySelector('.header');
    if (header) {
      if (scrollTop > 50) {
        header.style.boxShadow = '0 2px 20px rgba(255, 153, 51, 0.2)';
      } else {
        header.style.boxShadow = '0 2px 20px rgba(255, 153, 51, 0.15)';
      }
    }
  });

  // Back to top functionality
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Product Modals with Indian market focus
function setupProductModals() {
  productCards.forEach(card => {
    const productBtn = card.querySelector('.product-btn');
    if (productBtn) {
      productBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = card.getAttribute('data-product');
        openProductModal(productId);
      });
    }
  });

  // Close modal events
  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && !productModal.classList.contains('hidden')) {
      closeProductModal();
    }
  });
}

function openProductModal(productId) {
  const product = productData[productId];
  if (!product || !productModal || !modalBody) return;

  const modalContent = `
    <div style="border-bottom: 3px solid var(--saffron); margin-bottom: 20px; padding-bottom: 12px;">
      <h2 style="color: var(--saffron); margin-bottom: 8px;">${product.name}</h2>
      <div class="made-in-india" style="margin-bottom: 16px;">
        <i class="fas fa-flag"></i>
        <span>Proudly Made in India</span>
      </div>
    </div>
    <p style="margin-bottom: 24px; color: var(--medium-gray); line-height: 1.6;">${product.description}</p>
    
    <div style="margin-bottom: 24px;">
      <h3 style="color: var(--green); margin-bottom: 12px;">Indian Quality Features</h3>
      <ul style="list-style: none; padding: 0;">
        ${product.features.map(feature => 
          `<li style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <i class="fas fa-star" style="color: var(--saffron);"></i>
            <span>${feature}</span>
          </li>`
        ).join('')}
      </ul>
    </div>

    ${product.sizes ? `
      <div style="margin-bottom: 24px;">
        <h3 style="color: var(--green); margin-bottom: 12px;">Available Indian Standard Sizes</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${product.sizes.map(size => 
            `<span style="background: linear-gradient(135deg, var(--saffron), var(--green)); color: var(--white); padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${size}</span>`
          ).join('')}
        </div>
      </div>
    ` : ''}

    ${product.volumes ? `
      <div style="margin-bottom: 24px;">
        <h3 style="color: var(--green); margin-bottom: 12px;">Available Volumes for Indian Market</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${product.volumes.map(volume => 
            `<span style="background: linear-gradient(135deg, var(--saffron), var(--green)); color: var(--white); padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${volume}</span>`
          ).join('')}
        </div>
      </div>
    ` : ''}

    <div style="margin-bottom: 24px;">
      <h3 style="color: var(--green); margin-bottom: 12px;">Indian Market Applications</h3>
      <ul style="list-style: none; padding: 0;">
        ${product.applications.map(app => 
          `<li style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <i class="fas fa-arrow-right" style="color: var(--saffron); font-size: 12px;"></i>
            <span>${app}</span>
          </li>`
        ).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 32px;">
      <h3 style="color: var(--green); margin-bottom: 12px;">Indian Standards & Specifications</h3>
      <div style="background: linear-gradient(135deg, rgba(255, 153, 51, 0.1), rgba(19, 136, 8, 0.1)); padding: 16px; border-radius: 8px; border: 1px solid var(--saffron);">
        ${Object.entries(product.specifications).map(([key, value]) => 
          `<div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 153, 51, 0.2);">
            <span style="font-weight: 500; color: var(--dark-gray);">${key}:</span>
            <span style="color: var(--medium-gray); text-align: right; max-width: 60%;">${value}</span>
          </div>`
        ).join('')}
      </div>
    </div>

    <div style="border-top: 3px solid var(--green); padding-top: 24px;">
      <h3 style="color: var(--saffron); margin-bottom: 16px;">Request Quote from Indian Team</h3>
      <form id="modal-inquiry-form" style="display: grid; gap: 16px;">
        <input type="text" placeholder="Your Name *" required style="padding: 12px; border: 2px solid #E0E0E0; border-radius: 8px; transition: border-color 0.3s;">
        <input type="email" placeholder="Email Address *" required style="padding: 12px; border: 2px solid #E0E0E0; border-radius: 8px; transition: border-color 0.3s;">
        <input type="tel" placeholder="Phone Number (India) +91-XXXXXXXXXX" style="padding: 12px; border: 2px solid #E0E0E0; border-radius: 8px; transition: border-color 0.3s;">
        <input type="text" placeholder="Company/Location in India" style="padding: 12px; border: 2px solid #E0E0E0; border-radius: 8px; transition: border-color 0.3s;">
        <textarea placeholder="Your Requirements for Indian Market *" required rows="3" style="padding: 12px; border: 2px solid #E0E0E0; border-radius: 8px; font-family: inherit; transition: border-color 0.3s;"></textarea>
        <button type="submit" style="background: var(--saffron); color: white; padding: 12px 24px; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; transition: all 0.3s;">
          Submit Inquiry to Indian Team 🇮🇳
        </button>
      </form>
    </div>
  `;

  modalBody.innerHTML = modalContent;
  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Add focus styles to form inputs
  const formInputs = productModal.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', (e) => {
      e.target.style.borderColor = 'var(--green)';
    });
    input.addEventListener('blur', (e) => {
      e.target.style.borderColor = '#E0E0E0';
    });
  });

  // Setup form in modal
  const modalForm = document.getElementById('modal-inquiry-form');
  if (modalForm) {
    modalForm.addEventListener('submit', handleModalInquiry);
  }
}

function closeProductModal() {
  if (productModal) {
    productModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function handleModalInquiry(e) {
  e.preventDefault();
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<span class="loading"></span> Connecting to Indian Team...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    showNotification('धन्यवाद! Thank you! Your inquiry has been submitted to our Indian team. We will contact you soon with competitive pricing and Indian market solutions. 🇮🇳', 'success');
    closeProductModal();
    e.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Enhanced Form Handling with Indian context
function setupForms() {
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  if (dealerForm) {
    dealerForm.addEventListener('submit', handleDealerForm);
  }

  // Real-time form validation with Indian context
  const formInputs = document.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('focus', (e) => {
      e.target.style.borderColor = 'var(--green)';
    });
    input.addEventListener('blur', (e) => {
      e.target.style.borderColor = '#E0E0E0';
      validateInput(e);
    });
    input.addEventListener('input', clearValidationError);
  });
}

function handleContactForm(e) {
  e.preventDefault();
  
  if (!validateForm(e.target)) return;

  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  // Show loading state
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<span class="loading"></span> Sending to Indian Team...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    showNotification('नमस्ते! Your message has been sent to our Indian team successfully. We will respond within 24 hours IST. Thank you for choosing Made in India quality! 🇮🇳', 'success');
    e.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function handleDealerForm(e) {
  e.preventDefault();
  
  if (!validateForm(e.target)) return;

  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  // Show loading state
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<span class="loading"></span> Processing Indian Partnership Application...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    showNotification('स्वागत! Welcome to ASHVA POLYPLAST family! Your Indian partnership application has been submitted successfully. Our business development team will review and contact you within 2-3 business days IST. Thank you for joining the Make in India movement! 🇮🇳', 'success');
    e.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function validateForm(form) {
  const requiredInputs = form.querySelectorAll('[required]');
  let isValid = true;

  requiredInputs.forEach(input => {
    if (!validateInput({ target: input })) {
      isValid = false;
    }
  });

  return isValid;
}

function validateInput(e) {
  const input = e.target;
  const value = input.value.trim();
  let isValid = true;
  let errorMessage = '';

  // Clear previous errors
  clearValidationError(e);

  // Required field validation
  if (input.required && !value) {
    errorMessage = 'यह फील्ड आवश्यक है / This field is required';
    isValid = false;
  }
  // Email validation
  else if (input.type === 'email' && value && !isValidEmail(value)) {
    errorMessage = 'कृपया वैध ईमेल दर्ज करें / Please enter a valid email address';
    isValid = false;
  }
  // Indian phone validation
  else if (input.type === 'tel' && value && !isValidIndianPhone(value)) {
    errorMessage = 'कृपया वैध भारतीय फोन नंबर दर्ज करें / Please enter a valid Indian phone number (+91-XXXXXXXXXX)';
    isValid = false;
  }

  if (!isValid) {
    showInputError(input, errorMessage);
  }

  return isValid;
}

function clearValidationError(e) {
  const input = e.target;
  const errorElement = input.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
  input.style.borderColor = '#E0E0E0';
}

function showInputError(input, message) {
  input.style.borderColor = 'var(--saffron)';
  
  // Remove existing error message
  const existingError = input.parentNode.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.style.cssText = 'color: var(--saffron); font-size: 14px; margin-top: 4px;';
  errorElement.textContent = message;
  input.parentNode.appendChild(errorElement);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidIndianPhone(phone) {
  // Indian phone number validation (including +91 format)
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Enhanced Notifications with Indian theme
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  const notification = document.createElement('div');
  notification.className = 'notification';
  
  const bgColor = type === 'success' ? 'var(--green)' : 'var(--saffron)';
  const icon = type === 'success' ? 'check-circle' : 'info-circle';
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(255, 153, 51, 0.3);
    z-index: 3000;
    max-width: 450px;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    border: 2px solid var(--white);
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <i class="fas fa-${icon}" style="margin-top: 2px; font-size: 18px;"></i>
      <span style="line-height: 1.4;">${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px; margin-left: auto; margin-top: -2px; padding: 0; width: 20px; height: 20px;">×</button>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Auto remove after 8 seconds (longer for Indian bilingual content)
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }
  }, 8000);
}

// Scroll Animations with Indian theme
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.stat-card, .product-card, .download-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// Enhanced Smooth Scrolling
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      console.log('Smooth scroll to Indian section:', targetId, 'Element found:', !!targetElement);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
          toggleMobileMenu();
        }
      } else {
        console.warn('Target section not found for:', targetId);
      }
    });
  });
}

// Enhanced Download handlers with Indian context
document.addEventListener('click', (e) => {
  if (e.target.matches('.download-card .btn') || e.target.closest('.download-card .btn')) {
    e.preventDefault();
    const card = e.target.closest('.download-card');
    const title = card.querySelector('h3').textContent;
    showNotification(`${title} download started! Proudly sharing Made in India quality documentation. Check your downloads folder. 🇮🇳`, 'success');
  }
});

// Enhanced Dealer login handler with Indian context
document.addEventListener('click', (e) => {
  if (e.target.matches('.dealer-login .btn') || e.target.closest('.dealer-login .btn')) {
    e.preventDefault();
    showNotification('Indian dealer portal is currently under maintenance. Please contact our Indian team directly for assistance during IST business hours. धन्यवाद! 🇮🇳', 'info');
  }
});

// Enhanced Header scroll effect with Indian flag colors
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  
  if (header) {
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Additional scroll handling for Indian theme
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for better performance
function setupLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Indian theme specific features
function addIndianThemeFeatures() {
  // Add flag wave animation to brand icon
  const brandIcon = document.querySelector('.brand-icon');
  if (brandIcon) {
    brandIcon.classList.add('flag-wave');
  }

  // Add tricolor hover effects to cards
  const cards = document.querySelectorAll('.product-card, .download-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      e.target.style.borderColor = 'var(--saffron)';
      e.target.style.boxShadow = '0 8px 25px rgba(255, 153, 51, 0.3)';
    });
    
    card.addEventListener('mouseleave', (e) => {
      e.target.style.borderColor = 'transparent';
      e.target.style.boxShadow = '';
    });
  });
}

// Initialize additional features when needed
document.addEventListener('DOMContentLoaded', () => {
  setupLazyLoading();
  addIndianThemeFeatures();
  
  // Verify all sections exist
  const sections = ['home', 'products', 'about', 'dealers', 'downloads', 'contact'];
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.warn(`Section ${sectionId} not found in DOM`);
    } else {
      console.log(`Indian section ${sectionId} found and ready 🇮🇳`);
    }
  });

  // Add a welcome message
  setTimeout(() => {
    console.log('🇮🇳 ASHVA POLYPLAST - Proudly Indian, Globally Trusted! 🇮🇳');
    console.log('Made in India with Pride - Supporting the Make in India Initiative');
  }, 2000);
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error in Indian application:', e.error);
});

// Add IST timezone display
function updateISTTime() {
  const now = new Date();
  const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
  console.log('Current IST:', istTime.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}));
}

// Update IST time every minute
setInterval(updateISTTime, 60000);

// Add keyboard navigation support for accessibility
document.addEventListener('keydown', (e) => {
  // Enhanced keyboard navigation for Indian users
  if (e.key === 'Escape') {
    // Close any open modals
    if (productModal && !productModal.classList.contains('hidden')) {
      closeProductModal();
    }
    
    // Close mobile menu
    if (navMenu && navMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
});

// Debug: Log when DOM is fully loaded with Indian theme
document.addEventListener('DOMContentLoaded', () => {
  console.log('🇮🇳 DOM fully loaded with Indian Flag theme');
  console.log('Hamburger element:', hamburger);
  console.log('Nav menu element:', navMenu);
  console.log('Indian theme colors loaded:', {
    saffron: '#FF9933',
    white: '#FFFFFF', 
    green: '#138808'
  });
});