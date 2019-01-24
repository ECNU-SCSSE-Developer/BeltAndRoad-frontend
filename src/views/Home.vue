<template>
    <div class="main">
        <v-chart class="echart" :options="option"/>
    </div>
</template>

<script>
	import ECharts from 'vue-echarts'
	import 'echarts/lib/chart/map'
	import 'echarts/lib/chart/bar'
	import 'echarts-gl'
	export default {
		name: 'home',
		components: {
			'v-chart': ECharts
		},
		data() {
			return {
				option : {
					backgroundColor: '#000',
					globe: {
						baseTexture: require('@/assets/earth.jpg'),
						heightTexture: require('@/assets/elev_bump_4k.jpg'),

						displacementScale: 0.1,

						shading: 'lambert',

						environment: require('@/assets/starfield.jpg'),

						light: {
							ambient: {
								intensity: 0.1
							},
							main: {
								intensity: 1.5
							}
						},

						layers: [{
							type: 'blend',
							blendTo: 'emission',
							texture: 'data-gl/asset/night.jpg'
						}, {
							type: 'overlay',
							texture: 'data-gl/asset/clouds.png',
							shading: 'lambert',
							distance: 5
						}]
					},
					series: []
				}
			}
		}
	}
</script>

<style scoped>
    .main{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #000;
        top:0;
        left: 0;
    }
    .echart{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
</style>
