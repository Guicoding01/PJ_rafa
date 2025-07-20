
// função feita para clicar e gerar nova tabela de pacientes 

let contador = 1; // Escopo global

function adicionarLinha() {
  const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();

  const celula1 = novaLinha.insertCell(0);
  celula1.textContent = contador++;

  const celula2 = novaLinha.insertCell(1);
  celula2.innerHTML = '<input type="text">';

  const celula3 = novaLinha.insertCell(2);
  celula3.innerHTML = '<input type="number" min="0" max="120">';

  const celula4 = novaLinha.insertCell(3);
  celula4.innerHTML = '<input type="number" min="0" max="120">';

  for (let i = 0; i < 4; i++) {
    const celula = novaLinha.insertCell(i + 3);
    celula.innerHTML = '<input type="checkbox">';
  }
}

adicionarLinha()



// Função para clicar e enviar os dados para o Banco 

function salvarNoBanco(){
const linhas = document.querySelectorAll("#tabela tbody tr");
const dados = []; 

linhas.forEach(linha => {
    const colunas = linha.querySelectorAll("td");

    const item = {
    texto: colunas[1].querySelector("input").value,
    idade: colunas[2].querySelector("input").value,
    check1: colunas[3].querySelector("input").checked,
    check2: colunas[4].querySelector("input").checked,
    check3: colunas[5].querySelector("input").checked,
    check4: colunas[6].querySelector("input").checked,
    quarto: colunas[7].querySelector("input").value
    
    }
    dados.push(item);
});

console.log(dados)
}

// Envia os dados para o backend via POST
/*

fetch("salvar.php", {
    method: "POST" , 
    headers: {"Content-Type": "application/json "},
    body: JSON.stringify(dados)
})
.then(res => res.text())
.then(response => {
 
alert("Dados Salvos com Sucesso !");
console.log(response)
})
.catch(error => {
    console.error("Erro ao Salvar" ,  error);
});

*/