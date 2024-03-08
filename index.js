function submitFunc(event){
    return false;
}

let input = document.getElementById("binary-input");
let dec_output = document.getElementById("decimal-output");

input.addEventListener("keydown", function (e){
    if(e.code === 'Enter'){
        convert(e);
    }
});

function convert(e){
    let bin_num = e.target.value;
    // console.log(bin_num);
    // console.log(typeof(bin_num));
    
    let n = bin_num.length;
    // if(n > 8) alert("Enter up to 8 binary digits only");

    let ans = 0;
    for(let i = n-1; i >= 0; i--){
        if(bin_num[i] != '0' && bin_num[i] != '1'){
            alert("Binary Digits are 0 & 1, .:. Nothing else should be entered");
            break;
        }
        else{
            if(bin_num[i] === '1') ans += Math.pow(2,n-1-i);
        }
    }
    dec_output.innerHTML = ans;
}

