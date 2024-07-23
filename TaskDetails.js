import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetails({ data, deleter }) {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const taskObject = data.filter((e) => e.id == taskId);
  const { title, detail, date } = taskObject[0];

  const handleClick = () => {
    deleter(taskId);
    navigate("/");
  };

  return (
    <div className="task-details">
      <article>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div>{date}</div>
        <button onClick={handleClick}>Delete Note</button>
      </article>
    </div>
  );
}
