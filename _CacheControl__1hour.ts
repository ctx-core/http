import { assign } from '@ctx-core/object'
export function _CacheControl__1hour() {
	return assign({ 'Cache-Control': 'public, max-age=3600' }, ...arguments)
}
