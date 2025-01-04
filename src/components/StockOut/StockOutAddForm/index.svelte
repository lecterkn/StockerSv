<script lang="ts">
	import { t } from '$lib/i18n/';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import type { StockOutForm } from './schema.ts';
	import Button from '$lib/components/ui/button/button.svelte';

	export let params: StockOutForm;
	export let addRequest: (form: StockOutForm) => void;

	let forms = {
		name: {
			name: 'common.stockOuts.addForm.name',
			bind: params.name
		},
		price: {
			name: 'common.stockOuts.addForm.price',
			bind: params.price
		},
		stocks: {
			name: 'common.stockOuts.addForm.stocks',
			bind: params.stocks
		}
	};

	$: forms.name.bind = params.name;
	$: forms.price.bind = params.price;
	$: params.name = forms.name.bind;
	$: params.price = Number(forms.price.bind);
	$: params.stocks = Number(forms.stocks.bind);

	function addStock() {
		addRequest(params);
		forms.name.bind = '';
		forms.price.bind = Number.NaN;
		forms.stocks.bind = Number.NaN;
	}
</script>

<Card.Root class="my-2 w-[300px]">
	<Card.Header>
		<Card.Title>{$t('common.stockOuts.addForm.title')}</Card.Title>
		<Card.Description>{$t('common.stockOuts.addForm.description')}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#each Object.entries(forms) as [key, value]}
			{@const name = $t(value.name)}
			<Label for={key}>{name}</Label>
			<Input id={key} bind:value={value.bind} placeholder={name} />
		{/each}
	</Card.Content>
	<Card.Footer>
		<button on:click={addStock}>
			<Button>
				{$t('common.stockOuts.addForm.add')}
			</Button>
		</button>
	</Card.Footer>
</Card.Root>
