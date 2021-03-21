function calculaIMC(peso, altura) {
  let imc = peso / altura ** 2;
  return imc;
}

function verificaIMC(imc) {
  let situacao = null;

  //controle de fluxo;
  if (imc <= 18.5) {
    // abaixo de 18.5
    situacao = "Magreza";
  } else if (imc >= 18.5 && imc <= 24.9) {
    // entre 18.5 e 24.9
    situacao = "Normal";
  } else if (imc > 24.9 && imc <= 30) {
    // entre 24.9 e 30
    situacao = "Sobrepeso";
  } else {
    // acima de 30
    situacao = "Obesidade";
  }

  return situacao;
}

function mostraPaciente(paciente) {
  let imc = calculaIMC(paciente.peso, paciente.altura);
  let situacao = verificaIMC(imc);

  let elNome = document.getElementById("nome");
  elNome.innerHTML = paciente.nome;

  let elPeso = document.getElementById("peso");
  elPeso.innerHTML = paciente.peso;

  let elAltura = document.getElementById("altura");
  elAltura.innerHTML = paciente.altura;

  let elImc = document.getElementById("imc");
  elImc.innerHTML = imc.toFixed(2);

  let elSituacao = document.getElementById("situacao");
  elSituacao.innerHTML = situacao;
}

function lerPaciente() {
  let inputNome = document.getElementById("txtNome");
  let inputPeso = document.getElementById("numPeso");
  let inputAltura = document.getElementById("numAltura");

  let paciente = {
    nome: inputNome.value,
    peso: inputPeso.value,
    altura: inputAltura.value,
  };

  return paciente;
}

function geraRelatorio(pacientes) {
  let listaNumerada = document.getElementById("listaNumerada");
  listaNumerada.innerHTML = ""; // apaga a lista caso tiver pacientes

  pacientes.forEach((paciente) => {
    let imc = calculaIMC(paciente.peso, paciente.altura);
    let sit = verificaIMC(imc);
    listaNumerada.innerHTML += `<li> Nome: ${paciente.nome} - Situação: ${sit}</li>`;
  });
}
