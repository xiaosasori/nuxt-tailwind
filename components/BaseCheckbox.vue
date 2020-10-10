<template>
  <label ref="label" @click="focus" @keydown.prevent.enter="$refs.label.click()">
    <input
      v-model="computedValue"
      :indeterminate.prop="indeterminate"
      type="checkbox"
      ref="input"
      @click.stop
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
    />

    <slot />
  </label>
</template>

<script>
export default {
  name: 'BCheckBox',
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    disabled: Boolean,
    required: Boolean,
    name: String,
    indeterminate: Boolean,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    }
  },
  data() {
    return {
      newValue: this.value
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue
      },
      set(value) {
        // this.newValue = value
        // console.log('value', value)
        this.$emit('input', value)
      }
    }
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value
    }
  },
  methods: {
    focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus()
    }
  }
}
</script>