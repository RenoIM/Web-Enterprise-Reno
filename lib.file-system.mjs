import { readFile, writeFile } from 'fs/promises';

async function ExtractFile() {
    try {
        const data = await readFile('data.txt', 'utf8');
        console.log('Isi file:', data);
    } catch (err) {
        console.error('Error membaca file:', err);
    }
}

async function NulisKeFile() {
    try {
        await writeFile('output.txt', 'Testing Testing Testing Hello, Node.js!')
        console.log('berhasil ditulis');
    } catch (err) {
        console.error('Error saat menulis file', err);
    }
}

ExtractFile();
NulisKeFile();