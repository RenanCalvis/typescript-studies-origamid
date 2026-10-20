"use strict";
async function fetchProduct() {
    console.log('TESTEEEE');
    try {
        const response = await fetch('https://api.origamid.dev/json/notebook.json');
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        showProduct(data);
    }
    catch (error) {
        console.error('Falha ao buscar itens:', error);
        document.body.innerHTML = `
    <div> 
      <h1>Deu ruim buscar o item na API</h1>
    </div>`;
    }
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome ?? 'Vazio'}</h2>
      <h2>${'Aura'}</h2>0
    </div>
  `;
}
// API da aula tava fora do ar, fiz com base no retorno da aula. Resposta do exercicio: 
// interface Empresa {
//   nome: string;
//   fundacao: number;
//   pais: string;
// }
// interface Product {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidentes: boolean;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// async function fetchProduct() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json');
//   const data = await response.json();
//   showProduct(data);
// }
// fetchProduct();
// function showProduct(data: Product) {
//   document.body.innerHTML = `
//     <div>
//       <h2>${data.nome}</h2>
//       <p>R$ ${data.preco}</p>
//       <div>
//         <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
//       </div>
//       <div>
//         <h3>Montadora: ${data.empresaMontadora.nome}</h3>
//       </div>
//     </div>
//   `;
// }
