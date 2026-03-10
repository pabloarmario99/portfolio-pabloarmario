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
    <div>
        <section v-if="character" class="flex flex-col-reverse justify-center gap-10 pl-15 pr-10 pt-10 sm:pl-10 md:flex-row md:pl-0 md:pt-15 md:gap-3 md:text-[15px] lg:pl-10 lg:gap-2 lg:text-base transition-all">
            <div class="relative group inline-block leading-none w-fit h-fit shrink-0 self-center md:self-auto">
                <img 
                :src="`/images//${character.image}`"
                class="block h-120 w-auto object-contain transition-all duration-200 ease-out hover:scale-102 hover:opacity-70"
                @click="router.push({ path: '/visitor/character', query: { page: String(route.query.page ?? 1) } })"
                />
                <div class="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
                    <div class="relative font-medium text-[13px] text-black bg-white shadow py-2 px-4 rounded-xl whitespace-nowrap">
                        {{ character.ciao }}
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col gap-3 lg:gap-5">
            <h1 class="font-bold text-3xl" > 
                {{ character.name }}
            </h1>
            <p>
                {{ character.description }}                
                
            </p >
            <p>Proyecto: <span class="font-semibold">{{ character.project }}</span> </p>

            </div>
    </section>
    </div>
    
    
</template>

<style scoped>

</style>
