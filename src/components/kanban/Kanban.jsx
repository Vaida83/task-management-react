
import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';
import { TaskCard } from '.TaskCard';

export function Kanban() {
    return (
        <section id="kanban" className={style.todo} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className={style.column}>
                <h2 className={style.title + ' normal underline'}>Backlog</h2>
                <ul className={style.taskList}>
                    <li id="task_1" className={style.taskCard}>
                        <div className={style.taskActions}>
                            <button className={style.btn}>Delete</button>
                           {/* <button className="fa fa-trash"></button> */}
                        </div>
                        <div className={style.taskTitle}>aaa</div>
                        <div className={style.taskDesc}>aaa</div>
                        <div className={style.taskTags}><div className="tag" style={{ color: '#333' }}>aaa</div></div>
                        <div className={style.taskDeadline}>aaa</div>
                    </li>
                    <li id="task_2" className={style.taskCard}>
                        <div className={style.taskActions}>
                            <button className="fa fa-trash"></button>
                        </div>
                        <div className={style.taskTitle}>bbb</div>
                        <div className={style.taskDesc}>bbb</div>
                        <div className={style.taskTags}><div className="tag" style={{ color: '#333' }}>bbb</div></div>
                        <div className={style.taskDeadline}>bbb</div>
                    </li></ul>
            </div>
            <KanbanColumn title="AAA" />
            <KanbanColumn title="BBB" />
            <KanbanColumn title="CCC" />

          </section>
    );
}