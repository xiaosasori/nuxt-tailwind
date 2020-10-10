<template>
  <div :class="$options.name">
    <ul v-if="tagOptions.length" class="list-inline">
      <li v-for="tag in tagOptions" :key="tag.id" class="list-inline-item">
        <button class="btn btn-primary btn-sm" @click="removeTag(tag)">{{ tag.label }} (x)</button>
      </li>
    </ul>
    <input v-model="newTag" @keydown.enter="addTag" />
  </div>
</template>

<script>
// import formOptionSelectMixin from './mixins/form-option-select-mixin';
export default {
  name: `FormTagsInput`,
  model: {
    // By default, `v-model` reacts to the `input`
    // event for updating the value, we change this
    // to `change` for similar behavior as the
    // native `<select>` element.
    event: `change`,
  },
  props: {
    optionAdapter: {
      type: Function,
      default: value => ({
        id: value,
        label: value,
        value,
      }),
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Array, String, Number, Object],
      default: null,
    },
    // tag
    newTagAdapter: {
      type: Function,
      default: value => value,
    },
  },
  data() {
    return {
      newTag: ``,
    };
  },
  computed: {
    newTagOption() {
      return this.optionAdapter(this.newTagValue);
    },
    newTagValue() {
      const trimmedNewTag = this.newTag.trim();
      return trimmedNewTag.length > 0
        ? this.newTagAdapter(trimmedNewTag)
        : null;
    },
    tagOptions() {
      return this.value.map(x => this.optionAdapter(x));
    },
  },
  methods: {
    addTag() {
      if (!this.newTagValue || this.tagOptions.find(({ id }) => id === this.newTagOption.id)) {
        return;
      }
      this.$emit(`change`, [...this.value, this.newTagValue]);
      this.newTag = ``;
    },
    removeTag(tag) {
      this.$emit(`change`, this.value.filter(x => this.optionAdapter(x).id !== tag.id));
    },
  },
};
</script>