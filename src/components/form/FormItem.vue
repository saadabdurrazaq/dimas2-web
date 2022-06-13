<template>
  <div class="intro-y input-form">
    <slot name="label">
      <label
        :for="id"
        class="form-label w-full flex flex-col sm:flex-row"
      >
        {{ label }}
        <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
          >{{ rulesText }}</span 
        >
      </label>
    </slot>
    <slot :slot-scope="{id}"> </slot>
    <slot name="error-message" v-if="validationData != null">
      <template v-if="validationData.$error">
        <div
          v-for="(error, index) in validationData.$errors"
          :key="index"
          class="text-theme-6 mt-2"
        >
          {{ error.$message }}
        </div>
      </template>
    </slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    validationData: {
      required: false,
      default: null
    },
    label: {},
    rulesText: {},
    id: {}
  },
});
</script>

<style>
</style>
