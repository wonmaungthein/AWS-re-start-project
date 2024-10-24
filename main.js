var CodeYourFuture = document.querySelector(".codeYourFuture");
function myFunction() {
  var CodeYourFuture = document.querySelector("#CodeYourFuture");
  if (CodeYourFuture.style.display === "none") {
    CodeYourFuture.style.display = "block";
  } else {
    CodeYourFuture.style.display = "none";
  }
}

$(function() {
  $(newFunction()).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $("#opener").click(function() {
    $("#dialog").dialog("open");
  });
});
function newFunction() {
  return "#dialog";
}

$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});
