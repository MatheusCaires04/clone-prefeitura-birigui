const imgPortals = [
    {
        id: 0,
        img: '/img/img-portals-1.jpg',
    },
    {
        id: 1,
        img: '/img/img-portals-2.jpg',
    },
    {
        id: 2,
        img: '/img/img-portals-3.jpg',
    },
    {
        id: 3,
        img: '/img/img-portals-4.jpg',
    },
    {
        id: 4,
        img: '/img/img-portals-5.jpg',
    },
    {
        id: 5,
        img: '/img/img-portals-6.jpg',
    },
    {
        id: 6,
        img: '/img/img-portals-7.jpg',
    },
    {
        id: 7,
        img: '/img/img-portals-8-1.jpg',
    },
    {
        id: 8,
        img: '/img/img-portals-8.jpg',
    },
    {
        id: 9,
        img: '/img/img-portals-9.jpg',
    },
    {
        id: 10,
        img: '/img/img-portals-10.jpg',
    },
    {
        id: 11,
        img: '/img/img-portals-11.jpg',
    },
]

initialPortalImg = () => {
    var portal = document.getElementById('portals')
    imgPortals.map(items => {
        portal.innerHTML += `
            <img src="`+items.img+`" alt="Portals" class="image--portal" />
        `
    })
}

initialPortalImg()