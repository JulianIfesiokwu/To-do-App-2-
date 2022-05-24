
const Task = ({item}) => {
    return (
        <article key={item.id}>{item.title}</article>
    )
}

export default Task