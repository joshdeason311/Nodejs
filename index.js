const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Node.js on Azure! Have a good day!'));
app.listen(process.env.PORT || 3000, () => {
console.log('Server is running...');
});git add .