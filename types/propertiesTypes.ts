export type PropertiesType  = {
    _id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: {
        state: string;
        city: string;
        street: string;
        zipcode: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities: Array<string>;
    rates: {
        monthly?: number;
        weekly?: number;
        nightly?: number;
    };
    seller_info: {
        name: string;
        email: string;
        phone: string;
    };
    images: string[];
    is_featured: boolean;
    createdAt: string;
    updatedAt: string;
}