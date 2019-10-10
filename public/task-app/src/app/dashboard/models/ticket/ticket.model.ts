export interface Ticket {
    id: number;
    name: string;
    type: string;
    description: string;
    created: Date;
    assign: number;
    columnName: 'Backlog' | 'In Progress' | 'Review';
    updated: Date;
}
