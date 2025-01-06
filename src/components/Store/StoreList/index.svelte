<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button } from "$lib/components/ui/button/";
    import { storeList } from "$stores/stores";
	import { get } from "svelte/store";

    let stores = get(storeList)
    storeList.subscribe((list) => {
        stores = list
    })

    function gotoStore(storeId: string | undefined) {
        goto("/stores/" + storeId + "/", {replaceState: true})
    }
</script>

<div class="my-2">
    {#key stores}
        {#each stores as store}
            <button class="block" on:click={() => gotoStore(store.id)}>
                <Button variant="ghost">
                    {store.name}
                </Button>
            </button>
        {/each}
    {/key}
</div>