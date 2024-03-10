import { Textarea } from "@nextui-org/react";
import InputText from "./InputText";


export default function AddProduct () {

    return (
        <section
            style={{
                border: '1px solid #9c9c9c',
                borderRadius: '12px',
                padding: '16px',
                minHeight: 'fit-content',
                maxHeight: 'max-content',
                boxSizing: 'border-box',
                maxWidth: '360px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
        <InputText
        <Textarea
            label="(opcional)"
            placeholder="Descreva seu produto"
            className="max-w-xs"
            />

        </section>
    )
}