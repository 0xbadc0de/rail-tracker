<template>
  <div id="rail-map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-osm"
import axios from 'axios'

export default {
  name: 'Map',
  data() {
    return {
      center: [37,7749, -122,4194],
      relations: [12304361, 12304779]
    }
  },
  methods: {
    setupLeafletMap: function () {
      const map = L.map('rail-map').setView([49.9023708, 28.5760901], 10);

      new L.OSM.Mapnik().addTo(map);

      map.on('layeradd', () => {
        console.log('Layer added');

      });

      this.loadRelations(map);
    },
    loadRelations: function (map) {
      console.log('loadRelations');
      for (let i = 0; i < this.relations.length; i++) {
        axios.get('https://www.openstreetmap.org/api/0.6/relation/' + this.relations[i] + '/full', {
          responseType: 'document',
          headers: {
            Accept: 'application/xml',
          }
        }).then((response) => {
          console.log(response.data);
          // eslint-disable-next-line no-unused-vars
          let layer = new L.OSM.DataLayer(response.data, {
            styles: {
              node: {
                radius: 0,
                stroke: false,
                opacity: 1,
                fill: false
              }
            }
          }).addTo(map);
          // map.fitBounds(layer.getBounds());
        })
      }
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rail-map { height: 768px; }
</style>
