require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${PORT}`)
});