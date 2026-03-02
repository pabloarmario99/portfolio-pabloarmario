<script setup lang="ts">
import { ref } from 'vue';
import { allchara, type Allchara } from '../data';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()

const router = useRouter()

const character = ref<Allchara | undefined>(
    allchara.find(char => char.id === Number(route.params.id))
)
</script>

<template>
    <div @click="router.push('/visitor/projects/godnews!')">
<h1>{{ character?.name }}</h1>
    </div>
</template>



<style scoped>

</style>