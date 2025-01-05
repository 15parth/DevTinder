const express = require('express');
const app = express();


app.use('/hello',(req,res)=>{
    res.send('this is a default  code motherfuckers');
})

app.post('/hello', (req, res) => {
    const response = {
        firstName: 'Parth',
        lastName: 'Bhardwaj'
    };
    res.send(`${JSON.stringify(response)} this is a POST request!`);
});

app.delete('/hello',(req, res)=>{
    res.send('This is a DELETE request!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
