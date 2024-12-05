<script lang="ts">
	import { t } from '$lib/i18n/';
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import StoreDropdownList from "$components/StoreDetail/StoreDropdownList/index.svelte"
	import { storeList } from "$stores/stores";
	import { get } from "svelte/store";
    import ShoppingCart from 'lucide-svelte/icons/shopping-cart'
    import ArchiveRestore from 'lucide-svelte/icons/archive-restore'
    import Undo from 'lucide-svelte/icons/undo-2'
    import Logout from 'lucide-svelte/icons/log-out'

    export let storeId;

    let getStoreName = () => {
        if (storeId === null) {
            return ""
        }
        let name = get(storeList).find((it) => it.id === storeId)?.name
        return name
    }

    let getApplicationContents = () => {
        return [
            {
                "name": $t("common.stores.stockOut.name"),
                "icon": ShoppingCart,
                "link": "/stores/" + storeId + "/stockOut"
            },
            {
                "name": $t("common.stores.stockIn.name"),
                "icon": ArchiveRestore,
                "link": "/stores/" + storeId + "/stockIn"
            },
            {
                "name": $t("common.stores.refunds.name"),
                "icon": Undo,
                "link": "/stores/" + storeId + "/refunds"
            },
        ]
    }
</script>

<Sidebar.Provider>
    <Sidebar.Root side="left" variant="sidebar">
        <Sidebar.Header>
            <Sidebar.MenuItem>
                <StoreDropdownList storeName={getStoreName()}></StoreDropdownList>
            </Sidebar.MenuItem>
        </Sidebar.Header>
        <Sidebar.Content>
            <Sidebar.Group>
                <Sidebar.GroupLabel>
                    <span class="font-lg">
                        {$t("common.stores.sidebar.list")}
                    </span>
                </Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                    <Sidebar.Menu>
                        {#each getApplicationContents() as item}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton>
                                    {#snippet child({ props })}
                                        <a href={item.link} {...props}>
                                            <item.icon />
                                            <span class="text-xl font-light">{item.name}</span>
                                        </a>
                                    {/snippet}
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        {/each}
                    </Sidebar.Menu>
                </Sidebar.GroupContent>
            </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
            <Sidebar.Menu>
                <Sidebar.MenuItem>
                    <Sidebar.MenuButton>
                        {#snippet child({ props })}
                        <a href="/logout" {...props}>
                            <Logout/>
                            <span class="text-xl font-light">
                                {$t("common.stores.sidebar.logout")}
                            </span>
                        </a>
                        {/snippet}
                    </Sidebar.MenuButton>
                </Sidebar.MenuItem>
            </Sidebar.Menu>
        </Sidebar.Footer>
    </Sidebar.Root>
    <main>
        <Sidebar.Trigger />
        <slot></slot>
    </main>
</Sidebar.Provider>