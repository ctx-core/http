import { assign } from '@ctx-core/object';
export function _CacheControl_1hour_headers() {
    return assign({ 'Cache-Control': 'public, max-age=3600' }, ...arguments);
}
export { _CacheControl_1hour_headers as _CacheControl__1hour };
