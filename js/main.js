function nextSlide(evt, slideName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {}

  document.getElementById("start").classList.add("tabcontent");

  document.getElementById(slideName).style.display = "block";
}

$(document).ready(function () {
  addTargetingParams("details_button1");
  addTargetingParams("details_button2");
  addTargetingParams("details_button3");
  addTargetingParams("details_button4");
  addTargetingParams("details_button5");
  addTargetingParams("details_button6");
  addTargetingParams("details_button7");
});


function addTargetingParams(hrefId) {
  var hrefElem = $("#" + hrefId);
  var targetingParams =
    "?utm_medium=cpc&utm_source=mgid.com&utm_campaign=Cuva_article&utm_term=" +
    window.widgetId +
    "&utm_content=" +
    window.teaserId;
    console.log(window.widgetId);
  hrefElem.attr("href", hrefElem.attr("href") + targetingParams);
}


$("input[type='checkbox']").change(function () {
  if (this.checked) {
    this.classList.toggle("checked");
  }
});

$("#step_1 input").click(function () {
  openNextTab(this, 1);
});

$("#step_2 input").click(function () {
  openNextTab(this, 2);
});

$("#step_3 input").click(function () {
  openNextTab(this, 3);
});

$("#step_4 input").click(function () {
  openNextTab(this, 4);
});


function openNextTab(context, stepNumber) {
  if ($(context).is(":checked")) {
    $("#step_" + stepNumber + " button.next").attr("disabled", false);
  }
  window._mgq.push(["MgSensorInvoke", "ID"]);
}


function getResult() {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  function displayResult(id) {
    document.getElementById(id).style.display = "block";
  }
  const results = [];
  if (
    document.querySelector("#cheap").classList.contains("checked") &&
    document.querySelector("#russia").classList.contains("checked")
  ) {
    results.push("result_1");
  }
  if (
    document.querySelector("#cheap").classList.contains("checked") &&
    document.querySelector("#romantic").classList.contains("checked")
  ) {
    results.push("result_2");
  }
  if (
    (document.querySelector("#russia").classList.contains("checked") ||
      document.querySelector("#romantic").classList.contains("checked") ||
      document.querySelector("#introvert").classList.contains("checked")) &&
    (document.querySelector("#middle").classList.contains("checked") ||
      document.querySelector("#luxury").classList.contains("checked"))
  ) {
    results.push("result_3");
  }
  if (
    document.querySelector("#with_children").classList.contains("checked") &&
    document.querySelector("#middle").classList.contains("checked") &&
    document.querySelector("#luxury").classList.contains("checked")
  ) {
    results.push("result_4");
  }
  if (document.querySelector("#luxury").classList.contains("checked")) {
    results.push("result_5");
  }
  if (
    document.querySelector("#all_inclusive").classList.contains("checked") ||
    document.querySelector("#spa").classList.contains("checked") ||
    (document.querySelector("#introvert").classList.contains("checked") &&
      document.querySelector("#middle").classList.contains("checked") &&
      document.querySelector("#moskow").classList.contains("checked")) ||
    document.querySelector("#another_city").classList.contains("checked")
  ) {
    results.push("result_6");
  }
  if (
    (document.querySelector("#moskow").classList.contains("checked") ||
      document.querySelector("#spb").classList.contains("checked")) &&
    document.querySelector("#big_city").classList.contains("checked") &&
    document.querySelector("#luxury").classList.contains("checked")
  ) {
    results.push("result_7");
  }
  if (results.length === 1) {
    displayResult(results[0]);
  } else if (results.length === 0) {
    displayResult("result_2");
  } else if (results.length > 1) {
    const randomResult = results[Math.floor(Math.random() * results.length)];
    displayResult(randomResult);
  }
}
