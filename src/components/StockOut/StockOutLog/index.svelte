<script lang="ts">
	import { t } from '$lib/i18n/';
	import { StockOutsService, type controller_StockOutResponse } from '$api';
	import { browser } from '$app/environment';
	import * as Table from '$lib/components/ui/table/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	export let storeId: string;
	let stockOuts: controller_StockOutResponse[] = [];

	function getStockOuts() {
		StockOutsService.getStoresStockOuts(storeId).then((response) => {
			stockOuts = response.list;
		});
	}

	if (browser) {
		getStockOuts();
	}

	// リストのヘッダー
	const headers = [
		'common.stockOuts.list.name',
		'common.stockOuts.list.price',
		'common.stockOuts.list.stocks',
		'common.stockOuts.list.stockOutAt'
	];
</script>

<button on:click={getStockOuts}>
	<Button variant="outline">
		{$t('common.stockOuts.list.refresh')}
	</Button>
</button>
<Table.Root>
	<Table.Header>
		{#each headers as head}
			<Table.Head>{$t(head)}</Table.Head>
		{/each}
	</Table.Header>
	<Table.Body>
		{#each stockOuts as stock}
			<Table.Row>
				<Table.Cell>{stock.name}</Table.Cell>
				<Table.Cell>{stock.stocks}</Table.Cell>
				<Table.Cell>{stock.price}</Table.Cell>
				<Table.Cell>{new Date(stock.createdAt).toLocaleString()}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
