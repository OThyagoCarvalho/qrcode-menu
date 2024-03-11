import { Button, Divider, Input, Textarea, Tooltip } from "@nextui-org/react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectMenus, updateCategoryAddProduct } from "../redux/features/menu/menuSlice";
import { MenuItem } from "../interfaces/menu";

interface AddProductProps {
  menuTitle: string;
  categoryTitle?: string;
  onSave?: () => void;
  onClear?: () => void;
}

export default function AddProduct({
  menuTitle,
  categoryTitle = "N/A",
  onSave,
  onClear,
}: AddProductProps) {

    const [productTitle, setProductTitle] = useState('')
    const [ productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState('')    
    const [ productQuantity, setProductQuantity] = useState<undefined | string>(undefined)
    const [ productPromoPrice, setProductPromoPrice] = useState<undefined | string>(undefined)
    const [ productIsFeatured, setProductIsFeatured] = useState<undefined | boolean>(false)

    const dispatch = useAppDispatch()
    const handleSave = () => {
        const product =  {
            categoryTitle: categoryTitle,
            menuTitle: menuTitle,
            newProduct: {
                itemPrice: Number(productPrice),
                itemCategoryTitle: categoryTitle,
                itemTitle: productTitle,
                itemQuantity: productQuantity,
                isFeatured: productIsFeatured,
                promoPrice: productPromoPrice

            } as MenuItem
        }
        onSave && onSave()
        dispatch(updateCategoryAddProduct(
            product
        ))
        handleClear()
    }

    const handleClear = () => {
        setProductTitle('')
        setProductDescription('')
        setProductPrice('')
        setProductQuantity('')
        setProductPromoPrice(undefined)
    }   

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
          justifyContent: "space-between",
        }}
      >
        <p className="text-gray-600"> cat.: {categoryTitle} </p>
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
      </div>
      <Input 
        value={productTitle}
        onValueChange={setProductTitle}      
      label="nome do produto" />
      <Textarea
        value={productDescription}
        onValueChange={setProductDescription}
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
        <Input
          id="product-price"
          type="number"
          step="any"
          min="0.01"
          label="preço"
          value={productPrice}
          onValueChange={setProductPrice}
        />
        <Input
          id="aproduct-quantity"
          type="number"
          variant="flat"
          label="quantidade"
          value={productQuantity}
          onValueChange={setProductQuantity}
        />
      </div>
      <Tooltip
        content="Definir este preço aplicará promoção no produto">
        <Input
          label="preço-promoção (opcional)"
          type="number"
          step="any"
          min="0.01"
          value={productPromoPrice}
          onValueChange={setProductPromoPrice}
        />
      </Tooltip>
      <Divider />
      <div className="gap-4 flex justify-center">
        <Button
            onClick={handleClear}
        >Limpar</Button>
        <Button
            onClick={() => handleSave()}
        className="bg-red-900 text-white">Salvar</Button>
      </div>
    </section>
  );
}
