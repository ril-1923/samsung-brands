// Shared utilities for all Samsung pages

export function initNavbar(activePage = '') {
  const navbarEl = document.getElementById('navbar')
  if (!navbarEl) return

  const pages = [
    { name: 'Home', href: '/index.html', key: 'home' },
    { name: 'Galaxy', href: '/galaxy.html', key: 'galaxy' },
    { name: 'TV & Audio', href: '/tv-audio.html', key: 'tv' },
    { name: 'Appliances', href: '/appliances.html', key: 'appliances' },
    { name: 'Semiconductor', href: '/semiconductor.html', key: 'semi' },
  ]

  const linksHTML = pages
    .map(
      (p) =>
        `<li><a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${p.name}</a></li>`
    )
    .join('')

  navbarEl.innerHTML = `
    <nav class="samsung-navbar" id="samsungNav">
      <div class="nav-container">
        <a href="/index.html" class="nav-logo">SAMSUNG</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">&#9776;</button>
        <ul class="nav-links" id="navLinks">${linksHTML}</ul>
      </div>
    </nav>
  `

  const nav = document.getElementById('samsungNav')
  const toggle = document.getElementById('navToggle')
  const links = document.getElementById('navLinks')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })

  toggle.addEventListener('click', () => {
    links.classList.toggle('open')
  })
}

export function initFooter() {
  const footerEl = document.getElementById('footer')
  if (!footerEl) return

  footerEl.innerHTML = `
    <footer class="samsung-footer">
      <div class="footer-container">
        <div class="footer-top">
          <div>
            <div class="footer-brand">SAMSUNG</div>
            <p class="footer-tagline">Inspire the World, Create the Future. Samsung Electronics is a global leader in technology, innovation, and design.</p>
          </div>
          <div class="footer-links">
            <div class="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="/galaxy.html">Galaxy</a></li>
                <li><a href="/tv-audio.html">TV & Audio</a></li>
                <li><a href="/appliances.html">Appliances</a></li>
                <li><a href="/semiconductor.html">Semiconductor</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Newsroom</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Service Centers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Samsung Electronics Co., Ltd. All Rights Reserved. This is a demo landing page.
        </div>
      </div>
    </footer>
  `
}

export function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

export function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.count, 10)
          let current = 0
          const increment = Math.max(1, Math.ceil(target / 40))
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            el.textContent = current
          }, 30)
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.5 }
  )

  counters.forEach((el) => observer.observe(el))
}

export function showToast(message) {
  const existing = document.querySelector('.samsung-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.className = 'samsung-toast'
  toast.textContent = message
  document.body.appendChild(toast)

  requestAnimationFrame(() => toast.classList.add('show'))

  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => toast.remove(), 400)
  }, 3000)
}
