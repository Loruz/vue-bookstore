<template>
	<form class="w-full max-w-sm mt-10 mx-auto">
		<h2 class="mb-5 text-center">Register</h2>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="email">
					User email
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight"
					   id="email" type="email" v-model="user.email">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="name">
					Name
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight"
					   id="name" type="text" v-model="user.name">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="password">
					Password
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight"
					   id="password" type="password" v-model="user.password">
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block text-grey  md:text-right mb-1 md:mb-0 pr-4" for="password-repeat">
					Confirm password
				</label>
			</div>
			<div class="md:w-2/3">
				<input class="outline-none bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-blue-darker rounded w-full py-2 px-4 text-grey-darker leading-tight"
					   id="password-repeat" type="password" v-model="user.passwordConfirm">
			</div>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3"></div>
			<div class="md:w-2/3">
				<button class="outline-none shadow bg-blue-darker hover:bg-blue-dark text-white font-thin py-2 px-4 rounded"
						@click="handleRegister"
						type="button">
					Sign up
				</button>
			</div>
		</div>
	</form>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'register',
    data () {
      return {
        user: {
          email: '',
          password: '',
          passwordConfirm: '',
		  name: ''
        }
      }
    },
    methods: {
      ...mapActions({
		login: 'auth/login',
		register: 'auth/register',
        setNotificationMessage: 'notice/setNotificationMessage'
	  }),
      handleRegister () {
        this.register(this.user)
          .then(() => this.$router.push({path: '/'}))
          .catch((error) => this.setNotificationMessage({message: error.data, type: 'warning'}))
      }
    }
  }
</script>