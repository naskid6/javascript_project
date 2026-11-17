const hamburger = document.querySelector('.hamburger')
const navmenu = document.querySelector('.nav-menu')
const navlinks = document.querySelectorAll('.nav-links')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navmenu.classList.toggle('active')
})

navlinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navmenu.classList.remove('active')

    navlinks.forEach(item => {
      item.classList.remove('active')
    })

    link.classList.add('active')
  })
})

document.addEventListener('click', event => {
  if (!hamburger.contains(event.target) && !navmenu.contains(event.target)) {
    hamburger.classList.remove('active')
    navmenu.classList.remove('active')
  }
})
