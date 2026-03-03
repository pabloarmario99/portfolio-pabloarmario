<script setup lang="ts">

</script>

<template>
    <div class="flex items-center gap-2 bg-black w-full">
        <h1 class="font-bold text-white">Porfolio: Argi</h1>
        <div class="flex gap-2">
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
    
        </div>
        
    </div>
</template>

<style scoped>

</style>