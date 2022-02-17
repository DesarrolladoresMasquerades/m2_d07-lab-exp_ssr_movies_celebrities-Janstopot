const router = require("express").Router();

const { render } = require("express/lib/response");
const Celebrity = require("../models/Celebrity.model")


//////////////////// CREATE CELEBRITY////////////////

router.get("/celebrities/create", (req, res)=>{
    res.render("celebrities/new-celebrity")
})


router.post("/celebrities/create", (req, res)=>{
    const {name, occupation, catchPhrase} = req.body

    Celebrity.create({name, occupation, catchPhrase})
    .then(()=>res.redirect("/celebrities"))
    .catch(()=>res.render("celebrities/new-celebrity"))
})

////////////////// VIEW CELEBRITIES////////////////

router.get("/celebrities", (req, res)=>{
    Celebrity.find()
    .then((celebrities)=>{
        console.log(celebrities)
        res.render("celebrities/celebrities", {celebrities})
    })
    .catch(()=>console.log("Error displaying celebrities"))
})


module.exports = router;