<script setup lang="ts">

</script>

<template>
    <div>
        <header class="flex flex-col items-center justify-center gap-5 p-7 pb-3">
        <h1 class="font-bold text-2xl md:text-3xl ">Jaime Comadreja</h1>
        <h2 class="text-justify">Jaime vive en un <span class="font-bold">barrio marginal</span> donde lo conocen como "Jaime Comadreja". Pertenece a uno de los siete clanes que se dedican al narcotráfico. Aunque entre bandas ocurren <span class="font-bold">disputas por territorios</span>, tienen un enemigo en común: La UCO (Unidad de crimen organizado). Esta entidad cuenta con la última tecnología en armamento y quiere acabar con su modo de vida. Por ello, <span class="font-bold">se ven obligados a crear sus propias armas</span> para defender aquello que les pertenece.</h2>
    </header>
        <section class="columns-1 lg:columns-2 gap-5 [column-fill:balance] px-15 sm:p-5 pt-0">
            <img src="/images/JC_siluetas.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_valores.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_color.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_expresiones.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_diseñoGeneral.jpg" class="mb-7 sm:mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
            <img src="/images/JC_acciones.jpg" class="mb-4 w-full h-auto break-inside-avoid transition-transform duration-200 ease-out hover:scale-103" />
        </section>
    </div>
    <footer>
        <RouterLink to="/visitor/projects" class="flex justify-center text-black px-2 pb-8 hover:underline">
                Volver
        </RouterLink>
    </footer>
         

</template>



<style scoped>

</style>