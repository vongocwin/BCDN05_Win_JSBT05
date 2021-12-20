// Bài 1

document.getElementById("btnB1").onclick = function (){
    var sChan = " ";
    var sLe = " ";
    for(var i = 0; i<100; i++){
        if(i % 2 == 0){
            sChan += " " +i;
        }else{
            sLe += " " +i;
        }
    }

    // var i = 0;
    // while(i<100){
    //     {
    //         if(i % 2 == 0){
    //             sChan += " " +i;
    //         }else{
    //             sLe += " " +i;
    //         }
    //     }
    //     i++
    // }
    document.getElementById("kq1").innerHTML = "Số Chẵn: " +sChan+ "<br> Số Lẻ: "+sLe;
}

// Bài 2

document.getElementById("btnB2").onclick = function(){
    var count = 0;
    for(var i = 0; i<1000; i++){
        if (i % 3 == 0)
        count++;
    }

    // var i = 0;
    // while (i < 1000) {
    //     if (i % 3 == 0) count++;
    //     i++;
    // }
    document.getElementById("kq2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " +count+ "số";
}

// Bài 3

document.getElementById("btnB3").onclick = function(){
    var sum = 0;
    var i = 0;
    while(sum<10000){
        i++
        sum += i;
    }
document.getElementById("kq3").innerHTML = "Số nguyên dương nhỏ nhất: " +i;
}

// Bài 4

document.getElementById("btnB4").onclick = function (){
    var x = document.getElementById("nd1").value;
    var n = document.getElementById("nd2").value;
    var sum = 0;
    var i = 0;
    while (i < n) {
        i++;
        sum += Math.pow(x, i);

    }
    document.getElementById("kq4").innerHTML = "Tổng: " +sum;
}

// Bài 5

document.getElementById("btnB5").onclick = function (){
    var n = document.getElementById("nd3").value;
    var sum = 1;
    var i = 0;
    while (i < n) {
        i++;
        sum *= i;
    }
    document.getElementById("kq5").innerHTML = "Giai Thừa: "+sum;
}

// Bài 6

document.getElementById("btnB6").onclick = function (){
    var content = "";
    for (var i = 1; i <= 10; i++){
        if(i % 2==0)
        content +="<div class='bg-danger text-white py-1'>Div chẵn </div>" ;
        else
        content +="<div class='bg-primary text-white py-1'>Div lẻ </div>";
    }
    document.getElementById("kq6").innerHTML = content;
}

// Bài 7

document.getElementById("btnB7").onclick = function (){
    var i = 1;
    var n = document.getElementById("nd4").value;
    var sum ="";
    while(i<n){
        i++;
        var count = 0;
        var j = 1;
        while(j<i/2){
            j++;
            if( i % j == 0) count++;    
        }
        if(count==0){
            sum+=i+" ";
        } 
    }
    document.getElementById("kq7").innerHTML = sum;
}