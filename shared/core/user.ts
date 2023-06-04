import { Deck } from "./deck";

enum Role {
    PLAYER = 'player',
    ADMINISTRATOR = 'administrator'
}

export interface User {
    username: string;
    password: string;
    email: string;
    roles: Role[];
    decks: Deck[];
}