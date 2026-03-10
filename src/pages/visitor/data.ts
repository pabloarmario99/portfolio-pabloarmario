export interface Allchara {
  id: number;
  project: string;
  name: string;
  image: string;
  description: string;
  ciao: string;

  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
}

export const allchara: Allchara[] = [
  {
    id: 0,
    project: "God-News!",
    name: "Amaya",
    image: "GN_amaya.png",
    ciao: "¿Ya te vas?",
    description: "Ella es una fracción reprimida que apenas conoce el exterior. Se le ha impedido salir y madurar por miedo a que su fuerza arrasara con todo. Por ello, ha aprendido a vivir feliz en su mundo interior, aunque albergue un gran anhelo de salir a los focos del escenario.",
    image1: "GN_portadaAmaya.jpg",
    image2: "GN_expresionesAmaya.jpg",
    
  },
  {
    id: 1,
    project: "God-News!",
    name: "Guardian",
    image: "GN_guardian.png",
    ciao: "No dejaré que te vayas...",
    description: "Es una de las fracciones de personalidad más longevas que habitan el subconsciente. De hecho, es la primera en tomar conciencia de sí misma y la que, a día de hoy, orquesta al resto de las fracciones.",
    image1: "GN_portadaGuardian.jpg",
    image2: "GN_expresionesGuardian.jpg",
  },
  {
    id: 2,
    project: "Curso diseño personajes",
    name: "Jaime Comadreja",
    image: "JC_jaime.png",
    ciao: "Qué miras",
    description: "Varón delgado, con carácter agresivo e impulsivo. Vive en un barrio marginal donde pertenece a un grupo de narcotraficantes que buscan conseguir recursos para su clan. Se ven involucrados en conflictos con otros clanes, aunque tienen un enemigo en común: La Unidad de droga y crimen organizado (Policías) que quieren desmantelar el negocio y eliminar la basura de la sociedad."
  },
  {
    id: 3,
    project: "Kisslight",
    name: "Aurora",
    image: "AC_aurora.png",
    ciao: "Claire está muy rara",
    description: "Aurora Bonnet es una estudiante de educación infantil de 20 años , caracterizada por una naturaleza responsable, insegura y atenta. De apariencia delicada y mirada melancólica , ha pasado su vida refugiada en la lectura y los videojuegos para escapar de las altas expectativas y comparaciones familiares. Aunque siempre ha preferido pasar desapercibida y evitar riesgos , la irrupción de Claire en su entorno despierta en ella deseos nuevos y la motiva a romper con sus esquemas. Este encuentro marca el inicio de su evolución: un proceso de liberación personal donde Aurora comienza a valorarse y a desprenderse de sus miedos para tomar, por fin, el control de su propia aventura."
  },
  {
    id: 4,
    project: "Kisslight",
    name: "Claire",
    image: "AC_claire.png",
    ciao: "¿Has visto a Aurora?",
    description: "Claire es una joven de 19 años con una personalidad arrolladora y un espíritu explorador. Pelirroja, de ojos claros y presencia atlética, desprende un aura de seguridad y seducción que la convierte habitualmente en el centro de atención. Criada por su padre en un entorno de moteros, heredó la pasión por la velocidad y una disciplina física que la hace tan fuerte como femenina. Bajo su apariencia provocativa y su estilo atrevido, Claire esconde una lucha interna contra la rutina y una búsqueda constante de aceptación. Aunque está acostumbrada a relaciones superficiales y efímeras con chicos, su encuentro casual con Aurora despierta en ella una curiosidad genuina. Esta conexión la llevará a cuestionar su propia identidad, permitiéndole bajar la guardia y descubrir que no necesita la validación externa para sentirse completa."
  },
  {
    id: 5,
    project: "Atalaya",
    name: "Anne",
    image: "ATY_anne.png",
    ciao: "Me dejas sola...",
    description: "Ella vive junto a sus padres en un pequeño poblado costero. Un caluroso día, llega el nuevo centinela, encargado de vigilar y proteger la aldea desde la torre más alta. La chica no tarda en interesarse por el Atalaya, entablando una distante, aunque intensa, amistad."
  },
  {
    id: 6,
    project: "Atalaya",
    name: "Hugo",
    image: "ATY_hugo.png",
    ciao: "No suelo tener visitas",
    description: "Él es un centinela al que han enviado a un poblado costero para protegerlo desde su Atalaya. El trabajo de vigilante puede llegar a ser algo aburrido, pero todo cambia el día que le llega una misteriosa carta. Desde entonces espera esas cartas que hacen el día más ameno."
  },

]