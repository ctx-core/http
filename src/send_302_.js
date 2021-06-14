// { headers: { 'Cache-Control': 'public, max-age=3600' } } append
export function send_302_(res) {
    res.writeHead(302, { Location: '/auth/password/reset' });
    res.end('');
}
export { send_302_ as _send_302, send_302_ as _send__302, };
//# sourceMappingURL=src/send_302_.js.map