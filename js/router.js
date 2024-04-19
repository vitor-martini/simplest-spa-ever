import { toggleActive } from "./active.js"

export class Router {
  routes = {}

  add(url, page) {
    this.routes[url] = page 
  }

  handle(event) {
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.route()
  }

  route() {
    const { pathname } = window.location 
    const route = this.routes[pathname] || this.routes["/"]
    const page = document.getElementById("page")
    toggleActive(route.split("/").pop().replace(".html", ""))

    fetch(route)
      .then(data => data.text())
      .then(html => page.innerHTML = html)
  }
}