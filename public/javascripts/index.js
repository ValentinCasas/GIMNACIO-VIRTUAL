window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');

    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1500);
});


/* window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    
    // Agregar clase para fondo negro y duración más larga
    loader.classList.add('black-bg', 'long-duration');
    
    // hide the loader and show the content
    setTimeout(function() {
      loader.classList.add('hide');
      content.style.display = 'block';
    }, 3000); // 3 segundos de espera
    
  }); */