const homeElement = document.getElementById("home")
const universeElement = document.getElementById("universe")
const explorerElement = document.getElementById("explorer")

export function toggleActive(elementId) {
  homeElement.classList.remove("active")
  universeElement.classList.remove("active")
  explorerElement.classList.remove("active")
  document.getElementById(elementId).classList.add("active")
}