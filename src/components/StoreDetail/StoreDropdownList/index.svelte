<script lang="ts">
	import { goto } from "$app/navigation";
	import { storeList } from "$stores/stores";
	import { get } from "svelte/store";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/";
    import * as Sidebar from "$lib/components/ui/sidebar/";
    import ChevronDown from 'lucide-svelte/icons/chevron-down'

    export let storeName;

    let stores = get(storeList)
    storeList.subscribe((list) => {
        stores = list
    })

    function gotoStore(storeId: string | undefined) {
        goto("/stores/" + storeId, {replaceState: true})
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props})}
            <Sidebar.MenuButton {...props}>
                <span class="text-2xl font-medium">
                    {storeName}
                </span>
                <ChevronDown></ChevronDown>
            </Sidebar.MenuButton>
        {/snippet}
    </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-[--bits-dropdown-menu-anchor-width]">
            {#each stores as store}
                <DropdownMenu.Item >
                    <button on:click={() => {gotoStore(store.id)}}>
                        <span class="text-lg">
                            {store.name}
                        </span>
                    </button>
                </DropdownMenu.Item>
            {/each}
        </DropdownMenu.Content>
</DropdownMenu.Root>