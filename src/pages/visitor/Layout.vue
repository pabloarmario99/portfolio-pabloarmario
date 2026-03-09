<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Instagram, CircleArrowLeft, CircleArrowRight} from 'lucide-vue-next';
import { onBeforeUnmount, onMounted, ref } from 'vue';


const isSidebarOpen = ref(false)

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleResize = () => {
  if (window.innerWidth >= 640) {
    isSidebarOpen.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
    <div class="min-h-screen font-sans sm:pl-35">
        <button
      class="sm:hidden fixed top-1/2 -translate-y-1/2 z-50 h-full p-3 text-black transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] "
      :class="isSidebarOpen ? 'left-21 text-white'  : 'left-0'"
      @click="toggleSidebar"
    >
      <CircleArrowLeft v-if="isSidebarOpen" class="w-8 h-auto" />
      <CircleArrowRight v-else class="w-8 h-auto" />
    </button>

    <div
      v-if="isSidebarOpen"
      class="sm:hidden fixed inset-0 z-30"
      @click="closeSidebar"
    />

        <header 
        id="visitor-sidebar"
        class="bg-black/75 sm:bg-[#000000] text-white flex flex-col z-40 fixed top-0 left-0 h-screen w-35 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:translate-x-0"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            
            <div class="flex flex-col gap-2 p-5">
                <RouterLink to="/home" >
                    <img class="w-20 pb-4 transition-all hover:scale-105" src="/images/Argi_logo.png">
                </RouterLink>
                <RouterLink to="/visitor/projects" class="sm:hidden" @click="closeSidebar" active-class="font-semibold underline">
                                Proyectos
                            </RouterLink>
                <Accordion type="single" collapsible class="w-full hidden sm:block">
                    <AccordionItem value="item-1">
                        <AccordionTrigger class="flex items-center gap-0">
                            <RouterLink to="/visitor/projects" active-class="font-semibold underline">
                                Proyectos
                            </RouterLink>
                        </AccordionTrigger>
                        <AccordionContent class="flex flex-col gap-2 pl-2">
                            <RouterLink to="/visitor/projects/godnews!" active-class="font-semibold underline">
                                God News!
                            </RouterLink>
                            <RouterLink to="/visitor/projects/jaime" active-class="font-semibold underline">
                                Jaime C.
                            </RouterLink>
                            <RouterLink to="/visitor/projects/mindland" active-class="font-semibold underline">
                                Mindland
                            </RouterLink>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            
                <RouterLink to="/visitor/character" active-class="font-semibold underline" @click="closeSidebar">
                    Personajes
                </RouterLink>

                <RouterLink to="/visitor/about" active-class="font-semibold underline" @click="closeSidebar">
                    Sobre mi
                </RouterLink>
            
                <RouterLink to="/visitor/contact" active-class="font-semibold underline" @click="closeSidebar">
                    Contacta
                </RouterLink>
            </div>
            <div class="group flex items-center m-4 gap-2 mt-auto mb-10  ">
                 <a 
                 href="https://www.instagram.com/argi14_art/"
                 class="scale-95 group-hover:scale-103"
                 ><Instagram/></a>
                 <a class="text-sm" href="https://www.instagram.com/argi14_art/">@argi14_art</a>
            </div>
        </header>

        <main class="min-w-0 min-h-screen">
            <RouterView class="flex flex-col gap-1"/>
        </main>
    </div>
</template>

<style scoped>

</style>
