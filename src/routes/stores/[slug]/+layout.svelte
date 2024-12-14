<script lang="ts">
	import StoreSidebar from '$components/StoreDetail/StoreSidebar/index.svelte';
	import { currentStoreId } from '$stores/stores';
	import { get } from 'svelte/store';

	let id = get(currentStoreId);

	currentStoreId.subscribe((currentId) => {
		id = currentId;
	});
</script>

<StoreSidebar storeId={id}>
	<div class="m-8">
		<slot></slot>
	</div>
</StoreSidebar>
