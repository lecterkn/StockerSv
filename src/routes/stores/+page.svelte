<script lang="ts">
    import StoreCard from "$components/store/StoreCard/index.svelte"
	import { storeList } from "$stores/stores";

    storeList.subscribe((storeList) => {
        console.log(storeList)
    })
</script>
<div class="flex h-screen w-screen">
    <div class="m-auto">
        <StoreCard/>
    </div>
</div>