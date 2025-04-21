/*et display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.innerHTML;

        if(btnText == 'DEL'){
            string = string.substring(0, string.length - 1);
        } else if(btnText == 'AC'){
            string = '';
        } else if(btnText == '='){
            try {
                string = eval(string); 
            } catch (err) {
                string = "Error";
            }
        } else {
            string += btnText;
        }

        display.value = string;
    });
});*/

let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e) =>{

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;

        }else if(e.target.innerHTML == 'AC'){
            string= ' ';
            display.value = string;
            
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }

    });
});

































































































