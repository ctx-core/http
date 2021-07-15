import { assign } from '@ctx-core/object'
export function CacheControl_5min_headers_():Record<string, string> {
	return assign({ 'Cache-Control': 'public, max-age=300' }, ...arguments)
}
export {
	CacheControl_5min_headers_ as _CacheControl_5min_headers,
	CacheControl_5min_headers_ as _CacheControl__5min,
}
