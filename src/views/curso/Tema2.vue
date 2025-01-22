<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Responsabilidad y ética en el gobierno corporativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 En un entorno empresarial globalizado y competitivo, la responsabilidad y la ética se han convertido en pilares fundamentales para garantizar un gobierno corporativo sólido y sostenible. La responsabilidad implica que las organizaciones asuman las consecuencias de sus decisiones ante accionistas y otros grupos de interés, mientras que la ética promueve principios y valores que guían decisiones justas, transparentes y alineadas con el bien común.
    h2 Responsabilidad social corporativa global

    p.mb-4 En un mundo globalizado, la Responsabilidad Social Corporativa (RSC) adquiere diferentes enfoques según el contexto cultural, económico y social:

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="30.4%" y="31%" numero="+")
        .h5.mb-2 Estados Unidos

        p Justificación económica para maximizar el valor para los accionistas.
      .tarjeta.bg-gris.p-4(x="60%" y="30%" numero="+")
        .h5.mb-2 Unión Europea

        p Alineación con principios éticos, compromiso social y ciudadanía responsable.
      .tarjeta.bg-rojo.p-4(x="38.7%" y="73%" numero="+")
        .h5.mb-2 América Latina

        p Prioridad en comunidades vulnerables y desarrollo sostenible

    p.mb-4 Este panorama refleja cómo las responsabilidades organizacionales varían en función del contexto internacional.
    
    h2 Responsabilidad económica
    p.mb-4 La base de cualquier empresa es generar beneficios para garantizar su viabilidad y sostenibilidad, satisfaciendo necesidades de los clientes mediante productos y servicios de calidad. Esto implica:

    .row.mb-4
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-verde-2.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Viabilidad y rentabilidad 
        .bg-verde-2-claro.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Asegurar la supervivencia y crecimiento de la organización. 
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-amarillo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Contribución económica
        .bg-amarillo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Generar empleo y promover el desarrollo de comunidades.
      .col-10.col-md-8.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-rojo-oscuro.px-4.py-3.px-xl-5.mb-0.rounded-top-16.text-center
          p.text-bold.mb-0 Ejemplo
        .bg-rojo.p-4.px-xl-5.h-100.rounded-bottom-16.text-center
          span Producción de bienes y servicios que cumplan con las expectativas de los consumidores.

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Responsabilidad legal

        p.mb-4 Cumplir con las normativas locales es esencial para garantizar operaciones legales y legítimas. Para empresas multinacionales, esto implica:
        
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Cumplimiento normativo
              p.px-1.text-small.mb-0.d-flex.text-center Respeto a leyes fiscales, laborales y de seguridad de productos.        
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Desafíos multinacionales
              p.px-1.text-small.mb-0.d-flex.text-center Adaptarse a regulaciones diversas en diferentes países.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Ejemplo
              p.px-1.text-small.mb-0.d-flex.text-center Cumplimiento de obligaciones fiscales y normativas laborales.         

    p.mb-4 Este cumplimiento protege a las empresas de sanciones y fortalece su reputación ante la sociedad.

    h2 Responsabilidad ética

    p.mb-4 La responsabilidad ética implica adherirse al principio de "hacer lo correcto", actuando con integridad y justicia más allá de las exigencias legales. Esto incluye:

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-32.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 <b>Definición de ética. </b>Basada en costumbres, normas y valores de cada comunidad.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 <b>Estándares internacionales. </b>Pacto Global de la ONU: eliminación del trabajo infantil, lucha contra la corrupción, entre otros.
            div.d-flex.mb-3
              p.pe-3.mb-0 •
              p.mb-0 <b>Ejemplo. </b>Tratar a empleados y clientes con equidad y minimizar impactos negativos en el medio ambiente.
    p.mb-4 Esta responsabilidad fomenta confianza y credibilidad, contribuyendo a un desarrollo justo y sostenible.

    h2 Responsabilidad filantrópica
    p.mb-4 En la cima de la pirámide de la responsabilidad corporativa, la filantropía refleja el compromiso voluntario de las empresas con el bienestar colectivo. Ejemplos de iniciativas incluyen:
    .row
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4
        .bg-gris.p-4(data-aos="fade-right")
          p.mb-2.text-center.text-bold Donaciones 
          p.mb-0.text-center Apoyo a causas benéficas y proyectos educativos.
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4
        .bg-verde.p-4(data-aos="fade-up")
          p.mb-2.text-center.text-bold Voluntario corporativo
          p.mb-0.text-center Fortalecimiento del compromiso social y lealtad de los empleados.
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4
        .bg-rojo.p-4(data-aos="fade-left")
          p.mb-2.text-center.text-bold Sostenibilidad ambiental
          p.mb-0.text-center Implementación de acciones para preservar el medio ambiente.

    p.mb-4 Este nivel reconoce a las empresas como agentes de cambio, promoviendo un desarrollo equitativo y sostenible en beneficio de todos.

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde-claro.p-4(data-aos="fade-right")
        p.mb-0 La conjunción de responsabilidad y ética en el gobierno corporativo no solo fortalece la confianza de los stakeholders, sino que también asegura la sostenibilidad a largo plazo de las organizaciones, posicionándolas como aliadas del progreso social y económico global.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 1.</b>Pirámide de responsabilidad social corporativa de Carroll.

    .row.mb-4
      .col-12.col-md-10.mx-auto
        img.mb-2(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        figcaption <b>Nota. </b>Tomado de Soto, D. y Soto, D. (Il.) (2016). Gobierno corporativo y ética de los negocios. 

    
    p.mb-4 La innovación, el emprendimiento y el crecimiento económico están estrechamente vinculados a la capacidad de generar valor económico y aportar beneficios tanto a los clientes como a la sociedad. Lograr este objetivo a largo plazo requiere actuar con responsabilidad en los aspectos legales y técnicos, así como poner atención al “cómo” se hacen las cosas.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1  
        h2 Ética del gobierno corporativo
    
    p.mb-4 La ética en el gobierno corporativo constituye un fundamento esencial para garantizar un desempeño organizacional transparente, responsable y sostenible. En este podcast se explora cómo las empresas equilibran la búsqueda de beneficios económicos con el cumplimiento de valores éticos, regulaciones legales y expectativas sociales.

    .row.mb-4
      .col-10.col-md-8.col-lg-6.mx-auto(data-aos="zoom-in")
        
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Proceso de descarga de Ética del gobierno corporativo"
          tiempo
          :audio="require('../../assets/componentes/audios/Podcast_contenido_Unidad_III_Gobierno Corporativo.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    h2 La base moral

    p.mb-4 La ética constituye un pilar esencial para construir una vida significativa, al proporcionar un marco de valores y creencias que orientan las decisiones y acciones humanas. Este conjunto de principios establece las bases para una convivencia armoniosa y con propósito. El bienestar y la paz interior dependen en gran medida de la solidez de la base moral que cada persona desarrolla a lo largo de su vida.

    p.text-bold.mb-4 Concepto de Ser Bueno
    p.mb-4 Una de las preguntas fundamentales en el ámbito ético es: <b>¿Qué significa ser bueno?</b> Actuar de acuerdo con principios que favorecen el bienestar común y respetan la dignidad humana.

    .row.mb-4
      .col-12.col-xl-6.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.h-100(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-35.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold.pe-xl-3.mb-0(data-aos="fade-up") Relatividad del concepto
            span Varia según culturas, tradiciones y sistemas de valores
      .col-12.col-xl-6.d-flex.flex-column
        .d-flex.align-items-start.bg-gris.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold.pe-xl-3.mb-0(data-aos="fade-up") Desafío universal 
            span Las definiciones de lo “bueno” dependen del contexto y las normas sociales, lo que dificulta un consenso universal.


    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
        
        p.mb-4 La búsqueda de respuestas éticas únicas y universales es compleja debido a las diferencias culturales, aunque los principios de deber, virtud, justicia y responsabilidad son fundamentales para avanzar éticamente.

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-37.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Deber
              p.px-1.text-small.mb-0.d-flex.text-center Obligaciones morales hacia los demás.
          .col-10.col-md-8.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-38.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Virtud
              p.px-1.text-small.mb-0.d-flex.text-center Desarrollo de cualidades morales que guían las acciones.
          .col-10.col-md-8.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Justicia
              p.px-1.text-small.mb-0.d-flex.text-center Promoción de la equidad y el respeto mutuo. 
          .col-10.col-md-8.col-lg-4.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Responsabilidad
              p.px-1.text-small.mb-0.d-flex.text-center Asumir las consecuencias de las propias acciones.
    
    p.mb-4 Estos principios invitan a reflexionar sobre cuestiones éticas importantes, como la posibilidad de alcanzar consensos morales en contextos de valores divergentes o la existencia de principios éticos universales.

    h2 Corrientes de la teoría ética

    p.mb-4 En el gobierno corporativo, la ética orienta las decisiones y acciones organizacionales. Entre las corrientes éticas más relevantes se encuentran:


    .row.mb-5
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Ética de la virtud")
            p ●	Inspirada en Aristóteles, esta corriente promueve la formación de un carácter moral sólido. <br>●	Las decisiones corporativas deben reflejar virtudes como la honestidad, la justicia y la responsabilidad.<br>●	Se enfoca más en el "ser" (la persona virtuosa) que en las reglas o los resultados.

          .div(titulo="Ética teleológica")
            p ●	También conocida como ética de las consecuencias, evalúa las acciones según los beneficios o perjuicios que generan.<br>●	En el contexto corporativo, sugiere que las decisiones deben buscar el mayor bien para el mayor número de personas (ética utilitarista).<br>●	Ejemplo: Una acción es correcta si maximiza el bienestar de stakeholders como accionistas, empleados y comunidades.

          .div(titulo="Ética deontológica")
            p ●	Basada en el cumplimiento de reglas y deberes morales.<br>●	Enfatiza principios fundamentales como la justicia, la honestidad y el respeto a los derechos humanos.<br>●	Algunas acciones son moralmente obligatorias, incluso si no generan beneficios inmediatos para la empresa.

    .bg-full-width.border-top-9-azul.mb-4
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://elibro.net/es/ereader/tecnologicodeloriente/79137?page=2") Gómez Salazar, D. (2013). Las organizaciones internacionales en la gobernanza: Qhapaq Ñan-Gran Ruta Inca entre Ecuador y Perú. Ediciones Abya-Yala. [Libro]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://elibro.net/") Biblioteca digital E-Libro [Sitio web]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://youtu.be/AdEgDjec14c?si=NH_WYd9W0wlrLmpP") Ministerio TIC. Gobernanza de la Inteligencia Artificial: balance entre innovación y regulación (06 de agosto 2024) [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
