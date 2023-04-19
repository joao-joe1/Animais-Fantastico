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
function initScrollSuave() {

    const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollSuave(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        console.log(section)


        //Outra forma de tornar scroll suave...
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });

        //Alternativa para Chrome e Firefox
        // section.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        // });
    }

    linkInternos.forEach((links) => {
        links.addEventListener('click', scrollSuave)
    });
}

initScrollSuave();
initAccordion();
initTab();
