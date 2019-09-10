export interface Ticket {
    name: string;
    type: string;
    description: string;
    created: string;
    assign: string;
    columnName: 'Backlog' | 'In Progress' | 'Review';
}
