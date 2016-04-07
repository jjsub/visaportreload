'use strict';

var Country = require('../models/country');

exports.getCountry = function(req, res){
  Country.findByName(req.body, function(err, country){
    res.send(country);
    res.status(200).end();
  });
};

exports.allCountry = function(req, res){
  Country.all(req.params.country, function(err, country){
    if(country){
      res.send({Country:country});
      res.status(200).end();

    }else{
      res.status(400).end();
    }
  });
};
