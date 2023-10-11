export interface IRecipe {
    id: number;
    image: string;
    title: string;
    description: string;
    gram: string;
    alt: string;
}

export interface IProductList {
    title: string;
    description: string;
    advantages: string[];
    recipes: IRecipe[];
}
