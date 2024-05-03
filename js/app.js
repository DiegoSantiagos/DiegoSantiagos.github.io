// var h1Element = document.querySelector('.lbltitulo');
// h1Element.innerText = h1Element.innerText + ' tu casa';

function hideElement() {
    main.style.display = 'none';
}

function pumImg() {
    var imgElement = document.querySelector('.pumImg');
    imgElement.style.display = 'block';

    setTimeout(function () {
        imgElement.style.display = 'none';
    }, 1000)
}