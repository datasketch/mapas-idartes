const {default: tippy} = require('tippy.js');

/* eslint-disable linebreak-style */
const tippys = [
  {
    content: 'Estrategia para incentivar la creación de redes colaborativas, los cruces transdisciplinares e intersectoriales, así como incorporar procesos de innovación que promuevan la sostenibilidad del ecosistema artístico y cultural de Bogotá. Los laboratorios en red se enfocan en el fortalecimiento del ecosistema creativo en pro de la reactivación económica del sector de Bogotá, además de pensar el trabajo colaborativo y comunitario como una de las claves para expandir la innovación social. </div>    ',

  },
  {
    content: 'Estrategia para promover la reactivación y estabilización del sector artístico y cultural a través del fomento a los espacios culturales independientes de la ciudad que cuentan con una programación permanente en actividades de circulación, formación o comercialización de productos y servicios artísticos; economías conexas como la gastronomía, el turismo, entre otras. Estos espacios son plataformas y nodos de articulación entre agentes y prácticas artísticas en el territorio que contribuyen a la formación de públicos y comunidades activando infraestructuras y agendas interdisciplinares de manera descentralizada. ',

  },
  {
    content: 'En el 2021 se plantea la ejecución de los Corredores Artísticos como un modelo de reactivación local de las artes en pequeño y mediano formato que se desarrolló en zonas estratégicas de la ciudad, a través de la descentralización y diversificación de la circulación, la comercialización de expresiones bienes y servicios de las artes locales y economías conexas, la generación de espacios de formación y creación de redes generando impactos en la reactivación de manera integral y multidimensional.',

  },
  {
    content: 'Estrategia para el fortalecimiento, visibilización y estabilización económica de los agentes de la cadena de valor del ecosistema artístico, mediante la participación en espacios de formación para el fortalecimiento de habilidades digitales y comerciales; networking para el intercambio y creación de redes que permitan fortalecer los procesos productivos entre emprendedores y artistas. <br> Las Zonas de Arte y Emprendimiento hacen parte de distintos espacios comerciales y artísticos, tales como SOFA: Salón del ocio y la fantasía, Feria del Libro, Galería Santa Fe y los Festivales al Parque  organizados por Idartes, donde cada emprendimiento cuenta con stand y producción básica, técnica y logística para la comercialización de sus bienes y servicios, apoyo de comunicaciones aportando a la visibilización y posicionamiento de cada una de las marcas.',

  },
  {
    content: 'Estrategia de las línea de Sostenibilidad del Ecosistema Artístico y Línea de Arte y Memoria Sin Fronteras, que fomenta y fortalece la cultura rural, la memoria campesina y  la sostenibilidad de los colectivo artísticos de la ruralidad bogotana, a través de procesos de formación, intercambio, relacionamiento, circulación, y fortalecimiento de sus iniciativas, pero en especial, busca movilizar las redes rurales artísticas en clave de sus planes de trabajo en materia de las prácticas artísticas.',

  },
  {
    content: 'Proceso de formación y acompañamiento que favorece el desarrollo de capacidades para la formulación de proyectos culturales, la cualificación de la gestión de iniciativas artísticas y su sostenibilidad dirigida a diversos grupos sociales, que contempla los enfoques diferenciales, territorial y poblacional. Se realiza a partir de espacios virtuales y presenciales de cualificación,  acompañamiento y entrega de herramientas prácticas para la formulación y gestión de proyectos con un enfoque territorial y poblacional, atendiendo principalmente colectivos sin experiencia ni participación en el PDE.',

  },
  {
    content: 'Proceso de formación  dirigido a los  agentes  del ecosistema artístico, creativo y cultural de la ciudad para desarrollar y fortalecer habilidades para la creación de estrategias de comunicación, marketing cultural y comercialización de bienes y servicios en diversos espacios de circulación digital y físicos promoviendo el cierre de brechas sociales, de género y económica.',

  },
  {
    content: '<img src="/images/home/formacion.jpg" alt="ruta de formacion"/>',

  },
  {
    content: 'Proceso de formación integral para fortalecer las prácticas artísticas, puestas en escena y exhibiciones de artistas del espacio público, mediante el desarrollo de habilidades y competencias en temas como manejo de herramientas digitales, marketing cultural, estrategias de comunicación, articulación y redes colaborativas, entre otros.',

  },
  {
    content: 'Estrategia enfocada en la construcción de redes colaborativas entre colectivos, iniciativas y agentes del ecosistema artístico y cultural que estén interesados o hayan generado acciones de gestión del conocimiento, buenas prácticas de información, apropiación de sistemas de información innovación, y redes de intercambio y relacionamiento.',

  },

];

tippys.map(({content}, key) => {
  return tippy(`#tippy-${key + 1}`, {
    content: `<div class="bg-gainsboro p-4 rounded-xl w-96">${content} </div>`,
    arrow: true,
    allowHTML: true,
    maxWidth: 400,
    trigger: 'click',
  });
});

