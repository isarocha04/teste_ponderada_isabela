import snakeToCamel from './snakeToCamel.util';

export default function snakeKeysToCamel(obj: any): any {
    const result: Record<string, any> = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelKey = snakeToCamel(key);
            result[camelKey] = obj[key];
        }
    }
    return result;
}
