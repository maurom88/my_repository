function copyTitle() {
    var title = document.getElementById('main-title')
    document.getElementById('second-title').innerHTML = title.innerHTML
}

function changeStyle()  {
    var links = document.getElementsByTagName('a')

    for (var i = 0; i < links.length; i++) {
        links[i].style.fontSize = '1.1rem'
        links[i].style.textDecorationColor = 'darkred'
    }
}