<template>
	<div id="app">
		<Navigation/>
		<div class="container mx-auto pt-24 pb-8 lg:pt-28 w-full">
			<router-view/>
		</div>
	</div>
</template>
<script>
  import Navigation from './components/layout/Navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>
