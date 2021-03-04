var randomNumber =document.getElementById("randomNumber");

document.getElementById("generate-btn").addEventListener('click',function(event){
    var randnum= Math.floor(Math.random()*10000);
    while((randnum<1000) || (randnum>=9999)){
        var randnum= Math.floor(Math.random()*10000);
    }
    console.log((randnum));
    randomNumber.value = randnum;
})


var inputNumber =document.getElementById("inputNumber");


var Digit = document.getElementsByClassName('digit');
for (let index = 0; index < Digit.length; index++) {
    const element = Digit[index];

    element.addEventListener('click', function(event){
        inputNumber.value += element.innerText;
    })
}
document.getElementById("notMatched").style.display = 'none';
document.getElementById("matched").style.display = 'none';

var trySubmit = 3;

document.getElementById("submit").addEventListener('click',function(event){
    
    if(trySubmit==0 ){
        document.getElementById("submit").style.cursor = "not-allowed";
    }else if(inputNumber.value!='' &&  randomNumber.value!=''){
        if(randomNumber.value==inputNumber.value ){
            document.getElementById("matched").style.display = 'block';
        document.getElementById("notMatched").style.display = 'none';
    
        }else{
            trySubmit--;
    
            document.getElementById("action-left").innerHTML = trySubmit;
            document.getElementById("notMatched").style.display = 'block';
            document.getElementById("matched").style.display = 'none';
    
        }
    }
    
    
})


document.getElementById("C").addEventListener('click',function(event){
    inputNumber.value = '';
    document.getElementById("notMatched").style.display = 'none';
    document.getElementById("matched").style.display = 'none';
})


document.getElementById("delete").addEventListener('click',function(event){
    inputNumber.value = parseInt(parseInt(inputNumber.value)/10) ;
    
})

