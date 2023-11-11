window.onload = function() {
    let container = document.getElementById('container');
    for (var i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        container.appendChild(div);
    }
};