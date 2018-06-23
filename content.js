//Sets the title of the page to ...
var header = document.getElementById('header');
header.textContent = header.textContent.slice(9,-1);
if(header.textContent == ''){
 header.textContent = '~'
}


