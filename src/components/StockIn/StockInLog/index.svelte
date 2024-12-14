<script lang="ts">
	import { t } from '$lib/i18n/';
	import { StockInsService, type controller_StockInResponse } from '$api';
	import { browser } from '$app/environment';
	import * as Table from '$lib/components/ui/table/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	export let storeId: string;
	let stockIns: controller_StockInResponse[] = [];

	function getStockIns() {
		StockInsService.getStoresStockIns(storeId).then((response) => {
			stockIns = response.list;
		});
	}

	if (browser) {
		getStockIns();
	}

	// リストのヘッダー
	const headers = [
		'common.stockIns.list.name',
		'common.stockIns.list.stocks',
		'common.stockIns.list.price',
		'common.stockIns.list.place',
		'common.stockIns.list.stockInAt'
	];
</script>

<button on:click={getStockIns}>
	<Button variant="outline">
		{$t('common.stockIns.list.refresh')}
	</Button>
</button>
<Table.Root>
	<Table.Header>
		{#each headers as head}
			<Table.Head>{$t(head)}</Table.Head>
		{/each}
	</Table.Header>
	<Table.Body>
		{#each stockIns as stock}
			<Table.Row>
				<Table.Cell>{stock.name}</Table.Cell>
				<Table.Cell>{stock.stocks}</Table.Cell>
				<Table.Cell>{stock.price}</Table.Cell>
				<Table.Cell>{stock.place}</Table.Cell>
				<Table.Cell>{new Date(stock.createdAt).toLocaleString()}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
