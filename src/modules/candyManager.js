import settings from "./settings"

export default {
  get(id) {
    return fetch(`${settings.remoteURL}/candies/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${settings.remoteURL}/candies`).then(e => e.json())
  }
}