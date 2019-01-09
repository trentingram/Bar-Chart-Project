//chart data
var chartjson = {
    data: []  
  }
  
  var dataLength = chartjson.data.length;
  
  //select title data
  var barTitle = document.querySelector('.charttitle');
  

//create the bar row  
barRow = document.querySelector('.bars');  

var addToBarChart = function() {
//make the colspan to number of records  
barTitle.setAttribute('colspan', chartjson.data.length + 1);
  //add data to the chart
  for (var i = dataLength; i < chartjson.data.length; i++) {
    barData = document.createElement('td');
    var bar = document.createElement('div');
    var columnName = document.createElement('p');
    var percentage = document.createElement('p');
    percentage.setAttribute("class", "columnName")
    bar.style.background = chartjson.data[i].color
    bar.style.height = chartjson.data[i].score + "%";
    percentage.innerText = chartjson.data[i].score + "%";
    columnName.innerText = chartjson.data[i].name;
    // attach to DOM
    bar.appendChild(percentage)
    barData.appendChild(bar);
    barData.appendChild(columnName)
    barRow.appendChild(barData);
  
  }
  dataLength = chartjson.data.length;

}

// not used  
var reloader = function reloadPage() {
    window.location.reload();
}

// handles bar width input changes
var widthRadio = document.querySelector(".widthRadios")

widthRadio.addEventListener("submit", () => {
  console.log(event)
  event.preventDefault();
})

// handles bar height input changes
var heigthRadio = document.querySelector(".heightRadios")

heigthRadio.addEventListener("submit", () => {
  console.log(event)
  event.preventDefault();
})

// Adds or Updates Bar Chart Title
var updateTitle = function(event){
      console.log(barTitle.innerHTML)
      barTitle.innerText = event.target[0].value
      event.preventDefault()
}
var titleForm = document.querySelector(".title-form")
titleForm.addEventListener("submit", updateTitle)
  
// handles data submit
var dataForm = document.querySelector(".data-form")
dataForm.addEventListener("submit", ()=> {
  chartjson.data.push({
    "name": event.target[0].value,
    "score": event.target[1].value,
    "color": event.target[2].value
  })
addToBarChart();
event.preventDefault();
})
