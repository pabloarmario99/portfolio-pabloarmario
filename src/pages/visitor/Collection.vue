<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { computed, ref } from 'vue';
import { allchara } from './data';
import { router } from '@/router';


const inPagina = 2

const nuncPagina = ref(1)

const totalPaginae = Math.ceil(allchara.length / inPagina)

const listaPersonajes = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina
    const fin = inicio + inPagina
    return allchara.slice(inicio, fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <=totalPaginae) {
        nuncPagina.value = pagina
    }
}

const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i + 1 )

</script>



<template>
    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 my-8 mx-auto">
        <div class="text-center">
            <h1 class="font-bold text-xl lg:text-5xl mb-5">
            Diseño de personajes
            </h1>
        
            <p class="mb-4">Conoce más sobre ellos...</p>


        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
            <Card 
            class="cursor-pointer w-55 h-60 hover:bg-[#000000] hover:text-white transition-colors"
            v-for="allchara in listaPersonajes"
            :key="allchara.id"
            @click="router.push(`/visitor/character/${ allchara.id }`)"
            >
                <CardContent 
                class="flex flex-col items-center gap-1 w-full px-0"
                
                >
                    <h2 class="font-medium text-lg">{{ allchara.name }}</h2>
                </CardContent>
            </Card>
        </div>
        <div class="flex items-center justify-center gap-2 mt-4">
            <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                nuncPagina === 1
                ?'bg-gray-200 text-gray-400 cursor-not-allowed'
                :'bg-[#b7bbd6] hover:bg-[#000000] hover:text-white'
                ]"
            >
                Anterior
            </button>

            <button
                v-for="pagina in paginaNumeri"
                @click="ireAdPaginam(pagina)"
                :class="['w-10 h-10 rounded-md font-medium transition-colors',
                    nuncPagina === pagina
                    ? 'bg-[#000000] text-white'
                    : 'bg-[#b7bbd6] hover:bg-[#000000] hover:text-white'
                ]"
            >
                {{ pagina }}
            </button>

            <button
                :disabled="nuncPagina === totalPaginae"
                @click="ireAdPaginam(nuncPagina + 1)"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                nuncPagina === totalPaginae
                ?'bg-gray-200 text-gray-400 cursor-not-allowed'
                :'bg-[#b7bbd6] hover:bg-[#000000] hover:text-white'
                ]"            >
                Siguiente
            </button>
        </div>
        
        
    </div>
</template>


<style scoped>

</style>