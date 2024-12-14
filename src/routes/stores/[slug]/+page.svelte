<script lang="ts">
    /** @type {import('./$types').PageData} */
	export let data;

    // ID
    let id = data.id;
    // IDを更新
    $: data,  (()=>{
        id = data.id;
    })();
</script>

<h1>Store Id</h1>
<h1>{id}</h1>