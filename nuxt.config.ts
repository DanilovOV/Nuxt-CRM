export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'nuxt-icon',
		'shadcn-nuxt',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Lato: {
						wght: [300, 400, 700],
						ital: [300],
					},
				},
			},
		],
		'@pinia/nuxt',
		[
			'@vee-validate/nuxt',
			{
				autoImports: true,
			},
		],
	],
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui',
	},
	pinia: {
		storesDirs: ['./stores/**'],
	},
})

