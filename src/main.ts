import './style.css';
// import './clean-code/04-homework'
// import './clean-code/05-dry'
// import './clean-code/06-classes-c';
// import './clean-code/07-tarea';
// import './code-smells/02-high-coupling';
import './code-smells/02-low-coupling';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
