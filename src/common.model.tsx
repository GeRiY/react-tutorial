export interface TypesType {
    type: 'interface' | 'type';
    key: string;
    canBeNull?: boolean;
    required?: boolean;
    export?: boolean;
    value?: string;
    anyKey?: boolean;
    properties?: PropertyType[];
}

export interface PropertyType {
    key?: string; // ha nincs key akkor any string lehet a key
    value?: string; // ha nincs value akkor any lehet a value
    isArray?: boolean;
    canBeNull?: boolean;
    required?: boolean;
}

export interface FormType {
    isInterface: boolean;
    typeName: string;
    propName: string;
    arrayOfTypesKey: string[];
    element?: TypesType;
}