<script lang="ts">
	import StockList from '$components/Stocks/StockList/index.svelte';

	export let data;
</script>

<StockList storeId={data.id} />
