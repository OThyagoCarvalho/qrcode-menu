import { SuggestionCardProps } from "./SuggestionCard"
import SuggestionCard from "./SuggestionCard"

export default function SuggestionCardsGroup () {

    const cardsList: SuggestionCardProps[] = [
        {
            cardTitle: 'Modelo Sorveteria',
            cardImgPath: 'summer-dessert-sweet-ice-cream.jpg',
            cardImgAlt: 'Modelo Sorveteria'
        },
        {
            cardTitle: 'Modelo Bar',
            cardImgPath: 'pexels-marcus-herzberg-1058277.jpg',
            cardImgAlt: 'Modelo bar'
        },
        {
            cardTitle: 'Modelo Padaria',
            cardImgPath: 'pexels-nadezhda-moryak-4409269.jpg',
            cardImgAlt: 'Modelo Padaria'
        },
        {
            cardTitle: 'Modelo Saudável',
            cardImgPath: 'pexels-julie-aagaard-2351274.jpg',
            cardImgAlt: 'Modelo Saudável'
        }
    ]

    return (
        <div > 
        <h2
            style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '12px'
            }}
        >
            Sugestões de Modelo
        </h2>
        <div
            className="gap-2 grid grid-cols-2" style={{
                width: '360px',
                maxHeight: 'fit-contet'
            }}
        >
            {cardsList.map( card => <SuggestionCard cardTitle={card.cardTitle} cardImgPath={card.cardImgPath} cardImgAlt={card.cardImgAlt} />)}
        </div>
        </div>
    )
}