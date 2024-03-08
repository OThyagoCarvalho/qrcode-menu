'use client'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export interface SuggestionCardProps {
    cardImgAlt: string;
    cardImgPath: string;
    cardTitle: string;
}

export default function SuggestionCard ({ cardImgAlt, cardTitle, cardImgPath } : SuggestionCardProps) {

    return (
        <Card shadow="sm" className="flex-grow-0"
        isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 flex-grow-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={cardImgAlt}
              className="w-full object-cover h-[200px]"
              src={cardImgPath}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{cardTitle}</b>
          </CardFooter>
        </Card>
    )
}