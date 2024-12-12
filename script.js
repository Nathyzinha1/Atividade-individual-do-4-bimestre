const campoTexto = document.getElementById("campoTexto");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoContar = document.getElementById("botaoContar");
const conteudoDiv = document.getElementById("conteudo");

botaoAdicionar.addEventListener("click", () => {
  const texto = campoTexto.value.trim();
  if (texto) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    conteudoDiv.appendChild(paragrafo);
    campoTexto.value = ""; // Limpa o campo de texto
  }
});

// Exibe o número de linhas adicionadas
botaoContar.addEventListener("click", () => {
  const paragrafos = conteudoDiv.getElementsByTagName("p").length;
  alert(`${paragrafos} linha(s) foram adicionadas.`);
});
