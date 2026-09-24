const documentInput = document.getElementById("documentInput");
const fileName = document.getElementById("fileName");

documentInput.addEventListener("change", function () {

  if (this.files.length > 0) {
    fileName.textContent = "Selected: " + this.files[0].name;
  } else {
    fileName.textContent = "";
  }

});


function scrollToScanner() {

  document.getElementById("scanner").scrollIntoView({
    behavior: "smooth"
  });

}


function startScan() {

  const file = documentInput.files[0];

  if (!file) {
    alert("Please upload an identity document first.");
    return;
  }

  const result = document.getElementById("result");

  result.classList.remove("hidden");

  document.getElementById("resultTitle").textContent =
    "AI Screening Complete";

  document.getElementById("resultMessage").textContent =
    "The uploaded document has been processed using the prototype screening workflow.";

  document.getElementById("documentStatus").textContent =
    "Analyzed";

  document.getElementById("identityStatus").textContent =
    "Review Required";

  document.getElementById("confidence").textContent =
    "92%";

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}
