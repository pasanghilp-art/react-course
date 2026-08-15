import { it, expect, describe } from 'vitest';
import { priceFormater } from './money';

describe('FormatMoney',()=>{
    it('format 1999 cents as $19.99',()=>{
        expect(priceFormater(1999)).toBe('$19.99');
    });

    it('display 2 decimals',()=>{
        expect(priceFormater(1090)).toBe('$10.90');
    });
});