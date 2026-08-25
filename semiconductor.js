import { initNavbar, initFooter, initRevealAnimations, initCounterAnimation, showToast } from './shared.js'

initNavbar('semi')
initFooter()
initRevealAnimations()
initCounterAnimation()

document.getElementById('semiDiscoverBtn')?.addEventListener('click', () => {
  showToast('Loading semiconductor technology...')
})
