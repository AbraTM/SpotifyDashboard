import React from "react";
import "./daily-chart.css"
import { getTopFiftyDaily } from "../../../utility";
import LineChart from "../components/LineChart/linechart";
import BarChart from "../components/BarChart/barchart";

export default function DailyChart(){
    const [topFiftyDailyData, setTopFiftyDailyData] = React.useState([])
    const [option, setOption] = React.useState(true)
    
    React.useEffect(() => {
        async function getData(){
            const result = await getTopFiftyDaily()
            const tempTrackData = result.items.map((item) => {
                let {added_at, track : {artists, duration_ms, name, popularity, external_urls :  {spotify }}} = item

                artists = artists.map((item) => {
                    return item.name
                }) 

                let minutes = Math.floor(duration_ms/60000)
                let seconds = (duration_ms % 60000/1000).toFixed(0)
                duration_ms = (seconds == 60) ? `${minutes} : 00` :
                    minutes + ":" + (seconds < 10 ? "0" : "") + seconds

                name = name.split(" (")[0]
                return {
                    added_at,
                    artists,
                    duration_ms,
                    name,
                    popularity,
                    url : spotify
                }
            })
            setTopFiftyDailyData(tempTrackData)
        }
        getData()
    }, [])

    const selectLine = () => {
        setOption(true)
    }

    const selectBar = () => {
        setOption(false)
    }

    const trackInfoElements = topFiftyDailyData.map((item, index) => {
        // const temp = new Date(item.added_at)
        // let day = temp.getDay()
        // day = (day < 10) ? "0" + day : day 
        // let month = temp.getMonth()
        // month = (month < 10) ? "0" + month : month 
        // const year = temp.getFullYear()
        // const dateAdded = day + "/" + month + "/" + year 
        return(
            <div className="track-info" key={index}>
                <div className="track-num"></div>
                <div className="track-info-l1">
                    <div>
                        {index + 1}.
                        <span>{item.name}</span>
                    </div>
                    <div style={{letterSpacing: "2px"}}>
                        {item.duration_ms}
                    </div>  
                </div>
                <div className="track-info-l2">
                    {item.artists.join(",  ")}
                    <a href={item.url} target="_blank">&#8599;</a>
                </div>  
            </div>
        )
    })

    return(
        <div className="chart-section">
            <h1>Top Fifty Daily</h1>
            <ul className="options">
                <li>
                    <button onClick={selectLine}>
                    Line Chart
                    </button>
                </li>
                <li>
                    <button onClick={selectBar}>
                        Bar Chart
                    </button>
                </li>
            </ul>
            <div className="chart-area">
                {
                    option? 
                    <LineChart data={topFiftyDailyData}/> : 
                    <BarChart data={topFiftyDailyData}/>
                }

            </div>
            <h2>Track List</h2>
            <div className="track-list">
                {trackInfoElements}
                <div className="shadow"></div>
            </div>
        </div>
    )
}