<template>
  <div class="app">
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
        <img src="/ubicacion.png" alt="banner" style="width: 100%; height: 30%;" />
      </div>

      <div class="section">
        <div class="map-container" style="padding: 20px;">
          <div class="google-map" id="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932.357638134385!2d-103.40371565490982!3d20.66594117168557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae787f411b3f%3A0xf31f350cc77d551e!2sEdificio%20Loma%20Chapalita!5e0!3m2!1sen!2smx!4v1698990119010!5m2!1sen!2smx" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          <div class="address-container">
            <h1>Dirección y Teléfono:</h1>
            <p>Av. Adolfo López Mateos Sur 1996</p>
            <p>Chapalita Sur, 44500</p>
            <p>Guadalajara, Jal.</p>
            <p>Teléfono: 555-123-4567</p> <!-- Puedes reemplazar "555-123-4567" con el número de teléfono que desees -->
          </div>
          
        </div>
          
      
        <!-- Resto del contenido de la sección -->
        <div>
          <!-- Aquí va el resto de tu contenido -->
        </div>
      </div>
      <br> <br> <br> <br>
      
    
      
    </div>

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
  </div>
    
   

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        logoScale: 1, // Escala inicial del logo
      };
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
    padding: 0px; /* Ajusta el relleno según sea necesario */
    margin-bottom: 5%;
  }
  .lomasplus {
    color: #ffffff; /* Cambia este valor al color que desees */
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 5%;
    text-align: justify;
    font-size: larger;
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

.nosotros {
  width: 50%;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  padding-bottom: 50px; /* Agrega un padding de 20 píxeles en la parte inferior del div */
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

.map-container {
  display: flex;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.google-map {
  flex: 1;
  height: 400px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.address-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #f9f9f9;
  padding: 20px;
}

.address-container h2 {
  margin-bottom: 10px;
}


.footer-social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px; /* Ajusta el margen izquierdo según sea necesario */
}

.footer-social-icons a {
  margin: 0 10px; /* Ajusta el margen horizontal según sea necesario */
}

.footer-social-icons img {
  width: 30px; /* Ajusta el ancho según sea necesario */
  height: 30px; /* Ajusta la altura según sea necesario */
}

</style>
