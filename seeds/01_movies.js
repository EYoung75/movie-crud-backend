
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: "The Dark Knight",
          director: "Christopher Nolan",
          year: 2008,
          rating: 5,
          poster_url: "https://images-na.ssl-images-amazon.com/images/I/91zBlQ1iqoL._RI_.jpg"
        },
        {
          title: "Lord of the Rings: The Fellowship of the Ring",
          director: "Peter Jackson",
          year: 2001,
          rating: 5, 
          poster_url: "https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL.jpg"
        },
        {
          title: "Toy Story",
          director: "John Lasseter",
          year: 1995,
          rating: 5,
          poster_url: "https://i.pinimg.com/originals/a1/c5/69/a1c569fdbbdd079705f279e1d731613d.jpg"
        },
        {
          title: "Inception",
          director: "Christopher Nolan",
          year: 2010,
          rating: 5,
          poster_url: "http://cdn.collider.com/wp-content/uploads/Inception-movie-poster-5.jpg"
        },
        {
          title: "Forrest Gump",
          director: "Robert Zemeckis",
          year: 1994,
          rating: 4,
          poster_url: "https://i.pinimg.com/originals/4c/18/d2/4c18d2f93cb9433a5177d109acd069cf.jpg"
        },
        {
          title: "Gladiator",
          director: "Ridley Scott",
          year: 2000,
          rating: 5,
          poster_url: "https://i.pinimg.com/originals/44/31/bd/4431bd4cc9381ba8fe482e83367f3a49.jpg"
        },
        {
          title: "Saving Private Ryan",
          director: "Steven Spielberg",
          year: 1998,
          rating: 4,
          poster_url: "https://mvpo.us/img/P923-FR1.jpg"
        },
        {
          title: "Raiders of the Lost Ark", 
          director: "Steven Spielberg", 
          year: 1981, 
          rating: 4, 
          poster_url: "https://www.scholastic.com/content5/media/products/09/9780545007009_mres.jpg"
        },
        {
          title: "Braveheart",
          director: "Mel Gibson",
          year: 1995,
          rating: 4,
          poster_url: "https://i.ebayimg.com/images/g/NUgAAOSwGUBaJOGY/s-l640.jpg"
        },
        {
          title: "Good Will Hunting",
          director: "Gus Van Sant",
          year: 1997,
          rating: 4,
          poster_url: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        }
      ])
    })
}
