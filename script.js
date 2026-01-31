const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#si')
const messageBox = document.querySelector('#message')

let fontSize = 2
let messageIndex = 0

const messages = [
  'Estas segura amor?',
  'Piensalo bien',
  'Piensalo muy bien',
  'andale, piensalo ',
  'Mira el otro boton jijiji '
]

// Ocultamos el mensaje al inicio
messageBox.style.display = 'none'

buttonNo.addEventListener('click', () => {
  // Aumenta tamaño del botón "Sí"
  fontSize += 0.5
  buttonYes.style.fontSize = `${fontSize}rem`

  // Cambia mensajes de forma sucesiva
  if (messageIndex < messages.length) {
    buttonNo.textContent = messages[messageIndex]
    messageIndex++
  }
})

buttonYes.addEventListener('click', () => {
  messageBox.style.display = 'flex'
})
