import React from "react"
import Header from "./sections/Header/header"
import DailyChart from "./sections/Charts/DailyChart/daily-chart"
import WeeklyChart from "./sections/Charts/WeeklyChart/weekly-chart"
import "./App.css"

export default function App(){
  const [option, setOption] = React.useState(true)

  const selectDaily = () => {
    setOption(true)
  }

  const selectWeekly = () => {
    setOption(false)
  }

  return(
    <div>
      <div className="header-cn">
        <Header/>
        <ul className="app-options">
          <li>
              <button onClick={selectDaily}>
                  Daily Chart
              </button>
          </li>
          <li>
              <button onClick={selectWeekly}>
                  Weekly Chart
              </button>
          </li>
      </ul>
      </div>
      {
          option? <DailyChart/> : <WeeklyChart/>
      }
    </div>
  )
}