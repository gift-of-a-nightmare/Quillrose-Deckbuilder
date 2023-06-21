import { CardService } from '~shared/services/cardService';
import { CRUDService } from '~shared/services/crudService';
import { Card } from '~shared/core/card';

// Change to ENV file later.
const API_URL = process.env.REACT_APP_SERVER_URL + "/cards";

const CardServiceAPI: CardService = {
    getAll: async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const cards: Card[] = await response.json();
        return cards;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getById: async (id) => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch card with ID: ${id}`);
        }
        const card: Card = await response.json();
        return card;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    create: async (card) => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(card),
        });
        if (!response.ok) {
          throw new Error('Failed to create card');
        }
        const createdCard: Card = await response.json();
        return createdCard;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    update: async (id, card) => {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(card),
        });
        if (!response.ok) {
          throw new Error(`Failed to update card with ID: ${id}`);
        }
        const updatedCard: Card = await response.json();
        return updatedCard;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    delete: async (id) => {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Failed to delete card with ID: ${id}`);
        }
        return true;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    searchByName: async (name) => {
        throw new Error("Function not implemented.");
    },
    searchBySymbol: async (symbols) => {
        throw new Error("Function not implemented.");
    },
  };
  
  export default CardServiceAPI;