export class CategoryProduct {
    id? : number;
    name:string;
    parentId? : number;
    parent:CategoryProduct;

    constructor() {
        this.id=0;
        this.name = '';
        this.parentId = 0;
        this.parent = null;
    }
}