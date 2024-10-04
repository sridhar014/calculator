

let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            inputBox.value = string;
        } else if (e.target.innerHTML === 'DEL') {
               inputBox.value=inputBox.value.slice(0,-1)
         } 
        else {
            string += e.target.innerHTML;
            inputBox.value = string;
        }
    });
});


