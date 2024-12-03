<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { authorization } from "$stores/user";

	if (browser) {
        authorization.set(null);
        goto("/login", {replaceState: true})
    }
</script>