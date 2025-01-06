<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { authorization } from "$stores/user";
	import { get } from "svelte/store";

	if (browser) {
        if (get(authorization) === null) {
            goto("/login", {replaceState: true})
        }
        else {
            goto("/stores", {replaceState: true})
        }
    }
</script>
