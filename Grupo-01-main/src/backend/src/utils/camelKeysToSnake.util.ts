import camelToSnake from './camelToSnake.util';

export default function camelKeysToSnake(obj: any): any {
    const result: Record<string, any> = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelKey = camelToSnake(key);
            result[camelKey] = obj[key];
        }
    }
    return result;
}
