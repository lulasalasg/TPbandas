let express=require("express");
let router=express.Router();

let bandasController=require("../controllers/bandasController");
const bandas = require("../bandas");



//listado de bandas
router.get("/", bandasController.porNombre)
//Bandas con ese id

router.get("/genero", bandasController.todosLosGeneros);

router.get("/genero/:genero", bandasController.porGenero);

router.get("/id/:id", bandasController.porId);


module.exports= router;

