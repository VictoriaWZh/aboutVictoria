var isP1 = true;

function changePicture(){
    if (isP1){
        document.getElementById("p1").src="puppy2.jpg";
        isP1 = false;
    }

    else{
        document.getElementById("p1").src="puppy1.jpg";
        isP1 = true;
    }
}

function changeColor(){
    var color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}