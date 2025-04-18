export type ClientDictionary = {
    "loadingLabel": string,
    "propertySearchForm": PropertySearchForm,
    "menu": Menu,
    "profileMenu": ProfileMenu,
    "bookmark": Bookmark,
    "shareButtons": ShareButtons,
    "logoText": string,
};

type PropertySearchForm = {
    "inputLabel": string,
    "inputPlaceholder": string,
    "selectLabel": string,
    "searchBtnText": string,
    "All": string,
    "Apartment": string,
    "Studio": string,
    "Condo": string,
    "House": string,
    "CabinOrCottage": string,
    "Loft": string,
    "Room": string,
    "Other": string,
};

type Menu = {
    "homeText": string,
    "propertiesText": string,
    "addPropertyText": string,
    "mobileMenuButtonText": string,
    "openUserMenuButtonText": string,
}

type ProfileMenu = {
    "profileButtonText": string,
    "savePropertiesButtonText": string,
    "singOutButtonText": string,
}

type Bookmark = {
    "removeBookmark": string,
    "bookmarkText": string,
    "bookmarkLoading": string,
}

type ShareButtons = {
    "shareText": string,
}
