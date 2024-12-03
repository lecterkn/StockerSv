import type { controller_StoreResponse } from "$api";
import { persisted } from "svelte-persisted-store";

export const storeList = persisted<controller_StoreResponse[]>("storeList", [])

export const AddStoreToList = (store: controller_StoreResponse) => {
    storeList.update((storeList) => {
        return [...storeList.filter(it => it.id != store.id), store]
    })
}