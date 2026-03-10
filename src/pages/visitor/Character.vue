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
        <section v-if="character" class="flex flex-col-reverse justify-center gap-10 pl-15 pr-10 pt-10 pb-5 sm:pl-10 md:flex-row md:pl-0 md:pt-15 md:gap-3 md:text-[15px] lg:pl-10 lg:gap-6 lg:text-base transition-all">
            <div class="relative group inline-block leading-none w-fit h-fit shrink-0 self-center md:self-auto">
                <img 
                :src="`/images//${character.image}`"
                class="block h-120 w-auto object-contain transition-all duration-200 ease-out hover:scale-102 hover:opacity-70"
                @click="router.push({ path: '/visitor/character', query: { page: String(route.query.page ?? 1) } })"
                />
                <div class="pointer-events-none absolute top-0 right-0 translate-x-8 -translate-y-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
                    <div class="relative font-medium text-[13px] text-black bg-white shadow py-2 px-4 rounded-xl whitespace-nowrap">
                        {{ character.ciao }}
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col gap-3">
            <h1 class="font-bold text-3xl" > 
                {{ character.name }}
            </h1>
            <p>
                {{ character.description }}                
                
            </p >
            <p>Proyecto: {{ character.project }}</p>
            </div>
        </section>

         <section class="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:balance] px-4">
            <img src="/images/ME_escena1.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/IL_freedom.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/GN_ilustracionAmaya.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_expresiones.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/ME_escena5.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/IL_estudioPose.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />

        </section> 

    </div>
    
    
</template>

<style scoped>

</style>
