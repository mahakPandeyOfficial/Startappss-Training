const {sumRequestHandler} = require("./sum")

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
                <head><title>This is Day 27 Task</title></head>
                <body>
                     <h1>welcome to calculator</h1>
                     <a href="/calculator">Go to Calculator</a>
                </body>

             </html>
        `);
        return res.end();
  }else if(req.url.toLowerCase() === "/calculator" && req.method === "GET"){
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
                 <body>
                        <h1> Calculator </h1>
                        <form action="/calculator-result" method="POST">
                          <input type="text" name="num1" placeholder="Enter first number" />
                            <input type="text" name="num2" placeholder="Enter second number" />
                            <input type="submit" value="Calculate" /> 
                        </form>                 
                </body>        
               </html>`)
  } else if(req.url.toLowerCase() === "/calculator-result" && req.method === "POST"){
    return sumRequestHandler(req, res);
    
  }
  
  else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
                <head><title>This is Day 27 Task</title></head>
                <body>
                     <h1>404 error! Page not found</h1>
                        <a href="/">Go to Home</a>
                     
                </body>

             </html>
        `);
        return res.end();
  }
};

exports.requestHandler = requestHandler;
