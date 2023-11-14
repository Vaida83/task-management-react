import { Aside } from '../aside/Aside';
import { Kanban } from '../kanban/Kanban';
import style from './Main.module.css';

export function Main() {
    return (
        <main className={style.maincontent}>
            <Kanban />
            <Aside />
        </main>
    );
}