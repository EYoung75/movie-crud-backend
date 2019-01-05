const database = require("./database-connection")

module.exports = {
    getAll(){
        return database("movies")
    },
    getOne(id){
        return database("movies").where("id", id)
    },
    deleteMovie(id){
        return database("movies").delete().where("id", id)
    },
    updateMovie(id, info){
        return database("movies").where("id", id).update(info).returning("*")
    },
    addMovie(newMovie){
        return database("movies").insert(newMovie)
    }
}