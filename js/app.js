
function btnResp(resp) {
    var h1Element = document.querySelector('.lbltitulo');
    if (resp === 'S') {
        h1Element.innerText = ' Muy Bien';
    }
    else {
        h1Element.innerText = h1Element.innerText + ', Seguro?';
    }
}


document.addEventListener('keydown', function () {
    pumImg();
});

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

