import { Deck } from "./deck";

export enum Role {
    PLAYER = 'player',
    ADMINISTRATOR = 'administrator'
}

export interface User {
    userId: string;
    username: string;
    password: string;
    email: string;
    roles: Role[];
    decks: Deck[];
}