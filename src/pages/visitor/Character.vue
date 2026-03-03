<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { allchara, type Allchara } from './data';


const route = useRoute()

const router = useRouter()

const character = ref<Allchara | undefined>(
    allchara.find(char => char.id === Number(route.params.id))
)

</script>

<template>
    <div v-if="character" class="flex flex-col lg:flex-row lg:justify-between md:items-center w-full max-w-350 md:mx-auto my-8 gap-8 px-5 md:px-20">
        <div>
            <h1 > 
                {{ character.name }}
            </h1>

            <div >
                <p class="descriptione">
                {{ character.description }}                </p>
                        
                <div
                    @click="router.push('/visitor/character')"
                >
                        <p class="quote"> {{ character.project }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>