<template>
  <l-map style="height:100vh" :zoom="zoom" :center="center">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-control-layers />
    <l-marker :lat-lng="marker" @click="hello()">
      <l-popup>Hello!</l-popup>
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
    methods: {
      hello() {
        console.log('Hello');
      },
    },
    data() {
      return {
        zoom: 8,
        center: [51.151344, 20.935937],
        marker: [51.151344, 20.935937],
      };
    },
    async beforeMount() {
      // HERE is where to load Leaflet components!
      // const { circleMarker } = await import('leaflet/dist/leaflet-src.esm');
      // And now the Leaflet circleMarker function can be used by the options:
      // this.geojsonOptions.pointToLayer = (feature, latLng) => circleMarker(latLng, { radius: 8 });
      // this.mapIsReady = true;
    },
  };
</script>
