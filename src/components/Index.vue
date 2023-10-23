<template>
  <div class="app">
    <!-- Menú de Navegación -->
    <nav class="navbar">
      <div class="logo" @click="toggleLogoSize">
        <img
          :style="{ 'transform': `scale(${logoScale})` }"
          src="/logo.png"
          alt="Logo"
          @click.stop
        />
      </div>
      <ul class="menu">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/propiedades">Propiedades</router-link></li>
        <li><router-link to="/proyectos">Proyectos</router-link></li>
        <li><router-link to="/promocion">Promociones</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
      <div>
        <router-link to="/login">
          <button class="login-button">Contactanos</button>
        </router-link>
      </div>
    </nav>

    <!-- Contenido de la Página -->
    <main class="content">
      <!-- Sección de Inicio -->
      <section class="inicio-section">
        <!-- Banner -->
        <div class="banner">
          <img src="/banner.png" alt="banner" />
        </div>

        <!-- Texto de Inicio -->
        <div class="inicio-text">
          <h1>Bienvenidos a HOUSE FINDER</h1>
          <p>
            Somos tu mejor opción para encontrar la casa o departamento de tus sueños. En HOUSE FINDER, nos comprometemos a proporcionarte las mejores opciones de vivienda, ya sea que estés buscando tu primer hogar, una propiedad de inversión o el lugar perfecto para tu familia. Navega a través de nuestras propiedades, conoce nuestros proyectos y descubre oportunidades de promoción exclusivas. ¡Estamos aquí para ayudarte a encontrar el lugar que siempre has deseado!
          </p>
        </div>

        <!-- Tres Columnas en una Fila -->
        <div class="row">
          <div class="column">
            <a href="ruta_de_tu_hogar_ideal">
              <img src="casa1.jpg" alt="Imagen 1" />
            </a>
            <h2>Encuentra tu Hogar Ideal</h2>
            <p>Explora una amplia gama de propiedades en las mejores ubicaciones. Tenemos opciones para todos los gustos y presupuestos.</p>
          </div>
          <div class="column">
            <a href="ruta_de_proyectos_innovadores">
              <img src="/casa2.jpg" alt="Imagen 2" />
            </a>
            <h2>Proyectos Innovadores</h2>
            <p>Descubre nuestros proyectos de desarrollo inmobiliario que ofrecen comodidad y estilo de vida moderno.</p>
          </div>
          <div class="column">
            <a href="ruta_de_promociones_exclusivas">
              <img src="casa3.jpg" alt="Imagen 3" />
            </a>
            <h2>Promociones Exclusivas</h2>
            <p>Aprovecha nuestras promociones especiales y descuentos en propiedades seleccionadas. ¡No te las pierdas!</p>
          </div>
        </div>
        
      </section>

      <!-- Resto del contenido de la página -->
      <!-- Puedes agregar más secciones y contenido aquí -->
    </main>

    <!-- Footer -->
    <footer class="footer">
      <table>
        <!-- Información del footer -->
        <!-- Ajusta los estilos según tus necesidades -->
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
      logoScale: 1,
    };
  },
  methods: {
    toggleLogoSize() {
      this.logoScale = this.logoScale === 1 ? 1.5 : 1;
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
.app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

/* Estilos de menú de navegación */
.navbar {
  background-color: #ffffff;
  color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

/* Estilos de logo */
.logo img {
  max-height: 150px;
  transition: max-height 0.3s ease;
  cursor: pointer;
}

/* Estilos de menú */
.menu {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-left: 10px;
}

.menu li a {
  text-decoration: none;
  color: #1f1f1f;
  transition: color 0.3s ease;
}

.menu li a:hover {
  color: #ba8c26;
}

/* Estilos de botón de inicio de sesión */
.login-button {
  background-color: #caa24c;
  color: #292929;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 100px;
}

.login-button:hover {
  background-color: #12407c;
  color: #fff;
}

/* Estilos para la sección de inicio */
.inicio-section {
  margin-top: 20px;
}

/* Estilos para el banner */
.banner img {
  width: 90%;
  height: auto;
}

/* Estilos para el texto de inicio */
.inicio-text {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

/* Estilos para la fila de columnas */
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px 0;
}

/* Estilos para cada columna */
.column {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 40px;
}

.column img {
  width: 100%;
  height: auto;
}

.column h2 {
  margin: 10px 0;
}

.column p {
  color: #555;
}
</style>

