<template>
    <div class="app">
      <!-- Menú de Navegación -->
      <nav class="navbar">
        <div class="logo" @click="toggleLogoSize">
          <img
            :style="{ 'transform': `scale(${logoScale})` }"
            src="../assets/logo.png"
            alt="Logo"
            @click.stop
          />
        </div>
        <ul class="menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><router-link to="/propiedades">Propiedades</router-link></li>
          <li><router-link to="/proyectos">Proyectos</router-link></li>
          <li><router-link to="/promocion">Promoción</router-link></li>
          <li><router-link to="/contacto"></router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
  
        <div>
          <router-link to="/contacto">
            <button class="login-button">Iniciar Sesión</button>
          </router-link>
        </div>
      </nav>
  
      <!-- Contenido de la Página -->
      <main class="content">
        <section class="inicio-section">
          <div class="banner">
            <img src="..src/assets/logo.png" alt="banner" style="width: 200px; height: 200px;" />
          </div>
  
          <div class="inicio-text">
            <h1>Bienvenidos a HOUSE FINDER</h1>
            <p><!-- Texto aquí --></p>
            <button class="btn-learn">Aprende Más</button>
          </div>
  
          <div class="row">
            <div class="column">
              <img src="../assets/logo.png" alt="Imagen 1" style="width: 200px; height: 200px;" />
              <!-- Contenido de la columna 1 -->
            </div>
  
            <div class="column">
              <img src="../assets/logo.png" alt="Imagen 2" style="width: 200px; height: 200px;" />
              <!-- Contenido de la columna 2 -->
            </div>
  
            <div class="column">
              <img src="../assets/logo.png" alt="Imagen 3" style="width: 200px; height: 200px;" />
              <!-- Contenido de la columna 3 -->
            </div>
          </div>
        </section>
  
        <!-- Resto del contenido de la página -->
      </main>
  
      <!-- Footer -->
      <footer class="footer">
        <!-- Tabla y otros contenidos del footer aquí -->
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
  /* Estilos aquí */
  </style>
  