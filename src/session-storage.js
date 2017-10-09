import Storage from './storage'

export default {
  /**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install (Vue, options = {}) {
    try {
      const test = '__vue-localstorage-test__'

      window.localStorage.setItem(test, test)
      window.localStorage.removeItem(test)
    } catch (e) {
      console.error('Local storage is not supported')
    }

    const name = options.name || 'localStorage'

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

    Vue[name] = new Storage()
    Vue.prototype[`$${name}`] = new Storage()
  }
}
