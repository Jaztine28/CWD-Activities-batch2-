window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Seichiee Top Post"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Cute" },
                { y: 266455,  label: "Scared" },
                { y: 169709,  label: "Happy" },
            ]
        }]
    });

    setTimeout(() => {
      chart.render();
    }, 1000);
    }