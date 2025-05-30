import { Button, List, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { todoActions } from "../../store";

const TodoList = () => {
  const todos = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  function editTodo(value:string, id: string) {
    dispatch(
      todoActions.edit({
        id: id,
        title:value,
      })
    );
  }
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      style={{ padding: "1rem 2rem" }}
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              disabled={todo.isDone ? true : false}
              key="list-loadmore-more"
            >
              mark as done
            </Button>,
            <Button key="list-loadmore-more" color="danger" variant="solid">
              delete
            </Button>,
          ]}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Typography.Title
              editable={{ onChange: (val) => editTodo(val, todo.id) }}
              level={3}
            >
              {todo.title}
            </Typography.Title>
            <List.Item.Meta description={todo.createdAt} />
          </div>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
