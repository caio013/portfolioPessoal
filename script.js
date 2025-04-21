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
const scrollToTopBtn = document.getElementById('scrollToTop')
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

// Project modal
// const projectDetails = {
//   project1: {
//     title: 'Site',
//     description:
//       'Este projeto foi desenvolvido durante a Next Level Week da Rocketseat, com o objetivo de aprender e praticar os fundamentos de HTML, CSS e JavaScript, criando uma página moderna e responsiva para uma barbearia.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['HTML', 'CSS', 'Javascript'],
//     features: [
//       'Página inicial com informações sobre a barbearia',
//       'Formulário de contato',
//       'Animações e efeitos com JavaScript'
//     ],
//     demoLink: 'https://caio013.github.io/nlw_siteBarbearia/',
//     codeLink: 'https://github.com/caio013/nlw_siteBarbearia'
//   },
//   project2: {
//     title: 'App de Gerenciamento de Tarefas',
//     description:
//       'Um aplicativo de gerenciamento de tarefas colaborativo com atualizações em tempo real e espaços de trabalho em equipe.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
//     features: [
//       'Colaboração em tempo real',
//       'Criação e atribuição de tarefas',
//       'Rastreamento de prazos e notificações',
//       'Anexos de arquivos e comentários',
//       'Espaços de trabalho em equipe e permissões',
//       'Logs de atividades e relatórios'
//     ],
//     demoLink: '#',
//     codeLink: '#'
//   },
//   project3: {
//     title: 'Dashboard de Clima',
//     description:
//       'Um aplicativo de clima que fornece previsões em tempo real e visualização de dados históricos de clima.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['React', 'Chart.js', 'Weather API'],
//     features: [
//       'Condições climáticas atuais',
//       'Previsões horárias e de 7 dias',
//       'Dados históricos de clima',
//       'Visualizações de dados interativas',
//       'Pesquisa de localização e favoritos',
//       'Alertas de clima severo'
//     ],
//     demoLink: '#',
//     codeLink: '#'
//   },
//   project4: {
//     title: 'API de Rastreamento Fitness',
//     description:
//       'Uma API RESTful para rastrear treinos, nutrição e metas de fitness.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
//     features: [
//       'Autenticação e autorização de usuários',
//       'Registro e rastreamento de treinos',
//       'Nutrição e planejamento de refeições',
//       'Definição de metas e rastreamento de progresso',
//       'Análises e relatórios',
//       'Integração com dispositivos de fitness via API'
//     ],
//     demoLink: '#',
//     codeLink: '#'
//   },
//   project5: {
//     title: 'Dashboard de Mídia Social',
//     description:
//       'Um dashboard para gerenciar e analisar contas de mídia social em várias plataformas.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['React', 'Redux', 'Social Media APIs'],
//     features: [
//       'Gerenciamento multi-plataforma',
//       'Agendamento e publicação de posts',
//       'Análise de engajamento',
//       'Insights de audiência e demografia',
//       'Análise de concorrentes',
//       'Relatórios de desempenho de conteúdo'
//     ],
//     demoLink: '#',
//     codeLink: '#'
//   },
//   project6: {
//     title: 'API de Listagem Imobiliária',
//     description:
//       'Uma API abrangente para listagens imobiliárias, pesquisas e gerenciamento de propriedades.',
//     image: 'https://via.placeholder.com/600x400',
//     tags: ['Node.js', 'Express', 'PostgreSQL', 'GIS'],
//     features: [
//       'Listagem e gerenciamento de propriedades',
//       'Busca avançada com filtros',
//       'Geolocalização e mapeamento',
//       'Favoritos e alertas de usuários',
//       'Perfis de agentes e agências',
//       'Análises e relatórios'
//     ],
//     demoLink: '#',
//     codeLink: '#'
//   }
// }

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

// Form validation
contactForm.addEventListener('submit', e => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim()
  const subject = document.getElementById('subject').value.trim()
  const message = document.getElementById('message').value.trim()

  // Reset error messages
  document.getElementById('nameError').textContent = ''
  document.getElementById('emailError').textContent = ''
  document.getElementById('subjectError').textContent = ''
  document.getElementById('messageError').textContent = ''

  // Validate
  let isValid = true

  if (name === '') {
    document.getElementById('nameError').textContent = 'Nome é obrigatório'
    isValid = false
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email é obrigatório'
    isValid = false
  } else if (!isValidEmail(email)) {
    document.getElementById('emailError').textContent = 'Email inválido'
    isValid = false
  }

  if (subject === '') {
    document.getElementById('subjectError').textContent =
      'Assunto é obrigatório'
    isValid = false
  }

  if (message === '') {
    document.getElementById('messageError').textContent =
      'Mensagem é obrigatória'
    isValid = false
  }

  // If valid, submit form (simulate for now)
  if (isValid) {
    // Normally you would send this to a server
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.')
    contactForm.reset()
  }
})

// Email validation helper
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

// Scroll to top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
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
