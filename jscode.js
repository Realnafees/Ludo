var count = 0;
var a = 0;
var total = 0;
var total2 = 0;
var pos = 0;
var pos2 = 0;
var snake_bite = { e3: 0, e7: 0, e20: 5, e55: 23, e86: 49, e93: 10 , e98: 22 };
var ladder_up = {e1:32 , e17:47 , e24:66 , e50:97 , e81:96}
var flag = true
function check_pos(pos) {
  return pos in snake_bite;
}
function myFunction() {
  if (flag){
    flag = false
  let x = Math.floor(Math.random() * 6 + 1);
  if (x===6){
    flag = true
  }
  if (total+x>100){
    total= total2
  }else{
    total += x;

  }
  if (total === 100) {
    total2 = total = 0;
    alert("Player1 is Winner");
  }
  pos = "e" + total;
  if (check_pos(pos)) {
    total = snake_bite[pos];
  }
  if (pos in ladder_up){
    total = ladder_up[pos]
  }
  document.getElementById("el-" + total).appendChild(piece_div);
  let y = document.getElementById("num");

  y.innerText = x;
  y.style.fontSize = "50px";
}else{
  alert("Player 2's Turn")
}
}
function myFunction2() {
  if (flag ===false){
    flag = true

  let x = Math.floor(Math.random() * 6 + 1);
  if (total2+x>100){
    total2= total2
  }else{
    total2 += x;

  }
  
  if (x===6){
    flag= false
  }
  
  if (total2 == 100) {
    alert("Player2 is Winner");
    total2 = total = 0; 
  }


  pos2 = "e" + total2;
  if (check_pos(pos2)) {
    total2 = snake_bite[pos2];
  }
  if (pos2 in ladder_up){
    total2 = ladder_up[pos2]
  }
  document.getElementById("el-" + total2).appendChild(piece_div2);
  let y = document.getElementById("num");

  y.innerText = x;
  y.style.fontSize = "50px";
}else{
  alert("PLayers's 1 Turn")
}
}
function addele() {
  for (var i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      var ele = document.createElement("div");
      ele.style.border = "1px solid red";
      ele.style.border = "1px solid red";
      ele.style.height = "60px";
      ele.style.width = "60px";
      var x = (ele.id = "el-" + a);
      a++;
      ele.innerHTML = a;
      
      if (count % 2 == 0) {
        if (j % 2 == 0) {
          ele.style.backgroundColor = "yellow";
        } else {
          ele.style.backgroundColor = "blue";
        }
      } else {
        if (j % 2 == 0) {
          ele.style.backgroundColor = "blue";
        } else {
          ele.style.backgroundColor = "yellow";
        }
      }

      document.getElementById("grid-container").appendChild(ele);
    }

    count++;
  }
}

var elements = document.getElementById("grid-container");
addele();
var piece_div = document.createElement("img");
piece_div.src = "piece1.png";
piece_div.style.height = "40px";
piece_div.style.width = "40px";
piece_div.style.marginTop = "10px";

var piece_div2 = document.createElement("img");
piece_div2.src = "piece2.png";
piece_div2.style.height = "40px";
piece_div2.style.width = "40px";
piece_div2.style.marginTop = "10px";

// console.log(document.getElementById("el-2"));
