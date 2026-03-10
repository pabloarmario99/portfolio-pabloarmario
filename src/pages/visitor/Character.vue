<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { allchara, type Allchara } from './data';


const route = useRoute()

const router = useRouter()

const character = ref<Allchara | undefined>(
  allchara.find(char => char.id === Number(route.params.id))
)

</script>

<template>
    <div >
        <section v-if="character" class="flex flex-col-reverse justify-center gap-10 pl-15 pr-5 pt-10 pb-5 md:flex-row sm:px-5 md:px-10 md:pt-15 md:gap-10 lg:px-20 transition-all">
            <img 
            :src="`/images//${character.image}`"
            class="h-120 w-auto object-contain  transition-all duration-200 ease-out hover:scale-103 hover:opacity-40"
            @click="router.push({ path: '/visitor/character', query: { page: String(route.query.page ?? 1) } })"
            />
            <div class="flex flex-col gap-3">
            <h1 class="font-bold text-3xl" > 
                {{ character.name }}
            </h1>
            <p class="descriptione" >
                {{ character.description }}                
                
            </p >
            <p class="quote">Proyecto: {{ character.project }}</p>
            </div>
        </section>

        <footer>
            
        </footer>

    </div>
    
    
</template>

<style scoped>

</style>
