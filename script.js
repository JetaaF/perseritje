let nootepad = "notepad.txt";

// me pas qasje per me hi ne qat notepad.. perdorim fetch

fetch(nootepad)
.then(emer_variable =>emer_variable.text()) // veq e krijon nje variable me i tregu se cka osht(ket rast osht text)
.then(ckamebo => document.querySelector("#note").innerHTML = ckamebo)

// e merr file-in, i trtegon cka osht,,, i tregon cka me bo


let b = test(7,2)
console.log(b)
document.querySelector("#demo").innerHTML = b
function test(u,j){
    return u+j;
}