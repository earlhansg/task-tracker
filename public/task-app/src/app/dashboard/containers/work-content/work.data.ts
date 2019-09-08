import { Ticket } from '@app/dashboard/models/interfaces/ticket.interface';
import { Column } from '@app/dashboard/models/enums/column.enum';


export const ticket: Ticket = {
    name: 'Database',
    type: 'Backend',
    description: 'normalize db in the project',
    created: '08/09/17',
    assign: 'Jason Bayocot',
    columnName: Column.inProgress
};


export const tickets: Ticket[] = [
    {
        name: 'Dashboard UI',
        type: 'UI',
        description: 'create UI for dashboard',
        created: '08/09/17',
        assign: 'Earl Hans Genoso',
        columnName: Column.Backlog
    },
    {
        name: 'Login',
        type: 'Functionality',
        description: 'create function for login',
        created: '08/09/17',
        assign: 'Billy Lincaro',
        columnName: Column.inProgress
    },
    {
        name: 'Signup UI',
        type: 'UI',
        description: 'create UI for signup',
        created: '08/09/17',
        assign: 'Kristy Mae Almuete',
        columnName: Column.Review
    },
    {
        name: 'Setup routes',
        type: 'Backend',
        description: 'setup routes in the backend',
        created: '08/09/17',
        assign: 'Jason Bayocot',
        columnName: Column.Backlog
    },
    {
        name: 'Signup',
        type: 'Functionality',
        description: 'create function for signup',
        created: '08/09/17',
        assign: 'Jason Bayocot',
        columnName: Column.Backlog
    },
    {
        name: 'Lazy Load',
        type: 'Feature',
        description: 'setup lazy load to the application',
        created: '08/09/17',
        assign: 'Earl Hans Genoso',
        columnName: Column.Review
    }
];
