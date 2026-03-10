<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from 'reka-ui';
import { ref } from 'vue';

import {
  InputGroup,
  InputGroupTextarea,
} from '@/components/ui/input-group'

const dies = ref<DateValue>()

</script>

<template>
    <section id="contactus" class="w-full py-12 bg-gray-100">

    <div class="container mx-auto max-w-5xl px-4">

      <h2 class="text-3xl font-bold text-black mb-8 text-center">Contacta</h2>
            
      <div class="flex flex-col lg:flex-row gap-8 items-center">
              <!-- Formulario -->
        <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
          <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
            <div class="space-y-2">
              <Label for="nomen">Nombre</Label>
              <Input type="nomen" required />
            </div>
            <div class="space-y-2">
              <Label for="cognomen">Apellidos</Label>
              <Input type="cognomen" required />
            </div>
            <div class="space-y-2">
              <Label for="mail">Correo</Label>
              <Input type="mail" required />
            </div>
            <div class="space-y-2">
              <Select required>
                <SelectTrigger class="border-gray-500 bg-white text-gray-900">
                  <SelectValue placeholder="Selecciona tipo de encargo" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                  <SelectItem value="ilustracion">
                    Ilustración
                  </SelectItem>
                  <SelectItem value="personaje">
                    Diseño personaje
                  </SelectItem>
                  <SelectItem value="props">
                    Diseño props
                  </SelectItem>
                  <SelectItem value="background">
                    Diseño background
                  </SelectItem>
                  <SelectItem value="otro">
                    Otro proyecto
                  </SelectItem>
                </SelectContent>
              </Select>

            </div>

            <div class="space-y-2">

              <Label>Fecha entrega</Label>
              <Popover>
                <PopoverTrigger as-child>
                  <Button variant="outline">
                    <span v-if="dies">
                      {{dies.day}}/{{ dies.month }}/{{ dies.year }}
                    </span>
                    <span v-else>
                      Selecciona una fecha
                    </span>

                  </Button>
                </PopoverTrigger>
                <PopoverContent class="font-sans">
                  <Calendar v-model="dies"/>
                </PopoverContent>
              </Popover>
            </div>

              <div class="grid w-full max-w-sm gap-6">

            <InputGroup>
            <InputGroupTextarea placeholder="Descripción del encargo" />
            </InputGroup>
  </div>

            <Button 
            type="submit"
            class="w-full bg-[rgb(0,0,0)] hover:bg-[rgb(31,31,31)] text-white text-md mt-4"
            >
              Enviar solicitud
            </Button>
                <Label class="flex justify-center">
                    Nos pondremos en contacto lo antes posible. ¡Gracias!
                </Label>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>