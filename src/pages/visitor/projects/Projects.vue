<script setup lang="ts">

</script>

<template>
    <div>
        <header class="flex flex-col items-center pt-4 pb-4 gap-3 bg-[#424242] text-white">
            <h1 class="font-bold text-4xl">Proyectos</h1>
            <p>A un solo paso de entrar en un 
                <span class="font-bold">mundo nuevo</span>
            </p>
        </header>
        <main>
            <div class="flex flex-wrap justify-center columns-1 sm:columns-2 lg:columns-3 gap-8 mb-8 ">
                <RouterLink to="/visitor/projects/godnews!">
                    <img 
                    class=" mt-4 w-80 h-90 object-cover object-center transition-all duration-200 ease-out hover:scale-103" 
                    src="/images/GN_portada.jpg">
                </RouterLink>
                <RouterLink to="/visitor/projects/jaime">
                    <img 
                    class="mt-2 w-80 h-90 object-cover object-center transition-all duration-200 ease-out hover:scale-103" 
                    src="/images/JC_portada.jpg">
                </RouterLink>
                <RouterLink to="/visitor/projects/mindland">
                    <img 
                    class="mt-2 w-80 h-90 object-cover object-center transition-transform duration-200 ease-out hover:scale-103" 
                    src="/images/ME_escena5.jpg">
                </RouterLink>
                <RouterLink to="/visitor/projects/kisslight">
                    <img 
                    class="mt-2 w-80 h-90 object-cover object-center transition-transform duration-200 ease-out hover:scale-103" 
                    src="/images/AC_portada.jpg">
                </RouterLink>
                <RouterLink to="/visitor/projects/atalaya">
                    <img 
                    class="mt-2 w-80 h-90 object-cover object-right transition-transform duration-200 ease-out hover:scale-103" 
                    src="/images/ATY_mapaMoonfish.jpg">
                </RouterLink>
                <RouterLink to="/visitor/projects/tamara">
                    <img 
                    class="mt-2 w-80 h-90 object-cover object-center transition-transform duration-200 ease-out hover:scale-103" 
                    src="/images/TM_vestuario.jpg">
                </RouterLink>
            </div>
        </main>
        
    </div>
</template>



<style scoped>

</style>