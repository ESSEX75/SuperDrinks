import { IList, IImageProduct } from '../../types';

export interface ICardProduct {
    imageProduct: IImageProduct;
    link: string;
    color: string;
    listOfBenefits: IList[];
}

export interface ITitle {
    color: string;
}
