<script lang="ts">
	import { JancodeService } from '$api';
	import { browser } from '$app/environment';
    import Scanner from '$components/Scanner/index.svelte'
	import type { StockInForm as StockInFormSchema } from '$components/StockIn/StockInForm/schema';
	import StockInForm from '$components/StockIn/StockInForm/index.svelte';
	import StockInLog from '$components/StockIn/StockInLog/index.svelte';

    /** @type {import('./$types').PageData} */
	export let data;

    let params: StockInFormSchema = {
        jancode: "",
        name: "",
        place: "",
        price: 0,
        stocks: 0,
    }

    function onDetected(decodedText: string) {
        params.jancode = decodedText
        if (!browser) {
            return
        }
        JancodeService.getProducts(decodedText).then((response) => {
            params.name = response.name
        }).finally(() => {

        })
    }
</script>

<div class="flex space-x-4">
    <StockInForm params={params} storeId={data.id}></StockInForm>
    <Scanner onDetected={onDetected}/>
</div>
<StockInLog storeId={data.id}></StockInLog>