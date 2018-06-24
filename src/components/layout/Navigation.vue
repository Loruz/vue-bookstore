<template>
	<nav class="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center shadow">
		<div class="w-full max-w-screen-xl relative mx-auto px-6 flex">
			<router-link class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8 no-underline" to="/">BookStore</router-link>
			<ul class="ml-auto flex list-reset ">
				<li class="mr-10">
					<router-link to="/login" class="no-underline">Login</router-link>
				</li>
				<li>
					<router-link to="/register" class="no-underline">Register</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {

	}
</script>