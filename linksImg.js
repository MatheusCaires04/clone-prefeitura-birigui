const linksImg = [
    {
        id: 0,
        img: '/img/vacina-covid.png',
    },
    {
        id: 0,
        img: '/img/portal-servidor.png',
    },
    {
        id: 0,
        img: '/img/ouvidoria.png',
    },
    {
        id: 0,
        img: '/img/qualifica-birigui.png',
    },
    {
        id: 0,
        img: '/img/relatorio-mensal.png',
    },
    {
        id: 0,
        img: '/img/iptu.png',
    },
    {
        id: 0,
        img: '/img/nf.jpg',
    },
    {
        id: 0,
        img: '/img/iss-web.jpg',
    },
    {
        id: 0,
        img: '/img/transparencia.jpg',
    },
    {
        id: 0,
        img: '/img/consulta-agua.jpg',
    },
    {
        id: 0,
        img: '/img/alimentacao-escolar.jpg',
    },
    {
        id: 0,
        img: '/img/restaurante-popular.jpeg',
    },
    {
        id: 0,
        img: '/img/licenciamento.png',
    },
    {
        id: 0,
        img: '/img/vtn.png',
    },
    {
        id: 0,
        img: '/img/boletim-epidemiologico.png',
    },
]

initialLinksImg = () => {
    var links = document.getElementById('links')
    linksImg.map(items => {
        links.innerHTML += `
            <img src="`+items.img+`" alt="Portals" class="image--links--info" />
        `
    })
}

initialLinksImg()