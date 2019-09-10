export interface Ticket {
    name: string;
    type: string;
    description: string;
    created: string;
    assign: number;
    columnName: 'Backlog' | 'In Progress' | 'Review';
}
