var request = require("request");


//correct login -
//userName does not exist
//password is wrong

//request for [authentication].
// - to get [auth] i need correct password/email; and correct headers.
// - headers:
//

//requests that are the same regardless of error that pops up on response page.

var j = request.jar();
var request = request.defaults({ jar : j }); //it will make the session default for every request
    //..

    var options = {
      url:"http://dfonexus.com/login/login",
      headers: {
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Accept-Encoding': "gzip, deflate",
        'Accept-Language': "en-US,en;q=0.8",
        'Cache-Control': "max-age=0",
        'Connection': "keep-alive",
        "Cookie": "",
        'Content-Type': "application/x-www-form-urlencoded",
        'Origin': "http://dfonexus.com",
        'Referer': "http://dfonexus.com/login/",
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
      },
      method:"POST",
      form:
      {
        login: "[dummy account]",
        register: 0,
        password: "[dummy password]",
        cookie_check: 0,
        _xfToken: "",
        redirect:"/"
      }
    };

    request(options, function(error,response,body){
        console.log("First response!");
        console.log(error);
        console.log(response.headers);
        console.log(response.statusCode);
        console.log("Cookie!");
        console.log(response.headers['set-cookie']);
        //Do your logic here or even another request like
        //  console.log(response);
        request({
            url:"http://dfonexus.com/",
            method:"GET",
        }, function(error, response, body){
            console.log("Next Response!");
            console.log(response.statusCode);
            console.log(request.headers);
            console.log(response.headers);
            console.log("Response | Body");
            console.log(body);
        });
    });
