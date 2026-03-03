export interface Allchara {
  id: number;
  //Información general
  project: string;
  name: string;
  image: string;
  description: string;
  //Imágenes complementarias
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export const allchara: Allchara[] = [
  {
    id: 0,
    project: "God-News!",
    name: "Amaya",
    image: "abe.png",
    description: "Hola soy Amaya"
  },
  {
    id: 1,
    project: "God-News!",
    name: "Guardian",
    image: "abe.png",
    description: "Hola soy Guardian"
  },
  {
    id: 2,
    project: "Curso diseño personajes",
    name: "Jaime Comadreja",
    image: "abe.png",
    description: "Me la pela todo"
  },

]