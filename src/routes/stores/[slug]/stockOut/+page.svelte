<script lang="ts">
	import { JancodeService } from '$api';
	import { browser } from '$app/environment';
    import Scanner from '$components/Scanner/index.svelte'

    /** @type {import('./$types').PageData} */
	export let data;

    interface Product {
        name: string,
        brandName: string,
        makerName: string,
    }

    let product: Product = {
        name: "",
        brandName: "",
        makerName: ""
    }

    let jancode = ''
    function onDetected(decodedText: string) {
        jancode = decodedText
        if (!browser) {
            return
        }
        JancodeService.getProducts(jancode).then((response) => {
            product.name = response.name
            product.brandName = response.brandName
            product.makerName = response.makerName
        }).finally(() => {

        })
    }
</script>

<h1>Jancode: {jancode}</h1>
<h1>製品名：{product.name}</h1>
<h1>ブランド名：{product.brandName}</h1>
<h1>製造者名：{product.makerName}</h1>
<Scanner onDetected={onDetected}/>