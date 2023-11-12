window.onload = function() {
    var container = document.getElementById('container');
    var slider = document.getElementById('gridSizeSlider');
    var sliderValue = document.getElementById('sliderValue');
    createGrid(slider.value);
    slider.addEventListener('input', function() {
        sliderValue.innerHTML = `${this.value} x ${this.value}`
        container.innerHTML = '';
        createGrid(this.value); 
    });
    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (var i = 0; i < size * size; i++) {
            var div = document.createElement('div');
            div.className = 'grid-item';
            div.addEventListener('mouseover', function() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            });
            container.appendChild(div);
        }
    }
};
