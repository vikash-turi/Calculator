function pick(val){
            document.getElementById("a").value +=val;
        }
        function clr(){
            document.getElementById("a").value ="";
        }
         function solve(){
            var x=document.getElementById("a").value;
            var y=eval(x);
            document.getElementById("a").value=y;
        }
    