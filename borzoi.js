function perro() {
    document.getElementById("perro").innerHTML = '<div class="container text-center"><picture><img src="" id="foto" alt="" class="rounded border border-warning img-thumbnail"></picture><p>"I did it for you"</p></div>';
    var tiempo = 180;//tiempo en milisegundos
    var arrImagenes = ['https://raw.githubusercontent.com/ehercor0612/Borzoi/main/Captura1.PNG', 'https://raw.githubusercontent.com/ehercor0612/Borzoi/main/Captura2.png'];
  
    _img = document.getElementById('foto');
  
    //cargar la 1er imagen
    _img.src = arrImagenes[0];
    var i = 1;
    setInterval(function () {
        _img.src = arrImagenes[i];
        i = (i == arrImagenes.length - 1) ? 0 : (i + 1);
    }, tiempo);
  }
  window.addEventListener('load', (event) => {
        perro();
  })
