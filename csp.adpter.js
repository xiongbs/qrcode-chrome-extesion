import glob from 'tiny-glob';
import { readFileSync, writeFileSync } from 'fs';
import {dirname, join} from 'path';

const dest = 'build';
function uuid() {
    return crypto.randomUUID();
}

function handleHtml(htmlPath, scriptFileName) {
    const html = readFileSync(htmlPath).toString();
    const matchReg = /<script\b([^>]*)>([\s\S]*)<\/script>/gm;
    const result = matchReg.exec(html);
    if (result && result[1] && result[2]) {
        const scriptTag = `<script ${result[1]} src="/${scriptFileName}"></script>`
        return {
            html: html.replace(matchReg, scriptTag),
            script: result[2]
        }
    }
}


export function extensionAdapter({ pages = 'build', assets = pages, fallback, precompress = false } = {}) {
    return {
        name: '@sveltejs/csp-adpter',
        async adapt (builder) {
            const fileNames = await glob(`${pages}/**/*.{html}`);
            for (const fileName of fileNames) {
                const dir = dirname(fileName);
                const scriptFileName = `start-${uuid()}.js`;
                const res = handleHtml(
                    fileName,
                    scriptFileName
                );

                if (res) {
                    writeFileSync(fileName, res.html);
                    writeFileSync(join(dir, scriptFileName), res.script);
                }
            }

        }
    }
}