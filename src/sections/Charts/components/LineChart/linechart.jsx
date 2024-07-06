import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import { Line } from "react-chartjs-2"
import "./linechart.css"


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)

//Setting Font Color for the Chart
ChartJS.defaults.color = "rgb(210, 210, 210)"

export default function LineChart(props){
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
                borderWidth: 0.5,
        }]
    }

    const options = {
        responsive : true,
        plugins : {
            labels : {
                fontColor : "white"
            }
        },
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
            <Line data={chartData} options={options}/>
        </div>
    )
}