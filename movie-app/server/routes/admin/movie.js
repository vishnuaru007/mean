const express = require('express')
const router = express.Router()

const db = require('../../db')
const utils = require('../../utils')
const multer = require('multer')
const upload = multer({dest : 'images'})


router.get('/', (request, response) => {
    const statement = `select * from movie`
    const connection = db.connect()
    connection.query(statement,(error, result) => {
        response.send(utils.createResult(error, result))
    })
})


router.post('/', upload.single('file'),(request, response) => {
    const { title,description,country, genreId, year, cast, producer, duration, videoUrl  } = request.body
    const thumbnail = request.file.filename 

    const statement = `insert into movie
        ( title,description,country, genreId, year, cast, producer, duration, videoUrl, thumbnail )  values
        (?,?,?,?,?,?,?,?,?,?)`
    const connection = db.connect()
    connection.query(statement,
        [title,description,country, genreId, year, cast, producer, duration, videoUrl ,thumbnail],
         (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/:id',upload.single('file'), (request, response) => {
    const id = request.params.id;
    const { title,description,country, genreId, year, cast, producer, duration, videoUrl  } = request.body
    const thumbnail = request.file.filename 

    const statement = `update  movie set 
         title = ?,
         description = ?,
         country = ?,
         genreId = ?,
         year = ?,
         cast = ?,
         producer = ?, 
         duration = ?,
         videoUrl = ?,
         where id = ?`
    const connection = db.connect()
    connection.query(statement,
        [title,description,country, genreId, year, cast, producer, duration, videoUrl ,id],
         (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
   
    const statement = `delete * from movie  where id = ?`
    const connection = db.connect()
    connection.query(statement,
        [id],
         (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router;