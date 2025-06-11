const sumRequestHandler = (req, res) => {
  console.log("Sum Request Handler Invoked", req.url);
  const body = [];
  req.on("data", chunk =>body.push(chunk));     //Here we are collecting the data chunks from the request body and pushing them into the body array.
  req.on("end", ()=> {
    const bodyStr = Buffer.concat(body).toString();      //conacatenating the chunks into a single string
    const params = new URLSearchParams(bodyStr);         //This converts the string into URLSearchParams object which allows us to easily access the parameters.
    const bodyObj = Object.fromEntries(params);            //This converts the URLSearchParams object into a regular object.
    const result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);     //Here actual calculation is taking place and we are parsing string into int.
    console.log("Result:", result);
    res.setHeader("Content-Type", "text/html");
    
//Here we are sending the response back to the client with the result 
    res.write(`<html>
                <head><title>Calculator Result</title></head>
                <body>
                    <h1>Calculation Result</h1>
                    <p>The sum of ${bodyObj.num1} and ${bodyObj.num2} is ${result}</p>
                    <a href="/calculator">Go back to Calculator</a>
                </body>
              </html>`);
  })

}

exports.sumRequestHandler = sumRequestHandler;
