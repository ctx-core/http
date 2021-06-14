import { assign } from '@ctx-core/object';
export function assign_http_headers(ctx, ...header_a) {
    const headers = ctx.headers || {};
    assign(headers, ...header_a);
    ctx.headers = headers;
    return ctx;
}
export { assign_http_headers as assign__headers__http };
//# sourceMappingURL=src/assign_http_headers.js.map