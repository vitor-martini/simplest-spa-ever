import { Router } from "./router.js"

const anchorElement = document.querySelectorAll("nav a")
const logoElement = document.querySelector("nav a img")

const router = new Router()

router.add("/", "../pages/home.html")
router.add("/universe", "../pages/universe.html")
router.add("/explorer", "../pages/explorer.html")
router.add("/error", "../pages/error.html")

router.route()
window.addEventListener("popstate", event => router.handle(event))
anchorElement.forEach(x => x.addEventListener("click", event => router.handle(event)))
logoElement.addEventListener("click", (event) => {
  event.target.href = "/"
  router.handle(event)
})
 