import { Card, Rarity } from "~shared/core/card";
import { User, Role  } from "~shared/core/user"

// Mock database for front-end development purposes.
export const cards: Card[] = [
  {
    name: "Card 1",
    cost: "3{C}",
    art: "card1.png",
    rarity: Rarity.NOVICE,
    cardType: "Type 1",
    cardSubType: "Subtype 1",
    attack: 5,
    sigils: [],
    textPrimary: "Primary Text",
    textSecondary: "Secondary Text",
    textFlavour: "Flavour Text",
    cardSymbols: ["symbol1"],
    cardId: "card1"
  },
  {
    name: "Card 2",
    cost: "2{K}{K}",
    art: "card2.png",
    rarity: Rarity.ADEPT,
    cardType: "Type 2",
    cardSubType: "Subtype 2",
    attack: 3,
    sigils: [],
    textPrimary: "Primary Text",
    textSecondary: "Secondary Text",
    textFlavour: "Flavour Text",
    cardSymbols: ["symbol2"],
    cardId: "card2"
  }
];

export const users: User[] = [
  {
    userId: "1",
    username: "user1",
    password: "password1",
    email: "user1@example.com",
    roles: [Role.PLAYER],
    decks: []
  },
  {
    userId: "2",
    username: "user2",
    password: "password2",
    email: "user2@example.com",
    roles: [Role.PLAYER],
    decks: []
  },
  {
    userId: "3",
    username: "admin",
    password: "adminpassword",
    email: "admin@example.com",
    roles: [Role.PLAYER, Role.ADMINISTRATOR],
    decks: []
  }
];