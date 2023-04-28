export const AddForm = () => import('../../components/AddForm.vue' /* webpackChunkName: "components/add-form" */).then(c => wrapFunctional(c.default || c))
export const CatalogItem = () => import('../../components/CatalogItem.vue' /* webpackChunkName: "components/catalog-item" */).then(c => wrapFunctional(c.default || c))
export const PopFromTop = () => import('../../components/PopFromTop.vue' /* webpackChunkName: "components/pop-from-top" */).then(c => wrapFunctional(c.default || c))
export const ProductPage = () => import('../../components/ProductPage.vue' /* webpackChunkName: "components/product-page" */).then(c => wrapFunctional(c.default || c))
export const SpinnerLoader = () => import('../../components/SpinnerLoader.vue' /* webpackChunkName: "components/spinner-loader" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
