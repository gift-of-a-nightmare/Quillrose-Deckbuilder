import { Card } from '../core/card';
import { CRUDService } from './crudService';

export interface CardService extends CRUDService<Card> {
    searchByName(name: string): Promise<Card | null>;
    searchBySymbol(symbols: string[]): Promise<Card | null>;
}