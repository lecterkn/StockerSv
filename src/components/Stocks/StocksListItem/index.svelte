<script lang="ts">
	import { t } from '$lib/i18n/';
	import {
		ItemStockService,
		type controller_ItemStockUpdateRequest,
		type controller_ItemStockResponse
	} from '$api';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { StocksListUpdateForm } from '$components/Stocks/StocksListItem/schema';
	import Button from '$lib/components/ui/button/button.svelte';

	export let itemStock: controller_ItemStockResponse;
	let request: controller_ItemStockUpdateRequest = {
		price: itemStock.price,
		stock: itemStock.stock,
		stockMin: itemStock.stockMin
	};
	let form: StocksListUpdateForm = {
		jancode: itemStock.janCode,
		name: itemStock.name,
		price: itemStock.price?.toString(),
		stocks: itemStock.stock.toString(),
		stockMin: itemStock.stockMin?.toString()
	};

	$: request.price = Number(inputList.price.bind);
	$: request.stock = Number(inputList.stocks.bind);
	$: request.stockMin = Number(inputList.stockMin.bind);

	const inputList = {
		janCode: {
			name: 'common.stocks.list.janCode',
			disabled: true,
			bind: form.jancode
		},
		name: {
			name: 'common.stocks.list.name',
			disabled: true,
			bind: form.name
		},
		price: {
			name: 'common.stocks.list.price',
			disabled: false,
			bind: form.price
		},
		stocks: {
			name: 'common.stocks.list.stocks',
			disabled: false,
			bind: form.stocks
		},
		stockMin: {
			name: 'common.stocks.list.stockMin',
			disabled: false,
			bind: form.stockMin
		}
	};

	function patchItemStocks() {
		console.log(request);
		ItemStockService.patchStoresItemStocks(itemStock.storeId, itemStock.itemId, {
			price: request.price,
			stock: request.stock,
			stockMin: request.stockMin
		}).then((response) => {
			console.log(response);
		});
	}
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Table.Row {...props}>
				<Table.Cell>{itemStock.janCode}</Table.Cell>
				<Table.Cell>{itemStock.name}</Table.Cell>
				{#if itemStock.price === null}
					<Table.Cell>{$t('common.stocks.list.null')}</Table.Cell>
				{:else}
					<Table.Cell>{itemStock.price}</Table.Cell>
				{/if}
				<Table.Cell>{itemStock.stock}</Table.Cell>
				{#if itemStock.stockMin === null}
					<Table.Cell>{$t('common.stocks.list.null')}</Table.Cell>
				{:else}
					<Table.Cell>{itemStock.stockMin}</Table.Cell>
				{/if}
			</Table.Row>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{$t('common.stocks.edit.title')}</Dialog.Title>
		</Dialog.Header>
		{#each Object.entries(inputList) as [key, value]}
			<Label for={key}>{$t(value.name)}</Label>
			<Input
				id={key}
				placeholder={$t(value.name)}
				disabled={value.disabled}
				bind:value={value.bind}
			/>
		{/each}
		<Dialog.Footer>
			<Button>{$t('common.stocks.edit.cancel')}</Button>
			<button on:click={patchItemStocks}>
				<Button>{$t('common.stocks.edit.save')}</Button>
			</button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
