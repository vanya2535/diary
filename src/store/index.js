import { createStore } from "vuex";

export default createStore({
  state: () => ({
    noteList: [],
  }),
  getters: {
    getNoteById: (state) => (id) => {
      for (let index in state.noteList) {
        if (state.noteList[index].id === id) return state.noteList[index];
      }
    },
  },
  mutations: {
    deleteNote(state, id) {
      state.noteList = state.noteList.filter((noteItem) => noteItem.id !== id);
    },
    updateNote(state, noteItem) {
      let index = -1;
      state.noteList.forEach((item, pos) => {
        if (item.id === noteItem.id) index = pos;
      });
      if (~index) state.noteList[index] = noteItem;
      else state.noteList.push(noteItem);
    },
  },
  actions: {
    loadNotes({ commit }) {
      const noteList = JSON.parse(localStorage.noteList);
      if (Array.isArray(noteList)) {
        noteList.forEach((noteItem) => {
          commit("updateNote", noteItem);
        });
      }
    },
    uploadNotes({ state }) {
      localStorage.noteList = JSON.stringify(state.noteList);
    },
  },
});
