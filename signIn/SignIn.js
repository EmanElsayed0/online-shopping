function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastindexOf(".");  

var y=document.myform.password.value;  
    var passlength=y.length;
if (atposition<3 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } 

  if (y.length<8){
        alert("please enter a password contains more than 8 characters ");
        return false;
    }

}  