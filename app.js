function getval(n) {
    var input = document.getElementById('inp')
    input.value += n;
  }
  
  function clr(){
     document.getElementById('inp').value = ""
  }
  
  function op(){
      var input = document.getElementById('inp')
      input.value = eval(input.value)
  }
  
  function er() {
    var input = document.getElementById('inp')
    var currentinp = input.value
  
    if(currentinp.length > 0){
  
     var newvalue = currentinp.slice(0,-1)
     document.getElementById('inp').value = newvalue 
    }
  }
  