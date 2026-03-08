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
    image: "GN_amaya.png",
    description: "Hola soy Amaya"
  },
  {
    id: 1,
    project: "God-News!",
    name: "Guardian",
    image: "GN_guardian.png",
    description: "Hola soy Guardian"
  },
  {
    id: 2,
    project: "Curso diseño personajes",
    name: "Jaime Comadreja",
    image: "JC_jaime.png",
    description: "Me la pela todo"
  },
  {
    id: 3,
    project: "Kisslight",
    name: "Aurora",
    image: "AC_aurora.png",
    description: "Timida y ..."
  },
  {
    id: 4,
    project: "Kisslight",
    name: "Claire",
    image: "AC_claire.png",
    description: "Extrovertida y ..."
  },
  {
    id: 5,
    project: "Atalaya",
    name: "Anne",
    image: "ATY_anne.png",
    description: "Quisiera subir la torre"
  },
  {
    id: 6,
    project: "Atalaya",
    name: "Hugo",
    image: "ATY_hugo.png",
    description: "Quisiera bajar la torre"
  },

]