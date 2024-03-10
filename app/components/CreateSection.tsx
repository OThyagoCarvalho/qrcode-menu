import InputText from "./InputText";
import { Divider } from "@nextui-org/react";

interface CreateSectionProps {
  sectionTitle: string;
}

export default function CreateSection({ sectionTitle }: CreateSectionProps) {
  return (
    <section
      style={{
        border: "1px solid #9c9c9c",
        borderRadius: "12px",
        padding: "16px",
        minHeight: "fit-content",
        maxHeight: "max-content",
        boxSizing: "border-box",
        maxWidth: "360px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
        }}
      >
        <h2> {sectionTitle} </h2>
      </div>
      <Divider
        style={{
          margin: "4px 0",
        }}
      />
      <InputText />
    </section>
  );
}
