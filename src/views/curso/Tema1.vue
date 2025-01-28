<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Gobernanza en Organizaciones Multinacionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    p.mb-4 Esta unidad aborda tres áreas fundamentales del gobierno corporativo en el contexto actual, caracterizado por la volatilidad, la incertidumbre, la complejidad y la ambigüedad (VUCA). Dado que las organizaciones enfrentan entornos desafiantes, resulta esencial comprender las dinámicas que moldean su gobernanza y los principios éticos que deben guiarla.
    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Ineficiencias del sistema de supervisión previo")
            p - La existencia de dos supervisores generaba arbitrajes regulatorios en contabilidad, desarrollo de negocios y suministro de información. <br>- Ejemplo: Las carteras colectivas eran vigiladas por diferentes entidades según el gestor (fideicomisos o comisionistas de bolsa).

          .div(titulo="Cambios en el mercado financiero")
            p - Evolución hacia una integración de actividades: intermediarios financieros también participaban en intermediación y emisión de valores. <br>- La supervisión separada no era suficiente para abordar riesgos crecientes y la integración de mercados.

          .div(titulo="Necesidad de modernización")
            p - Actualización del marco normativo para eliminar disposiciones obsoletas. <br>- Definición de competencias claras entre autoridades para evitar duplicidades y promover la acción coordinada.

    h2 Gobernanza en negocios internacionales
    p.mb-4 La gobernanza en organizaciones multinacionales constituye un tema central en los estudios de negocios internacionales, pues explora cómo las empresas operan, toman decisiones y cumplen objetivos en entornos dinámicos y complejos. Estas organizaciones, al tener presencia en múltiples países, enfrentan retos únicos relacionados con:
    .row.mb-4
      .col-8.col-md-6.col-lg-4.mx-auto.ms-md-auto.me-md-0(data-aos="fade-right")
        .bg-amarillo.p-4
          span Diferencias culturales, regulatorias, económicas y políticas que influyen en su estructura y forma de operar.
      .col-8.col-md-6.col-lg-4.mx-auto.ms-md-auto.me-md-0(data-aos="fade-left")
        .bg-amarillo.p-4
          span Diseño e implementación de políticas, procesos y estructuras para una gestión eficiente, transparente y ética.

    p.mb-4 Los aspectos clave del modelo de gestión empresarial destacan elementos esenciales para el éxito organizacional, enfocándose en prácticas responsables, la adaptación a contextos diversos y una estrategia alineada.
    p.mb-3 <b>Tabla 1.</b> Aspectos clave del modelo de gestión empresarial

    .row.mb-4
      .col-12.col-lg-10.mx-auto

        .tabla-a.mb-5
          table
            thead
              tr
                th.bg-verde-oscuro.text-white.text-center(width="35%") Aspecto
                th.bg-verde-oscuro.text-white.text-center(width="65%") Detalles
            tbody
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Responsabilidad corporativa
                td.bg-verde Asegurar prácticas responsables con todos los stakeholders.
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Equilibrio global y local
                td.bg-verde Gestionar prioridades internacionales y regionales.
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Gestión de riesgos
                td.bg-verde Identificar y mitigar riesgos globales.
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Alineación estratégica
                td.bg-verde Coordinar unidades de negocio con oficinas centrales.
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1  
        h2 Concepto de gobernanza

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        
        p.mb-4 El concepto de gobernanza ha evolucionado y se ha diversificado en su aplicación, adaptándose a las necesidades de diferentes contextos como los internacionales, públicos, corporativos y organizativos. Según Jan Kooiman, la gobernanza implica la interacción entre diversos actores públicos, privados y de la sociedad civil para resolver problemas colectivos, crear oportunidades y establecer normas que regulen la vida en sociedad.

        h2 Gobernanza según Jan Kooiman

        p.mb-4 Jan Kooiman (2003) propone un enfoque estructurado de gobernanza, dividido en tres niveles que abordan las dinámicas de operación, organización y principios rectores en los procesos de gobernanza.
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Primaria
              p.px-1.text-small.mb-0.d-flex.text-center Actividades cotidianas y operativas que implementan políticas y decisiones. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Secundaria
              p.px-1.text-small.mb-0.d-flex.text-center Diseño de estructuras y mecanismos para organizar la gobernanza primaria. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Meta-gobernanza
              p.px-1.text-small.mb-0.d-flex.text-center Definición de principios y valores que guían los procesos de gobernanza.
    
    h2 Gobernanza como un nuevo orden internacional
    p.mb-4 La gobernanza internacional se centra en la coordinación entre actores estatales y no estatales en un mundo globalizado. Este enfoque permite abordar problemas transnacionales como:

    .row.mb-4

      .col-6.col-lg-4.mx-auto
        .bg-rojo.p-4
          p.mb-0.text-center.text-bold Cambio climático
      .col-6.col-lg-4.mx-auto
        .bg-gris.p-4
          p.mb-0.text-center.text-bold Comercio internacional  
      .col-6.col-lg-4.mx-auto 
        .bg-amarillo.p-4
          p.mb-0.text-center.text-bold Derechos humanos

    p.mb-4 Ejemplo: las conferencias de las Naciones Unidas sobre cambio climático (COP) reflejan la gobernanza global al coordinar respuestas colectivas frente a desafíos compartidos.

    h2 Gobernanza como una nueva forma de manejo público

    p.mb-4 Este enfoque implica la transición de un modelo jerárquico hacia uno más horizontal, participativo y descentralizado. Se caracteriza por:

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 Consultas ciudadanas.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 Descentralización administrativa.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 Alianzas público-privadas para mejorar la prestación de servicios públicos.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')  

    p.mb-4 El objetivo es fortalecer la legitimidad institucional y responder de manera más eficiente a las necesidades sociales.
    h2 Gobernanza Corporativa

    p.mb-4 Se enfoca en mecanismos y prácticas que garantizan la dirección y control empresarial. Incluye:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Transparencia
              p Comunicación clara con accionistas y partes interesadas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Responsabilidad
              p Implementación de códigos de conducta y supervisión de los directorios.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Sostenibilidad
              p Promoción del desarrollo económico y la estabilidad del mercado.
        
    p.mb-4 Una buena gobernanza corporativa protege intereses de inversores y contribuye al desarrollo económico.
    h2 Gobernanza como una forma de organización en redes

    p.mb-4 Este modelo resalta la colaboración entre actores públicos, privados y de la sociedad civil, con énfasis en:

    .row.mb-4
      .col-10.col-md-6.col-lg-4.mx-auto.ms-md-auto.me-md-0(data-aos="fade-right")
        .bg-verde.p-4
          p.mb-0.text-bold.text-center Flexibilidad y cooperación para resolver problemas complejos.
      .col-10.col-md-6.col-lg-4.mx-auto.ms-md-0.me-md-auto(data-aos="fade-left")
        .bg-verde.p-4
          p.mb-0.text-bold.text-center Soluciones innovadoras a través de redes interconectadas.

    p.mb-4 Ejemplo: asociaciones público-privadas en proyectos de infraestructura, donde cada actor aporta recursos y conocimientos especializados.

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Gobernanza Democrática

        p.mb-4 Basada en la participación ciudadana y el respeto por los derechos humanos, este modelo prioriza:

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Participación inclusiva
                p.text-small.px-4.text-center.pb-2 Involucrar a todos los sectores de la ciudadanía.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Transparencia
                p.text-small.px-4.text-center.pb-2 Garantizar claridad en los procesos y decisiones.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Rendición de cuentas
                p.text-small.px-4.text-center.pb-2 Fortalecer la confianza en los sistemas democráticos.

    p.mb-4 Este modelo busca garantizar políticas públicas que reflejen las aspiraciones ciudadanas y promuevan derechos fundamentales.
    h2 Gobernanza como "La Buena Gobernanza"

    p.mb-4 Promovida por organismos internacionales como el Banco Mundial, establece estándares para evaluar la calidad institucional. Se enfoca en:

    .row.mb-4
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-verde-2.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Lucha contra la corrupción
        .bg-verde-2-claro.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Garantizar la integridad en las instituciones.
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-amarillo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Eficiencia en recursos públicos 
        .bg-amarillo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Optimizar el uso de los recursos para el beneficio colectivo.
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-rojo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Politicas inclusivas
        .bg-rojo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Promover igualdad y desarrollo sostenible.
    
    p.mb-4 Este enfoque sirve como referencia para medir el desempeño institucional, especialmente en países en desarrollo.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2  
        h2 Gobernanza Ambiental 
    
    p.mb-4 La gobernanza ambiental internacional, liderada por Oran Young, se enfoca en los procesos políticos y dinámicos que moldean los regímenes internacionales. Según Young, la gobernanza ambiental no se limita a estructuras formales o acuerdos legales, sino que es un proceso de interacción entre múltiples actores para resolver problemas colectivos como los desafíos ambientales globales. Los elementos clave de la gobernanza ambiental según Oran Young son: 

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Actores involucrados
              p Estados, organizaciones internacionales, empresas, ONG y comunidades locales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Interacciones
              p Negociaciones, colaboraciones y competencias entre actores.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Regímenes internacionales
              p Sistemas diseñados para abordar problemas específicos, como el Protocolo de Montreal o el Acuerdo de París.

    p.mb-4 Los regímenes internacionales emergen para responder a problemas globales concretos, adaptándose según el contexto y la evolución de los desafíos ambientales.
    h2 Cambios en los regímenes ambientales internacionales
    p.mb-4 Oran Young destaca cómo los regímenes ambientales evolucionan debido a presiones internas y externas. Los factores principales que impulsan estos cambios son:

    .row.mb-4
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-verde-2.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Dinamismo político
        .bg-verde-2-claro.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Evolución de los intereses y capacidades de los actores involucrados.
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-amarillo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Innovación institucional
        .bg-amarillo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Adaptación de reglas, normas y procedimientos frente a nuevos desafíos.
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-rojo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Aprendizaje social
        .bg-rojo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Acumulación de conocimientos y experiencias que permiten la evolución de los regímenes.

    .row.mb-4
      .col-6.col-md-4.col-xl-2.mx-auto.ms-xl-auto.me-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-md-8.col-xl-9.me-xl-auto
        .bg-gris.p-4
          span <b>Ejemplo.</b> La Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC) ha pasado de enfoques generales a mecanismos más específicos, como mercados de carbono y compromisos nacionales determinados (NDC).

    h2 Interacciones y su impacto

    p.mb-4 Las interacciones entre regímenes internacionales pueden tener diversos efectos:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Complementarias
              p Refuerzan los objetivos mutuos, como la colaboración entre cambio climático y biodiversidad.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Conflictivas
              p Generan tensiones, por ejemplo, entre el régimen del cambio climático y los regímenes comerciales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold De sinergia
              p Potencian resultados positivos mediante la  cooperación entre regímenes.

    p.mb-4 Young enfatiza que la gobernanza ambiental debe trascender el enfoque centrado en los Estados-nación, integrando a actores no estatales. Su visión resalta:

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 La importancia del dinamismo y la adaptación en los regímenes internacionales.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 La necesidad de diseñar regímenes considerando las particularidades del problema ambiental y de los actores involucrados.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 La relevancia de las interacciones, el aprendizaje social y la capacidad de adaptación para abordar problemas complejos y en constante evolución.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')  

    p.mb-4 Este enfoque subraya que los regímenes internacionales deben ser flexibles y adaptativos para responder eficazmente a los desafíos ambientales globales.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3  
        h2 La Visión de las organizaciones internacionales

    p.mb-4 La visión de las organizaciones internacionales sobre la preservación, desarrollo y gestión de bienes culturales, como el Qhapaq Ñan (Camino Inca), y las críticas hacia su efectividad en la esfera internacional plantean dos perspectivas complementarias que destacan sus logros y limitaciones.

    h2 Visión integral y cooperativa para la preservación del Qhapaq Ñan

    p.mb-4 La UNESCO y otras organizaciones internacionales promueven una perspectiva integral respecto al Qhapaq Ñan, abarcando su valor cultural, histórico y social. Este enfoque multinacional y sostenible incluye los siguientes puntos clave:

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Preservación cultural")
            p Conservación del valor histórico, social y cultural del Qhapaq Ñan.
          .div(titulo="Impacto en comunidades")
            p Integración del legado indígena y apoyo a las comunidades locales.
          .div(titulo="Gestión sostenible")
            p Implementación de proyectos de turismo responsable y actividades económicas sostenibles.
          .div(titulo="Cooperación multinacional")
            p Coordinación entre Colombia, Ecuador, Perú, Bolivia, Argentina y Chile para la gestión conjunta.

    p.mb-4 El enfoque colaborativo se sustenta en un marco normativo internacional, como la Convención del Patrimonio Mundial de 1972, que garantiza la protección de bienes culturales y naturales con un valor universal.
    h2 La visión de Paul Diehl sobre las organizaciones internacionales

    p.mb-4 Paul Diehl ofrece una crítica fundamentada sobre las organizaciones internacionales, destacando desafíos y percepciones asociadas a su desempeño:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Retórica grandilocuente
              p Uso de un lenguaje dramático que rara vez se traduce en acciones concretas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Ineficiencia visible
              p Inhabilidad para resolver problemas globales como conflictos prolongados y cambio climático.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-xl-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.mb-4.mb-md-0
              p.text-bold Percepción de irrelevancia
              p Opinión de que estas instituciones tienen un papel limitado en la gestión de asuntos globales.
    p.mb-4 Diehl subraya la necesidad de fortalecer la gobernanza internacional, renovando estructuras y procesos para que estas organizaciones puedan responder mejor a los desafíos contemporáneos y restaurar la confianza en su desempeño.

    p.mb-4 <b>Tabla 2.</b> Comparación de enfoques
    
    .row.mb-4
      .col-12.col-lg-10.mx-auto

        .tabla-a.mb-5
          table
            thead
              tr
                th.bg-verde-oscuro.text-white.text-center(width="25%") Enfoque 
                th.bg-verde-oscuro.text-white.text-center(width="35%") Logros
                th.bg-verde-oscuro.text-white.text-center(width="30%") Críticas
            tbody
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Visión UNESCO
                td.bg-verde Preservación cultural, desarrollo sostenible, cooperación multinacional.
                td.bg-verde Limitaciones operativas frente a desafíos más amplios.
              tr(data-aos="fade-up")
                td.text-bold.text-center.bg-verde Crítica de Diehl
                td.bg-verde Relevancia en ciertos aspectos internacionales.
                td.bg-verde Falta de acciones concretas, percepción de ineficacia y relevancia limitada.

    p.mb-5 Ambas perspectivas invitan a reflexionar sobre el rol de las organizaciones internacionales, sus logros y las áreas donde pueden mejorar para afrontar con mayor eficacia los desafíos globales.

    .bg-full-width.border-top-9-azul
    .px-4.px-md-5.pt-5.pb-0
      h2 Material complementario
      .row
        .col-12.col-md-6.col-lg-8
          p.d-flex.my-4
            img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
            a.text-small.text-primary(target="_blank" href="https://elibro.net/es/ereader/tecnologicodeloriente/67587?page=1") Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. Santiago de Chile, Chile: RIL editores. [Libro]

          p.d-flex.my-4
            img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a.text-small.text-primary(target="_blank" href="https://elibro.net/") Biblioteca digital E-Libro [Sitio web]

          p.d-flex.my-4
            img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
            a.text-small.text-primary(target="_blank" href="https://www.youtube.com/live/MUmtTCXJ1p0?si=pBh1SayX6Iy-ojvo") CAF banco de desarrollo de latam y el caribe (08 de mayo de 2024) Webinar Lineamientos Actualizados para Orientar la Gobernanza de las Nuevas Realidades Empresariales [Vídeo]

        .col-12.col-md-6.col-lg-3
          figure
            img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
