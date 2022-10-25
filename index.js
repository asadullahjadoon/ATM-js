var string ="";
var boxes =document.querySelectorAll('.box')
Array.from(boxes).forEach((box)=>{
    box.addEventListener('click',(e)=>{
        string = string + e.target.value
       document.querySelector('input').value= string;
        
      
       if(string.length==5){
           alert("please enter minimum 4 characters")
       }
            console.log(string)
        })
       
    })
    
        
    function myFunction() {
      if(string.length == 4 && string=="1994"){
                        alert('Your Password Is Correct')
                    } else if(string.length == 4  && string!=="1994"){
                     alert(" Wrong Password")
                        } else if(string.length>5) {
                            alert("please enter minimum 4 characters")
                        }
      }
    
      function delete_num() {
        var input, num;
        input = document.getElementById('number_input');
        num = input.value;
        input.value = num.substr(0,num.length-1);
        return false;
      }
Footer