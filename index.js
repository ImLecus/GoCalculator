var result = "";
var compiledResult = "";
var previousResult = "";

const Refresh = () => {
  document.getElementById("result").innerHTML = result; 
  document.getElementById("operation").innerHTML = previousResult; 
  if(result == ""){
    document.getElementById("result").innerHTML = "0"; 
  }
  setTimeout(()=>{document.getElementById("operation").classList.remove("op")},3000)
}
Array.from(document.querySelectorAll(".btn")).forEach(button => {
  previousResult = result;
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
  previousResult = "";
  result = "";
  Refresh();
});
const compileResult = () =>  {
  compiledResult = result.replace("÷","/");
  compiledResult = compiledResult.replace("×","*");
}
document.querySelector(".enter").addEventListener("click", () => {
  document.getElementById("operation").classList.add("op");
  previousResult = result;
  compileResult();
  result = parseFloat(eval(compiledResult).toFixed(3)).toString();
  Refresh();
});