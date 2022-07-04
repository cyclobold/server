//bring in express
const express = require("express");

const cors = require("cors");

const nodemailer = require("nodemailer");

//create a server
const server = express();

//middleware
server.use(cors());
server.use(express.json());

//Email Setup
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "theoafactor@gmail.com",
      pass: "xcqwlzunidxscwbp"
    }
  });

//routes
server.get("/", function(request, response){

    response.send("Welcome from server")

})

server.get("/get_users", function(request, response){


});


server.post("/sendmail", function(request, response){

    const email = request.body.email;

    const mailOptions =  {
        from: 'cycloclass@gmail.com',
        to: email,
        subject: `Sample Email`,
        html: `<body>
                    <h3>You have an invitation from Sample Email.</h3>
                    <hr>
                    This is sample email
            </body>`
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            throw error
          } else {
            console.log('Email sent: ' + info.response);
    
            //emai sent
            response.send("Email was sent to "+email)
    
          
          }
    
    
      })

    // response.send("Sends an email to: " + email);



})




//listen
server.listen("4433", () => console.log("Server is working"));