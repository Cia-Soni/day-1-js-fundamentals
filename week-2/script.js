// Program to find the Largest of 3 Numbers
function findLargest() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    document.getElementById("largestResult").innerText =
        "Largest Number is: " + largest;
}

// Table Generator using Loop
function generateTable() {
    let num = Number(document.getElementById("tableNum").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${num} × ${i} = ${num * i}<br>`;
    }

    document.getElementById("tableResult").innerHTML = result;
}
