document.addEventListener('DOMContentLoaded', function () {
    const imagen = document.getElementById('Imagen');
    const cambio1 = document.getElementById('cambio1');
    const cambio = document.getElementById('cambio');

    document.getElementById('style1').addEventListener('click', () => {
        document.body.style.backgroundColor = '#f0f8ff';
        document.querySelector('h2').style.color = '#3498db';
        document.querySelector('p').style.color = '#2c3e50';
        document.querySelector('div').style.color = '#9b59b6';
        imagen.src = 'Imagen/img1.jpg';
        imagen.className = 'small-img';
        cambio1.textContent = 'Mi Nombre es:';
        cambio.textContent = 'Patrick Alexander';
    });

    document.getElementById('style2').addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff3e0';
        document.querySelector('h2').style.color = '#d35400';
        document.querySelector('p').style.color = '#e67e22';
        document.querySelector('div').style.color = '#e74c3c';
        imagen.src = 'Imagen/img2.jpg'; 
        imagen.className = 'medium-img';
        cambio1.textContent = 'Mis Apellidos son:';
        cambio.textContent = 'Salguero Solares';
    });

    document.getElementById('style3').addEventListener('click', () => {
        document.body.style.backgroundColor = '#e8f5e9';
        document.querySelector('h2').style.color = '#1abc9c';
        document.querySelector('p').style.color = '#16a085';
        document.querySelector('div').style.color = '#27ae60';
        imagen.src = 'Imagen/img3.jpg';
        imagen.className = 'large-img';
        cambio1.textContent = 'Mi Carnet es:';
        cambio.textContent = '0907-24-15191';
    });
});
