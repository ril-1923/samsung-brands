import { initNavbar, initFooter, initRevealAnimations, showToast } from './shared.js'

initNavbar('tv')
initFooter()
initRevealAnimations()

document.getElementById('exploreTvBtn')?.addEventListener('click', () => {
  showToast('Exploring Neo QLED collection...')
})
