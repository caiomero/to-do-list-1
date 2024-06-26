const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaDeItens = []

function pegarOValorDoMeuInput() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''

    mostrarTarefas()
}
function mostrarTarefas() {

    let novaLi = ''


    minhaListaDeItens.forEach((item, posiçao) => {
        novaLi = novaLi + ` 

        <li class="task ${item.concluida && "done"}">
            <img src="img/checked.png" alt="confirmar" onclick="concluirTarefa(${posiçao})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="deletar" onclick="deletarItem(${posiçao})">
        </li>
        `
    })

,
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}




function concluirTarefa(posiçao) {
    minhaListaDeItens[posiçao].concluida = !minhaListaDeItens[posiçao].concluida

    mostrarTarefas()

}
function regarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(mostrarTarefas){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}
regarregarTarefas()



function deletarItem(posiçao) {
    minhaListaDeItens.splice(posiçao, 1)

    mostrarTarefas()
}





button.addEventListener('click', pegarOValorDoMeuInput)