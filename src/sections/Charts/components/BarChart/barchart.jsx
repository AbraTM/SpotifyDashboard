import React from "react";
import { Chart as ChartJS, CategoryScale, BarElement  } from "chart.js"
import { Bar } from "react-chartjs-2"
import "./barchart.css"

ChartJS.register(
    CategoryScale,
    BarElement,
)

export default function BarChart(props){
    const chartData = {
        labels : props?.data?.map((item) => item.name),
        datasets : [
            {
                label : "Spotify",
                data: props?.data.map((item) => item.popularity),
                backgroundColor: [
                "#00aba9",
                "#ff0097", 
                "#a200ff", 
                "#1ba1e2", 
                "#f09609"
                ],
                borderColor: "white",
                borderWidth: 0
        }]
    }

    const options = {
        responsive : true,
        scales : {
            y : {
                grid : {
                    color: "rgb(210, 210, 210, 0.3)"
                }
            },
            x : {
                grid : {
                    color :"rgb(210, 210, 210, 0.3)"
                }
            }
        }
    }
    

    return(
        <div className="chart-element">
            <Bar data={chartData} options={options}/>
        </div>
    )
}