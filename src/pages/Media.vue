<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page class="">
      <q-video
        :ratio="16/9"
        :src="require('../assets/Module_Introduction.mp4')"
      />

<!--      <q-media-player-->
<!--        type="video"-->
<!--        :muted="false"-->
<!--        radius="0"-->
<!--        :autoplay="true"-->
<!--        :show-big-play-button="false"-->
<!--        :sources="video.sources"-->
<!--      >-->
<!--&lt;!&ndash;        <template v-if="overlay" v-slot:overlay>&ndash;&gt;-->
<!--&lt;!&ndash;          <div>&ndash;&gt;-->
<!--&lt;!&ndash;            <img&ndash;&gt;-->
<!--&lt;!&ndash;              src="~assets/quasar-logo-full.svg"&ndash;&gt;-->
<!--&lt;!&ndash;              style="width: 30vw; max-width: 50px; opacity: 0.25;"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--      </q-media-player>-->
    </q-page>
  </q-pull-to-refresh>
</template>

<script>

export default {
  name: 'Media',
  data() {
    return {
      video: {
        label: 'Tears of Steel',
        //poster: 'media/TearsOfSteel/TearsOfSteel.jpeg',
        sources: [
          {
            src: require('../assets/Module_Introduction.mp4'),
            // type: 'video/mp4'
          }
        ],
        tracks: [

        ]
      }
    }
  },
  created() {

  },
  methods: {
    refresh(done) {
      done();
    }
  }
}
</script>
