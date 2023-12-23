function formSubmit(e) {
  e.preventDefault();
  var input = document.getElementById("formInput").value;
  let url = window.location.href + "src/" + input + "/index.html";
  console.log(url);
  window.location = url;
}
