export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad:
      'Desafíos y tendencias del gobierno corporativo en entornos complejos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gobernanza en Organizaciones Multinacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de gobernanza',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Gobernanza Ambiental ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La Visión de las organizaciones internacionales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Responsabilidad y ética en el gobierno corporativo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ética del gobierno corporativo',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=22',
    },
    {
      referencia:
        'Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala. Autor citado por Jan Kooiman (2005: 173).',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=35',
    },
    {
      referencia:
        'Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=33',
    },
    {
      referencia:
        'Oran Youg, Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=37',
    },
    {
      referencia:
        'Paul Diehl (2005: 2 y 3). Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=38',
    },
    {
      referencia:
        'Sakoto Mori, (Mori, 2004: 157 y 158). El resultado de estos estudios mostrará la efectividad y legitimidad de su accionar en estas esferas. Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Quito, Ecuador: Ediciones Abya-Yala.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/79137?page=40',
    },
    {
      referencia:
        'Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. Capítulo 4: Ética de los negocios en una economía global.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67587?page=333',
    },
    {
      referencia:
        'Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. Pirámide de responsabilidad social corporativa de Carroll.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67587?page=349',
    },
    {
      referencia:
        'Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. La ética importa.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67587?page=23',
    },
    {
      referencia:
        'Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. La base moral.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67587?page=25',
    },
    {
      referencia:
        'Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. El poder del cine.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67587?page=27',
    },
  ],
  glosario: [
    {
      termino: 'Ciberseguridad',
      significado:
        'Es la práctica de proteger la información digital, los dispositivos y los activos de ataques digitales.',
    },
    {
      termino: 'CMNUCC',
      significado:
        'Convención Marco de las Naciones Unidas sobre el Cambio Climático.',
    },
    {
      termino: 'Deontologismo',
      significado:
        'La deontología es una teoría ética que se encarga de regular los deberes y principios que rigen una actividad profesional.',
    },
    {
      termino: 'ESG',
      significado:
        "Las siglas ESG, en inglés, o ASG, en castellano, se refieren a los criterios que se utilizan para evaluar el desempeño e impacto de la empresa sobre los ámbitos en 'E' de environmental o ambiental, 'S' de social y 'G' de governance o gobernanza.",
    },
    {
      termino: 'Eudaimonía',
      significado:
        'La eudaimonía, bien supremo, es la actividad del alma racional de acuerdo con la virtud; hay dos clases de virtudes: morales e intelectuales; la virtud moral reside en un término medio determinado por la virtud intelectual de la sabiduría práctica; sabiduría y virtud moral son interdependientes.',
    },
    {
      termino: 'La ética teleológica',
      significado:
        "La ética teleológica es una teoría moral que establece que la obligación moral deriva de lo que es deseable o bueno como fin a alcanzar. La palabra teleológica proviene del griego telos, que significa 'fin', y logos, que significa 'ciencia'.",
    },
    {
      termino: 'NDC',
      significado:
        'Son las siglas en inglés de Contribuciones Determinadas a Nivel Nacional.',
    },
    {
      termino: 'ONG',
      significado:
        'Una ONG, o Organización No Gubernamental, es un grupo de ciudadanos voluntarios que se organizan sin ánimo de lucro para trabajar en causas sociales, culturales, de desarrollo, entre otras. Las ONG son entidades independientes que no están asociadas a ningún gobierno.',
    },
    {
      termino: 'QHAPAQ ÑAN',
      significado: 'Camino del inca.',
    },
    {
      termino: 'Stakeholders',
      significado:
        "Personas o grupos que tienen algún interés en una empresa o proyecto, y que pueden verse afectados o influir en él. La palabra stakeholder se traduce del inglés como 'partes interesadas'.",
    },
    {
      termino: 'VUCA',
      significado:
        'VUCA es un acrónimo en inglés que significa Volatilidad, Incertidumbre, Complejidad y Ambigüedad. Se utiliza para describir situaciones, escenarios o mercados que son complejos, cambiantes e inseguros.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
