var result = "";
var compiledResult = "";

const Refresh = () => {
  document.getElementById("result").innerHTML = result; 
  if(result == ""){
    document.getElementById("result").innerHTML = "0";
  }
}
Array.from(document.querySelectorAll(".btn")).forEach(button => {
  button.addEventListener("click", () => {
    result += button.innerHTML;
    Refresh();
  })
});
document.querySelector(".del").addEventListener("click", () => {
  result = result.substring(0,result.length - 1);
  Refresh();
});
document.querySelector(".ac").addEventListener("click", () => {
  result = "";
  Refresh();
});
document.querySelector(".enter").addEventListener("click", () => {
  compiledResult = result.replace("÷","/");
  compiledResult = compiledResult.replace("×","*");
  result = eval(compiledResult).toString();
  Refresh();
});