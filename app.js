const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

app.listen(port)

app.get("/", (req, res) => {
    queries.getAll().then(movies => res.json(movies))
})

app.get("/:id", (req, res) => {
    queries.getOne(req.params.id).then(movie => res.json(movie))
})

app.delete("/:id", (req, res) => {
    queries.deleteMovie(req.params.id).then(res.status(204).send())
})

app.put("/:id", (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(movie => res.json(movie).send())
})

app.post("/", (req, res) => {
    queries.addMovie(req.body).then(movies => res.json(movies))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({error: err})
})

app.use((req, res, next) => {
    res.status(404).json({message: "Page Not Found"})
})