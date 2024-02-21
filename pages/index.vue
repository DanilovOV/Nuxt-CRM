<script setup lang="ts">
import { type IColumn, type ICard } from '~/components/kanban/kanban.types'
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery'
useSeoMeta({
	title: 'Home | CRM',
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
useKanbanQuery()
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Nuxt CRM system</h1>
		<UiCard
			class="mb-3"
			draggable="true"
		>
			<UiCardHeader>123</UiCardHeader>
			<UiCardContent>Компания</UiCardContent>
			<UiCardFooter>Дата</UiCardFooter>
		</UiCard>
	</div>
</template>

<style lang="scss" scoped></style>
