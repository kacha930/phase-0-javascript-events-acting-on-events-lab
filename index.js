// Your code here

function moveDodgerLeft(){
    const dodger = document.getElementById('dodger');
    //style
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 10}px`;

    }
}

//left move then right

function moveDodgerRight(){
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left =    `${left + 10}px`;
    }
}