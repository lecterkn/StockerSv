<script lang="ts">
	import { t } from '$lib/i18n/';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { UserService } from '$api';

	let request = {
		name: '',
		password: ''
	}

	function registerAccount() {
		UserService.postRegister(request).then((response) => {
			console.log(response.id)
		})
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{$t('common.account.title')}</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-2">
		<div class="space-y-1">
			<Label for="name">{$t('common.account.name')}</Label>
			<Input id="name" bind:value={request.name}/>
		</div>
		<div class="space-y-1">
			<Label for="password">{$t('common.account.password')}</Label>
			<Input id="password" type="password" bind:value={request.password}/>
		</div>
	</Card.Content>
	<Card.Footer>
		<Button on:click={registerAccount}>{$t('common.account.register')}</Button>
	</Card.Footer>
</Card.Root>
