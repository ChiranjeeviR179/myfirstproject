// var rect = 
// {
//     perimeter : (x,y) => (2*(x+y)) ,
//     area : (x,y) => (x*y)
// };

var rect = require('./rectangle');

function calcrect(l,b)
{

   console.log("the length : "+l+" the breath : "+b); 

// if( l <= 0 || b <= 0)
// {
//     console.log("the length and breath should be greather then 0");
// }
// else
// {
// console.log("perimeter : "+rect.perimeter(l,b));
// console.log("area : "+rect.area(l,b));
// }
rect(l,b,(err, rectangle) => {
if(err)
{
    console.log("error : "+err.message);
}
else
{
    console.log("perimeter : "+rectangle.perimeter());
    console.log("area : "+rectangle.area());
}

});

console.log("Next value");
}

calcrect(10,4);
calcrect(0,3);
calcrect(-1,2);