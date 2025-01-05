const express=  require('express')


const app = express()



app.use((req, res)=>{
    res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log('my server is runnig on port 3000')
})

// console.log(app)