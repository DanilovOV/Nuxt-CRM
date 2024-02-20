<script setup lang="ts"></script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<button class="absolute top-2 right-3 transition-colors hover:text-primary">
			<Icon
				name="line-md:logout"
				size="20"
			/>
		</button>

		<NuxtLink
			to="/"
			class="mb-10 block"
		>
			<NuxtImg
				src="logo.svg"
				alt=""
				width="100px"
				class="mx-auto"
			/>
		</NuxtLink>

		<LayoutMenu />
	</aside>
</template>

<style lang="scss" scoped></style>
