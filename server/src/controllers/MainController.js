class MainController {
  async mainRoute(ctx) {
    ctx.body = 'Hello World!'
    console.log("Handling main route");
  }
}

module.exports = new MainController()
