const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); 
require('dotenv').config(); 

const app = express();


mongoose.connect(process.env.MONGO_CNN, {

})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
  process.exit(1);
});


app.use(express.json());

app.use('/api/products', productRoutes);


app.get('/test', (req, res) => {
  res.send('¡Servidor funcionando!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
