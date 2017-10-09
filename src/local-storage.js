import Storage from './storage'

export default {
  /**
   * Install local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install (Vue, options = {}) {
    const name = 'localStorage'

    Vue.mixin({
      created () {
        if (this.$options[name]) {
          Object.keys(this.$options[name]).forEach((key) => {
            const [type, defaultValue] = [this.$options[name][key].type, this.$options[name][key].default]

            Storage.addProperty(key, type, defaultValue)
          })
        }
      }
    })

    Vue[name] = new Storage('localStorage')
    Vue.prototype[`$${name}`] = new Storage()
  }
}
