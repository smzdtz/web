<template>
  <Spin :indicator="indicator">
    <slot></slot>
  </Spin>
</template>

<script lang="ts">
import { LoadingOutlined } from "@ant-design/icons-vue";
import { Spin } from "ant-design-vue";
import { h } from "vue";
export default {
  components: { Spin },
  setup() {
    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "24px",
      },
      spin: true,
    });
    return {
      indicator,
    };
  },
};
</script>
