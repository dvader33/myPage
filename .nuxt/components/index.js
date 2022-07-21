export const AboutSection = () => import('../..\\components\\AboutSection.vue' /* webpackChunkName: "components/about-section" */).then(c => wrapFunctional(c.default || c))
export const HeroSection = () => import('../..\\components\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => wrapFunctional(c.default || c))
export const LanguageInput = () => import('../..\\components\\LanguageInput.vue' /* webpackChunkName: "components/language-input" */).then(c => wrapFunctional(c.default || c))
export const TechSection = () => import('../..\\components\\TechSection.vue' /* webpackChunkName: "components/tech-section" */).then(c => wrapFunctional(c.default || c))
export const WorkSection = () => import('../..\\components\\WorkSection.vue' /* webpackChunkName: "components/work-section" */).then(c => wrapFunctional(c.default || c))

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
