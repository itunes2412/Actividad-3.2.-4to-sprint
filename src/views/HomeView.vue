<template>
  <div class="app">
    <!-- Menú de Navegación -->
    <nav class="navbar">
      <div class="logo" @click="toggleLogoSize">
        <img :style="{ 'transform': `scale(${logoScale})` }" src="/logo.png" alt="Logo" @click.stop="handleClick"/>
      </div>
      

      <div>
        <router-link to="/loginform">
          <button class="login-button">Iniciar Sesión</button>
        </router-link>
      </div>


      
      
    </nav>

    <!-- Contenido de la Página -->
    <main class="content">
      <!-- Sección de Inicio -->
      <!-- Sección de Inicio -->

      <!-- Sección de Inicio -->
<section class="inicio-section">
  <!-- Banner -->
  
  <div class="banner">
    <img src="/banner.png" alt="banner" style="width: 90%; height: 35%;" />
  </div>
  

  <!-- Texto de Inicio -->
  <div class="inicio-text">
    <h1>Bienvenidos a HOUSE FINDER</h1>
    <p>Somos tu mejor opción para encontrar la casa o departamento de tus sueños. En <b>HOUSE FINDER</b>, nos comprometemos a proporcionarte las mejores opciones de vivienda, ya sea que estés buscando tu primer hogar, una propiedad de inversión o el lugar perfecto para tu familia. Navega a través de nuestras propiedades, conoce nuestros proyectos y descubre oportunidades de promoción exclusivas. ¡Estamos aquí para ayudarte a encontrar el lugar que siempre has deseado!</p>
  </div>

  <br>
  <br>
  <br>
  <br>

  

  <!-- Tres Columnas en una Fila -->
  <!-- Tres Columnas en una Fila -->
<div class="row">
  <!-- Columna 1 -->
  <div class="column">
    <img src="casa1.jpg" alt="Imagen 1" style="width: 300px; height: 200px;"/>
    <h2>Encuentra tu Hogar Ideal</h2>
    <p>Explora una amplia gama de propiedades en las mejores ubicaciones. Tenemos opciones para todos los gustos y presupuestos.</p>
  </div>

  <!-- Columna 2 -->
  <div class="column">
    <img src="/casa2.jpg" alt="Imagen 2" style="width: 300px; height: 200px;" />
    <h2>Proyectos Innovadores</h2>
    <p>Descubre nuestros proyectos de desarrollo inmobiliario que ofrecen comodidad y estilo de vida moderno.</p>
  </div>

  <!-- Columna 3 -->
  <div class="column">
    <img src="casa3.jpg" alt="Imagen 3" style="width: 300px; height: 200px;" />
    <h2>Promociones Exclusivas</h2>
    <p>Aprovecha nuestras promociones especiales y descuentos en propiedades seleccionadas. ¡No te las pierdas!</p>
  </div>
</div>

</section>


<br>
<br>
<br>
<div class="section">
  <div class="banner">
    <img src="/banner2.png" alt="banner" style="width: 90%; height: 35%;" />
      </div>
        <div class="nosotros">
          <h1>Nosotros</h1>
  <p>En <b>House Finder</b>, nos dedicamos apasionadamente a ayudarte a encontrar el hogar perfecto. Nuestra misión es facilitar el proceso de búsqueda de casas y renta de departamentos, brindando soluciones integrales y personalizadas para satisfacer tus necesidades específicas.</p>
  <p>Con una amplia red de propiedades verificadas y una sólida comprensión del mercado inmobiliario, estamos comprometidos a hacer que tu experiencia de búsqueda sea sin complicaciones y gratificante. Nuestro equipo de expertos en bienes raíces está aquí para asesorarte en cada paso del camino y garantizar que encuentres un lugar que puedas llamar hogar con confianza y comodidad.</p>
  <p>Ya sea que estés buscando una casa familiar espaciosa, un acogedor apartamento o una propiedad de inversión, estamos aquí para convertir tus sueños en realidad. Con House Finder, descubrir tu nuevo hogar es más que una transacción: es una experiencia emocionante y gratificante.</p>
</div>
</div>

<div class="section1">
  <div class="row1">
    <div class="column1">
      <img src="/mision.jpg" alt="Misión">
    </div>
    <div class="column1">
      <h1>Nuestra Misión</h1>
      <p>En <b>House Finder</b>, nuestra misión es proporcionar un servicio excepcional a nuestros clientes, brindándoles asesoramiento integral y soluciones personalizadas para sus necesidades de alquiler de casas y departamentos. Nos esforzamos por simplificar y hacer placentera la experiencia de encontrar un nuevo hogar.</p>
      <p>Con un enfoque en la transparencia y la confiabilidad, trabajamos arduamente para construir relaciones duraderas con nuestros clientes, asegurándonos de que cada paso del proceso de alquiler esté respaldado por nuestra experiencia y conocimiento profundo del mercado inmobiliario.</p>
    </div>
  </div>
  <div class="row1">
    <div class="column1">
      <h1>Nuestra Visión</h1>
      <p>Nuestra visión es convertirnos en el recurso líder y más confiable para aquellos que buscan alquilar propiedades. Nos esforzamos por ofrecer una amplia gama de opciones de vivienda de calidad, facilitando a nuestros clientes la búsqueda de un hogar que se adapte a sus necesidades y estilo de vida.</p>
      <p>Mediante la innovación constante y la adaptación a las últimas tendencias del mercado inmobiliario, aspiramos a establecer un estándar de excelencia en el servicio al cliente y a ser reconocidos como el socio preferido en la búsqueda de propiedades de alquiler confiables y asequibles.</p>
    </div>
    <div class="column1">
      <img src="/vision.webp" alt="Visión">
    </div>
  </div>
</div>

<div class="promos">
  <div class="banner">
    <img src="/banner3.png" alt="banner" style="width: 90%; height: 35%; padding-bottom: 5%;" />
  </div>
  <h1 class="lomasplus">Los mas vistos</h1>
  <p class="lomasplus">En House Finder, te presentamos las publicaciones más actuales y las más cliqueadas del momento. Nuestro compromiso es brindarte acceso a las propiedades más destacadas y buscadas en el mercado actual. Con un enfoque en la calidad, la integridad y la satisfacción del cliente, estamos dedicados a ayudarte a encontrar la propiedad perfecta que se adapte a tu estilo de vida. ¡Permítenos ser tu guía en esta emocionante búsqueda!</p>

  
  <div class="card">
      <img src="casa7.jpg" alt="Casa en Jalisco" onclick="window.location.href='link_a_tu_página'">
      <h2>Casa en Jalisco</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños.</p>
  </div>

  <div class="card">
      <img src="casa5.jpg" alt="Casa en Guanajuato" onclick="window.location.href='link_a_tu_página'">
      <h2>Casa en Guanajuato</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Acogedora casa con jardín y terraza. 2 dormitorios, 1 baño.</p>
  </div>

  <div class="card">
      <img src="casa6.jpg" alt="Casa en Quintana Roo" onclick="window.location.href='link_a_tu_página'">
      <h2>Casa en Quintana Roo</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Moderna casa cerca de la playa. 4 dormitorios, 3 baños.</p>
  </div>

  <div class="card">
      <img src="depa1.jpeg" alt="Departamento en Veracruz" onclick="window.location.href='link_a_tu_página'">
      <h2>Departamento en Veracruz</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Luminoso departamento en el centro de la ciudad. 1 dormitorio, 1 baño.</p>
  </div>

  <div class="card">
      <img src="depa2.jpg" alt="Departamento en Querétaro" onclick="window.location.href='link_a_tu_página'">
      <h2>Departamento en Querétaro</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Moderno departamento con excelentes vistas. 2 dormitorios, 1 baño.</p>
  </div>

  <!-- Añade más elementos aquí -->

  <div class="card">
      <img src="casa4.jpg" alt="Casa en Nuevo León" onclick="window.location.href='link_a_tu_página'">
      <h2>Casa en Nuevo León</h2>
      <p class="price"><b>$20,000 por mes</b></p>
      <p>Encantadora casa con patio trasero amplio. 3 dormitorios, 2 baños.</p>
  </div>

  <div class="card">
      <img src="casa5.jpg" alt="Casa en Puebla" onclick="window.location.href='link_a_tu_página'">
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


      <!-- Resto del contenido de la página -->
      <!-- Puedes agregar más secciones y contenido aquí -->
    </main>

    <!-- Footer -->
    <!-- Footer -->
    <footer class="footer">
      <table>
        <tr>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">JALISCO</strong><br>
            <span style="font-size: 12px;">
              Av. Acueducto 4851 Real Acueducto,<br>
              C.P. 45116. Zapopan, Jalisco.<br><br>
              T. 333 642 5065<br>
              W. 333 253 0684<br>
              infojalisco@activoinmobiliario.mx<br><br>
              L-V de 9:30 a 19:30 h<br>
              S y D de 9:30 a 14:00 h
            </span>
          </td>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">GUANAJUATO</strong><br>
            <span style="font-size: 12px;">
              Paseo El Molino 302, El Molino Residencial,<br>
              C.P. 37138, León, Guanajuato, México.<br><br>
              T. 477 781 1119<br>
              W. 477 852 4437<br>
              infoleon@activoinmobiliario.mx<br><br>
              L-V de 9:00 a 20:00 h<br>
              S de 9:00 a 19:00 h<br>
              D y festivos de 11:00 a 19:00 h
            </span>
          </td>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">QUERÉTARO</strong><br>
            <span style="font-size: 12px;">
              Av el campanario 100 fracc. Hacienda el Campanario,<br>
              C.P. 76146, Querétaro, Querétaro, México.<br><br>
              T. 442 192 7722<br>
              W. 442 503 0960<br>
              infoqueretaro@activoinmobiliario.mx<br><br>
              L-V de 9:00 a 20:00 h<br>
              S de 9:00 a 19:00 h<br>
              D y festivos de 11:00 a 19:00 h
            </span>
          </td>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">QUINTANA ROO</strong><br>
            <span style="font-size: 12px;">
              Carretera Federal Cancun – Chetumal Km 299<br>
              C.P 77500 Playa del Carmen, Q.R<br><br>
              T. 9841005901<br>
              W. 9841005901<br>
              infoquintanaroo@activoinmobiliario.mx<br><br>
              L-V de 9:00 a 18:00 h<br>
              S, D y festivos de 10:00 a 16:00 h
            </span>
          </td>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">VERACRUZ</strong><br>
            <span style="font-size: 12px;">
              Km. 4.5 Carretera Federal, Antón Lizardo,<br>
              95264 Boca del Río, Ver.<br><br>
              T. 229 179 4444<br>
              W. 229 168 2680<br>
              infoveracruz@activoinmobiliario.mx<br><br>
              L-V de 9:00 a 19:00 h<br>
              S de 10:00 a 18:00 h<br>
              D y festivos de 11:00 a 18:00 h
            </span>
          </td>
          <td class="footer-cell">
            <strong style="color: #ba8c26;">CHIHUAHUA</strong><br>
            <span style="font-size: 12px;">
              Edificio Metroloft, Oficina 209, Segundo piso,<br>
              Calle Citadela, número 5900, Distrito Uno, colonia El Saucito.<br><br>
              T. 567 179 56742<br>
              W. 229 168 2680<br>
              infoveracruz@activoinmobiliario.mx<br><br>
              L-V de 9:00 a 19:00 h<br>
              S de 10:00 a 18:00 h<br>
              D y festivos de 11:00 a 18:00 h
            </span>
          </td>
        </tr>
      </table>
      <p style="font-size: 12px;">&copy; 2023 House Finder. Todos los derechos reservados.</p>
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
  methods: {
    toggleLogoSize() {
      // Cambia la escala del logo al 150% cuando se hace clic
      this.logoScale = this.logoScale === 1 ? 1.5 : 1;
    },
  },
};
</script>

<style scoped>


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
  gap: 20px;
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
  
  background-color: #4c4c4c; /* Color de fondo deseado */
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
}

.row1 {
  flex: 1;
  width: 100%;
  display: flex;
  text-align: justify;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}

.row1 .column1 {
  flex: 1;
  padding: 20px;
}

.row1 .column1 img {
  width: 100%;
  max-width: 300px;
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


</style>
