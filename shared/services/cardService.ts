import { Card } from '../core/card';

export interface CardService {
    getAllCards(): Promise<Card[]>;
    getCardById(id: string): Promise<Card | null>;
    createCard(card: Card): Promise<Card>;
    updateCard(id: string, card: Card): Promise<Card | null>;
    deleteCard(id: string): Promise<boolean>;
}