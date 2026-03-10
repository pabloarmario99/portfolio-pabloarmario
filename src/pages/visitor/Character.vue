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
            <div class="relative group inline-block leading-none w-fit h-fit shrink-0 self-center md:self-auto">
                <img 
                :src="`/images//${character.image}`"
                class="block h-120 w-auto object-contain transition-all duration-200 ease-out hover:scale-102 hover:opacity-70"
                @click="router.push({ path: '/visitor/character', query: { page: String(route.query.page ?? 1) } })"
                />
                <div class="pointer-events-none absolute left-25 top-0 -translate-y-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20 md:left-full md:top-auto md:bottom-20 md:ml-2 md:translate-y-0">
                    <div class="relative text-white bg-black py-2 px-4 rounded-3xl text-sm whitespace-nowrap">
                        {{ character.ciao }}
                    </div>
                </div>
            </div>
            
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
