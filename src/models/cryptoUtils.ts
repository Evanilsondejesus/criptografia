import crypto from 'crypto';

const algorithm = 'aes-256-cbc';

/**
 * Criptografa o texto usando o algoritmo AES-256-CBC.
 * 
 * @param text - O texto a ser criptografado.
 * @param key - A chave de criptografia.
 * @param iv - O vetor de inicialização.
 * @returns - O texto criptografado em hexadecimal.
 */
function encrypt(text: string, key: Buffer, iv: Buffer): string {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

/**
 * Descriptografa o texto criptografado usando o algoritmo AES-256-CBC.
 * 
 * @param text - O texto criptografado em hexadecimal.
 * @param key - A chave de criptografia.
 * @param iv - O vetor de inicialização.
 * @returns - O texto descriptografado em UTF-8.
 */
function decrypt(text: string, key: Buffer, iv: Buffer): string {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

export { encrypt, decrypt };
