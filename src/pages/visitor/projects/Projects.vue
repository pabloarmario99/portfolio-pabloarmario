<script setup lang="ts">

</script>

<template>
    <div>
        <header class="flex flex-col items-center pt-4 gap-3">
            <h1 class="font-bold text-4xl">Proyectos</h1>
            <p>A un solo paso de entrar en un 
                <span class="font-bold">mundo nuevo</span>
            </p>
        </header>
        <main>
            <div class="flex flex-wrap justify-center columns-1 sm:columns-2 lg:columns-3 gap-3 mb-6 ">
                <RouterLink to="/visitor/projects/godnews!" class="relative group overflow-hidden mt-4">
                    <img 
                    class="w-80 h-90 object-cover object-center transition-all duration-200 ease-out group-hover:scale-103" 
                    src="/images/GN_portada.jpg">
                    <div class="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <p class="text-white font-semibold text-lg">God News!</p>
                    </div>
                </RouterLink>
                <RouterLink to="/visitor/projects/jaime" class="relative group overflow-hidden mt-4">
                    <img 
                    class="w-80 h-90 object-cover object-top border-2 transition-all duration-200 ease-out group-hover:scale-103" 
                    src="/images/JC_portada.jpg">
                    <div class="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <p class="text-white font-semibold text-lg">Jaime Comadreja</p>
                    </div>
                </RouterLink>
                <RouterLink to="/visitor/projects/mindland" class="relative group overflow-hidden mt-4">
                    <img 
                    class="w-80 h-90 object-cover object-center transition-transform duration-200 ease-out group-hover:scale-103" 
                    src="/images/ME_escena5.jpg">
                    <div class="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <p class="text-white font-semibold text-lg">Mindland Echoes</p>
                    </div>
                </RouterLink>
            </div>
        </main>
        
    </div>
</template>



<style scoped>

</style>
