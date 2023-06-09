window.addEventListener('load', () =>{
    const form = document.querySelector("#nova-tarefa-form");
    const input = document.querySelector("#nova-tarefa-input");
    const lista_el = document.querySelector("#tarefas");


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const tarefa = input.value; 

        if(!tarefa){
            alert("Por favor, digite a tarefa")
            return; 
        }

        const tarefa_el = document.createElement("div");
        tarefa_el.classList.add("tarefa");
        
        const tarefa_conteudo_el = document.createElement("div");
        tarefa_conteudo_el.classList.add("conteudo");

        tarefa_el.appendChild(tarefa_conteudo_el);

        const tarefa_input_el = document.createElement("input");
        tarefa_input_el.classList.add("texto");
        tarefa_input_el.type = "text";
        tarefa_input_el.value = tarefa;
        tarefa_input_el.setAttribute("readonly", "readonly");

        tarefa_conteudo_el.appendChild(tarefa_input_el);

        const tarefa_acoes_el = document.createElement("div");
        tarefa_acoes_el.classList.add("acoes");

        const tarefa_editar_el = document.createElement("button");
        tarefa_editar_el.classList.add("editar");
        tarefa_editar_el.innerHTML = "Editar"

        const tarefa_excluir_el = document.createElement("button");
        tarefa_excluir_el.classList.add("excluir");
        tarefa_excluir_el.innerHTML = "Excluir";

        tarefa_acoes_el.appendChild(tarefa_editar_el);
        tarefa_acoes_el.appendChild(tarefa_excluir_el);

        tarefa_el.appendChild(tarefa_acoes_el);

        lista_el.appendChild(tarefa_el);

        input.value = "";

        tarefa_editar_el.addEventListener('click', () =>{
            if (tarefa_editar_el.innerText.toLowerCase() == "editar"){
                tarefa_input_el.removeAttribute("readonly");
                tarefa_input_el.focus();
                tarefa_editar_el.innerText = "Salvar"
            }else{
                tarefa_input_el.setAttribute("readonly", "readonly");
                tarefa_editar_el.innerText = "Editar"
            }
        });

        tarefa_excluir_el.addEventListener('click', () =>{
         lista_el.removeChild(tarefa_el)
        });

    });
});