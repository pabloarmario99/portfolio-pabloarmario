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
    <div class="grid grid-cols-[140px_1fr] min-h-screen font-sans">
        <button
      class="sm:hidden fixed top-1/2 -translate-y-1/2 z-50 h-full p-3 text-black transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] "
      :class="isSidebarOpen ? 'left-21 text-white'  : 'left-0'"
      @click="toggleSidebar"
      :aria-expanded="isSidebarOpen"
      aria-controls="visitor-sidebar"
      aria-label="Toggle sidebar"
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
        class="bg-black/75 sm:bg-[#000000] text-white flex flex-col z-40 fixed top-0 left-0 h-screen w-35 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:static sm:h-auto sm:translate-x-0"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
        >
            <div class="flex flex-col gap-2 m-4">
                <RouterLink to="/home" @click="closeSidebar">
                    <img class="h-auto w-15 mb-2" src="/images/Argi_logo.png">
                </RouterLink>
                <RouterLink to="/visitor/projects" class="sm:hidden" @click="closeSidebar" active-class="font-bold">
                                Proyectos
                            </RouterLink>
                <Accordion type="single" collapsible class="w-full hidden sm:block">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <RouterLink to="/visitor/projects" active-class="font-bold">
                                Proyectos
                            </RouterLink>
                        </AccordionTrigger>
                        <AccordionContent class="flex flex-col gap-2">
                            <RouterLink to="/visitor/projects/godnews!" active-class="font-bold">
                                God News!
                            </RouterLink>
                            <RouterLink to="/visitor/projects/jaime" active-class="font-bold">
                                Jaime C.
                            </RouterLink>
                            <RouterLink to="/visitor/projects/mindland" active-class="font-bold">
                                Mindland
                            </RouterLink>
                            <RouterLink to="/visitor/projects/kisslight" active-class="font-bold">
                                Aurora & Claire
                            </RouterLink>
                            <RouterLink to="/visitor/projects/atalaya" active-class="font-bold">
                                Atalaya
                            </RouterLink>
                            <RouterLink to="/visitor/projects/tamara" active-class="font-bold">
                                Tamara
                            </RouterLink>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            
                <RouterLink to="/visitor/character" active-class="font-bold" @click="closeSidebar">
                    Personajes
                </RouterLink>

                <RouterLink to="/visitor/about" active-class="font-bold" @click="closeSidebar">
                    Sobre mi
                </RouterLink>
            
                <RouterLink to="/visitor/contact" active-class="font-bold" @click="closeSidebar">
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

        <main class="sm:ml-0" :class="isSidebarOpen ? 'ml-0' : 'ml-0'">
            <RouterView class="flex flex-col gap-1 ml-4"/>
        </main>
    </div>
</template>

<style scoped>

</style>
