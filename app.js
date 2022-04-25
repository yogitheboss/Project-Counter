count = 0;

document.getElementById("increment").addEventListener("click", myFunIncrement);
document.getElementById("decrement").addEventListener("click", myFunDecrement);
document.getElementById("reset").addEventListener("click", myFunReset);



function myFunIncrement() {
  count++;
  document.getElementById("count").innerHTML = `${count}`;
}
function myFunDecrement() {
    if (count != 0) {
        count--;
        document.getElementById("count").innerHTML = `${count}`;
    }
}
function myFunReset() {
  document.getElementById("count").innerHTML = `0`;
}