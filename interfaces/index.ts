export interface ITodo {
    id: string,
    title: string;
    compleeted: boolean;
    body?: string | null;
    createdAt: Date,
}