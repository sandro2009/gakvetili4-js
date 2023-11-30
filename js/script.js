//let var
let a = 5;
//შეიქმნა უჯრა, სახელად დაერქვა a და მასში ჩაიწერა 5

console.log(a);


//scope
{
    let b = 9;
    console.log(b);

}
// console.log(b)

{

    console.log(1);

}

{

    console.log(2);

}

{
    let a = 3;
    console.log(3);

}

{

    console.log(4);

}

{

    console.log(5);

}


{
    let d = 1;
    while (d < 6) {
        console.log(d);
        d++
    }
}

{
    let d = 9;
    while (d <= 16) {
        console.log(d);
        d++
    }
}


{
    let i = 10;
    while (i >= 4) {
        console.log(i);
        i--
    }
}

{
    let i = 9;
    while (i < 1000) {
        console.log(i);
        i++
    }
}


{
    for (k = 0; k <= 15; k++) {
        console.log(k);
    }
}

{
    for (k = 19; k >= 2; k--) {
        console.log(k);
    }
}

{
    for (k = 2; k <= 9; k += 2) {
        console.log(k);
    }
}


{
    for (k = 27; k >= -18; k -= 3) {
        console.log(k);
    }
}

{

    for (k = 21; k >= 15; k -= 2) {
        console.log(k);
    }
}

{
    for (k = 86; k <= 100; k++) {
        console.log(k);
    }
}



{
    document.getElementById("text").
        innerHTML = "gamarjoba"

    document.getElementById("text").style.color = "red"

    document.getElementById("text").style.fontSize = "22px"
}


{
    document.getElementById("bmuli").innerHTML = '<a href = "#" target="_blank">ბმული</a>'
}







