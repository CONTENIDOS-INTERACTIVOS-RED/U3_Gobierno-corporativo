<template lang="pug">
  .tarjeta-audio.p-4
    .row.align-items-center
      .col-auto.ps-0
        .audio.position-relative(@mouseover.once="$emit('audio-hover')")
          slot
          .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
            span.visually-hidden Loading..
          button.audio__btn(v-else-if="state ==='pause'"  @click="play")
            img(src="@/assets/template/audio-new.svg")
          button.audio__btn(v-else @click="pause")
            img(src="@/assets/template/audio-new.svg")
      .col
        .d-flex.justify-content-between.mb-4
          .tarjeta-audio__texto.text-smaller.mb-2(v-html="texto")
          .audio.position-relative(style="width: 36px" @mouseover.once="$emit('audio-hover')")
            .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
              span.visually-hidden Loading..
            button.audio__btn.bg-btn(v-else-if="state ==='pause'"  @click="play")
              img(src="@/assets/template/audio.svg")
            button.audio__btn.bg-btn(v-else @click="pause")
              img(src="@/assets/template/pause.svg")
        .tarjeta-audio__input.mt-2(v-if="!noBarra")
          input(
            v-model="sliderVal",
            type="range", 
            max="100", 
            :style="{'background-size': `${sliderVal}% 100%`}",
            @input="onSliderMove"
          )
        .tarjeta-audio__tiempo.text-end.pt-1(v-if="tiempo")
          span {{currentTimeDisplay}}
          span {{audioDurationDisplay}}
  
  </template>

<script>
import audioMixins from '../mixins/audioMixins'
export default {
  name: 'TarjetaAudio',
  mixins: [audioMixins],
  props: {
    texto: {
      type: String,
      required: true,
    },
    noBarra: {
      type: Boolean,
      default: false,
    },
    tiempo: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    sliderVal: 0,
  }),
  watch: {
    currentTime() {
      this.sliderVal = (this.currentTime / this.audioDuration) * 100
    },
  },
  methods: {
    onSliderMove() {
      this.audioElement.currentTime =
        (this.sliderVal / 100) * this.audioDuration
    },
  },
}
</script>

<style lang="sass">
.bg-btn
  background-color: #88BBA9 !important
.tarjeta-audio
  border-color: #88BBA9
  .tarjeta-audio__input
    input[type=range]
      background: rgba(#88BBA9, 0.2)
      background-image: linear-gradient(#88BBA9, #88BBA9)
      &::-webkit-slider-runnable-track
        background: rgba(#88BBA9, 0.2)
      &::-webkit-slider-thumb
        background-color: #88BBA9
      &::-moz-range-thumb
        background-color: #88BBA9
</style>
