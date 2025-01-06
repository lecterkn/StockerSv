<script lang="ts">
	import { ItemStockService } from '$api';
	import { browser } from '$app/environment';
	import Scanner from '$components/Scanner/index.svelte';
	import StockOutAddForm from '$components/StockOut/StockOutAddForm/index.svelte';
	import StockOutCompleteForm from '$components/StockOut/StockOutCompleteForm/index.svelte';
	import StockOutLog from '$components/StockOut/StockOutLog/index.svelte';
	import type { StockOutForm as StockOutFormSchema } from '$components/StockOut/StockOutAddForm/schema';

	/** @type {import('./$types').PageData} */
	export let data;

	interface Product {
		name: string;
		brandName: string;
		makerName: string;
		itemId: string;
		itemName: string;
		itemPrice: number;
	}

	let product: Product = {
		name: '',
		brandName: '',
		makerName: '',
		itemId: '',
		itemName: '',
		itemPrice: -1
	};

	let requests: StockOutFormSchema[] = [];

	let form: StockOutFormSchema = {
		name: '',
		price: -1,
		itemId: ''
	};

	let jancode = '';
	function onDetected(decodedText: string) {
		jancode = decodedText;
		if (!browser) {
			return;
		}
		ItemStockService.getStoresItemStocksJancodes(data.id, jancode).then((response) => {
			product.itemId = response.itemId;
			product.itemName = response.name;
			product.itemPrice = response.price;
			form.name = response.name;
			form.price = response.price;
			form.itemId = response.itemId;
			form = form;
		});
	}

	function addRequest(request: StockOutFormSchema) {
		requests = [
			...requests,
			{
				itemId: request.itemId,
				price: request.price,
				name: request.name,
				stocks: request.stocks
			}
		];
	}
</script>

<Scanner {onDetected} />
<div class="flex space-x-4">
	<StockOutAddForm params={form} {addRequest} />
	<StockOutCompleteForm storeId={data.id} {requests} />
</div>
<StockOutLog storeId={data.id} />
