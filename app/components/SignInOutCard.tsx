import { Card, CardBody, Image } from "@nextui-org/react";

type SignInOutCardProps = {
    imgPath: string
}

export default function SignInOutCard ({imgPath}: SignInOutCardProps) {
    return (
        <Card className="h-96 w-80 p-0 " radius="lg" shadow="none" isFooterBlurred isPressable>
            
            <CardBody
                className="p-0 rounded-3xl">
                <Image
                    height={384}
                    width={287}
                    src={imgPath}
                    radius="lg"
                    removeWrapper
                    shadow="none"
                    className="w-full h-full object-cover z-0 rounded-3xl"
                />
            </CardBody>
        </Card>
    )
}