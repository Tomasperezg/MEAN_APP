export interface Portfolio {
    _id: string,
    Item_name: string,
    ImageUrl: string,
    description: string,
    itemId: number,
    details: [{
        bed_num: number,
        bath_num: number
    }],
    gallery: string[];

}