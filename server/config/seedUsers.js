'use strict';

var User = require('../api/user/user.model');
var translator = require('../api/translatorlanguage/translatorlanguage.model');

// Creacion de un Traductor
User.create({
    provider: 'local',
    role: 'translator',
    name: 'translate uno',
    email: 'uno@uno.com',
    password: 'uno'
}, function(err, usernew) {
    translator.create({
        active: true,
        userid: usernew._id,
        languages: ['es', 'en', 'pt', 'fr','us','br']
    }, function(err, newtranslator) {
        
    })
});



var StringName = 'owner';
var newUser = {
    provider: 'local',
    role: 'owner',
    name: StringName,
    email: StringName + '@owner.com',
    password: StringName
};
User.create(newUser, function(err, userinfo) {

});

//Creacion del Administrador
User.create({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
}, function() {
    //console.log('Creo el admin Default');
});

