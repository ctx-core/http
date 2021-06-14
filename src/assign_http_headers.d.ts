export declare function assign_http_headers<O extends {
    headers: Record<string, string>;
} = {
    headers: Record<string, string>;
}>(ctx: {
    headers?: object;
}, ...header_a: object[]): O;
export { assign_http_headers as assign__headers__http };
