<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';


const compactHeader = ref(false);

const onScroll = () => {
    compactHeader.value = window.scrollY > 80;
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
      compactHeader ? 'py-2' : 'py-2'
    ]">
      
        <div class="max-w-6xl mx-auto px-4 gap-2 flex flex-col justify-center items-center">
            <h1 :class="compactHeader ? 'text-base' : 'text-2xl'" class="font-medium transition-all duration-100">
                Portfolio: Argi
            </h1>
            <img 
            src="/images/Argi_logo.png"
            v-if="!compactHeader" class="h-auto w-20 sm:w-40 transition-all ">

            <p v-if="!compactHeader" class="text-sm text-gray-300 mt-1">
                Ilustración, personajes y proyectos
            </p>

            <nav class="flex gap-1 font-light">
                <RouterLink to="/visitor/projects" class="bg-black text-white px-2 py-1 hover:bg-gray-900">
                    Proyectos
                </RouterLink>
                <RouterLink to="/visitor/character" class="bg-black text-white px-2 py-1 hover:bg-gray-900">
                    Personajes
                </RouterLink>
            
            
                <RouterLink to="/visitor/about" class="bg-black text-white px-1 py-1 hover:bg-gray-900">
                    Sobre mi
                </RouterLink>
            
        
                <RouterLink to="/visitor/contact" class="bg-black text-white px-2 py-1 hover:bg-gray-900">
                    Contacta
                </RouterLink>
            </nav>
        </div>
    </header>

    <main :class="compactHeader ? 'pt-44 sm:pt-48' : 'pt-52 sm:pt-75'" class="transition-all duration-100">
        <section class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
        <img src="/images/ME_escena1.jpg" class="mb-4 w-full h-auto  break-inside-avoid" />
        <img src="/images/GN_portadaAmaya.jpg" class="mb-4 w-full h-auto  break-inside-avoid" />
        <img src="/images/GN_portadaGuardian.jpg" class="mb-4 w-full h-auto  break-inside-avoid" />
        <img src="/images/JC_portada.jpg" class="mb-4 w-full h-auto  break-inside-avoid" />
    </section>
    </main>

    <footer>
        Web de Pablo Armario Gil
    </footer>
</template>

<style scoped>

</style>