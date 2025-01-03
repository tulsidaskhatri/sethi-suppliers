export interface Product {
    title: string;
    urduTitle: string;
    price: number;
    netWeight?: string;
    image: Image;
    categories: Category[];
}

export interface Category {
    key: string;
    title: string;
}

export interface Image {
    url: string;
    alt?: string;
}

export interface Link {
    label: string;
    link: string;
}

export interface Contact {
    phone: string;
}
