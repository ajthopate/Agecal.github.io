function fun(){
    var dob=document.getElementById('input').value;

    var today=new Date();
    var year=today.getFullYear();
     var age=year-dob;
     if (age<0) {
        document.getElementById('out').innerHTML="Please Enter Valid Birth Year";
         
     } else {
        document.getElementById('out').innerHTML="Your Age is "+(age);
     }
     
}