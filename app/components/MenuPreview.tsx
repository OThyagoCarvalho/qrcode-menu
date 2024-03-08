
export interface MenuData {
    menuId: string,
    menuTitle: string,
    menuDescription? : string,
    menuUrl: string,
    menuCategories:  MenuCategory[]
}

interface MenuCategory {
    categoryId?: string
    categoryTitle: string,
    categoryItems?: MenuItem[]
}

interface MenuItem {
    itemId: string
    itemTitle: string,
    itemPrice: number,
    itemQuantity?: number,
    itemCategoryTitle?: string,
    itemWeight?: number,
    /**
     * 
     * Defines whether the item should be displayed in the featured items section
     * 
     * @default false
     * 
     */
    isFeatured?: boolean

    /**
     * 
     * If defined, takes precedence over the default itemPrice and marks item as promotional
     * 
     */
    promoPrice?: number

    /**
     * 
     * Shows how many time the item has been bookmarked by users
     * 
     * @default 0
     * 
     */
    bookmarks?: number

    itemUrl?: string
}

export default function MenuPreview ({  menuTitle = 'Default Menu Title', 
                                        menuCategories = [{ categoryTitle: 'Default Category', 
                                                            categoryItems: [ {
                                                                itemId: 'default_001',
                                                                itemTitle: 'Default Item',
                                                                itemPrice: 28},
                                                                {
                                                                    itemId: 'default_002',
                                                                    itemTitle: 'Another default Item',
                                                                    itemPrice: 32.50}
                                        ]}] ,
                                        ...props}: MenuData) {

                                            return (
                                                    <main
                                                        style={{
                                                            background: '#2A3747',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            flex: '1',
                                                            height: '100%',
                                                            padding: '24px',
                                                            borderRadius: '12px 12px 0 0'
                                                        }}
                                                    >
                                                        <section
                                                            style={{
                                                                border: '1px dashed white',
                                                                borderBottom: 'none' ,
                                                                width: '100%',
                                                                borderRadius: '12px 12px 0 0'                   
                                                            }}
                                                        >
                                                        <h2
                                                            style={{
                                                                margin: '24px 0',
                                                                fontSize: '48px',
                                                                fontFamily: 'Montserrat, sans-serif',
                                                                fontWeight: 'bold',
                                                                color: 'white',
                                                                textAlign: 'center',
                                                                lineHeight: 1.5
                                                            }}
                                                        > { menuTitle} </h2>

                                                        <section
                                                            style={{
                                                                marginTop: '72px'
                                                            }}
                                                        >
                                                            {
                                                                menuCategories.map( category => {
                                                                    return (
                                                                        <div>
                                                                            <h3
                                                                                style={{
                                                                                    fontSize: '28px',
                                                                                    fontWeight: 'bold',
                                                                                    color: 'white',
                                                                                    textAlign: 'center'
                                                                                }}
                                                                            
                                                                            > {category.categoryTitle} </h3>
                                                                            <ul
                                                                                style={{
                                                                                    margin: '48px 96px'
                                                                                }}
                                                                            
                                                                            >
                                                                                {category.categoryItems?.map( item => {
                                                                                    return (
                                                                                       <li
                                                                                            style={{
                                                                                                color: 'white',
                                                                                                fontSize: '16px',
                                                                                                fontWeight: 'lighter',
                                                                                                display: 'flex',
                                                                                                flex: '1',
                                                                                                justifyContent: 'space-between',
                                                                                                marginBottom: '16px'                                                                                                                                                                                              
                                                                                            }}
                                                                                       >
                                                                                            <p>
                                                                                                { item.itemTitle}
                                                                                            </p>
                                                                                            <p> R$ {item.itemPrice}</p>
                                                                                       </li> 
                                                                                    )
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </section>
                                                        </section>
                                                    </main>
                                                )
}