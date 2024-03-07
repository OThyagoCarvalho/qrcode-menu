'use client'
import { Button } from "@nextui-org/react";
import InputText from "../components/InputText"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CreateSection from "../components/CreateSection";

export default function EditMenu () {
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '16px'
            }}

        >
            <div
                style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    alignItems: 'start',
                    width: 'fit-content'
                }}
            >   
                <Button
                    radius="sm"
                    isIconOnly
                    >
                    <ArrowBackRoundedIcon 
                        fontSize="large"
                    />
                </Button>
                {/* <InputText
                    variant="underlined"
                    placeholder="Nome do Menu"
                /> */}
                <h1>
                    Título do Cardápio
                </h1>
            </div>


            <section
            id="menu-edition-and-preview-section"
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '24px 24px 0 0',
                padding: '24px 24px 0 24px',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                minHeight: 'fit-content',
                background: 'white'
                
            }}
                >
                <CreateSection />
            </section>
        </main>
    )
}