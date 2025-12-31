import "./styles.css"
import { display } from "./display.js"
import { container } from "./display.js"

const input = document.querySelector("input")

const searchBtn = document.querySelector(".search")

// const conrainer = document.querySelector(".conrainer")

let location

async function getWeather(xlocation) {
  try {
    const theWeather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${xlocation}?unitGroup=us&key=HSB87RNYU5B6CGCRUKUUT4TEU`,
    )
    const json = await theWeather.json()
    console.log(json)

    const arrOfDayes = json.days
    console.log(arrOfDayes)

    container.innerHTML = ""

    for (let i = 0; i < 7; i++) {
      const theDatetTime = arrOfDayes[i].datetime
      const theTemp = arrOfDayes[i].temp
      const theConditions = arrOfDayes[i].conditions
      console.log(theDatetTime, theTemp, theConditions)
      display(theDatetTime, theTemp, theConditions)
    }
  } catch (error) {
    console.log(error)
  }
}

searchBtn.addEventListener("click", () => {
  location = input.value
  getWeather(location)
})
