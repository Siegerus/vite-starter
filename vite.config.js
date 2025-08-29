import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: 'src',
    base: '',
    plugins: [handlebars({
 
        partialDirectory: resolve(__dirname, 'src/partials'),
        reloadOnPartialChange: true,
    })],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
            }
        }
    },
});