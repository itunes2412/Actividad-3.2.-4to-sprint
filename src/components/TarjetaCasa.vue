<template>
    <div class="logo" @click="toggleLogoSize">
      <img
        :style="{ 'transform': `scale(${logoScale})` }"
        src="/logo.png"
        alt="Logo"
        @click.stop
      />
    </div>
    <div class="centered-container">
      <div class="house-card">
        <div class="image-container">
          <img
            src="/casa7.jpg"
            alt="Casa de alquiler"
            class="house-image"
            style="width: 300px; height: 200px; padding: 5px;"
            @click="viewDetails"
          />
        </div>
        <div class="details-container">
          <h1>{{ houseTitle }}</h1>
          <p class="location">{{ houseLocation }}</p>
          <p><strong>Domicilio:</strong> Calle Ejemplo #123</p>
          <p><strong>Colonia:</strong> Colonia Ejemplo</p>
          <p><strong>Municipio:</strong> Municipio Ejemplo</p>
          <p><strong>Medidas:</strong> 300 metros cuadrados</p>
          <p><strong>Tipo de ubicación:</strong> En calle</p>
          <div class="price-container">
            <p class="rental-price">{{ rentalPrice }}</p>
          </div>
          <div class="description">
            <p><strong>Descripción:</strong> Amplia casa en un vecindario tranquilo. 3 dormitorios, 2 baños. La casa cuenta con un hermoso jardín y un amplio espacio para estacionamiento. La ubicación es ideal, con fácil acceso a tiendas y restaurantes locales.</p>
          </div>
          <div class="requirements">
            <p><strong>Requisitos:</strong> Comprobantes de ingresos, referencias de alquiler anteriores y un depósito de seguridad.</p>
          </div>
        </div>
        <br>
        <div>
          <router-link to="/loginform">
            <button class="login-button"><b>Contacto</b></button>
          </router-link>
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
  </template>
  
  <script>
  export default {
    name: 'TarjetaCasa',
    data() {
      return {
        houseTitle: 'Casa en Renta en Lomas Altas',
        houseLocation: 'Zapopan, Jalisco, México',
        rentalPrice: '$28,000 MXN Mensuales',
      };
    },
    methods: {
      viewDetails() {
        // Lógica para ver más detalles, si es necesario
        console.log('Detalles de la casa de alquiler');
      },
      toggleLogoSize() {
        // Lógica para cambiar el tamaño del logo si es necesario
      },
    },
  };
  </script>
  
  <style>
  .logo img {
    max-height: 150px;
    transition: max-height 0.3s ease;
    cursor: pointer;
    float: left; /* Agrega la propiedad float con el valor deseado */
  }
  
  .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .house-card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 900px;
    margin: 10px auto;
    padding: 100px;
  }
  
  .rental-price {
    font-size: 28px;
    font-weight: bold;
  }
  
  .login-button {
    background-color: #caa24c; /* Dorado */
    color: #292929; /* Texto negro */
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    padding: auto;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-right: 80px; /* Añadido margen derecho */
  }
  
  .login-button:hover {
    background-color: #12407c; /* Negro en hover */
    color: #fff; /* Texto blanco en hover */
  }
  
  /* Resto de tus estilos */
  
  /* Añade estilos para las nuevas descripciones */
  .details-container p {
    margin-bottom: 5px;
  }
  
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f9f9f9;
    text-align: center;
    padding: 10px 0;
  }
  </style>
  