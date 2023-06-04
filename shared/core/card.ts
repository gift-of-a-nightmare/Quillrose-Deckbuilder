import {Sigil} from './sigil';

export enum Rarity {
    NOVICE = 'novice',
    ADEPT = 'adept',
    EXPERT = 'expert',
    LEGENDARY = 'legendary'
}

export interface Card {
    name: string;
    cost: string;
    art: string;
    rarity: Rarity;
    cardType: string;
    cardSubType: string;
    attack: number;
    sigils: Sigil[];
    textPrimary: string;
    textSecondary: string;
    textFlavour: string;
    cardSymbols: string[];
    cardId: string;
}