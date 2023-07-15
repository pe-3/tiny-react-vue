<template>
<button 
    :disabled="state.disabled"
    @click="handleClick"
>
    这是vue按钮
</button>
</template>
<script>
import { setup } from '../../vue-common';
import { renderless, api } from "../../renderless/button/vue";
export default {
  name: "Button",
  props: [
    'resetTime',
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api });
  },
};
</script>
