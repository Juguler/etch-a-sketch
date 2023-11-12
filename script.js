window.onload = function() {
    var container = document.getElementById('container');
    var button = document.getElementById('newGridButton');

    createGrid(16); // Create initial 16x16 grid

    button.addEventListener('click', function() {
        var size = prompt("Enter the number of squares per side for the new grid (max 100)", "16");
        size = Math.min(Math.max(parseInt(size), 1), 100); // Ensure size is between 1 and 100
        container.innerHTML = ''; // Remove old grid
        createGrid(size); // Create new grid
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
