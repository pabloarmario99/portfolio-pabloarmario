<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Instagram } from 'lucide-vue-next';


const compactHeader = ref(false);

const onScroll = () => {
    compactHeader.value = window.scrollY > 50;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});



</script>

<template>
    <header
    class="fixed top-0 left-0 w-full z-10 bg-black text-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] pt-2">
      
        <div class="flex flex-col items-center transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :class="compactHeader ? 'gap-0' : 'gap-2'"
        >
            <h1 :class="compactHeader ? 'text-base' : 'text-2xl'" class="font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
                Porfolio: Argi
            </h1>
                <img 
                    src="/images/Argi_logo.png"
                    :class="[
                    'h-auto w-20 sm:w-25 slow-spin transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    compactHeader ? 'opacity-0 scale-90 max-h-0 -translate-y-1 pointer-events-none' : 'opacity-100 scale-100 max-h-40 translate-y-0'
                    ]"
                />
            
                <p :class="[
                    'font-light text-xs sm:text-sm text-gray-300 mt-1 overflow-hidden transition-all duration-200 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    compactHeader ? 'opacity-0 max-h-0 -translate-y-1' : 'opacity-100 max-h-10 translate-y-0'
                    ]"
                >
                    Creación de historias, mundos y personajes
                </p>

                <nav class="flex gap-2 sm:gap-8 text-sm sm:text-base justify-center transition-all duration-200">
                    <RouterLink to="/visitor/projects" class="text-white px-2 py-1 pb-2 hover:underline hover:scale-105">
                        Proyectos
                    </RouterLink>
                    <RouterLink to="/visitor/character" class="text-white px-2 py-1 pb-2 hover:underline hover:scale-105">
                        Personajes
                    </RouterLink>
                    <RouterLink to="/visitor/about" class="text-white px-2 py-1 pb-2 hover:underline hover:scale-105">
                        Sobre mi
                    </RouterLink>
                    <RouterLink to="/visitor/contact" class="text-white px-2 py-1 pb-2 hover:underline hover:scale-105">
                        Contacta
                    </RouterLink>
                </nav>
        </div>
    </header>

    <main :class="compactHeader ? 'pt-46 sm:pt-48' : 'pt-53 sm:pt-61'" class="transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] px-12 sm:px-4">
        <section class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
            <img src="/images/ME_escena1.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/IL_freedom.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/GN_ilustracionAmaya.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_expresiones.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/ME_escena5.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/IL_estudioPose.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />

        </section> 
    </main>

    <footer class="bg-black text-white w-full mt-4 p-7 ">
        <div class="flex justify-between items-center">
            <p class="text-xs font-light">
                Pablo Armario Gil
            </p>

            <a 
            href="https://www.instagram.com/argi14_art/"
            class="hover:scale-105"
            ><Instagram/></a>

             <p class="text-xs font-light">
                All rights reserved
            </p>
        </div>
        
    </footer>
</template>
<style scoped>
.slow-spin {
  animation: slow-spin 12s linear infinite;
}

@keyframes slow-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.no-shift {
  position: relative;
  display: inline-block;
}

.no-shift::after {
  content: attr(data-text);   
  visibility: hidden;
  height: 0;
  overflow: hidden;
  display: block;
}

</style>
