import { assign } from '@ctx-core/object'
export function assign_http_headers<O extends { headers:Record<string, string> } = { headers:Record<string, string> }>(
	ctx:{ headers?:object }, ...header_a:object[]
):O {
	const headers = ctx.headers || {}
	assign(headers, ...header_a)
	ctx.headers = headers
	return ctx as O
}
export {
	assign_http_headers as assign__headers__http
}
