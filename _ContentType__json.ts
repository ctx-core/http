import { assign } from '@ctx-core/object'
export function _ContentType__json() {
	return assign({ 'Content-Type': 'application/json' }, ...arguments)
}
