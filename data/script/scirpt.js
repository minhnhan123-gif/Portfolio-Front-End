
let mouseX = 0
let mouseY = 0
const light = document.getElementById('cursor-light')
// function updateLightMouse() {
//   light.style.left = mouseX + window.scrollX + 'px'
//   light.style.top = mouseY + window.scrollY + 'px'
// }
// document.addEventListener('mousemove', e => {
//   mouseX = e.clientX
//   mouseY = e.clientY
//   updateLightMouse()
// })
// window.addEventListener('scroll', e => {
//   updateLightMouse()
// })
function rgbColor() {
  const r = 0; // 150 đến 255
  const g = Math.floor(Math.random() * 106) + 150; // 150 đến 255
  const b = Math.floor(Math.random() * 106) + 150; // 150 đến 255
  return `rgb(${r}, ${g}, ${b})`;
}
function updateLightMouse() {
  light.style.left = mouseX + window.scrollX + 'px'
  light.style.top = mouseY + window.scrollY + 'px'
}
document.addEventListener('mousemove', e => {
  mouseX = e.clientX
  mouseY = e.clientY
  updateLightMouse()
}) 
window.addEventListener('scroll', e => {
  updateLightMouse()
})
const frontendHover = document.querySelector('.frontend')

const letters = document.querySelectorAll('.frontend span')

frontendHover.addEventListener('mouseenter', () => {
  letters.forEach(letter => {
    setTimeout(() => {
      letter.style.color = rgbColor()
    }, 300) 
  })
})

frontendHover.addEventListener('mouseleave', () => {
  letters.forEach(letter => {
    setTimeout(() => {
      letter.style.color = ''
    }, 300) 
  })
})

const scrollable = document.querySelector('.scrollable')
if(event.deltaY !== 0) {
  event.preventDefault()
  scrollable.scrollBy({
    top: event.deltaY,
    behavior: "smooth"
  })

}

document.querySelectorAll('a.aep-item').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});