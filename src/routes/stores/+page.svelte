<script lang="ts">
	import { StoreService } from "$api";
    import StoreCard from "$components/Store/StoreCard/index.svelte"
	import { storeList } from "$stores/stores";

    storeList.subscribe((storeList) => {
        console.log(storeList)
    })

    const getStores = () => {
        StoreService.getStores().then((response) => {
            if (response.list != undefined) {
                storeList.set(response.list)
            }
        })
    }

    getStores()
</script>
<div class="flex h-screen w-screen">
    <div class="m-auto">
        <StoreCard/>
    </div>
</div>