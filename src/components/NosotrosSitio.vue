<template>
    <div class="app">
      <!-- Menú de Navegación -->
      <nav class="navbar">
        <div class="logo" @click="toggleLogoSize">
          <img :style="{ 'transform': `scale(${logoScale})` }" src="/logo.png" alt="Logo" @click.stop="handleClick"/>
        </div>
        <ul class="menu center-menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotrossitio">Nosotros</router-link></li>
          <li><router-link to="/propiedadessitio">Propiedades</router-link></li>
          <li><router-link to="/visionmision">¿Quiénes Somos?</router-link></li>
          <li><router-link to="/ubicacionsitio">Ubicacion</router-link></li>
        </ul>
  
        <div>
          <router-link to="/loginform">
            <button class="login-button"><b>Contacto</b></button>
          </router-link>
        </div>
        
      </nav>
      
      <div class="section">

        <div class="banner">
    <img src="/banner2.png" alt="banner" style="width: 90%; height: 30%;" />
  </div>
            
  <div class="nosotros-container">
    <div class="nosotros-text">
      <h1>Nosotros</h1>
      <p>En <b>House Finder</b>, nos dedicamos apasionadamente a ayudarte a encontrar el hogar perfecto. Nuestra misión es facilitar el proceso de búsqueda de casas y renta de departamentos, brindando soluciones integrales y personalizadas para satisfacer tus necesidades específicas.</p>
      <p>Con una amplia red de propiedades verificadas y una sólida comprensión del mercado inmobiliario, estamos comprometidos a hacer que tu experiencia de búsqueda sea sin complicaciones y gratificante. Nuestro equipo de expertos en bienes raíces está aquí para asesorarte en cada paso del camino y garantizar que encuentres un lugar que puedas llamar hogar con confianza y comodidad.</p>
      <p>Ya sea que estés buscando una casa familiar espaciosa, un acogedor apartamento o una propiedad de inversión, estamos aquí para convertir tus sueños en realidad. Con House Finder, descubrir tu nuevo hogar es más que una transacción: es una experiencia emocionante y gratificante.</p>
    </div>
    <div class="nosotros-image">
      <!-- Cambia 'ruta-de-tu-imagen' por la ruta correcta de tu imagen -->
      <img src="smile.jpg" alt="Imagen Vertical">
    </div>
  </div>
</div>
</div>
<br><br> <br><br>

  
  
  
  
  
  
<footer class="footer">
  <div style="text-align: center;">
      <table>
          <!-- Información del footer -->
          <!-- Ajusta los estilos según tus necesidades -->
      </table>
  </div>
  <div style="text-align: center;">
      <div class="footer-social-icons">
          <a href="https://www.facebook.com/"><img src="/facebook.png" alt="Facebook"></a>
          <a href="https://www.whatsapp.com/"><img src="whatsapp.png" alt="Whatsapp"></a>
          <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram"></a>
      </div>
  </div>
  <div style="text-align: center;">
      <p style="font-size: 12px; color: #ba8c26;">
          &copy; 2023 House Finder. Todos los derechos reservados.
      </p>
  </div>
  <div style="text-align: center;">
      <p class="privacy-notice">
          <router-link to="/avisoprivacidad">Aviso de Privacidad</router-link>
      </p>
  </div>
</footer>
 
  </template>
  
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        logoScale: 1, // Escala inicial del logo
      };
    },
    methods: {
      toggleLogoSize() {
        // Cambia la escala del logo al 150% cuando se hace clic
        this.logoScale = this.logoScale === 1 ? 1.5 : 1;
      },
      redirectToTarjetaCasa() {
        this.$router.push('/tarjetacasa');
      },
      redirectToTarjetaCasaa() {
        this.$router.push('/tarjetacasaa'); // Asegúrate de que el nombre de la ruta sea correcto
      },
      redirectToTarjetaCasaaa() {
        this.$router.push('/tarjetacasaaa'); // Asegúrate de que el nombre de la ruta sea correcto
      },
      redirectToTarjetaCasaaaa() {
        this.$router.push('/tarjetacasaaaa'); // Asegúrate de que el nombre de la ruta sea correcto
      },
      redirectToTarjetaCasaaaaa() {
        this.$router.push('/tarjetacasaaaaa'); // Asegúrate de que el nombre de la ruta sea correcto
      },
    },
  };
  </script>
  
  
  
  
  
  
  
  
  <style scoped>
  .menu li a {
    text-decoration: none;
    color: #495057; /* Cambia el color del texto según tus preferencias */
    font-weight: bold;
  }
  
  /* Estilos para el esqueleto de la página */
  .app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
  
  /* Estilos para el menú de navegación */
  .navbar {
    background-color: #ffffff; /* Azul indigo */
    color: #fff; /* Texto blanco */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px 0;
    height: 80px;
    margin-top: -50px;
  }
  
  /* Estilos para el logo */
  .logo img {
    max-height: 150px; /* Tamaño inicial del logo */
    transition: max-height 0.3s ease; /* Transición suave de tamaño */
    cursor: pointer; /* Cambia el cursor al hacer clic */
    padding-left: 50px;
  }
  
  /* Estilos para el menú */
  .menu {
    list-style: none;
    display: flex;
    gap: 40px;
    margin-left: 10px;
  }
  
  .menu li a {
    text-decoration: none;
    color: #1f1f1f; /* Texto blanco */
    transition: color 0.3s ease;
  }
  
  .menu li a:hover {
    color: #ba8c26; /* Dorado en hover */
  }
  
  .section  {
      background-color: #ffffff; /* Color de fondo deseado */
      padding: 0px;
      margin-bottom: 5%; /* Ajusta el relleno según sea necesario */
    }
    .nosotros-container {
    display: flex;
    justify-content: flex-end; /* Alinea el contenido hacia la izquierda */
    align-items: center;
    max-width: 950px; /* Ajusta el ancho máximo según sea necesario */
    margin: 20px auto 30px 200px; /* Ajusta los márgenes según sea necesario */
    padding: 30px;
  }
  
  .nosotros-text {
    flex: 1;
    margin-right: 20px; /* Ajusta el margen entre el texto y la imagen según sea necesario */
    text-align: justify; /* Alinea el texto de manera justificada */
    line-height: 1.6; /* Ajusta la altura de línea para mejorar la legibilidad */
  }
  
  .nosotros-image {
    flex-basis: 350px; /* Ajusta el ancho de la imagen según sea necesario */
  }
  
  .nosotros-image img {
    width: 90%; /* O ajusta el tamaño de la imagen según sea necesario */
    height: auto; /* Mantiene la proporción original de la imagen */
  }
  

  
  /* Estilos adicionales para mejorar la apariencia del texto */
  .nosotros-text h1 {
    color: #333; /* Cambia el color del título según tus preferencias */
  }
  
  .nosotros-text p {
    margin-bottom: 15px; /* Ajusta el espacio entre párrafos según sea necesario */
  }
  
  /* Estilos para el botón de inicio de sesión */
  .login-button {
    background-color: #caa24c; /* Dorado */
    color: #292929; /* Texto negro */
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-right: 80px; /* Añadido margen derecho */
  }
  
  .login-button:hover {
    background-color: #12407c; /* Negro en hover */
    color: #fff; /* Texto blanco en hover */
  }
  
  /* Estilos para la sección de inicio */
  .inicio-section {
    /* Personaliza los estilos de la sección de inicio aquí */
  }
  
  /* Estilos para el banner */
  .banner {
    /* Personaliza los estilos del banner aquí */
  }
  .promos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .promos .card {
    flex: 1 1 300px;
    margin: 10px;
    text-align: center;
  }
  
  .promos .card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    cursor: pointer;
  }
  
  .promos .card h2 {
    color: #ba8c26;
  }
  
  .promos .card p {
    color: rgb(255, 255, 255);
  }
  
  
  .promos  {
    
    background-color: #252525; /* Color de fondo deseado */
    padding: 20px; /* Ajusta el relleno según sea necesario */
  }
  
  /* Estilos para el texto de inicio */
  .inicio-text {
    /* Personaliza los estilos del texto de inicio aquí */
  }
  
  /* Estilos para el botón "Aprende Más" */
  .btn-learn-more {
    /* Personaliza los estilos del botón "Aprende Más" aquí */
  }
  .section1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .row1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }
  
  .column1 {
    flex: 1;
    padding: 20px;
    text-align: justify;
  }
  
  .column1 img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  
  /* Estilos para la fila de columnas */
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px; /* Ancho máximo del contenedor de filas */
    margin: 0 auto;}
  
  /* Estilos para cada columna */
  .column {
    flex-basis: calc(33.33% - 20px); /* Ancho de cada columna */
    margin-right: 20px; /* Espacio entre columnas */
  }
  
  /* Estilos para la última columna (para eliminar el margen derecho) */
  .column:last-child {
    margin-right: 0;
  }
  
  
  .btn-learn {
    background-color: #caa24c; /* Dorado */
    color: #292929; /* Texto negro */
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-right: 100px; /* Añadido margen derecho */
  }
  
  .btn-learn:hover {
    background-color: #12407c; /* Negro en hover */
    color: #fff; /* Texto blanco en hover */
  }
  
  .inicio-text {
    width: 50%; /* Ajusta el ancho del div al 50% del ancho de la ventana del navegador */
    font-size: 20px;
    margin-left: auto;
      margin-right: auto;
      text-align: justify;
    
  }
  
  
  
  
  .footer {
    width: 100%;
    background-color: #f4f4f4;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  
  .footer-column {
    flex: 1;
    max-width: 300px;
    margin: 10px;
  }
  
  .footer-column span {
    font-size: 14px; /* Tamaño de fuente base para pantallas más grandes */
  }
  
  @media only screen and (max-width: 768px) {
    .footer-column {
      max-width: 100%;
    }
    
    .footer-column span {
      font-size: 12px; /* Ajuste de tamaño de fuente para pantallas más pequeñas */
    }
  }
  
  .privacy-notice {
    text-align: center;
    padding-top: 10px;
    font-size: 12px;
  }
  
  .privacy-notice a {
    color: #ba8c26; /* Cambia este valor al color que desees */
    text-decoration: none;
  }
  
  .privacy-notice a:hover {
    text-decoration: underline;
  }
  
  .capitulo {
    color: #ffffff; /* Cambia este valor al color que desees */
    margin-left: 20%;
    margin-right: 20%;
    text-align: justify;
    font-size: 80px;
  }
  .footer-social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px; /* Ajusta el margen izquierdo según sea necesario */
}

.footer-social-icons a {
    margin: 0 10px; /* Ajusta el margen horizontal según sea necesario */
}

.footer-social-icons img {
    width: 30px; /* Ajusta el ancho según sea necesario */
    height: 30px; /* Ajusta la altura según sea necesario */
  }
  
  </style>