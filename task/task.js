function buildfunction(){
    var arr =[];
    for(var i=0;i<3;i++)
    {
        arr.push(function(x){console.log(x)}(i));
    }
    return arr;
}

var fs= buildfunction();
fs[0]();
fs[1]();
fs[2]();