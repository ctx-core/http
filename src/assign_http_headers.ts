import { assign } from '@ctx-core/object'
export function assign_http_headers(ctx:{ headers?:object }, ...header_a1:object[]) {
	const headers = ctx.headers || {}
	assign(headers, ...header_a1)
	ctx.headers = headers
	return ctx
}
export {
	assign_http_headers as assign__headers__http
}
