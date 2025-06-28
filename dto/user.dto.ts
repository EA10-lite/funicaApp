import { AddressDTO } from "./checkout.dto";

export interface UserDTO {
    email:      string;
    firstName:  string;
    lastName:   string;
    country:    string;
    gender:     'Male' | 'Female';
    phone:      string;
    address:    AddressDTO[];
}