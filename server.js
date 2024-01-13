const express = require('express');
const app = express();

const productsRoute = require('./routes/productsRoute')


// middleware
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

app.use('/api/products', productsRoute)


app.listen(5000, () => {
  console.log('Server is listening at port 5000')
})