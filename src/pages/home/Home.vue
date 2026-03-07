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
    :class="[
      'fixed top-0 left-0 w-full z-10 bg-black text-white  transition-all duration-100',
      compactHeader ? 'pt-2' : 'pt-2'
    ]">
      
        <div class="gap-2 flex flex-col items-center">
            <h1 :class="compactHeader ? 'text-base' : 'text-2xl'" class="font-medium transition-all duration-100">
                Porfolio: Argi
            </h1>
                <img 
                src="/images/Argi_logo.png"
                v-if="!compactHeader" 
                class="h-auto w-20 sm:w-25 transition-all slow-spin">
            
                <p v-if="!compactHeader" class="font-light text-xs flex justify-center lg:justify-start sm:text-sm text-gray-300 mt-1">
                    Creación de historias, mundos y personajes
                </p>

                <nav class="flex gap-2 sm:gap-8 text-sm sm:text-base justify-center font-light transition-all">
                    <RouterLink to="/visitor/projects" class="bg-black text-white px-2 py-1 pb-2 hover:bg-[#202020] rounded-t-sm">
                        Proyectos
                    </RouterLink>
                    <RouterLink to="/visitor/character" class="bg-black text-white px-2 py-1 pb-2 hover:bg-[#202020] rounded-t-sm">
                        Personajes
                    </RouterLink>
                    <RouterLink to="/visitor/about" class="bg-black text-white px-2 py-1 pb-2 hover:bg-[#202020] rounded-t-sm">
                        Sobre mi
                    </RouterLink>
                    <RouterLink to="/visitor/contact" class="bg-black text-white px-2 py-1 pb-2 hover:bg-[#202020] rounded-t-sm">
                        Contacta
                    </RouterLink>
                </nav>
        </div>
    </header>

    <main :class="compactHeader ? 'pt-46 sm:pt-48' : 'pt-52 sm:pt-61'" class="transition-all duration-100 px-4">
        <section class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
            <img src="/images/ME_escena1.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/GN_portadaAmaya.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/GN_portadaGuardian.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_portada.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
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

</style>
