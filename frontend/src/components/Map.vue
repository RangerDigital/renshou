<template>
  <l-map style="height:100vh" :zoom="zoom" :center="center">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-control-layers />
    <l-marker :lat-lng="item.location" v-for="(item, index) in stations" :key="index" @click="$router.push('/stations/' + item._id)">
      <l-popup>{{ item.name }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import { LMap, LMarker, LPopup, LTileLayer, LControlLayers } from '@vue-leaflet/vue-leaflet';

  export default {
    components: {
      LMap,
      LMarker,
      LPopup,
      LTileLayer,
      LControlLayers,
    },
    props: ['stations'],

    data() {
      return {
        zoom: 8,
        center: [51.151344, 20.935937],
      };
    },
  };
</script>
