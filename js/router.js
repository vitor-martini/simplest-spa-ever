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
    const route = this.routes[pathname] || this.routes["/error"]
    const page = document.getElementById("page")
  
    fetch(route)
      .then(data => data.text())
      .then(html => page.innerHTML = html)
  }
}