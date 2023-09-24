let string = "";
let buttons = document.querySelectorAll('.button'); // jin jin ki class button hai unko 
// select krliya hia yahan //

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (b)=>{
        if(b.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(b.target.innerHTML == 'C'){
            string = "";
            document.querySelector("input").value = string;
        }
        else{
             console.log(b.target);
        string = string + b.target.innerHTML;
        document.querySelector("input").value = string;
    }
    })
})

