<script lang="ts">
	import { t } from '$lib/i18n/';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index';
	import StocksListItem from '$components/Stocks/StocksListItem/index.svelte';
	import { ItemStockService, type controller_ItemStockResponse } from '$api';
	import { browser } from '$app/environment';

	export let storeId: string;

	const headers = [
		'common.stocks.list.janCode',
		'common.stocks.list.name',
		'common.stocks.list.price',
		'common.stocks.list.stocks',
		'common.stocks.list.stockMin'
	];

	let itemStocks: controller_ItemStockResponse[] = [];

	function getItemStocks() {
		ItemStockService.getStoresItemStocks(storeId).then((response) => {
			itemStocks = response.list;
		});
	}

	if (browser) {
		getItemStocks();
	}
</script>

<button on:click={getItemStocks}>
	<Button variant="outline">{$t('common.stocks.list.refresh')}</Button>
</button>
<Table.Root>
	<Table.Header>
		{#each headers as header}
			<Table.Head>{$t(header)}</Table.Head>
		{/each}
	</Table.Header>
	<Table.Body>
		{#each itemStocks as itemStock}
			<StocksListItem {itemStock} />
		{/each}
	</Table.Body>
</Table.Root>
