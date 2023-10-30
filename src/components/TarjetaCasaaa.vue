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
          src="/casa5.jpg"
          alt="Casa de alquiler"
          class="house-image"
          style="width: 300px; height: 200px; padding: 5px;"
          @click="viewDetails"
        />
      </div>
      <div class="details-container">
        <h1>{{ houseTitle }}</h1>
        <p class="location">{{ houseLocation }}</p>
        <p><strong>Domicilio:</strong> Calle Nueva #456</p>
        <p><strong>Colonia:</strong> Roma Norte</p>
        <p><strong>Municipio:</strong> Cuauhtémoc</p>
        <p><strong>Medidas:</strong> 400 metros cuadrados</p>
        <p><strong>Tipo de ubicación:</strong> En Avenida</p>
        <div class="price-container">
          <p class="rental-price">{{ rentalPrice }}</p>
        </div>
        <div class="description">
          <p><strong>Descripción:</strong> Nueva descripción de la casa en un vecindario tranquilo. 4 dormitorios, 3 baños. La casa cuenta con un amplio jardín y un espacio para estacionamiento. La ubicación es ideal, con fácil acceso a tiendas y restaurantes locales.</p>
        </div>
        <div class="requirements">
          <p><strong>Requisitos:</strong> Nuevo conjunto de requisitos para esta casa. Contacta para más detalles.</p>
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
  name: 'TarjetaCasaaa',
  data() {
    return {
      houseTitle: 'Quintana Roo',
      houseLocation: 'Casa en Quintana Roo, México',
      rentalPrice: '$15,000 Mensuales',
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
  