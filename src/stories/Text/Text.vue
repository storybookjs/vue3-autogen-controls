<script setup lang="ts">
import { VariantProps } from "class-variance-authority";
import { textVariants } from "./variants";

type ButtonProps = Required<VariantProps<typeof textVariants>>;
type TAG = ButtonProps["tag"]

defineProps<{ tag?: TAG }>();
// const props = defineProps<{ tag?: TextVariants["tag"] }>();
</script>

<template>
  <component :is="tag" :class="textVariants({ tag })">
    <slot />
  </component>
</template>
