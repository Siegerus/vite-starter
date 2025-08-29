import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: 'src',
    base: '',
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            reloadOnPartialChange: true,
            reload: true,
            refresh: true,
        }),
        {
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".hbs")) {
                    server.ws.send({
                        type: "full-reload",
                        path: "*",
                    });
                }
            },
        },
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                main: resolve(__dirname, 'src/page.html'),
            }
        }
    },
});
