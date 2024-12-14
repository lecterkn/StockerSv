<script lang="ts">
	import { t } from '$lib/i18n/';
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import StoreDropdownList from "$components/StoreDetail/StoreDropdownList/index.svelte"
    import ShoppingCart from 'lucide-svelte/icons/shopping-cart'
    import ArchiveRestore from 'lucide-svelte/icons/archive-restore'
    import Archive from 'lucide-svelte/icons/archive'
    import Undo from 'lucide-svelte/icons/undo-2'
    import Logout from 'lucide-svelte/icons/log-out'

    export let storeId;


    let getApplicationContents = () => {
        return [
            {
                "name": "common.stores.stockOut.name",
                "icon": ShoppingCart,
                "link": "/stores/" + storeId + "/stockOut"
            },
            {
                "name": "common.stores.stockIn.name",
                "icon": ArchiveRestore,
                "link": "/stores/" + storeId + "/stockIn"
            },
            {
                "name": "common.stores.stocks.name",
                "icon": Archive,
                "link": "/stores/" + storeId + "/stocks"
            },
            {
                "name": "common.stores.refunds.name",
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
                <StoreDropdownList storeId={storeId}></StoreDropdownList>
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
                                            <span class="text-lg font-light">{$t(item.name)}</span>
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
