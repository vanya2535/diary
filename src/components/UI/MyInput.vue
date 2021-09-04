<template>
  <textarea
    class="my-textarea"
    :value="modelValue"
    @input="updateInput"
    ref="myInput"
    :style="inputStyle"
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
    };
  },
  methods: {
    resize() {
      this.inputHeight = `${this.$refs.myInput.scrollHeight}px`;
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
