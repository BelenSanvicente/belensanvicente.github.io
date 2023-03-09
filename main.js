let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 72,
});
 
typewriter
  .pauseFor(1000)
  .typeString('Soy estudiante de Física Biomédica, educadora en Pilares CDMX y programadora.')
  .pauseFor(200)
  .deleteChars(5)
  .start();
