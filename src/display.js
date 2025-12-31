// Display

export const container = document.querySelector(".conrainer")

export function display(date, temp, description) {
  let box = `
    <div class="box">
    <p class="name">week name</p>
    <p class="date">${date}</p>
    <div class="wrap">
      <span class="temp">${temp}</span>
      <span class="degree">°C</span>
    </div>
    <p class="description">${description}</p>
    <button>switch the unit</button>
    </div>
  `
  container.innerHTML += box
}
