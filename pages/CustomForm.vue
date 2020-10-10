<template>
  <div>
    <Select
      :options="products"
      v-model="selectedProduct"
      :option-adapter="value => ({
        id: value.uuid,
        label: value.name,
        value,
      })"
    />
    {{selectedProduct}}
    <Checkbox
      :options="products"
      v-model="selectedCheckbox"
      :option-adapter="value => ({
        id: value.uuid,
        label: value.name,
        value,
      })"
    />
    <Tags
      v-model="products"
      :option-adapter="value => ({
    id: value.uuid,
    label: value.name,
    value,
  })"
      :new-tag-adapter="value => ({
    uuid: value,
    name: value,
  })"
    />
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore.
    </div>
    <button @click="expanded = !expanded">{{ expanded ? `Shrink` : `Expand` }}</button>
  </div>
</template>

<script>
import Select from '~/components/Select'
import Checkbox from '~/components/Checkbox'
import Tags from '~/components/Tags'
export default {
  components: {Select, Checkbox, Tags},
  data: () => ({
    expanded: false,
    tags: [],
    selectedProduct: null,
    selectedCheckbox: [],
      products: [
        {
          uuid: 'fbf2078e-06cb-4ad5-9781-1a9ba59e7341',
          name: 'iPhone',
          price: 799,
        },
        {
          uuid: '6c0aa519-2972-4fb2-86c1-e114febd079d',
          name: 'iPad',
          price: 499,
        },
      ],
  }),
  methods: {
    adapter(value) {
      return {
        id: value.uuid,
          label: value.name,
          value
      }
    }
  }
}
</script>

<style>
</style>