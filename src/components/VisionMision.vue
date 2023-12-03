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
      <div class="banner">
        <img src="/banner5.png" alt="banner" style="width: 90%; height: 30%;" />
      </div>
      <div class="section1">
        

        <div class="row1">
          <div class="column1">
            <img src="/mision.jpg" alt="Misión">
          </div>
          <div class="column1">
            <h1>Misión</h1>
            <p>En <b>House Finder</b>, nuestra misión es proporcionar un servicio excepcional a nuestros clientes, brindándoles asesoramiento integral y soluciones personalizadas para sus necesidades de alquiler de casas y departamentos. Nos esforzamos por simplificar y hacer placentera la experiencia de encontrar un nuevo hogar.</p>
            <p>Con un enfoque en la transparencia y la confiabilidad, trabajamos arduamente para construir relaciones duraderas con nuestros clientes, asegurándonos de que cada paso del proceso de alquiler esté respaldado por nuestra experiencia y conocimiento profundo del mercado inmobiliario.</p>
          </div>
        </div> <br><br>


        <div class="row1">
          <div class="column1">
            <h1>Visión</h1>
            <p>Nuestra visión es convertirnos en el recurso líder y más confiable para aquellos que buscan alquilar propiedades. Nos esforzamos por ofrecer una amplia gama de opciones de vivienda de calidad, facilitando a nuestros clientes la búsqueda de un hogar que se adapte a sus necesidades y estilo de vida.</p>
            <p>Mediante la innovación constante y la adaptación a las últimas tendencias del mercado inmobiliario, aspiramos a establecer un estándar de excelencia en el servicio al cliente y a ser reconocidos como el socio preferido en la búsqueda de propiedades de alquiler confiables y asequibles.</p>
          </div>
          <div class="column1">
            <img src="/vision.jpg" alt="Visión">
          </div>
        </div><br><br>
        
       <div class="row1">
          <div class="column1">
            <img src="/valores.jpg" alt="Valores">
          </div>
          <div class="column1">
            <h1>Valores</h1>
            <p> En <b>House Finder</b> nuestros valores fundamentales son la base de nuestra operación diaria: <br>

              <b>Integridad:</b>  Actuar con honestidad y ética en todas nuestras interacciones, construyendo relaciones sólidas basadas en la confianza. <br>
              
              <b>Compromiso con el Cliente:</b> Colocar siempre las necesidades y expectativas del cliente en el centro de nuestras acciones, proporcionando un servicio que supere sus expectativas.
              
              <b>Innovación:</b> Abrazar la innovación y la mejora continua para ofrecer soluciones modernas y eficientes en el mercado inmobiliario. <br>
              
              <b>Colaboración:</b>  Fomentar un ambiente colaborativo, tanto internamente como con nuestros clientes y socios, para lograr resultados exitosos. <br>
              
              <b>Responsabilidad Social:</b> Contribuir positivamente a las comunidades en las que operamos, siendo social y ambientalmente responsables.</p>
          </div>
        </div>
      </div>
</div>

<div class="column3">
  <h1>Nuestra Historia</h1>
  <p class="parrafo">
    Hace 5 años, en la ciudad de Guadalajara, un grupo de visionarios inmobiliarios se unió con la ambición de transformar la experiencia de búsqueda y adquisición de viviendas. Desde su inicio en 2018, House Finder, la plataforma que co-fundaron, ha experimentado un notable crecimiento.
    <br />
    <br />
    La idea inicial surgió al observar las dificultades que enfrentaban las personas al buscar propiedades inmobiliarias en Guadalajara. Con el fuerte deseo de mejorar esta experiencia, el equipo de fundadores de House Finder se propuso crear una plataforma que no solo simplificara el proceso de búsqueda, sino que también se basara en sólidos valores fundamentales.
    <br />
    <br />
    Desde el principio, la integridad se estableció como un pilar fundamental de la operación diaria de House Finder. Actuar con honestidad y ética en todas las interacciones se convirtió en la norma, construyendo relaciones sólidas basadas en la confianza con clientes, socios y la comunidad en general.
    <br />
    <br />
    El compromiso con el cliente se convirtió en una prioridad máxima. House Finder se comprometió a colocar siempre las necesidades y expectativas del cliente en el centro de todas sus acciones, proporcionando un servicio que no solo cumpliera, sino que superara sus expectativas.
    <br />
    <br />
    La innovación se convirtió en un impulsor clave para House Finder. La empresa abrazó la innovación y la mejora continua, buscando constantemente soluciones modernas y eficientes en el mercado inmobiliario. Este enfoque permitió a House Finder destacarse en un entorno competitivo en constante evolución.
    <br />
    <br />
    La colaboración se convirtió en un valor central en la cultura de House Finder. Se fomentó un ambiente colaborativo tanto internamente como con clientes y socios, reconociendo que los resultados exitosos se logran mejor cuando se trabaja en conjunto.
    <br />
    <br />
    Además, House Finder asumió la responsabilidad social como parte integral de su identidad. La empresa se comprometió a contribuir positivamente a las comunidades en las que operaba, adoptando prácticas comerciales social y ambientalmente responsables.
    <br />
    <br />
    Con estos valores como guía, House Finder ha pasado su primer año dejando una huella positiva en el mercado inmobiliario de Guadalajara. La empresa sigue evolucionando y mirando hacia el futuro con el compromiso de continuar sirviendo a la comunidad y mejorando la experiencia de búsqueda de viviendas para todos. ¡Feliz primer aniversario, House Finder!
  </p>
</div>

<br> <br> <br> <br><br> <br> <br> <br><br> <br> <br> <br>


  
  
  
  
  
  
      <!-- Footer -->
      <!-- Footer -->
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
    padding: 50px; /* Aumenté el espacio de relleno para mayor elegancia */
    margin-bottom: 5%;
  }
  
  .row1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Espacio entre columnas */
    margin-bottom: 50px;
  }
  
  .column1 {
    flex: 1;
    text-align: justify;
  }
  
  .column1 img {
    width: 100%; /* Hace que la imagen ocupe el 100% del contenedor */
    max-width: 450px;
    height: auto;
    padding-left: 20px;/* Añadí bordes redondeados para un aspecto más moderno */
  }
  
  /* Estilos para el texto de los valores */
  .column1 h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .column1 p {
    font-size: 16px;
    line-height: 1.6;
    color: #555; /* Color de texto más suave */
  }
  
  /* Estilos para la fila de columnas */
  .row1 {
    max-width: 1200px;
    margin: 0 auto;
  }

  .column3 {
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
    font-size: 40px;
  }
  
  .parrafo {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    text-align: justify;
   
  }





  
  /* Estilos para dispositivos móviles */
  @media screen and (max-width: 768px) {
    .row1 {
      flex-direction: column;
      text-align: center;
    }
  
    .column1 img {
      margin-bottom: 20px;
    }
  }
  
  /* Agregué un contenedor para centrar la sección */
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Agregué estilos para separar visualmente la sección de valores */
  .separator {
    height: 2px;
    width: 50px;
    background-color: #caa24c; /* Color del botón de inicio de sesión */
    margin: 20px 0;
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