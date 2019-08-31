import { Task } from '@app/dashboard/models/interfaces/task.interface';
import { Column } from '@app/dashboard/models/enums/column.enum';


export const task: Task = {
    name: 'Database',
    type: 'Design',
    description: 'normalize db in the project',
    created: '08/09/17',
    assign: 'Jason Bayocot',
    columnName: Column.inProgress
};
