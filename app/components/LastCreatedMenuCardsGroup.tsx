

import LastCreatedMenuCard, { LastCreateMenuCardProps } from "./LastCreatedMenuCard"


interface LastCreateMenuCardsGroupProps {
    cardsList: LastCreateMenuCardProps[]
} 

export default function LastCreatedMenuCardsGroup ({ cardsList }: LastCreateMenuCardsGroupProps) {

    return (

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}
        >
            <h2
            style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '12px'
            }}
        >
            Criações Recentes
        </h2>
            {cardsList.map(card => <LastCreatedMenuCard menuTitle={card.menuTitle} 
                                                        menuDescription={card.menuDescription}  
                                                        menuUrl={card.menuUrl} 
                                                        menuThumbnailImgPath={card.menuThumbnailImgPath} 
                                                        /> )}
        </div>
    )
}