var userInput = document.getElementById("userInput");
     function press(num){
        userInput.value += num
     }
     function equal(){
        userInput.value = eval(userInput.value)
        document.getElementById("ans").innerText = userInput.value

     }
     
     function clean(){
        userInput.value = userInput.value.slice(0, -1)
     }
     function AC(){
        userInput.value = '';
        }
     function sqr(){
        userInput.value = userInput.value.Math.sqrt()
        }
        function sin(num){
        userInput.value = (Math.sin(userInput.value))
        }
        function log(num){
        userInput.value = (Math.log10(userInput.value))
        }
        function tan(num){
        userInput.value = (Math.tan(userInput.value))
        }
        function cos(num){
        userInput.value = (Math.cos(userInput.value))
        }
        function pow(num){
        userInput.value = (Math.pow(userInput.value, 2))
        }
        function sqrt(num){
        userInput.value = (Math.sqrt(userInput.value))
        }
        function hyp(num){
        userInput.value = (Math.hypot(userInput.value))
        }
        function Abs(num){
        userInput.value = (Math.Abs(userInput.value))
        }
        function ln(num){
        userInput.value = (Math.ln(userInput.value))
        }

