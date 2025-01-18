<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-7
        p.mb-4 En un mundo cada vez más globalizado, dinámico y en constante cambio, el gobierno corporativo ha surgido como una piedra angular para el éxito y la sostenibilidad de las organizaciones. Este conjunto de principios, normas y prácticas que regulan la gestión y supervisión de las empresas no solo busca garantizar la transparencia y la responsabilidad, sino también promover la confianza entre los diversos grupos de interés. Sin embargo, el entorno actual en el que operan las organizaciones está marcado por una complejidad sin precedentes, impulsada por factores como la transformación digital, la globalización, el cambio climático, la creciente diversidad en los mercados laborales y las expectativas sociales de mayor responsabilidad corporativa.
        .bg-amarillo.p-4.mb-4(data-aos="fade-up")
        span Los entornos complejos generan desafíos significativos para los modelos tradicionales de gobierno corporativo. La rápida evolución tecnológica exige que las juntas directivas y los altos ejecutivos comprendan y gestionen riesgos asociados a la ciberseguridad, la inteligencia artificial y los datos masivos. Asimismo, las presiones sociales y regulatorias están impulsando una transición hacia modelos más inclusivos y sostenibles, lo que obliga a las organizaciones a repensar sus estrategias de gobernanza. Factores externos, como crisis económicas globales, tensiones geopolíticas y pandemias, también exigen una capacidad de adaptación y resiliencia que pocas organizaciones han logrado desarrollar plenamente.

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    span En este contexto, emergen tendencias claves que buscan transformar la manera en que las organizaciones gestionan su gobernanza. Entre estas tendencias se encuentran la creciente integración de criterios ambientales, sociales y de gobernanza (ESG, por sus siglas en inglés), el énfasis en la diversidad de género y habilidades en las juntas directivas, y el auge de las tecnologías que facilitan la transparencia. y la toma de decisiones basada en datos. Estas tendencias no solo reflejan las demandas de un entorno más consciente y exigente, sino también las oportunidades para que las organizaciones se posicionen como líderes responsables y visionarios.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
