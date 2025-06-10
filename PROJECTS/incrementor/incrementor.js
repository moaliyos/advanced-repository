var count = 0
function counter(){
    document.getElementById("count").textContent = count;
}



        function increment(){
            count++
            counter()
                }
        function decrement(){
            count--
            counter()

        }
        function reset(){
            count = 0;
             counter()

        }
