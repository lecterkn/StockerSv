<script lang="ts">
	import { t } from '$lib/i18n/';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import type { StockInForm } from './schema.ts';
	import { ItemService, ItemStockService, StockInsService } from '$api';
	import Button from '$lib/components/ui/button/button.svelte';

	export let params: StockInForm;
	export let storeId: string;

	let forms = {
		janCode: {
			name: 'common.stockIns.form.janCode',
			bind: params.jancode
		},
		name: {
			name: 'common.stockIns.form.name',
			bind: params.name
		},
		place: {
			name: 'common.stockIns.form.place',
			bind: params.place
		},
		price: {
			name: 'common.stockIns.form.price',
			bind: params.price
		},
		stocks: {
			name: 'common.stockIns.form.stocks',
			bind: params.stocks
		}
	};

	$: forms['name'].bind = params.name;
	$: forms['janCode'].bind = params.jancode;
	$: params.jancode = forms['janCode'].bind;
	$: params.name = forms['name'].bind;
	$: params.place = forms['place'].bind;
	$: params.price = Number(forms['price'].bind);
	$: params.stocks = Number(forms['stocks'].bind);

	async function postStockIn() {
		let itemId: string | null = null;
		let itemListResponse = await ItemService.getStoresItems(storeId, params.name, params.jancode);
		if (itemListResponse.list === null || itemListResponse.list.length === 0) {
			const response = await ItemStockService.postStoresItemStocks(storeId, {
				name: params.name,
				janCode: params.jancode,
				stock: params.stocks
			});
			if (response === null) {
				console.log('failed to create item');
				return;
			}
			itemId = response.itemId;
		} else {
			itemId = itemListResponse.list[0].id;
		}
		if (itemId === null) {
			console.log('itemId is null');
			return;
		}
		const stock = await StockInsService.postStoresStockIns(storeId, {
			itemId: itemId,
			price: params.price,
			stocks: params.stocks
		});
	}
</script>

<Card.Root class="my-2 w-[300px]">
	<Card.Header>
		<Card.Title>{$t('common.stockIns.form.title')}</Card.Title>
		<Card.Description>{$t('common.stockIns.form.description')}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#each Object.entries(forms) as [key, value]}
			{@const name = $t(value.name)}
			<Label for={key}>{name}</Label>
			<Input id={key} bind:value={value.bind} placeholder={name} />
		{/each}
	</Card.Content>
	<Card.Footer>
		<button on:click={postStockIn}>
			<Button>
				{$t('common.stockIns.form.send')}
			</Button>
		</button>
	</Card.Footer>
</Card.Root>
