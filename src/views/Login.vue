<template>
	<form class="w-full max-w-sm mt-10 mx-auto">
		<h2 class="mb-5 text-center">Sign in</h2>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
					User email
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight" id="inline-full-name" type="email">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
					Password
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight" id="inline-username" type="password" >
			</div>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3"></div>
			<div class="md:w-2/3">
				<button class="outline-none shadow bg-blue-darker hover:bg-blue-dark text-white font-thin py-2 px-4 rounded" type="button">
					Sign in
				</button>
			</div>
		</div>
	</form>
</template>
<script>
  export default {
    name: 'login',

  }
</script>