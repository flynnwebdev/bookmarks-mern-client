class Store {
  constructor() {
    this.app = null
  }
  connect(app) {
    this.app = app
  }
  get state() {
    return this.app ? this.app.state : {}
  }
  setState(obj) {
    if (this.app) this.app.setState(obj)
  }
}

export const store = new Store()
