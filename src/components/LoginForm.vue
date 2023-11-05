<template>
  <div class="app">
    <!-- Menú de Navegación -->

    <!-- Contenido de la Página -->
    <main class="content">
      <!-- Sección de Inicio -->
      <section class="inicio-section"></section>
      <h2 style="color: #ba8c26; font-size: 40px;">Contacto</h2>
      <div class="left-image-container">
        <img src="/logo.png" alt="Imagen" class="left-image" />
      </div>

      <div class="login-block">
        <div class="left-image-container"></div>

        <form @submit.prevent="submitForm">
          <br />
          <br />
          <div class="form-group">
            <label for="username" style="color: #1f1f1f;">Nombre</label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="formData.username"
              required
              class="input-field"
            />
          </div>
          <div class="form-group">
            <label for="lastname" style="color: #1f1f1f;">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              v-model="formData.lastname"
              required
              class="input-field"
            />
          </div>
          <div class="form-group">
            <label for="email" style="color: #1f1f1f;">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              required
              class="input-field"
            />
          </div>
          <div class="form-group">
            <label for="message" style="color: #1f1f1f;">Mensaje</label>
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              required
              class="input-field"
            ></textarea>
          </div>
          <button type="submit" :disabled="loading" class="login-button">
            Enviar
          </button>
        </form>
      </div>

      <br />
      <br />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <table>
        <!-- Información del footer -->
        <!-- Ajusta los estilos según tus necesidades -->
      </table>
      <p style="font-size: 12px; color: #ba8c26;">
        &copy; 2023 House Finder. Todos los derechos reservados.
      </p>
    </footer>
   
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logoScale: 1,
      showLoginBlock: false,
      formData: {
        username: "",
        lastname: "",
        email: "",
        message: "",
      },
      loading: false,
      error: "",
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      // Simulación de redirección
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/correo-enviado");
      }, 2000); // Redirige a "CorreoEnviado" después de 2 segundos
    },
  },
};
</script>

<style scoped>
/* Estilos para el contenedor de la imagen a la izquierda */
.left-image-container {
  padding-top: 25px;
  padding-left: 200px;
  float: left;
}

/* Estilos para la imagen */
.left-image {
  max-width: 450px;
  max-height: 450px;
  border-radius: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Resto de tus estilos */
/* Ajusta los estilos según tus necesidades y utiliza las variables de color definidas. */
/* Estilos para el esqueleto de la página */
.app {
  font-family: "Roboto", sans-serif;
  text-align: center;
}

/* Estilos para el menú de navegación */
.navbar {
  background-color: var(--primary-bg-color);
  color: var(--menu-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

/* Estilos para el logo */
.logo img {
  max-height: 150px;
  transition: max-height 0.3s ease;
  cursor: pointer;
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
  color: var(--menu-text-color);
  transition: color 0.3s ease;
}

.menu li a:hover {
  color: var(--menu-text-hover-color);
}

.login-block {
  width: 30%;
  padding-right: 10%;
  margin: 0;
  margin-left: auto; /* Mueve el bloque al lado derecho de la ventana */
}

/* Estilos para el botón de inicio de sesión */
.login-button {
  background-color: #caa24c; /* Dorado */
  color: #292929; /* Texto negro */
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 0px; /* Añadido margen derecho */
}

.login-button:hover {
  background-color: #12407c; /* Negro en hover */
  color: #fff; /* Texto blanco en hover */
}

/* Estilos para el formulario */
.form-group {
  font-size: 25px;
  margin-bottom: 20px;
  text-align: left;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
}

/* Resto de tus estilos */
/* Ajusta los estilos según tus necesidades y utiliza las variables de color definidas. */
</style>
