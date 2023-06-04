import {Card} from './card'

export interface Deck {
    name: string;
    deckCards: Card[];
    deckInks: Card[];
}