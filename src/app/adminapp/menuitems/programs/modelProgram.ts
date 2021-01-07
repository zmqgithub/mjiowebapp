// To parse this data:
//
//   import { Convert, ProgramModel } from "./file";
//
//   const programModel = Convert.toProgramModel(json);

export interface ProgramModel {
    type:            string;
    name:            string;
    fater_name:      string;
    Date:            string;
    time:            string;
    address:         Address;
    quran_khani:     string;
    sozkhan:         string;
    peshakhan:       string;
    zakir:           string;
    zakir_add:       string;
    nahuhakhaani:    string;
    note:            string;
    live_on:         string;
    contact_numbers: string[];
    personal_info:   PersonalInfo;
}

export interface Address {
    place:     string;
    disrtict:  string;
    latitude:  number;
    longitude: number;
}

export interface PersonalInfo {
    name:    string;
    contact: Contact;
}

export interface Contact {
    phone: string[];
    email: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProgramModel(json: string): ProgramModel {
        return JSON.parse(json);
    }

    public static programModelToJson(value: ProgramModel): string {
        return JSON.stringify(value);
    }
}
