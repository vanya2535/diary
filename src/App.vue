<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["noteList"]),
  },
  methods: {
    ...mapActions(["loadNotes", "uploadNotes"]),
  },
  watch: {
    noteList: {
      handler() {
        this.uploadNotes();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadNotes();
  },
};
</script>

<style>
.app {
  font-family: "Noto Sans JP", sans-serif;
  word-break: break-all;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active,
a:focus,
a:active {
  outline: none;
}

html,
body {
  width: 100%;
  height: 100%;
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  background: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  background: none;
  cursor: pointer;
}

button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
text {
  font-weight: 700;
  font-size: inherit;
  line-height: 1em;
  color: #33322e;
}

p {
  font-weight: 400;
}
</style>
