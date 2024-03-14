export interface BaseData {
    data: BaseNode[];
}
export interface BaseNode {
    name: string;
    description: string;
    parent: string;
}
export interface TransformedData {
    [key: string]: BaseNode;
}
