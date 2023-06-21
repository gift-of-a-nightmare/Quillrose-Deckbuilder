import React, {useState, useEffect} from "react";
import CardServiceAPI from "src/services/CardServiceApi";
import { Card } from '~shared/core/card';
import { AllCardsResult } from "./AllCardsResult";

export const CardResultGrid : React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
    try {
        const fetchedCards = await CardServiceAPI.getAll();
        setCards(fetchedCards);
        setFetching(false);
    } catch (error) {
        console.error(error);
        setFetching(false);
    }
    };

    return(
        <div>
            <h1>CARD RESULT GRID</h1>

            <AllCardsResult/>
        </div>
    )
}