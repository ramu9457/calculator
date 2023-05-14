function res() 
{
    document.getElementById("num").value = "" ;
} 

function show(input) 
{
   document.getElementById("num").value+=input;
} 

function calc()
{
    var output = eval(document.getElementById  ("num").value);
    document.getElementById ("num").value = output;
}