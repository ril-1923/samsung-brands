import { initNavbar, initFooter, initRevealAnimations, showToast } from './shared.js'

initNavbar('galaxy')
initFooter()
initRevealAnimations()

// Particle animation in hero
function createParticles() {
  const container = document.getElementById('particles')
  if (!container) return

  const count = 40
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = `${Math.random() * 100}%`
    particle.style.animationDuration = `${5 + Math.random() * 10}s`
    particle.style.animationDelay = `${Math.random() * 5}s`
    const size = 1 + Math.random() * 3
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    if (Math.random() > 0.5) {
      particle.style.background = '#ff00d4'
      particle.style.boxShadow = '0 0 6px rgba(255,0,212,0.6)'
    }
    container.appendChild(particle)
  }
}

createParticles()

document.getElementById('discoverBtn')?.addEventListener('click', () => {
  showToast('Discovering Galaxy AI features...')
})

document.getElementById('ctaBannerBtn')?.addEventListener('click', () => {
  showToast('Redirecting to Galaxy Store...')
})
