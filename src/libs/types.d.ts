

export type TResult = {
    id: number;
    case: string;
    sumFirst: number;
    sumNew: number;
    sumResult: number;
    comment: string;
    active: boolean;
};

export type TFeedBack = {
    id: number;
    key: number;
    author: string;
    city: string;
    date: Date;
    content: string;
    active: boolean;
};