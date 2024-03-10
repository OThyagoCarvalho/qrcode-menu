'use client'
import SuggestionCardsGroup from "../components/SuggestionCardsGroup";
import LastCreatedMenuCardsGroup from "../components/LastCreatedMenuCardsGroup";
import { Button } from "@nextui-org/react";
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectMenus, addMenu } from "../redux/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { redirect } from "next/dist/server/api-utils";
import AddProduct from "../components/addProductForm";

export default function Dashboard () {

    // this contains all data of the menus in store
    // that was either retrieved from the firestore or initialized from scratch
    const menus = useAppSelector(selectMenus)
    console.log(menus)

    const dispatch = useAppDispatch()
   

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
                justifyContent: 'space-between',                
                height: '100vh',
                minHeight: 'fit-content',
                background: 'white',
                gap: '48px'             
            }}
            >
                    <div
                        style={{
                            overflowY: 'auto'
                        }}
                    >
                        <Link 
                            href={`/edit-menu?menu=meu-0${menus.length}menu`}
                        >
                    <Button
                        variant="flat"
                        isIconOnly
                        className="bg-red-900 h-[96px] w-[96px] mb-6 text-red-100"
                        radius="lg"
                        onClick={ () => {
                            console.log('clicked')
                            dispatch(addMenu({
                                menuTitle: `meu-0${menus.length}menu`
                            }))
                        }}  
                        >
                        <ControlPointTwoToneIcon
                            fontSize="large"
                            color="inherit"
                            />
                    </Button>
                        </Link> 
                        {
                            (menus.length > 1 || menus[0].menuTitle) && <LastCreatedMenuCardsGroup cardsList={menus} />                                              
                        }
                    </div>
                    <SuggestionCardsGroup />
                </section>
        </main>
)
}

const mockedcardsList = [
    {  menuTitle : 'Default Title', 
    menuDescription : 'Adicionar uma descrição ao seu menu ajuda na organização de seus cardápios.', 
    menuUrl : 'data:image/png;base64,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',
    menuThumbnailImgPath: 'https://previews.123rf.com/images/marchie/marchie1709/marchie170900025/85841502-christmas-food-menu-for-restaurant-and-cafe-design-template-with-holiday-hand-drawn-graphic.jpg'                    
},
{  menuTitle : 'Default Title', 
menuDescription : 'Adicionar uma descrição ao seu menu ajuda na organização de seus cardápios.', 
menuUrl : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADg4OCqqqphYWH7+/sgICCkpKQtLS2srKxqampnZ2fe3t4wMDDb29sICAjv7+/l5eUdHR1dXV0oKCigoKC+vr7GxsZubm5ISEjU1NQSEhIWFhaysrJzc3POzs6Li4uTk5M7Ozs2NjZWVlaKqxW8AAAI90lEQVR4nO2d62KqOhCFVbyBKIJotdqLu33/ZzzCDPtk6ZCAhqq7s36V3D+xkkwmQ6+nUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqn86HUStNFGqBWOXA1uoMtNqx4nrzcSTvqttKJaazNtPHI1OIQuV+26nNxIGLTrbihgTEeuBiPoctiuy0AJlVAJRUL4pUHCtVBr9QCELwOXcpNwGRdJ6UogpCxUKhDmzh5fvBIOnAWnJiErEgjdIsKps9zgZwlH3gmdtZSwoZSw0q8lTJLkuQjzbHwuzkLCSWJmfRm1qgFFh4uWkolAOOhflMvyDgmz/qVEQiGrDwOaCS3JhJfKOiQcX0U490w4VkIl9EfI881/mPAlXhSiSXm+nZ00ZJvMsbiIor2Q9UyEoEhqnm7vFtKelnAmtM61pBWwEiqhEt5IKBljhkLrz0v4GoQnve1oQGEpMPhPlk9OyNqWaXNIkyblz0sorYADoZYSKqEStiAUuuvH9YRk894D4RsQ7oVaQBhLXXZIKNjW41E9YUpF+GIYbU/aCQ1+zIqcmbS2GAmbAFXdLgjrJRKC8PsGDaaUJq0PLXomwoES2hpUQpdu2l2TBtSY0Nnjfe+heQNG1YAKg3V+gAZNw3bCY73PPcynLvVNwiD7PyP/MzJp8In/p2g4fzc/iWqX29lj7pWwqaQVcG6Z09Aon9BTwe2L4Zy1KaESdkW4Eght/4dEiBbhlp57txJuVsMWWn0C4XeZuOU59CI+KT0KhKu0yFqQ7ab32a7LjTDq7oU7MyRcB0mbp+u7jPU6gbmJJc1pkPBWT9GflBIq4eNLIkwlwuz+hK/ryUnrZcOsZZk2ITs+m+57QZkWhIaqrBA0qWtwzQ75m7LERMq6Wnw34vosuFELSgvNtBHZIC1LR1ZIlRdmmrR0TOgi9nPnLetDKSuWCGkrW9pdQ4XCp4mLQPJv6NJe6sxSQquUsNom8Eto+aVhQph88iPhzUxj0z065Et6E/qKAYOXHdDXrYRLsqPzAigqNPukCyYcRoZ4CLttecHw4JC/McrP3qnddFVcVQZ/ICSrfhrOihLDD9onoNpDP4Sog/l9cy8dLd9tUi5tMEnfF/wCQ3G/hGPPhPOWhPyoTJRQCV2EkTdCcaPXTQjFPRGOSBVh8XcvGBeW5/meb4dhjZ5nQMiVgTA3zeGDxKh8WFQVjFpI6NXmzXrP54WozX359zgkUHKayWFU6DTzZ3oqzqb7ijDuGeNHpC31VaqqhYRULvZKuBW+g6GZNYbiklsQ/vdatnrAXhpJhCRPcxofhDBra0m4VUIl9EBI8/3MSYjPGAshWPWR0LLsuFo08075c40Kn/rZCgiPwyJta/q9pEGZxjNvJlyll1nooFNZ9csSUSIQblL//jSwx5JA07AI5El5X8gST5Rw1t7MQqt+LhCyvBLCFIQJRXMTWD4bE1rspeNawk7W+EqohA9MKP3SMCEaY+CXBrLQKxUwbIT1vzRM6MkiTK714U4gfA+LrMoIT/FwjmaWO2AOE+7ehJL0ke3MlngYTLhce4nAw9oKhCzL9gspkxoEQvGRAJKsiX7VlFBy6bX4b6EvhpsQLMJKqIS/jZCP7UqEMN9fnA/tpEN9s0hoiStmWandqk050R9+mE7y4D8fwx1iI/yRxkVxexbvZRNHs8Fq2QGEvI75LtPy2AyzsytXNVFuEqYr8/Tw1WrsIwxCjyEal7QCtp0ooQvp8fNju2sWNV3jP96ZmaZSwl9EWO8FLW68kfzGNgnHhel5j4QjwV5tXtUQ0l4AZIE5nFXavKeVwX8/P9f0yyshjp+02BfbBhkvkd5Ld/svKrI4XO5bMOF+7trSqP/IzuSVUBKugGG+LzqRwgoYsm7SjxHCPEMJlbCNOiREt6BnJ0R/GpoavzgJwZ+GCfOt4XdTecZQLTwKa/ZVeeEshVOy5IVz88wbfaLgNlgI0QxXH2ZnLz3WaYNpRBdiKJEbmVCW0+oWQrdfGy04bb4YTnupEirhryHEXxrJGYnGmvC8VCDswR4wK6on5E9zb34uHRKiQ/7EEPrPMy746rMCuhu7NyONg/MgYRSYlfkiMNz4A7TqlyUDT1b9lmoajR8JwU2WF4HoJiv9R9znlMZ1hJaogh36eV8nJVTCf5yQH5V0gYFduvDVv+kc8Msg/qvKPn8sz/xyyP25eUR4EJZ9zcj+tqcWPwfmEeGU2qKsbz+EN53llo5iwG7uHGxQ0t6TGBMUStz1PL50whL+o9yEuOZiefXzVkIltBNOr/s/7IKwZXwaN2G0z7Ls8AWha8LLvs5C1wAhGdEzXMdcTdgyxpCF8JCX8YQWPbDPm+GHzs6uFVl7vFGm62nL1xJc6ro4UU1Pq4tZbkdgcK69Vd7voRIqYaHHIYRZmztuogX+xwiFOJRi7MsNBbP8MAt+zMzYly8pZG0vs4DwmJq+O0Q4TE0Pf0+EfUGW+KVwNoSz3oQmpKyk3uCPT3y/MRWuikHLspzLlPzaRF+MLk5YKqES/uOE0i+N5U2rAJ9ZtjQg7a6EG+PNuBOIq1953QtZlXom4ZZd9tngb54LuCuhRWyncZbDU2QQgceTra0rQmmNL6n72CaPRdh9fBolVML/RTZvixs/CzH48UMXd/2lIYf8b7R5g2v9oHyb16J8WVcV0odVvs5rxmuj0WtRLKbTw0N+CVhZoIr2c9d3BblXeuDGz6KR55Kh8XGe+E0J3X7eSPg4szYlfFzCq95Deh2h+H/YRQSeK98l25RwXjR4OHMmKl4zm51t2tDLaZkwM4aR+CWsl/1dskkh50celOXOrYllWoeb9X4Im32pOgzvYZEPwvrz+Cgl7EZK+FcWwrwdoXuu51VM+CLY81F5PeF7ac7ndQHa58EhP4S+KC0dlvsDobkJAB7+sSerflNZnoe4/cJ7ARDaFKyJiWWLn9L8Rkr2QGiJWG6xl0qEHUZvUUIlfEjCpn6ULP7NWDclhHDtklVf+qD9xmRHS7tT0itxWUuzpeptueFlrSrajmUYZoO+IvCoVCqVSqVSqVQqlUqlUqlUKpVKpVKpVKrefzAOsWAU/cybAAAAAElFTkSuQmCC',
menuThumbnailImgPath: 'https://previews.123rf.com/images/marchie/marchie1709/marchie170900025/85841502-christmas-food-menu-for-restaurant-and-cafe-design-template-with-holiday-hand-drawn-graphic.jpg'                    
}    
]
