import React, {useState, useEffect} from "react";
import CardServiceAPI from "src/services/CardServiceApi";
import { Card } from '~shared/core/card';

export const AllCardsResult : React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if(fetching){
            fetchData();
        }
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
            {/* Showcasing cards being fetched. */}
            <div>
                <h2>ALL CARDS:</h2>
                <br></br>
                <ul>
                {cards.map((card) => (
                    <li key={card.cardId}>
                        <h3>{card.name}</h3>
                        <p>Cost: {card.cost}</p>
                        <p>Rarity: {card.rarity}</p>
                        <p>Card Type: {card.cardType}</p>
                        <p>Card Subtype: {card.cardSubType}</p>
                        <p>Attack: {card.attack}</p>
                        <p>Sigils: {card.sigils.map((sigil) => sigil.name).join(', ')}</p>
                        <p>Primary Text: {card.textPrimary}</p>
                        <p>Secondary Text: {card.textSecondary}</p>
                        <p>Flavour Text: {card.textFlavour}</p>
                        <p>Symbols: {card.cardSymbols.join(', ')}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}