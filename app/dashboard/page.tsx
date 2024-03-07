import SuggestionCardsGroup from "../components/SuggestionCardsGroup";




export default function Dashboard () {

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '16px'
            }}

        >
             <section
            id="dashboard-menu"
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '24px 24px 0 0',
                padding: '24px 24px 0 24px',
                display: 'flex',                
                height: '100vh',
                minHeight: 'fit-content',
                background: 'white',
                gap: '48px'             
                
            }}
                >   
                    <SuggestionCardsGroup />
                </section>
        </main>)

}

