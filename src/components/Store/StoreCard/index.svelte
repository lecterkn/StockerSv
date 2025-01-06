<script lang="ts">
	import { t } from '$lib/i18n/';
	import * as Card from "$lib/components/ui/card/index";
    import ButtonNew from "$components/Store/ButtonNew/index.svelte"
    import StoreList from "$components/Store/StoreList/index.svelte"
</script>

<Card.Root class="w-[380px] text-center">
    <Card.Header>
        <Card.Title>{$t("common.stores.list")}</Card.Title>
        
    </Card.Header>
    <Card.Content>
        <StoreList></StoreList>
        <ButtonNew></ButtonNew>
    </Card.Content>
    <Card.Footer>

    </Card.Footer>
</Card.Root>