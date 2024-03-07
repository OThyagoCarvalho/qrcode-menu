import InputText from "./InputText";
import { Divider } from "@nextui-org/react";



export default function CreateSection () {

    return (
        <section
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '12px',
                padding: '16px',
                minHeight: 'fit-content',
                boxSizing: 'border-box',
                maxWidth: '360px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
            <InputText
                variant="underlined"
                placeholder="Titulo da Seção"
            />
            <Divider
                style={{
                    margin: '4px 0'
                }}
            />
            <InputText />

        </section>
    )
}


