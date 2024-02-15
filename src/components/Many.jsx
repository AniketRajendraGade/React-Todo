import Todoitem from "./Todoitem";
function Many({ Items }) {
  return (
    <div className="item-container">
      {Items.map((ab) => (
        <Todoitem task={ab.name} date={ab.duedate}></Todoitem>
      ))}
    </div>
  );
}

export default Many;
