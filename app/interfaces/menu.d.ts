import { UserInfo } from "firebase/auth";

export interface AppUser extends Omit<UserInfo, 'phoneNumber', 'providerId'> {
}

export interface MenuData {
  userId?: string;
  menuId?: string;
  menuTitle: string;
  menuDescription?: string;
  menuUrl?: string;
  menuCategories?: MenuCategory[];
  menuThumbnailImgPath?: string;
}

export interface MenuCategory {
  categoryId?: string;
  menuId?: string;
  categoryTitle: string;
  categoryItems?: MenuItem[];
}

export interface MenuItem {
  itemId?: string;
  categoryId?: string;
  menuId?: string;
  itemTitle: string;
  itemPrice: number;
  itemQuantity?: number;
  itemCategoryTitle?: string;
  itemWeight?: number;
  /**
   *
   * Defines whether the item should be displayed in the featured items section
   *
   * @default false
   *
   */
  isFeatured?: boolean;

  /**
   *
   * If defined, takes precedence over the default itemPrice and marks item as promotional
   *
   */
  promoPrice?: number;

  /**
   *
   * Shows how many time the item has been bookmarked by users
   *
   * @default 0
   *
   */
  bookmarks?: number;

  itemUrl?: string;
  itemThumbnailImgPath?: string;
}

interface updateMenuAddCategoryPayload {
  menuTitle: string,
  newCategory: MenuCategory
}

interface updateCategoryAddProductPayload {
  menuTitle: string,
  categoryTitle: string,
  newProduct: MenuItem
}