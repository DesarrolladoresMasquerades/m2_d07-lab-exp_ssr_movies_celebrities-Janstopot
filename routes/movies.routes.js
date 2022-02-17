const router = require("express").Router();

const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

// create movies
router.get("/movies/create", (req, res)=>{
    Celebrity.find()
    .then((celebrities)=>{
        res.render("movies/new-movie", {celebrities})
    })
    
})

router.post("/movies/create", (req, res)=>{
    const {title, genre, plot, cast} = req.body

    Movie.create({title, genre, plot, cast})
    .then(()=>res.redirect("/movies"))
    
})

//////////////////////////////////////

///////// DISPLAY ALL MOVIES///////////

router.get("/movies", (req, res)=>{
    
    Movie.find()
    .then((movies)=>{
        res.render("movies/movies", {movies})
    })
})

////////// SHOW MOVIE DETAILS////////////////////

router.get("/movies/:id", (req, res)=>{
    Movie.findById(req.params.id)
    .populate("cast")
    .then(movie=> res.render("movies/movie-details", movie))

})

router.post("/movies/:id/delete", (req, res)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(res.redirect("/movies"))
})

router.get("/movies/:id/edit", (req, res)=>{
    Movie.findById(req.params.id)
    Celebrity.find(cast)
    console.log(cast)
    .then(res.render("movies/edit-movie", cast))
})

module.exports = router;