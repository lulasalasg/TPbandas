let bandas = require('../bandas');
const { push } = require('../bandas');

let bandasController = {
    porNombre: function (req,res){ 
        




        return res.render('bandas', { data: bandas });
    },



    todosLosGeneros: function(req,res){
            for(let i=0; i<bandas.length;i++){
                return  res.send("<h1>TODOS LOS GÉNEROS: </h1>"+ bandas[i].genero)

            }

//¿ PORQUE NO  ME APARECEN TODOS LOS GENEROS?


        return res.render("bandas", {data:  todosGeneros})
    }



,
    porGenero: function(req, res){
        let genero = req.params.genero;
        let bandasPorGenero = [];
   if(genero==undefined){ 
       return res.send("<h1>No existe este género</h1>"+ req.params.genero)


   }else {
    for(let i=0; i<bandas.length; i++){
        if( bandas[i].genero == genero ){
            bandasPorGenero.push(bandas[i])
        }
    }

   }



        return res.render('bandas', { data: bandasPorGenero })
    },
porId: function(req,res){
let  idBanda =req.params.id;
let bandasPorId=[];

if(idBanda==undefined)
{return res.send("<h1>No existe este género</h1>")}
else
{
    return  res.send( "<h1>No existe este id</h1>")
    
}
 return res.render("bandas", {data: bandasPorId})
}

 //lógica




};



/*

    genero: function(req,res){

        

        return res.render("bandas", { data: bandasGenero});



    },
    porId: function(req,res){





        return res.render("nombre del archivo",{})
    }


*/

module.exports=bandasController;