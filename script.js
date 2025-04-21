// DOM Elements
const navbar = document.querySelector('.navbar')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')
const tabBtns = document.querySelectorAll('.tab-btn')
const projectCards = document.querySelectorAll('.project-card')
const projectDetailBtns = document.querySelectorAll('.project-detail-btn')
const modal = document.getElementById('projectModal')
const modalClose = document.querySelector('.close-modal')
const modalBody = document.querySelector('.modal-body')
const contactForm = document.getElementById('contactForm')
const currentYearSpan = document.getElementById('currentYear')

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear()

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }

  // Show/hide scroll to top button
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('active')
  } else {
    scrollToTopBtn.classList.remove('active')
  }
})

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')

  // Change icon
  const icon = menuToggle.querySelector('i')
  if (mobileMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-times')
  } else {
    icon.classList.remove('fa-times')
    icon.classList.add('fa-bars')
  }
})

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
    const icon = menuToggle.querySelector('i')
    icon.classList.remove('fa-times')
    icon.classList.add('fa-bars')
  })
})

// Project filtering
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    tabBtns.forEach(b => b.classList.remove('active'))

    // Add active class to clicked button
    btn.classList.add('active')

    const filter = btn.getAttribute('data-filter')

    // Filter projects
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category')

      if (filter === 'all' || filter === category) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  })
})

// Open modal with project details
projectDetailBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-id')
    const project = projectDetails[projectId]

    if (project) {
      // Populate modal content
      modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3 class="modal-title">${project.title}</h3>
                <div class="modal-tags">
                    ${project.tags
                      .map(tag => `<span class="project-tag">${tag}</span>`)
                      .join('')}
                </div>
                <p class="modal-description">${project.description}</p>
                <div class="modal-features">
                    <h4>Principais Recursos:</h4>
                    <ul>
                        ${project.features
                          .map(
                            feature =>
                              `<li><span class="feature-bullet">•</span> ${feature}</li>`
                          )
                          .join('')}
                    </ul>
                </div>
                <div class="modal-links">
                    <a href="${project.demoLink}" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Ver Demo
                    </a>
                    <a href="${project.codeLink}" class="btn btn-outline">
                        <i class="fab fa-github"></i> Ver Código
                    </a>
                </div>
            `

      // Show modal
      modal.classList.add('active')
      document.body.style.overflow = 'hidden' // Prevent scrolling
    }
  })
})

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('active')
  document.body.style.overflow = 'auto' // Enable scrolling
})

// Close modal when clicking outside
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active')
    document.body.style.overflow = 'auto' // Enable scrolling
  }
})

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    '.skill-card, .project-card, .about-image, .about-text, .contact-info, .contact-form-container'
  )

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.2

    if (elementPosition < screenPosition) {
      element.classList.add('animate')
    }
  })
}

// Add CSS for animations
const style = document.createElement('style')
style.textContent = `
    .skill-card, .project-card, .about-image, .about-text, .contact-info, .contact-form-container {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .skill-card.animate, .project-card.animate, .about-image.animate, .about-text.animate, .contact-info.animate, .contact-form-container.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .modal-image {
        margin-bottom: 1.5rem;
    }
    
    .modal-image img {
        width: 100%;
        border-radius: var(--radius);
    }
    
    .modal-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .modal-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .modal-description {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }
    
    .modal-features {
        margin-bottom: 1.5rem;
    }
    
    .modal-features h4 {
        color: var(--accent);
        margin-bottom: 0.75rem;
    }
    
    .modal-features ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .modal-features li {
        display: flex;
        align-items: flex-start;
    }
    
    .feature-bullet {
        color: var(--accent);
        margin-right: 0.5rem;
    }
    
    .modal-links {
        display: flex;
        gap: 1rem;
    }
`

document.head.appendChild(style)

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll)
// Run once on load
window.addEventListener('load', animateOnScroll)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Offset for navbar
        behavior: 'smooth'
      })
    }
  })
})
