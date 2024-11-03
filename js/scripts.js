// ## DOM

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

// html
// <header id="header" class="header">
//   <h1 id="main-title" class="title title--big">Soy un título</h1>
//   <h2 id="main-subtitle" class="subtitle subtitle--big">Soy un subtítulo</h2>
//   <h3 id="start-point" class="start">
// </header>

 const h3Element = document.getElementById('start-point');
 const parentElement = h3Element.parentElement;
 const h1Element = h3Element.previousElementSibling.previousElementSibling;

 console.log(`soy un h3 con el id ${h3Element.id} y la clase '${h3Element.className}' Mi padre es un header con Id ${parentElement.id}:y la clase: ${parentElement.className}  mi hermano es un h1 con el id ${h1Element.id} y la clase ${h1Element.className}`)




