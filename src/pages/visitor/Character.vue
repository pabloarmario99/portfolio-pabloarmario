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
        <section v-if="character" class="flex px-5 py-15 gap-10">
            <img 
            :src="`/images//${character.image}`"
            class="px-15 h-120 transition-transform duration-200 ease-out hover:scale-103"
            @click="router.push('/visitor/character')"
            />
            <div class="flex flex-col gap-3">
            <h1 class="font-bold text-3xl" > 
                {{ character.name }}
            </h1>
            <p class="descriptione" >
                {{ character.description }}                
                
            </p >
            <p class="quote"> {{ character.project }}</p>
            </div>
            
    
        </section>
    </div>
    
</template>

<style scoped>

</style>