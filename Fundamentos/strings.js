const escola = "cod3r"

console.log(escola.charAt(4))      //.chatArt mostra qual String está na casa (4)
console.log(escola.charCodeAt(3))  //.charCodeAt pega o Codigo relacionado no caso pegou na 3 posição que era o numero 3 
console.log(escola.indexOf('3'))   // mostra qual posição esta o indice 3

console.log(escola.substring(1))   // mostra a string apartir da posição 1
console.log(escola.substring(0,3)) // mostra a string da posição 0 até a 2, não incluindo o indice 3

console.log('escola '.concat(escola).concat(' !')) // concatenar 
console.log(escola.replace(3, 'e'))                // substitui o numero 3 por 'e'

console.log('Ana,Maria,Pedro'.split(','))          // vai separar usando ,