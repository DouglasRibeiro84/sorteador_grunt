document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sortear').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMax = document.getElementById('numero-maximo').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        document.getElementById('resultado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})