/* icons */
import { faPen, faListAlt, faChartBar,
         faBell, IconDefinition } from '@fortawesome/free-solid-svg-icons';

/* Navs */
export interface Nav { url: string; icon: IconDefinition; content: string; }

export const navs: Nav[] = [
    { url: 'work', icon: faPen, content: 'Work' },
    { url: 'plan', icon: faListAlt, content: 'Plan' },
    { url: 'stats', icon: faChartBar, content: 'Stats' },
    { url: 'notifications', icon: faBell,  content: 'Notifications' }
];

