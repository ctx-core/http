import type { Response } from 'express'
// { headers: { 'Cache-Control': 'public, max-age=3600' } } append
export function send_302_(res: Response):void {
	res.writeHead(302, { Location: '/auth/password/reset' })
	res.end('')
}
export {
	send_302_ as _send_302,
	send_302_ as _send__302,
}
