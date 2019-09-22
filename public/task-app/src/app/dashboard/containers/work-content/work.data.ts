import { Ticket, User } from '@app/dashboard/models';
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
        assign: 4,
        columnName: Column.Review
    },
    {
        id: 4,
        name: 'Setup routes',
        type: 'Backend',
        description: 'setup routes in the backend',
        created: '08/09/17',
        assign: 7,
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
        id: 8,
        name: 'Lazy Load',
        type: 'Feature',
        description: 'setup lazy load to the application',
        created: '08/09/17',
        assign: 1,
        columnName: Column.Review
    }
];

export const users: User[] = [
    {
        id: 1,
        username: 'earlhansg@task.tracker.com',
        firstName: 'Earl',
        lastName: 'Genoso',
        position: 'frontend developer',
        profilePicture: {
            url: 'assets/images/profile/me.jpg',
            caption: 'my profile picture'
        }
    },
    {
        id: 2,
        username: 'yuhanzkie@task.tracker.com',
        firstName: 'Yuhan',
        lastName: 'Kshewengger',
        position: 'backend developer',
        profilePicture: {
            url: 'assets/images/profile/yuhan.jpg',
            caption: 'my profile picture'
        }
    },
    {
        id: 3,
        username: 'kshewengger@task.tracker.com',
        firstName: 'Kristy Mae',
        lastName: 'Almuete',
        position: 'frontend developer',
        profilePicture: {
            url: 'assets/images/profile/kristy.png',
            caption: 'my profile picture'
        }
    },
    {
        id: 4,
        username: 'billygwaps@task.tracker.com',
        firstName: 'Billy',
        lastName: 'Licaro',
        position: 'backend developer',
        profilePicture: {
            url: 'assets/images/profile/billy.jpeg',
            caption: 'my profile picture'
        }
    },
    {
        id: 5,
        username: 'jasongwaps@task.tracker.com',
        firstName: 'Jason',
        lastName: 'Bayocot',
        position: 'backend developer',
        profilePicture: {
            url: 'assets/images/profile/jason.jpeg',
            caption: 'my profile picture'
        }
    },
    {
        id: 6,
        username: 'rhyangwaps@task.tracker.com',
        firstName: 'Rhyan',
        lastName: 'Gabales',
        position: 'fullstack developer',
        profilePicture: {
            url: 'assets/images/profile/rhyan.jpeg',
            caption: 'my profile picture'
        }
    },
    {
        id: 7,
        username: 'jaklordgwaps@task.tracker.com',
        firstName: 'Jacklord',
        lastName: 'Guillena',
        position: 'fullstack developer',
        profilePicture: {
            url: 'assets/images/profile/jacklord.jpeg',
            caption: 'my profile picture'
        }
    },
    {
        id: 8,
        username: 'kjlonggwaps@task.tracker.com',
        firstName: 'Kjlong',
        lastName: 'Longaquit',
        position: 'backend developer',
        profilePicture: {
            url: 'assets/images/profile/kjlong.png',
            caption: 'my profile picture'
        }
    },
    {
        id: 9,
        username: 'maxgwaps@task.tracker.com',
        firstName: 'Max',
        lastName: 'Labial',
        position: 'backend developer',
        profilePicture: {
            url: 'assets/images/profile/max.jpg',
            caption: 'my profile picture'
        }
    }
];
