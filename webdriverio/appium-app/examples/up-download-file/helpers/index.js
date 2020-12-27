import { accessSync } from 'fs-extra';

/**
 * Check if a file exists
 *
 * @param {string} filePath
 *
 * @returns {boolean}
 */
export default function fileExists(filePath) {
    try {
        accessSync(filePath);
        return true;
    } catch (err) {
        return false;
    }
}
