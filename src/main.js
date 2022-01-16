import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./styles/global.css"
// import './assets/tailwind.css'
import store from './store'


// import VueTailwind from "vue-tailwind";
// import VIcon from "vue-tailwind-icons";

// import {
//   TInput,
//   TTextarea,
//   TSelect,
//   TRadio,
//   TCheckbox,
//   TButton,
//   TInputGroup,
//   TCard,
//   TAlert,
//   TModal,
//   TDropdown,
//   TRichSelect,
//   TPagination,
//   TTag,
//   TRadioGroup,
//   TCheckboxGroup,
//   TTable,
//   TDatepicker,
//   TToggle,
//   TDialog,
// } from "vue-tailwind/dist/components";

// const tailwindSettings = {
//   "t-input": {
//     component: TInput,
//     props: {
//       classes:
//         "block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
//     },
//   },
//   "t-textarea": {
//     component: TTextarea,
//     props: {
//       classes:
//         "block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed",
//     },
//   },
// };

// Vue.use(VueTailwind, tailwindSettings);

// Vue.use(VIcon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
