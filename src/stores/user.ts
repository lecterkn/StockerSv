import type { controller_UserResponse } from "$api";
import { persisted } from "svelte-persisted-store";

export const authorization = persisted<string | null>("authorization", null)
export const user = persisted<controller_UserResponse | null>("user", null)