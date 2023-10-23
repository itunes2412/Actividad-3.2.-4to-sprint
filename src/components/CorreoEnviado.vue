<template>
    <div class="app">
      <!-- Menú de Navegación -->
  
      <!-- Contenido de la Página -->
      <main class="content">
        <!-- Sección de Inicio -->
        <section class="inicio-section"></section>
        <h2 style="color: #ba8c26; font-size: 40px;">House Finder</h2>
        <div class="left-image-container" @click="redirectToIndex">
          <img src="/logo.png" alt="Imagen" class="left-image" />
        </div>
  
        <div class="login-block">
          <div class="left-image-container"></div>
  <br><br><br>
          <div class="thank-you-message">
             
            <p style="font-size: 28px; color: #1f1f1f; font-weight: bold;">
                Gracias por contactarnos.
              </p>
              <p style="font-size: 28px; color: #ba8c26; font-weight: bold;">
                En las próximas horas uno de nuestros asesores se comunicará contigo.
              </p>
              <br>
              <p style="font-size: 28px; color: #1f1f1f; font-weight: bold;">
                Da clic en el logo.
              </p>
          </div>
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
  import axios from "axios";
  
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
        axios
          .post("http://localhost:3000/enviar-correo", this.formData)
          .then((response) => {
            console.log(response.data);
            this.loading = false;
            this.$router.push("/correo-enviado");
          })
          .catch((error) => {
            console.error(error);
            this.loading = false;
          });
      },
      redirectToIndex() {
        this.$router.push("/");
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
    cursor: pointer;
  }
  
  /* Estilos para la imagen */
  .left-image {
    max-width: 450px;
    max-height: 450px;
    border-radius: 1000px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para el bloque de agradecimiento */
  .thank-you-message {
    text-align: left;
    margin-top: 100px;
    margin-bottom: 50px;
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
  