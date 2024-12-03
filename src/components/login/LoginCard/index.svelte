<script lang="ts">
	import { t } from '$lib/i18n/';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { OpenAPI, UserService } from '$api';
	import { goto } from '$app/navigation';
	import { authorization } from '$stores/user';

	let request = {
		name: '',
		password: ''
	};

	function resetFields() {
		request.password = ''
	}

	function loginAccount() {
		UserService.postLogin(request).then((response) => {
			if (response.token === undefined) {
				console.log('unauthorized');
				return;
			}
			OpenAPI.TOKEN = response.token;
			authorization.set(response.token)
			console.log('authorized');
			goto('/', { replaceState: true });
		}).finally(() => {
			resetFields()
		})
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{$t('common.account.login')}</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-2">
		<div class="space-y-1">
			<Label for="name">{$t('common.account.name')}</Label>
			<Input id="name" bind:value={request.name} />
		</div>
		<div class="space-y-1">
			<Label for="password">{$t('common.account.password')}</Label>
			<Input id="password" type="password" bind:value={request.password} />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button on:click={loginAccount}>{$t('common.account.login')}</Button>
	</Card.Footer>
</Card.Root>
