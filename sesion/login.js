const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('encriptar password'));

app.use(session({
    secret:'encriptar password',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal(function(username, password,done){
    if (username === "prueba" && password ==="login")
        return done(null,{id:1, name: "node"});

    done(null, false);
}));
//serialización
passport.serializeUser(function(user,done){
    done(null, user.id);
});

//deserialización

passport.deserializeUser(function(id,done){
    done(null,{id:1, name: "node"});
})
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    //muestra la pagina si ya iniciamos sesión
    res.send("Bienvenido");
})

app.get("/login",(req,res)=>{
    //mostrar formulario de login
    res.render("login");
});


app.post("/login", passport.authenticate('local',{
    successRedirect: "/",
    failureRedirect: "/login"
}));

app.listen(3000,()=> console.log("servidor inicializado"));