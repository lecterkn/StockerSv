import { currentStoreId } from '$stores/stores'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  currentStoreId.set(params.slug)
  return {
    id: params.slug
  }
}
