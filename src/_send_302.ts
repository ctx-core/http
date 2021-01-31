import type { Response } from 'express'
// { headers: { 'Cache-Control': 'public, max-age=3600' } } append
export function _send_302(res: Response) {
	res.writeHead(302, { Location: '/auth/password/reset' })
	res.end('')
}
export {
	_send_302 as _send__302
}
