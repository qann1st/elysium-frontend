import { loadEnv } from 'vite';

export const htmlPlugin = (mode) => {
    const env = loadEnv(mode, 'env');

    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            return html.replace(/%(.*?)%/g, (match, p1) => env[p1]);
        },
    };
};
