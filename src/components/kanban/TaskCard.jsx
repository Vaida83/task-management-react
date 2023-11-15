import style from './Kanban.module.css';
import { Tag } from './Tag';
export function TaskCard({props}) {

    const tagsList = [
<Tag title="low" />,
<Tag title="medium" />,
<Tag title="hight" />
    ]
    return (
        <li id="task_1" className={style.taskCard}>
                        <div className={style.taskActions}>
                            <button className={style.btn + 'fa fa-trash'}>Delete</button>
                        </div>
                        <div className={style.taskTitle}>{props.title}</div>
                        <div className={style.taskDesc}>{props.description}</div>
                        <div className={style.taskTags}>{tagsList}</div>
                        <div className={style.taskDeadline}>{props.deadline}</div>
                    </li>
    )
}