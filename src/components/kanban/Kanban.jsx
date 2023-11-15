
import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';
import { TaskCard } from './TaskCard';

export function Kanban() {
    return (
        <section id="kanban" className={style.todo} 
        style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className={style.column}>
                <h2 className={style.title + ' normal underline'}>Backlog</h2>
                <ul className={style.taskList}>
                    <li id="task_1" className={style.taskCard}>
                        <div className={style.taskActions}>
                            <button className={style.btn + 'fa fa-trash'}>Delete</button>
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
            <KanbanColumn title="Backlog">
                <TaskCard 
                title="HTML" 
                description="Task description about HTML" 
                deadline="2024"
                tags={['high-priority']} />
                <TaskCard 
                title="CSS" 
                description="Task description about CSS" 
                deadline="2024"/>
                <TaskCard 
                title="JS" 
                description="Task description about JS" 
                deadline="2024"
                tags={['low-priority']}/>
            </KanbanColumn>
            <KanbanColumn title="Done">
            <TaskCard title="Git" 
            description="Task description about Git" 
            deadline="2024"
            tags={['medium-priority']} />
            </KanbanColumn>
            <KanbanColumn title="In progress" />
            <KanbanColumn title="To Do" />

          </section>
    );
}