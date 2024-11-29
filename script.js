function adicionarTarefa() {
    let tarefaInput = document.getElementById("novaTarefa");
    let tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto !== "") {
        let lista = document.getElementById("listaDeTarefas");

        let li = document.createElement("li");
        li.className = "tarefa";

        let span = document.createElement("span");
        span.textContent = tarefaTexto;
        span.onclick = function() {
            this.parentElement.classList.toggle("concluida");
        };

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function() {
            lista.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(botaoRemover);
        lista.appendChild(li);

        tarefaInput.value = "";
    }
}
