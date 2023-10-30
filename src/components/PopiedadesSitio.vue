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
            <li><router-link to="/valoressitio">Valores</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
  
        <div>
          <router-link to="/loginform">
            <button class="login-button"><b>Contacto</b></button>
          </router-link>
        </div>
        
      </nav>
      
      <div class="promos">
        <div class="banner">
          <img src="/banner3.png" alt="banner" style="width: 90%; height: 35%; padding-bottom: 5%;" />
        </div>
        <h1 class="capitulo">Lo + reciente</h1>
        
        <p class="lomasplus">En House Finder, te presentamos las últimas publicaciones más relevantes y populares del momento. Nuestro compromiso es brindarte acceso a las propiedades más destacadas y buscadas en el mercado actual. Con un enfoque centrado en la excelencia, la integridad y la plena satisfacción del cliente, nos dedicamos a ayudarte a encontrar la propiedad perfecta que se ajuste a tu estilo de vida. ¡Déjanos ser tu guía en esta emocionante búsqueda!</p>
      
        <div class="card">
          <img src="casa7.jpg" alt="Casa en Jalisco" @click="redirectToTarjetaCasa">
          <h2>Casa en Jalisco</h2>
          <p class="price"><b>$28,000 Mensuales</b></p>
          <p>Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños.</p>
      </div>
      
      <div class="card">
        <img src="casa5.jpg" alt="Casa en Jalisco" @click="redirectToTarjetaCasaa">
        <h2>Casa en CDMX</h2>
        <p class="price"><b>$30,000 Mensuales</b></p>
        <p>Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños.</p>
      </div>
      
       
      
      <div class="card">
        <img src="casa6.jpg" alt="Casa en Quintana Roo"  @click="redirectToTarjetaCasaaa">
        <h2>Casa en Quintana Roo</h2>
        <p class="price"><b>$15,000 por mes</b></p>
        <p>Moderna casa cerca de la playa. 4 dormitorios, 3 baños.</p>
      </div>
      
      <div class="card">
        <img src="depa1.jpeg" alt="Casa en Quintana Roo"  @click="redirectToTarjetaCasaaaa">
        <h2>Departamento Zapopan</h2>
        <p class="price"><b>$19,000 por mes</b></p>
        <p>Departamento de lujo. 2 dormitorios, 2 baños.</p>
      </div>
      
      <div class="card">
        <img src="depa2.jpg" alt="Casa en Quintana Roo"  @click="redirectToTarjetaCasaaaaa">
        <h2>Departamento Monterrey</h2>
        <p class="price"><b>$19,000 por mes</b></p>
        <p>Moderno departamento con excelentes vistas. 2 dormitorios, 1 baño.</p>
      </div>
      
      
        <div class="card">
            <img src="casa4.jpg" alt="Casa en Nuevo León" onclick="window.location.href='link_a_tu_página'">
            <h2>Casa en Nuevo León</h2>
            <p class="price"><b>$20,000 por mes</b></p>
            <p>Encantadora casa con patio trasero amplio. 3 dormitorios, 2 baños.</p>
        </div>
      
        <div class="card">
            <img src="casa7.jpg" alt="Casa en Puebla" onclick="window.location.href='link_a_tu_página'">
            <h2>Casa en Puebla</h2>
            <p class="price"><b>$20,000 por mes</b></p>
            <p>Casa tradicional con diseño moderno. 4 dormitorios, 2 baños.</p>
        </div>
      
        <div class="card">
            <img src="depa3.png" alt="Departamento en Yucatán" onclick="window.location.href='link_a_tu_página'">
            <h2>Departamento en Yucatán</h2>
            <p class="price"><b>$20,000 por mes</b></p>
            <p>Departamento con vista al mar. 3 dormitorios, 2 baños.</p>
        </div>
      </div>
    </div>
      
    <!-- Promo2 -->

    <div class="promos2">
      <div class="banner">
        <img src="/banner3.png" alt="banner" style="width: 90%; height: 35%; padding-bottom: 5%;" />
      </div>
      <h1 class="capitulo2">HOT RENT</h1>
      
      <p class="lomasplus2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    
      <div class="card">
        <img src="casa7.jpg" alt="Casa en Jalisco" @click="redirectTo">
        <h2>HOT RENT</h2>
        <p class="price"><b>$28,000 Mensuales</b></p>
        <p>Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños.</p>
    </div>
    
    <div class="card">
      <img src="casa5.jpg" alt="Casa en Jalisco" @click="redirectTo">
      <h2>HOT RENT</h2>
      <p class="price"><b>$30,000 Mensuales</b></p>
      <p>Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños.</p>
    </div>
    
     
    
    <div class="card">
      <img src="casa6.jpg" alt="Casa en Quintana Roo"  @click="redirectTo">
      <h2>HOT RENT</h2>
      <p class="price"><b>$15,000 por mes</b></p>
      <p>Moderna casa cerca de la playa. 4 dormitorios, 3 baños.</p>
    </div>
    
    <div class="card">
      <img src="depa1.jpeg" alt="Casa en Quintana Roo"  @click="redirectTo">
      <h2>HOT RENT</h2>
      <p class="price"><b>$19,000 por mes</b></p>
      <p>Departamento de lujo. 2 dormitorios, 2 baños.</p>
    </div>
    
    <div class="card">
      <img src="depa2.jpg" alt="Casa en Quintana Roo"  @click="redirectTo">
      <h2>HOT RENT</h2>
      <p class="price"><b>$19,000 por mes</b></p>
      <p>Moderno departamento con excelentes vistas. 2 dormitorios, 1 baño.</p>
    </div>
    
    
      <div class="card">
          <img src="casa4.jpg" alt="Casa en Nuevo León" @click="redirectTo">
          <h2>HOT RENT</h2>
          <p class="price"><b>$20,000 por mes</b></p>
          <p>Encantadora casa con patio trasero amplio. 3 dormitorios, 2 baños.</p>
      </div>
    
      <div class="card">
          <img src="casa7.jpg" alt="Casa en Puebla" @click="redirectTo">
          <h2>HOT RENT</h2>
          <p class="price"><b>$20,000 por mes</b></p>
          <p>Casa tradicional con diseño moderno. 4 dormitorios, 2 baños.</p>
      </div>
    
      <div class="card">
          <img src="depa3.png" alt="Departamento en Yucatán" @click="redirectTo">
          <h2>HOT RENT</h2>
          <p class="price"><b>$20,000 por mes</b></p>
          <p>Departamento con vista al mar. 3 dormitorios, 2 baños.</p>
      </div>
    </div>
  
      
  
  
  
  
  
      <!-- Footer -->
      <!-- Footer -->
      <footer class="footer">
       
        
        
        <p style="font-size: 12px;">&copy; 2023 House Finder. Todos los derechos reservados.</p>
      </footer>
      <p class="privacy-notice">
        <router-link to="/avisoprivacidad">Aviso de Privacidad</router-link>
      </p>
    
 
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

  .lomasplus2 {
    color: #000000; /* Cambia este valor al color que desees */
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



  .promos2 {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .promos2 .card {
    flex: 1 1 300px;
    margin: 10px;
    text-align: center;
  }
  
  .promos2 .card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    cursor: pointer;
  }
  
  .promos2 .card h2 {
    color: #ba8c26;
  }
  
  .promos2 .card p {
    color: rgb(255, 255, 255);
  }
  
  
  .promos2  {
    
    background-color: #ffffff; /* Color de fondo deseado */
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

  .capitulo2 {
    color: #ba8c26; /* Cambia este valor al color que desees */
    margin-left: 20%;
    margin-right: 20%;
    text-align: justify;
    font-size: 80px;
  }
  
  </style>