import style from './Kanban.module.css';

export function KanbanColumn(props) {
    return (
        <div className={style.column}>
        <h2 className={style.title + ' normal underline'}>{props.title}</h2>
        <ul className={style.taskList}>
            {props.children}
        </ul>
    </div>
    )
}