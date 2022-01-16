import React from "react";
import { List } from "antd";
import TodoItem from "./TodoItem";

const TodoTab = ({ todos, onTodoToggle, onTodoRemoval }) => {
  return (
    <>
      <List
        locale={{ emptyText: "There's nothing to do :(" }}
        dataSource={todos}
        renderItem={(todo) => (
          <TodoItem
            todo={todo}
            onTodoToggle={onTodoToggle}
            onTodoRemoval={onTodoRemoval}
          />
        )}
        pagination={{
          position: "bottom",
          pageSize: 10,
        }}
      />
    </>
  );
};

export default TodoTab;
