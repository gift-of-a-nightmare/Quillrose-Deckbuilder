import { CRUDService } from "~shared/services/crudService";
import { Card } from "~shared/core/card";
import { cards } from "./db";
import { CardService } from "../cardService";

// Implement the CRUDService for Card
export const CRUDCardService: CardService = {
    getAll: async () => {
        return cards;
    },
    getById: async (id: string) => {
        const card = cards.find((c) => c.cardId === id);
        return card ? card : null;
    },
    create: async (card: Card) => {
        cards.push(card);
        return card;
    },
    update: async (id: string, updatedCard: Card) => {
        const index = cards.findIndex((c) => c.cardId === id);
        if (index !== -1) {
            cards[index] = updatedCard;
            return updatedCard;
        }
        return null;
    },
    delete: async (id: string) => {
        const index = cards.findIndex((c) => c.cardId === id);
        if (index !== -1) {
            cards.splice(index, 1);
            return true;
        }
        return false;
    },

    // Custom functions
    searchByName: function (name: string): Promise<Card | null> {
        throw new Error("Function not implemented.");
    },
    searchBySymbol: function (symbols: string[]): Promise<Card | null> {
        throw new Error("Function not implemented.");
    }
};