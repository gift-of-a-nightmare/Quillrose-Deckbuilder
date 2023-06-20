import { CRUDService } from "~shared/services/crudService";
import { User } from "~shared/core/user"
import { users }  from "./db";
import { UserService } from "../userService";

// Implement the CRUDService for Card
export const CRUDUserService: UserService = {
    getAll: async () => {
        return users;
    },
    getById: async (id: string) => {
        const card = users.find((u) => u.userId === id);
        return card ? card : null;
    },
    create: async (card: User) => {
        users.push(card);
        return card;
    },
    update: async (id: string, updatedCard: User) => {
        const index = users.findIndex((u) => u.userId === id);
        if (index !== -1) {
          users[index] = updatedCard;
          return updatedCard;
        }
        return null;
    },
    delete: async (id: string) => {
        const index = users.findIndex((u) => u.userId === id);
        if (index !== -1) {
          users.splice(index, 1);
          return true;
        }
        return false;
    }
};