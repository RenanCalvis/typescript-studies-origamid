"use strict";
// Exercício
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
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
        // colorNivel(data[0].nivel);
    }
    catch (error) {
        console.error('Falha ao buscar itens:', error);
        document.body.innerHTML = `
    <div> 
      <h1>Deu ruim buscar o item na API</h1>
    </div>`;
    }
}
fetchCursos();
function colorNivel(nivel) {
    const redBg = 'background-color: red;';
    const blueBg = 'background-color: blue;';
    const bgCustom = document.querySelector('.bg-custom');
    console.log(bgCustom);
    if (nivel === 'iniciante') {
        return (bgCustom.style.cssText = blueBg);
    }
    return (bgCustom.style.cssText = redBg);
}
function showCurso(data) {
    data.forEach((curso) => {
        let color = 'red';
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        document.body.innerHTML += `
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
    });
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
