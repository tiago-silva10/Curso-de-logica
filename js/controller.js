let pacientes = []; //array vazio;

let botaoCalcular = document.getElementById("calcular");
botaoCalcular.addEventListener("click", function () {
  let paciente = lerPaciente(); // lê e retorna o objeto
  pacientes.push(paciente);
  mostraPaciente(paciente);
});

let botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener("click", function () {
  geraRelatorio(pacientes);
});
