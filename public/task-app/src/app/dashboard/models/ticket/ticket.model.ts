export interface Ticket {
    id: number;
    name: string;
    type: string;
    description: string;
    created: string;
    assign: number;
    columnName: 'Backlog' | 'In Progress' | 'Review';
    columnIndex: number;
    updated?: string;
}
