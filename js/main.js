import { Router } from "./router.js"

const logoElement = document.querySelector("nav a img")
const router = new Router()

router.add("/", "../pages/home.html")
router.add("/home", "../pages/home.html")
router.add("/universe", "../pages/universe.html")
router.add("/explorer", "../pages/explorer.html")

logoElement.addEventListener("click", (event) => {
  event.target.href = "/home"
  router.handle(event)
})

// adiciona router.handle em todos os a dentro de body, mesmo que esse venha a ser carregado depois
document.querySelector('body').addEventListener('click', function (event) {
  if (event.target.matches('a')) {
    router.handle(event)
  }
});

router.route()
window.addEventListener("popstate", event => router.handle(event))