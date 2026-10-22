// Exercício
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
// Extra para manipular o DOM: Atribuir a cor inversa da definida para color, ou seja, se for color red enão o background é blue... Fazer isso criando uma outra função e manipulando o DOM fora do escopo de showCurse
interface Curso {
  aulas: string;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: 'iniciante' | 'avancado';
  nome: string;
  tags: Array<string>;
}
// Reflete o Json então a fonte da verdade é o tipo dentro de Curso
type Nivel = Curso['nivel'];

async function fetchCursos() {
  console.log('TESTEEEE');
  try {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('TESTEEE2');

    console.log(data);
    showCurso(data);
    const bgCustom = document.querySelectorAll<HTMLElement>('.bg-custom');
    for (let i = 0; i < bgCustom.length; i++) {
      colorNivelBg(data[i].nivel, bgCustom[i]);
    }
  } catch (error) {
    console.error('Falha ao buscar itens:', error);
    document.body.innerHTML = `
    <div> 
      <h1>Deu ruim buscar o item na API</h1>
    </div>`;
  }
}

fetchCursos();

function colorNivelBg(nivel: Nivel, tag: HTMLElement) {
  const redBg = 'red';
  const blueBg = 'blue';

  if (nivel === 'iniciante') {
    tag.style.backgroundColor = redBg;
    return;
  }
  tag.style.backgroundColor = blueBg;
}

function showCurso(data: Curso[]) {
  const htmlContent = data
    .map((curso) => {
      const color = curso.nivel === 'iniciante' ? 'blue' : 'red';

      return `
      <div>
      <h2 class='bg-custom' style="color: ${color};">Nome: ${curso.nome ?? 'Vazio'}</h2>
      <h2>Horas: ${curso.horas}</h2>
      <h2>Aulas: ${curso.aulas}</h2>
      <h2>Gratuito: ${curso.gratuito === true ? 'Sim' : 'Não'}</h2>
      <h2>Tags: ${curso.tags.join(', ')}</h2>
      <h2>Id das Aulas: ${curso.idAulas.join(', ')}</h2>
      <h2>Nível: ${curso.nivel}</h2>
      <h2>${'Aura'}</h2>
      </div>
      `;
    })
    .join('');
  console.log(htmlContent);
  document.body.innerHTML = htmlContent;
}

//Solução aula:
// interface Curso {
//   nome: string;
//   horas: number;
//   aulas: string;
//   gratuito: boolean;
//   tags: string[];
//   idAulas: number[];
//   nivel: 'iniciante' | 'avancado';
// }

// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   mostrarCursos(data);
// }

// fetchCursos();

// function mostrarCursos(cursos: Curso[]) {
//   cursos.forEach((curso) => {
//     let color;
//     if (curso.nivel === 'iniciante') {
//       color = 'blue';
//     } else if (curso.nivel === 'avancado') {
//       color = 'red';
//     }
//     document.body.innerHTML += `
//       <div>
//         <h2 style="color: ${color};">${curso.nome}</h2>
//         <p>Horas: ${curso.horas}</p>
//         <p>Aulas: ${curso.aulas}</p>
//         <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
//         <p>Tags: ${curso.tags.join(', ')}</p>
//         <p>Aulas: ${curso.idAulas.join(' | ')}</p>
//       </div>
//     `;
//   });
// }
