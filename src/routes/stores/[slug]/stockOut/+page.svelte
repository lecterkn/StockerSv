<script lang="ts">
	import { JancodeService } from '$api';
    import Scanner from '$components/Scanner/index.svelte'

    /** @type {import('./$types').PageData} */
	export let data;

    let product = {
        name: "",
        brandName: "",
        makerName: ""
    }

    let barcode = ''
    function onDetected(decodedText: string) {
        barcode = decodedText
        JancodeService.getProducts(barcode).then((response) => {
            product.name = response.name ? response.name : ""
            product.brandName = response.brandName ? response.brandName : ""
            product.makerName = response.makerName ? response.makerName : ""
        }).finally(() => {

        })
    }
</script>

<h1>Jancode: {barcode}</h1>
<h1>製品名：{product.name}</h1>
<h1>ブランド名：{product.brandName}</h1>
<h1>製造者名：{product.makerName}</h1>
<Scanner onDetected={onDetected}/>