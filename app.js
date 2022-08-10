express = require('express')

app= express()

app.get('/' , (req,res) =>{

    res.send('hi code')

})


app.listen(port=3000)