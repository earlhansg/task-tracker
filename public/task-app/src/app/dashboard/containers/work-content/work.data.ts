import { Ticket } from '@app/dashboard/models';
import { Column } from '@app/dashboard/enums/column.enum';


export const ticket: Ticket = {
    name: 'Database',
    type: 'Backend',
    description: 'normalize db in the project',
    created: '08/09/17',
    assign: 4,
    columnName: Column.inProgress
};


export const tickets: Ticket[] = [
    {
        name: 'Dashboard UI',
        type: 'UI',
        description: 'create UI for dashboard',
        created: '08/09/17',
        assign: 3,
        columnName: Column.Backlog
    },
    {
        name: 'Login',
        type: 'Functionality',
        description: 'create function for login',
        created: '08/09/17',
        assign: 1,
        columnName: Column.inProgress
    },
    {
        name: 'Signup UI',
        type: 'UI',
        description: 'create UI for signup',
        created: '08/09/17',
        assign: 1,
        columnName: Column.Review
    },
    {
        name: 'Setup routes',
        type: 'Backend',
        description: 'setup routes in the backend',
        created: '08/09/17',
        assign: 3,
        columnName: Column.Backlog
    },
    {
        name: 'Signup',
        type: 'Functionality',
        description: 'create function for signup',
        created: '08/09/17',
        assign: 2,
        columnName: Column.Backlog
    },
    {
        name: 'Lazy Load',
        type: 'Feature',
        description: 'setup lazy load to the application',
        created: '08/09/17',
        assign: 1,
        columnName: Column.Review
    }
];
