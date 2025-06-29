export interface ProductDTO {
    id:         string;
    title:      string;
    price:      number;
    rating:     number;
    imageUri:   string;
    unitsLeft:  number;
    category:   string;
}

export interface OrderDTO {
    id:         string;
    price:      number;
    title:      string;
    rating:     number;
    imageUri:   string;
    quantity:   number;
    status:     string;
}