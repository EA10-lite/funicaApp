import { AddressDTO } from "./checkout.dto";

export interface UserDTO {
    email:      string;
    firstName:  string;
    lastName:   string;
    country:    string;
    gender:     string | 'Male' | 'Female';
    phone:      string;
    address:    AddressDTO[];
}