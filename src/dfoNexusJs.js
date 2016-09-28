var request = require('request');
var cheerio = require('cheerio');

module.exports = {

  //baseUrl would be a forum thread link
  baseUrl: "placeholder",


  thread : function (url){
    baseUrl = url;

    //'this' keyword is returned to allow the use of "chain methods."
    //nice article on it...
    //https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html
    return this;
  },
  printUrl : function (){

     console.log(baseUrl);

  },



};
