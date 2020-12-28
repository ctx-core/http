import { assign } from '@ctx-core/object'
export function _CacheControl__5min() {
	return assign({ 'Cache-Control': 'public, max-age=300' }, ...arguments)
}
