<script lang="ts">
	import { t } from '$lib/i18n/';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { StockOutForm } from '../StockOutAddForm/schema';
	import { StockOutsService } from '$api';

	export let storeId: string;
	export let requests: StockOutForm[];

	// リストのヘッダー
	const headers = [
		'common.stockOuts.addForm.name',
		'common.stockOuts.addForm.price',
		'common.stockOuts.addForm.stocks'
	];

	let amount: number | null = null;
	let totalPrice: number | null = null;
	let change: number | null = null;

	$: {
		let total = 0;
		requests.forEach((request) => {
			total += request.price * request.stocks;
		});
		totalPrice = total;
	}

	function completeRequests() {
		let total = 0;
		requests.forEach((request) => {
			total += request.price * request.stocks;
		});
		if (amount === null || amount < total) {
			return;
		}
		totalPrice = total;
		change = amount - total;
		requests.forEach((request) => {
			StockOutsService.postStoresStockOuts(storeId, {
				itemId: request.itemId,
				price: request.price,
				stocks: request.stocks
			}).then((response) => {
				console.log('stockOut', response);
			});
		});
		requests = [];
	}
</script>

<div class="block">
	<div class="flex">
		<Input
			id="amount"
			bind:value={amount}
			placeholder={$t('common.stockOuts.completeForm.amount')}
		/>
		<button on:click={completeRequests}>
			<Button variant="default">
				{$t('common.stockOuts.completeForm.complete')}
			</Button>
		</button>
	</div>
	<Label for="totalPrice">
		{$t('common.stockOuts.completeForm.totalPrice')}:
		{#if totalPrice != null}
			{totalPrice}
		{/if}
	</Label>
	<Label for="change">
		{$t('common.stockOuts.completeForm.change')}:
		{#if change != null}
			{change}
		{/if}
	</Label>
	<Table.Root>
		<Table.Header>
			{#each headers as head}
				<Table.Head>{$t(head)}</Table.Head>
			{/each}
		</Table.Header>
		<Table.Body>
			{#each requests as request}
				<Table.Row>
					<Table.Cell>{request.name}</Table.Cell>
					<Table.Cell>{request.price}</Table.Cell>
					<Table.Cell>{request.stocks}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
