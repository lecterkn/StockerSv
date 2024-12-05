import type { controller_StoreResponse } from '$api';
import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

export const storeList = writable<controller_StoreResponse[]>([]);

export const currentStoreId = writable<string | null>(null);

export const AddStoreToList = (store: controller_StoreResponse) => {
	storeList.update((storeList) => {
		return [...storeList.filter((it) => it.id != store.id), store];
	});
};
