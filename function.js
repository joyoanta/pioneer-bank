
        // Login button event handeller 


        const loginBtn = document.getElementById('login');
        loginBtn.addEventListener ('click', function(){
        console.log("I have pressed for log in")

        const loginArea = document.getElementById("login-area") 
        loginArea.style.display = "none";

        const transArea = document.getElementById("transection-area")
        transArea.style.display = "block";
        })


        // Deposite button event handeler 

       const depositeBtn = document.getElementById("deposite-button") ;
       depositeBtn.addEventListener("click", function(){

        const depositeArea =  document.getElementById("deposite-area").value;
        var depositeAmount = parseFloat(depositeArea);
        console.log(depositeAmount)


       document.getElementById("deposite-area").value =  "";

        spanUpdate ("current-deposite",depositeAmount)
        spanUpdate("current-balance", depositeAmount);

       })


       // withdraw button event handeler 

      var withdrawButton =  document.getElementById("withdraw-button"); 
      withdrawButton.addEventListener("click",function () {

       var withdrawArea =  document.getElementById("withdraw-area").value
       var withdrawAmount = parseFloat(withdrawArea);
       document.getElementById("withdraw-area").value = "";

       spanUpdate("withdraw-balance", withdrawAmount);
       adjustBalance("current-balance", withdrawAmount)

       
          
      })



     

// Fuction defined for Update

    function spanUpdate(id,num) {

      var current =  document.getElementById(id).innerText;
      var currentNum = parseFloat(current);
      var total =  currentNum + num; 
      document.getElementById(id).innerText = total; 

  
           
       }


    function adjustBalance(id,num) {

        var current =  document.getElementById(id).innerText;
        var currentNum = parseFloat(current);
        var total =  currentNum - num; 
        document.getElementById(id).innerText = total; 
           
   
       }
     
