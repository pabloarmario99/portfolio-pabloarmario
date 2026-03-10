<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { allchara } from './data';
import { useRoute, useRouter } from 'vue-router';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const getPageFromQuery = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : 1;
};


const inPagina = ref(1)
const nuncPagina = ref(getPageFromQuery(route.query.page))
const isDragging = ref(false)
const dragStartX = ref(0)
const dragOffsetX = ref(0)
const didDrag = ref(false)
const dragThreshold = 60


const totalPaginae = computed(() => 
Math.ceil(allchara.length / inPagina.value)) 

const actualizarInPagina = () => {
  if (window.innerWidth < 768) inPagina.value = 1 
  else if (window.innerWidth < 1024) inPagina.value = 2 
  else inPagina.value = 3                               
}

onMounted(() => {
  actualizarInPagina()
  window.addEventListener('resize', actualizarInPagina)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', actualizarInPagina)
})

const getItemsByPage = (pagina: number) => {
    const inicio = (pagina - 1) * inPagina.value
    const fin = inicio + inPagina.value
    return allchara.slice(inicio, fin)
}

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae.value) {
        nuncPagina.value = pagina
    }
}

const paginaNumeri = computed(() => [...Array(totalPaginae.value)].map((_, i) => i + 1 )) 

const onDragStart = (event: PointerEvent) => {
  const target = event.currentTarget as HTMLElement | null
  target?.setPointerCapture(event.pointerId)
  isDragging.value = true
  dragStartX.value = event.clientX
  dragOffsetX.value = 0
  didDrag.value = false
}

const onDragMove = (event: PointerEvent) => {
  if (!isDragging.value) return
  dragOffsetX.value = event.clientX - dragStartX.value
  if (Math.abs(dragOffsetX.value) > 8) {
    didDrag.value = true
  }
}

const onDragEnd = () => {
  if (!isDragging.value) return

  if (dragOffsetX.value <= -dragThreshold && nuncPagina.value < totalPaginae.value) {
    ireAdPaginam(nuncPagina.value + 1)
  } else if (dragOffsetX.value >= dragThreshold && nuncPagina.value > 1) {
    ireAdPaginam(nuncPagina.value - 1)
  }

  isDragging.value = false
  dragOffsetX.value = 0
}

const preventImageDrag = (event: DragEvent) => {
  event.preventDefault()
}

const onCardClick = (characterId: number) => {
  if (didDrag.value) {
    didDrag.value = false
    return
  }
  router.push({ path: `/visitor/character/${characterId}`, query: { page: String(nuncPagina.value) } })
}

watch([inPagina, totalPaginae], () => {
  if (nuncPagina.value > totalPaginae.value) {
    nuncPagina.value = totalPaginae.value || 1
  }
})

watch(nuncPagina, (page) => {
  router.replace({
    query: {
      ...route.query,
      page: String(page),
    },
  });
});
</script>

<template>
    <div class="w-full max-w-350 pt-11 md:pt-8 mx-auto transition-all">
        <header class="text-center">
            <h1 class="font-bold text-3xl md:text-5xl pb-3 md:pb-5 transition-all">
            Diseño de personajes
            </h1>
            <p class="pb-5">Conoce más sobre ellos</p>
        </header>

        <main class="flex items-center px-15 md:px-3">
             <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 md:px-2 scale-110 hidden sm:block',
                nuncPagina === 1
                ?' text-[#b7bbd6] cursor-not-allowed'
                :'text-black hover:transition-transform duration-200 ease-out hover:scale-125'
                ]"
            >
                <ChevronLeft/>

            </button>
            
            <div
              class="w-full py-2 overflow-hidden touch-pan-y"
              @pointerdown="onDragStart"
              @pointermove="onDragMove"
              @pointerup="onDragEnd"
              @pointercancel="onDragEnd"
              @pointerleave="onDragEnd"
            >
              <div
                class="flex"
                :style="{
                  transform: `translateX(calc(-${(nuncPagina - 1) * 100}% + ${isDragging ? dragOffsetX : 0}px))`,
                  transition: isDragging ? 'none' : 'transform 600ms ease-in-out'
                }"
              >
                <section
                  v-for="pagina in totalPaginae"
                  :key="pagina"
                  class="w-full shrink-0"
                >
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
                    <Card
                      class="cursor-pointer w-60 h-80 transition-transform duration-200 ease-out hover:scale-110"
                      v-for="allchara in getItemsByPage(pagina)"
                      :key="allchara.id"
                      @click="onCardClick(allchara.id)"
                    >
                      <CardContent
                        class="flex flex-col items-center gap-2 px-0"
                      >
                        <div class="flex justify-center h-65 overflow-hidden">
                          <img
                            :src="`/images/${allchara.image}`"
                            class="h-100 object-cover object-top select-none"
                            draggable="false"
                            @dragstart="preventImageDrag"
                          >
                        </div>
                        <h2 class="font-medium text-lg">{{ allchara.name }}</h2>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            </div>
            <button
                :disabled="nuncPagina === totalPaginae"
                @click="ireAdPaginam(nuncPagina + 1)"
                :class="['px-4 py-2 mx-1 md:mx-2 transition-colors scale-110 hidden sm:block',
                nuncPagina === totalPaginae
                ?' text-[#b7bbd6] cursor-not-allowed'
                :'text-black hover:transition-transform duration-200 ease-out hover:scale-125'
                ]"          >
                <ChevronRight/>
            </button>
            
        </main>
        <div class="flex items-center justify-center gap-2 mt-4">
            <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 transition-colors scale-110 sm:hidden',
                nuncPagina === 1
                ?' text-[#b7bbd6] cursor-not-allowed'
                :'text-black hover:transition-transform duration-200 ease-out hover:scale-125'
                ]"
            >
                <ChevronLeft/>
            </button>

            <button
                v-for="pagina in paginaNumeri"
                :key="pagina"
                @click="ireAdPaginam(pagina)"
                :class="['w-2 h-5 sm:h-2 sm:my-5 rounded-3xl transition-all',
                    nuncPagina === pagina
                    ? 'bg-[#000000] text-white'
                    : 'bg-[#b7bbd6] hover:bg-[#000000] hover:text-white'
                ]"
            >
            </button>

            <button
                :disabled="nuncPagina === totalPaginae"
                @click="ireAdPaginam(nuncPagina + 1)"
                :class="['px-4 py-2 transition-colors scale-110 sm:hidden',
                nuncPagina === totalPaginae
                ?' text-[#b7bbd6] cursor-not-allowed'
                :'text-black hover:transition-transform duration-200 ease-out hover:scale-125'
                ]"          >
                <ChevronRight/>
            </button>
        </div>
    </div>
       
        
</template>

<style scoped>

</style>

