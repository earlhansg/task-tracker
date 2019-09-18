import { Ticket } from '@app/dashboard/models';
import { Column } from '@app/dashboard/enums/column.enum';


export const ticket: Ticket = {
    id: 7,
    name: 'Database',
    type: 'Backend',
    description: 'normalize db in the project',
    created: '08/09/17',
    assign: 4,
    columnName: Column.inProgress
};


export const tickets: Ticket[] = [
    {
        id: 1,
        name: 'Dashboard UI',
        type: 'UI',
        description: 'create UI for dashboard',
        created: '08/09/17',
        assign: 3,
        columnName: Column.Backlog
    },
    {
        id: 2,
        name: 'Login',
        type: 'Functionality',
        description: 'create function for login',
        created: '08/09/17',
        assign: 1,
        columnName: Column.inProgress
    },
    {
        id: 3,
        name: 'Signup UI',
        type: 'UI',
        description: 'create UI for signup',
        created: '08/09/17',
        assign: 1,
        columnName: Column.Review
    },
    {
        id: 4,
        name: 'Setup routes',
        type: 'Backend',
        description: 'setup routes in the backend',
        created: '08/09/17',
        assign: 3,
        columnName: Column.Backlog
    },
    {
        id: 5,
        name: 'Signup',
        type: 'Functionality',
        description: 'create function for signup',
        created: '08/09/17',
        assign: 2,
        columnName: Column.Backlog
    },
    {
        id: 6,
        name: 'Lazy Load',
        type: 'Feature',
        description: 'setup lazy load to the application',
        created: '08/09/17',
        assign: 1,
        columnName: Column.Review
    }
];
