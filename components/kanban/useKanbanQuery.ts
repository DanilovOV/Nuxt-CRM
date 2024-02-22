import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { IDeal } from '~/types/deals.types'
import { KANBAN_DATA } from './kanban.data'
import type { IColumn } from './kanban.types'

export function useKanbanQuery() {
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newCanbanData: IColumn[] = structuredClone(KANBAN_DATA)
			const deals = data.documents as unknown as IDeal[]

			for (const deal of deals) {
				const columnForDeal = newCanbanData.find(
					(col) => col.id === deal.status
				)

				if (columnForDeal) {
					columnForDeal.items.push({
						$createdAt: deal.$createdAt,
						id: deal.$id,
						name: deal.name,
						price: deal.price,
						companyName: deal.customer.name,
						status: columnForDeal.name,
					})
				}
			}

			return newCanbanData
		},
	})
}
