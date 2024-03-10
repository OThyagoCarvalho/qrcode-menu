import { Button, Divider, Input, Textarea, Tooltip } from "@nextui-org/react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

export default function AddProduct() {
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
          display: "flex",
          gap: "16px",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <Tooltip
          content={
            "Destacar item: este produto aparecerá primeiro que todos os outros"
          }
        >
          <Button isIconOnly>
            <StarRateRoundedIcon />
          </Button>
        </Tooltip>
        <Tooltip content={"Adicionar Imagem"}>
          <Button isIconOnly>
            <AddPhotoAlternateRoundedIcon />
          </Button>
        </Tooltip>
      </div>
      <Input label="nome do produto" />
      <Textarea
        label="(descrição opcional)"
        placeholder="Descreva seu produto"
        className="max-w-xs"
      />
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <Input type="number" step="any" min="0.01" label="preço" />
        <Input type="number" variant="flat" label="quantidade" />
      </div>
      <Input
        label="preço promocional opcional"
        type="number"
        step="any"
        min="0.01"
      />
      <Divider />
      <div className="gap-4 flex justify-center">
        <Button>Limpar</Button>
        <Button className="bg-red-900 text-white">Salvar</Button>
      </div>
    </section>
  );
}
