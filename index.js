const d = new Date();
let day = d.getDay();

//chart data
var chartjson = {
    "data": [
        {
            "day": "sun",
            "amount": 25.48
        },
        {
            "day": "mon",
            "amount": 17.45
        },
        {
            "day": "tue",
            "amount": 34.91
        },
        {
            "day": "wed",
            "amount": 52.36
        },
        {
            "day": "thu",
            "amount": 31.07
        },
        {
            "day": "fri",
            "amount": 23.39
        },
        {
            "day": "sat",
            "amount": 43.28
        }
    ],
    "ykey": 'amount',
    "xkey": "day",
    "prefix": "$",
    "heights": "%"
}

//constants
var TROW = 'tr',
    TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (let i = 0; i < chartjson.data.length; i++) {
    barrow.setAttribute('class', 'bars');
    var prefix = chartjson.prefix;
    var heights = chartjson.heights;

    //create the bar data
    var bardata = document.createElement(TDATA);
    var barinfo = document.createElement('div');
    var bar = document.createElement('div');
    var bartext = document.createElement('div');
    if (i == day) {
        bar.setAttribute('class', 'dayColor');
    } else {
        bar.setAttribute('class', 'barColor');
    }
    barinfo.setAttribute('class', 'barInfo');
    bartext.setAttribute('class', 'bartext');
    bar.style.height = chartjson.data[i][chartjson.ykey] + heights;
    barinfo.innerText = prefix + chartjson.data[i][chartjson.ykey];
    bartext.innerText = chartjson.data[i][chartjson.xkey];
    bardata.appendChild(barinfo);
    bardata.appendChild(bar);
    bardata.appendChild(bartext);
    barrow.appendChild(bardata);
}



//   barrow.appendChild(legend);
barchart.appendChild(barrow);
//   barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;