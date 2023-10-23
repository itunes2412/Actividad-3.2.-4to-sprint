const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/enviar-correo', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Utiliza una variable de entorno para el usuario de correo
            pass: process.env.EMAIL_PASSWORD // Utiliza una variable de entorno para la contraseña de correo
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER, // Utiliza una variable de entorno para el usuario de correo
        to: process.env.EMAIL_USER, // Utiliza una variable de entorno para el destinatario del correo
        subject: 'Asunto del Correo',
        text: 'Contenido del Correo'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.send('Correo enviado');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
