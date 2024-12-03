<script lang="ts">
	import { goto, replaceState } from '$app/navigation';
	import { loadTranslations } from '$lib/i18n';
	import { authorization } from '$stores/user'
	import { browser } from "$app/environment";
	import '../app.css';
	import { OpenAPI } from '$api';

	// 言語設定
	const defaultLanguage = "ja"
	loadTranslations(defaultLanguage, "/"); 

	let { children } = $props();

	if (browser) {
		authorization.subscribe((token) => {
			console.log(token)
			if (token === null) {
				goto("/login", {replaceState: true})
			} 
			else {
				OpenAPI.TOKEN = token
			}
		})
	}
</script>

{@render children()}
