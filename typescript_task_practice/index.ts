
function leapYear(value):boolean{
    if((value%4 == 0 && value%100 != 0 )||value%400 == 0 ){
        return true;
    }
    else{
        return false;
    }
}


function revString(value:string):string{
    let revstr:string="";
    for(let i=(value.length)-1;i>=0;i--){
        revstr=revstr+value[i];
    }
    return revstr;
}

let l=leapYear(1999);
let s=revString("Hello");
console.log(l);
console.log(s);



