export class Promotion {
    id:number; 
    name?:string;
    discountValue? : number;
    discountUnit? : string;
    description?:string;
    startDate?:Date;
    endDate?:Date; 
    code :string;
    maxDiscount?: number; 
    minOrder?:number; 
    activate :boolean;
}