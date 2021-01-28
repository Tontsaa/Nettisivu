console.log("Script toimii");
document.querySelector("#kirjoita").addEventListener("click", e =>{
e.preventDefault
console.log("klikkaus toimii");
document.querySelector("#taulukko").innerHTML = "Talukko chart";
document.querySelector("#lampotila").innerHTML = "Lämpötila chart";
document.querySelector("#ilmankosteus").innerHTML = "Ilmankosteus chart";
});

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        //Data taulukkona
        document.querySelector("#taulukko").innerHTML = "<table><tr><td>Lämpötila</td><td>Ilmankosteus</td></tr><tr><td>22</td><td>40</td></tr></table>";

      var data = new google.visualization.DataTable();
        data.addColumn('string', 'PVM');
        data.addColumn('number', 'Lämpöys');
        data.addRows([
          ['14.1.2021', 23],
          ['15.1.2021', 21],
          ['16.1.2021', 21],
          ['17.1.2021', 20],
          ['18.1.2021', 22]
        ]);
        var options = {'title':'Lämpötila',
                       'width':900,
                       'height':500};
        var chart = new google.visualization.LineChart(document.getElementById('lampotila'));
        chart.draw(data, options);
      var data_Hum = new google.visualization.DataTable();
        data_Hum.addColumn('string', 'PVM');
        data_Hum.addColumn('number', 'Märkeys');
        data_Hum.addRows([
          ['14.1.2021', 15],
          ['15.1.2021', 12],
          ['16.1.2021', 13],
          ['17.1.2021', 14],
          ['18.1.2021', 12]
        ]);
        var options_Hum = {'title':'Ilmankosteus',
                       'width':900,
                       'height':500};
        var chart_Hum = new google.visualization.LineChart(document.getElementById('ilmankosteus'));
        chart_Hum.draw(data_Hum, options_Hum);
      }