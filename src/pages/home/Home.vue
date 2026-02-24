<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="mb-1 font-bold">Portfolio: Argi</h1>
        <Button class="mt-1">
            <RouterLink to="projects">Projects</RouterLink>
        </Button>
    </div>
</template>

<style scoped>

</style>