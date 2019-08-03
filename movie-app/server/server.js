const express = require('express')
const bodyParser = require('body-parser')

userRouterAdmin = require('./routes/admin/user')
movieRouterAdmin =  require('./routes/admin/movie')



const app = express()
// support parsing of application/json type post data
app.use(bodyParser.json())
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended:true }))

app.use('/admin/user',userRouterAdmin)
app.use('/admin/movie',movieRouterAdmin)


app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})