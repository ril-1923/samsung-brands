import { initNavbar, initFooter, initRevealAnimations, showToast } from './shared.js'

initNavbar('appliances')
initFooter()
initRevealAnimations()

document.getElementById('exploreAppliancesBtn')?.addEventListener('click', () => {
  showToast('Exploring Bespoke collection...')
})

document.getElementById('ctaAppliancesBtn')?.addEventListener('click', () => {
  showToast('Opening Bespoke design studio...')
})
