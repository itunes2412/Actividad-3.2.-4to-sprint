<template>
    <div class="privacy-container">
      <h1 class="privacy-header">Aviso de Privacidad</h1>
      <div class="privacy-content">
        <h2>Recopilación de Datos</h2>
        <p>
          En [Nombre de la Empresa], recopilamos datos personales y no personales con el fin de brindar un mejor servicio a nuestros usuarios. Esto puede incluir información como nombres, direcciones de correo electrónico, preferencias, direcciones IP y más. La recopilación de datos se realiza de manera transparente y con el consentimiento explícito del usuario.
        </p>
        <h2>Uso de la Información</h2>
        <p>
          La información recopilada se utiliza para personalizar la experiencia del usuario, mejorar nuestros productos y servicios, y proporcionar información relevante sobre ofertas, actualizaciones y contenido personalizado. Nunca compartimos esta información con terceros sin el consentimiento explícito del usuario, a menos que sea requerido por ley.
        </p>
        <h2>Seguridad y Confidencialidad</h2>
        <p>
          Nos comprometemos a proteger la seguridad y confidencialidad de la información proporcionada por nuestros usuarios. Implementamos medidas de seguridad sólidas para prevenir el acceso no autorizado, la divulgación y la alteración de los datos recopilados. Además, mantenemos actualizados nuestros protocolos de seguridad para adaptarnos a las últimas amenazas cibernéticas y garantizar la protección de los datos de nuestros usuarios.
        </p>
        <h2>Enlaces Externos</h2>
        <p>
          Nuestro sitio web puede contener enlaces a sitios externos. Sin embargo, nuestra política de privacidad no se aplica a estos sitios y no somos responsables de sus prácticas de privacidad. Al hacer clic en enlaces externos, se recomienda a los usuarios que revisen las políticas de privacidad de esos sitios para comprender cómo manejan la privacidad y la seguridad de la información.
        </p>
        <h2>Uso de Cookies</h2>
        <p>
          Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y analizar tendencias de tráfico. Estas cookies pueden ser necesarias para el funcionamiento adecuado del sitio, para personalizar el contenido y los anuncios, proporcionar funciones de redes sociales y analizar el tráfico. Puedes controlar el uso de cookies en la configuración de tu navegador o dispositivo.
        </p>
        <h2>Consentimiento del Usuario</h2>
        <p>
          Al utilizar nuestro sitio web, estás aceptando nuestra política de privacidad y el manejo de tus datos de acuerdo con los términos establecidos. Si no estás de acuerdo con alguna parte de nuestra política de privacidad, te recomendamos que te abstengas de utilizar nuestros servicios y de proporcionar cualquier información personal.
        </p>
        <h2>Contacto</h2>
        <p>
          Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de tus datos, no dudes en contactarnos a través de los detalles de contacto proporcionados en nuestro sitio web.
        </p>
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
    
  </template>
  
  
  <script>
  export default {
    name: 'AvisoPrivacidad'
  }
  </script>
  
  <style scoped>
  .privacy-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .privacy-header {
    color: #caa24c;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .privacy-content {
    line-height: 1.6;
  }
  h1{
    color: #caa24c;
  }
  
  h2 {
    color: #333;
    margin-top: 20px;
  }
  
  p {
    color: #555;
  }
  
  </style>
  