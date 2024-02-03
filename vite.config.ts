import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { htmlPlugin } from './environment/vite/plugins/_htmlPlugin';

export default defineConfig(({mode}) => {
    return {
        plugins: [
            react(),
            htmlPlugin(mode)
        ],
        test: {
          globals: true,
          environment: 'jsdom',
        },
        resolve: {
            alias: {
                'src': path.resolve(__dirname, 'src'),
                'styles': path.resolve(__dirname, 'src/styles'),
                'assets': path.resolve(__dirname, 'src/assets'),
                'mocks': path.resolve(__dirname, 'src/mocks'),
                'models': path.resolve(__dirname, 'src/models'),
                'types': path.resolve(__dirname, 'src/types'),
                'enums': path.resolve(__dirname, 'src/enums'),
                'constants': path.resolve(__dirname, 'src/constants'),
                'services': path.resolve(__dirname, 'src/services'),
                'tools': path.resolve(__dirname, 'src/tools'),
                'routers': path.resolve(__dirname, 'src/routers'),
                'routes': path.resolve(__dirname, 'src/routes'),
                'store': path.resolve(__dirname, 'src/store'),
                'hocs': path.resolve(__dirname, 'src/hocs'),
                'hooks': path.resolve(__dirname, 'src/hooks'),
                'layouts': path.resolve(__dirname, 'src/layouts'),
                'pages': path.resolve(__dirname, 'src/pages'),
                'portals': path.resolve(__dirname, 'src/portals'),
                'components': path.resolve(__dirname, 'src/components')
            }
        },
        base: '/',
        build: {
            assetsDir: 'assets'
        }
    };
});
