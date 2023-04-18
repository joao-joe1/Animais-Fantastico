function initTab() {
    const conteudosSecao = document.querySelectorAll('.jsSection li')
    const conteudosDescricao = document.querySelectorAll('.jsContent section')
    conteudosDescricao[0].classList.add('ativo')

    function ativaTab(index) {
        conteudosDescricao.forEach((itens) => {
            itens.classList.remove('ativo')
        })
        conteudosDescricao[index].classList.add('ativo')
    }

    conteudosSecao.forEach((itens, index) => {
        itens.addEventListener('click', () => {
            ativaTab(index)
        })
    })
}
initTab();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt')
    accordionList[0].nextElementSibling.classList.add('ativo')
    accordionList[0].classList.add('ativo')

    function ativaLista() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', ativaLista)
    })
}
initAccordion();