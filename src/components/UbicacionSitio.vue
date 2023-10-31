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
        <li><router-link to="/visionmision">Vision y Mision</router-link></li>
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
        <img src="/banner2.png" alt="banner" style="width: 90%; height: 35%;" />
      </div>

      <div class="map-container">
        <div class="google-map" id="googleMap">
          <!-- Aquí se cargaría la imagen en lugar del mapa de Google -->
          <img src="url_de_la_imagen" style="width: 100%; height: 500px; object-fit: cover;" alt="Mapa de ubicación">
        </div>
        <div class="address-container">
          <h2>Dirección:</h2>
          <p>Tu dirección aquí</p>
          <p>City, Estado, Código Postal</p>
        </div>
      </div>
      
    
      
    </div>

    <footer class="footer">
      <table>
        <!-- Información del footer -->
        <!-- Ajusta los estilos según tus necesidades -->
      </table>
      <p style="font-size: 12px; color: #ba8c26;">
        &copy; 2023 House Finder. Todos los derechos reservados.
      </p>
    </footer>
    <p class="privacy-notice">
      <router-link to="/avisoprivacidad">Aviso de Privacidad</router-link>
    </p>
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
    background-color: #e3b653; /* Color de fondo deseado */
    padding: 20px; /* Ajusta el relleno según sea necesario */
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
</style>
