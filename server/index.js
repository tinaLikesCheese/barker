const express = require ('express');
const app = express();
const path = require('path'); 
const PORT = 3003;


app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));