import { persisted } from "svelte-persisted-store";

export const authorization = persisted<string | null>("authorization", null)