import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function SignInOutCard () {
    return (
        <Card className="h-96 w-80 p-0 rounded-3xl " shadow="none" isFooterBlurred isPressable>
            <CardHeader

                className="absolute top-0 rounded-3xl text-white text-lg font-semibold h-32 bg-gradient-to-b from-black"
            >   
            </CardHeader>
            <CardBody
                className="p-0 rounded-3xl">
                <Image  
                    src="pexels-andrea-piacquadio-3801422.jpg"
                    radius="lg"
                    removeWrapper
                    shadow="none"
                    className="w-full h-full object-cover z-0 rounded-3xl"
                />
            </CardBody>
        </Card>
    )
}