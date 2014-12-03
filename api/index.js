//var db = require('./../data/db.js');
var fs = require('fs');
var gm = require('gm');
var nodemailer = require("nodemailer");
var async = require('async');
//var mongoose = require('mongoose');

exports.sendEmail = function(req,res,next){
    var name = req.body.name;
    var email = req.body.email;
    var msg = req.body.msg;
    var phone = req.body.phone;

    var transporter = nodemailer.createTransport();
    transporter.sendMail({
        from: email,
        to: 'tk_regionoil@mail.ru',
        subject: 'С веб сайта! От - '+ name,
        text: msg+'<p>От - '+name+' - номер телефона - '+phone+'</p>'
    }, function(error, response){
        if(error){
            console.log(error);
        }else{
            res.send(200);
        }
    });
}