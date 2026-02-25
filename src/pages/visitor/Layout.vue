<script setup lang="ts">

</script>

<template>
    <div class="grid grid-cols-[auto_1fr] min-w-screen min-h-screen font-sans">
        <header>
            <div class="flex flex-col gap-2">
            <RouterLink to="/home">
                Home
            </RouterLink>
            <RouterLink to="/visitor/projects" active-class="font-bold">
                Projects
            </RouterLink>
        
            <RouterLink to="/visitor/about" active-class="font-bold">
                About
            </RouterLink>
        
            <RouterLink to="/visitor/contact" active-class="font-bold">
                Contact
            </RouterLink>
        </div>
        </header>
        <main class="ml-10 bg-gray-100">
            <RouterView/>
        </main>
    </div>
</template>

<style scoped>

</style>