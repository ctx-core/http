import { assign } from '@ctx-core/object'
export function _ContentType_json_headers() {
	return assign({ 'Content-Type': 'application/json' }, ...arguments)
}
export {
	_ContentType_json_headers as _ContentType__json
}