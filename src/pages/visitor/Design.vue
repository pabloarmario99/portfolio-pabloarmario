<script setup lang="ts">
import { ref } from 'vue';
import { designs, type Design } from './data';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()

const router = useRouter()

const design = ref<Design | undefined>(
    designs.find(char => char.id === Number(route.params.id))
)
</script>

<template>
    <div @click="router.push('/visitor/projects/godnews!')">
<h1>{{ design?.name }}</h1>
    </div>
</template>



<style scoped>

</style>