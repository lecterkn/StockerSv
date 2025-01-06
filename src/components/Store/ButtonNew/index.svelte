<script lang="ts">
	import { t } from '$lib/i18n/';
	import { buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog/index";
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { StoreService } from '$api';
	import { AddStoreToList, storeList } from '$stores/stores';
	import { get } from 'svelte/store';

    let isDialogOpen = false
    let request = {
        name: ''
    }

    function createStore() {
        StoreService.postStores(request).then((response) => {
            AddStoreToList(response)
            console.log(get(storeList))
        }).finally(() => {
            isDialogOpen = false
        })
    }
</script>

<Dialog.Root bind:open={isDialogOpen}>
    <Dialog.Trigger class={buttonVariants({ variant: "default"} )}>
        {$t("common.stores.new")}
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            {$t("common.stores.new")}
        </Dialog.Header>
        <div class="flex w-full max-s-sm flex-col gap-1 5">
            <Label for="storeName">{$t("common.stores.name")}</Label>
            <Input id="storeName" placeholder="{$t("common.stores.name")}" bind:value={request.name} />
        </div>
        <Dialog.Footer>
            <button on:click={createStore}>
                <Button >{$t("common.stores.create")}</Button>
            </button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>