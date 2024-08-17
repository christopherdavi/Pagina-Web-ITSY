const express= require('express');
const routes=express.Router();

//Primer Pestaña - Viviendo en el yavirac
routes.get('/',(req, res)=>{
    res.render('home');
});

routes.get('/inti-yavirac',(req, res)=>{
    res.render('inti-yavirac');
})

routes.get('/historia',(req, res)=>{
    res.render('historia');
})

routes.get('/mision-vision',(req, res)=>{
    res.render('mision-vision');
})

routes.get('/nuestros-institutos',(req, res)=>{
    res.render('nuestros-institutos');
})

routes.get('/educacion-superior-publica',(req, res)=>{
    res.render('educacion-superior-publica');
})

routes.get('/formacion-tecnica-tecnologica',(req, res)=>{
    res.render('formacion-tecnica-tecnologica');
})

routes.get('/reglamentos',(req, res)=>{
    res.render('reglamentos');
})


// Segunda Pestaña - Admisiones
routes.get('/requisitos-matriculas',(req, res)=>{
    res.render('requisitos-matriculas');
})

routes.get('/admisiones-ies-publicas',(req, res)=>{
    res.render('admisiones-ies-publicas');
})

routes.get('/proceso-admision',(req, res)=>{
    res.render('proceso-admision');
})

//Tercera Pestaña - Oferta académica
routes.get('/carreras-vigentes',(req, res)=>{
    res.render('carreras-vigentes');
})

routes.get('/carreras-no-vigentes',(req, res)=>{
    res.render('carreras-no-vigentes');
})

//Cuarta Pestaña - Formación Continuada
routes.get('/capacitacion-continua',(req, res)=>{
    res.render('capacitacion-continua');
})

routes.get('/ingles',(req, res)=>{
    res.render('ingles');
})


routes.get('/rendicion-cuentas',(req, res)=>{
    res.render('rendicion-cuentas');
})


routes.get('/ebooks7-24',(req, res)=>{
    res.render('ebooks7-24');
})

routes.get('/investigacion',(req, res)=>{
    res.render('investigacion');
})

module.exports=routes;