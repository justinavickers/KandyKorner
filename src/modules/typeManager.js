import settings from "./settings"

export default {
  get(id) {
    return fetch(`${settings.remoteURL}/types/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${settings.remoteURL}/types`).then(e => e.json())
  }
}