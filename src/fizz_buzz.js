module.exports = {
   generate: generate,
   foo: "bar"
};

function generate(count){
    var arr = [];
    for(var i = 1; i <= count; i++){
        if( i % 3 == 0 && i % 5 == 0)
            arr.push("Fizzbuzz");
        else if( i % 3 == 0)
            arr.push("Fizz");
        else if(i % 5 == 0)   
            arr.push("buzz")
        else
            arr.push(i);
    }
    return arr;
}