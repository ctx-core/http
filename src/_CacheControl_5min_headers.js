import { assign } from '@ctx-core/object';
export function _CacheControl_5min_headers() {
    return assign({ 'Cache-Control': 'public, max-age=300' }, ...arguments);
}
export { _CacheControl_5min_headers as _CacheControl__5min };
