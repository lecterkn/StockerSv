<script lang="ts">
  import {t} from "$lib/i18n/"
	import * as Tabs from "$lib/components/ui/tabs";
  import RegisterCard from "$components/Login/RegisterCard/index.svelte"
  import LoginCard from "$components/Login/LoginCard/index.svelte"
</script>
<Tabs.Root value="register" class="w-[400px]">
    <Tabs.List class="List">
        <Tabs.Trigger value="register">{$t("common.account.register")}</Tabs.Trigger>
        <Tabs.Trigger value="login">{$t("common.account.login")}</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="register">
      <RegisterCard/>
  </Tabs.Content>
  <Tabs.Content value="login">
    <LoginCard/>
  </Tabs.Content>
</Tabs.Root>