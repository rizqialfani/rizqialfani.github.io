const semar = GLightbox({
    selector: '#semar',
    elements: [
        {
            'href': 'assets/img/portfolio/semar/semar_1.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/semar/semar_2.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/semar/semar_3.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/semar/semar_4.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/semar/semar_5.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/semar/semar_6.png',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

const rusunawa = GLightbox({
    selector: '#rusunawa',
    elements: [
        {
            'href': 'assets/img/portfolio/rusunawa/rusunawa_2.png',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

const icai = GLightbox({
    selector: '#icai',
    elements: [
        {
            'href': 'assets/img/portfolio/icai/icai_1.jpg',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

const iklan = GLightbox({
    selector: '#iklan',
    elements: [
        {
            'href': 'assets/img/portfolio/iklan/iklan_11.png',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

const movie = GLightbox({
    selector: '#movie',
    elements: [
        {
            'href': 'assets/img/portfolio/movie/movie_1.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/movie/movie_2.png',
            'type': 'image',
        },
        {
            'href': 'assets/img/portfolio/movie/movie_3.png',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

const reactPersonalNotes = GLightbox({
    selector: '#react-personal-notes',
    elements: [
        {
            'href': 'assets/img/labs/react-personal-notes.png',
            'type': 'image',
        },
    ],
    touchNavigation: true,
    loop: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    draggable: false,
});

document.querySelector('#semar').onclick = () => {
    semar.open();
};

document.querySelector('#rusunawa').onclick = () => {
    rusunawa.open();
};

document.querySelector('#icai').onclick = () => {
    icai.open();
};

document.querySelector('#iklan').onclick = () => {
    iklan.open();
};

document.querySelector('#movie').onclick = () => {
    movie.open();
};

document.querySelector('#react-personal-notes').onclick = () => {
    reactPersonalNotes.open();
};