import { CardService } from "../../../shared/services/cardService";
import { Card, Rarity } from "../../../shared/core/card";

class CardServiceLocal implements CardService {
    private cards: Card[] = [];
  
    constructor() {
      this.cards = [
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
    }
  
    async getAllCards(): Promise<Card[]> {
      return this.cards;
    }
  
    async getCardById(id: string): Promise<Card | null> {
      const card = this.cards.find((c) => c.cardId === id);
      return card ? card : null;
    }
  
    async createCard(card: Card): Promise<Card> {
      this.cards.push(card);
      return card;
    }
  
    async updateCard(id: string, updatedCard: Card): Promise<Card | null> {
      const index = this.cards.findIndex((c) => c.cardId === id);
      if (index !== -1) {
        this.cards[index] = updatedCard;
        return updatedCard;
      }
      return null;
    }
  
    async deleteCard(id: string): Promise<boolean> {
      const index = this.cards.findIndex((c) => c.cardId === id);
      if (index !== -1) {
        this.cards.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
export default CardServiceLocal;