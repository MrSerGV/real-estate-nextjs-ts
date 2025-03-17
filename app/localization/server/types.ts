export type ServerDictionary = {
    homePage: HomePage,
    footer: Footer,
    homePageProperties: HomePageProperties,
    infoBoxesList: InfoBoxesList,
    pagination: Pagination,
    propertyCard: PropertyCard,
};

type HomePage = {
    title: string,
    description: string,
};

type HomePageProperties = {
    recentPropertiesText: string,
    noPropertiesFoundText: string,
    viewAllPropertiesText: string,
}

type InfoBoxesList = {
    headingText1: string,
    infoText1: string,
    buttonText1: string,
    headingText2: string,
    infoText2: string,
    buttonText2: string,
}

type Footer = {
    footerText: string,
    linkToPropertyText: string,
    linkToTermsText: string,
}

type Pagination = {
    previousButtonText: string,
    nextButtonText: string,
    counterText: string,
}

type PropertyCard = {
    buttonText: string,
    propertyBeds: string,
    propertyBaths: string,
    propertySquare: string,
    propertyWeekly: string,
    propertyMonthly: string,
    propertyMonthlyShort: string,
    propertyWeeklyShort: string,
    propertyNight: string,
}
