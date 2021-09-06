<template>
  <textarea
    class="my-textarea"
    :value="modelValue"
    :ref="`myInput${id}`"
    :style="inputStyle"
    @input="updateInput"
  >
  </textarea>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  data() {
    return {
      inputHeight: 0,
      id: Date.now(),
    };
  },
  methods: {
    resize() {
      this.inputHeight = `${this.$refs[`myInput${this.id}`].scrollHeight}px`;
    },
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  watch: {
    modelValue() {
      this.resize();
    },
  },
  computed: {
    inputStyle() {
      return {
        height: this.inputHeight,
      };
    },
  },
  mounted() {
    this.resize();
  },
};
</script>

<style scoped>
.my-textarea {
  overflow: hidden;
  border: none;
  width: 100%;
  min-height: 38px;
  resize: none;
}
</style>
