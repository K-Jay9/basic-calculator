
// selecting div elements with the corresponding classes
let button = document.querySelectorAll('.btn');
let display = document.querySelector('.dis');


// turning the nodelist into a javascript array
let buttons = Array.from(button)

// creating a paragraph html tag to attach to the display
let li = document.createElement('p');

// looping over the array to add each member of the array to the paragraph tag
for(let i = 0; i < buttons.length; i++){

    // adding an event listener for the click event and getting the inner text of the tag
    buttons[i].addEventListener('click', ()=>{
        let ans = buttons[i].innerText;
        
        // appending the inner text to the paragraph tag of the display
        display?.appendChild(li)
        li.setAttribute('class', 'val')

       if(ans === '=' ){
           let result = eval(li.innerText).toString()
           li.innerText = result 
           return
        }else if(ans == 'AC'){
           li.innerText = ''
        }else if(ans == 'DEL'){
            let here = li.innerText.substring(0, li.innerText.length -1)
            li.innerText = `Ans : ${here}`
            console.log(li.innerText);
        }else{
            li.innerText += ans;
        }
        
    })
}





