//console.log("hello world");
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {

    //console.log(req.headers);


    console.log("Request for" +req.url+" by methode " +req.method);

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body> <h1> Hello, World</h1></body></html>')



    if(req.method == 'GET')
    {
        var fileUrl;

        if(req.url == '/') fileUrl ='/index.html';
        else fileUrl = req.url; 

        var filePath = path.resolve('./public'+fileUrl);

        const fileExt = path.extname(filePath);

        if(fileExt == '.html')
        {
            fs.exists(filePath, (exists) => {

                if(!exists)
                {
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end("<html><body><h1> the file "+fileUrl+" not found, statuscode 404</h1></body></html>");
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end("<html><body><h1> the file url is not html file, statuscode 404</h1></body></html>");
            return;

        }

    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end("<html><body><h1> the method is not get, statuscode 404</h1></body></html>");
        return;
    }

})

server.listen(port,() => {
    console.log(`Server running at : ${hostname}:${port}`);
})