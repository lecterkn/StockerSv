<script lang="ts">
	import { StoreService } from '$api';
	import { storeList } from '$stores/stores';
	import { browser } from '$app/environment';

	const getStores = () => {
		if (!browser) {
			return;
		}
		StoreService.getStores().then((response) => {
			storeList.set(response.list);
		});
	};

	if (browser) {
		getStores();
	}
</script>

<slot></slot>

