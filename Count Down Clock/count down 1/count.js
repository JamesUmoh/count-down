window.alert("Your Event Count Down Has Been Created Sucessfully")

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {

  document.getElementById("btn") .innerHTML =Date();

}