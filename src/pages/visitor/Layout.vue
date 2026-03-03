<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Instagram } from 'lucide-vue-next';

</script>

<template>
    <div class="grid grid-cols-[140px_1fr] min-h-screen font-sans">
        <header class="bg-[#000000] h-full text-white flex flex-col">
            <div class="flex flex-col gap-2 m-4">
                <RouterLink to="/home">
                    Home
                </RouterLink>
                <Accordion type="single" collapsible class="w-full">
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
                            <RouterLink to="/visitor/projects/29octubre" active-class="font-bold">
                                29 de octubre
                            </RouterLink>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            
                <RouterLink to="/visitor/character" active-class="font-bold">
                    Personajes
                </RouterLink>

                <RouterLink to="/visitor/about" active-class="font-bold">
                    Sobre mi
                </RouterLink>
            
                <RouterLink to="/visitor/contact" active-class="font-bold">
                    Contacta
                </RouterLink>
            </div>
            <div class="m-4 gap-2 flex mt-auto mb-10">
                 <a href="https://www.instagram.com/argi14_art/"><Instagram/></a>
                 <a class="text-sm" href="https://www.instagram.com/argi14_art/">@argi14_art</a>
            </div>
        </header>

        <main class=" bg-gray-100">
            <RouterView class="flex flex-col gap-1 ml-4"/>
        </main>
    </div>
</template>

<style scoped>

</style>