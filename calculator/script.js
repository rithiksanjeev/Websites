const body =document.body
const theme = document.getElementById('da-theme')
const light_theme_svg = ' <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>'
const dark_theme_svg = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>'
theme.addEventListener('click',()=> {
    body.classList.toggle('dark')
    if(body.classList.contains('dark'))
    {
        theme.innerHTML = dark_theme_svg
    } else
    {
        theme.innerHTML = light_theme_svg
    }
})


const inputOne =document.getElementById('input-one')
const inputTwo =document.getElementById('input-two')
const OperatorValue =document.getElementById('operator')
const equalBtn =document.getElementById('eqlBtn')
const computation = document.getElementById('ans')
const history = document.getElementById('history')

// Event Listner 
// below one listensto click event
equalBtn.addEventListener('click',()=>
{
  console.log("i am clicked");
  const inputoneValue = (parseInt(inputOne.value))
  const inputtwoValue = (parseInt(inputTwo.value))
  let result = 0;
   switch(OperatorValue.value)
   {
    case '+':
         result = inputoneValue + inputtwoValue;
         break;
    case '-':
         result = inputoneValue - inputtwoValue;
         break;
    case '/':
        result = inputoneValue / inputtwoValue;
        break;
    case '*':
        result = inputoneValue * inputtwoValue;
        break;
    default:
        result = "Select valid operator";
   }
   console.log(result)
   computation.innerText = 'Ans :'+result;
   const historyString = inputOne.value + OperatorValue.value + inputTwo.value + '=' + result
   const listItem = document.createElement('li')
   listItem.innerText = historyString;
   listItem.style.listStyleType = 'none';
   history.appendChild(listItem);
   console.log(historyString)
})

