import {  Button, Drawer, Form, Input, Switch, Typography, type InputRef } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRef, useState } from "react";
import { todoActions } from "../../store";
import { getFormattedTime } from "../../utils/getFormatedDate";
import { useAppDispatch } from "../../store/hook";
import { v4 as uuidv4 } from 'uuid';
import { BulbOutlined, CloudOutlined } from "@ant-design/icons";

interface NavbarProps  {
  toggleTheme: ()=>void
}
const Navbar = ({toggleTheme}:NavbarProps) => {
  const [open,setOpen] = useState(false);
  const inputRef = useRef<InputRef | null>(null);
  const dispatch = useAppDispatch();
  function handleClose(){
    setOpen(false);
  }
  function showDrawer(){
    setOpen(true);
  }
  function addTodo(){
    if(inputRef.current?.input instanceof HTMLInputElement){
      if(inputRef.current?.input.value){
        dispatch(todoActions.add({
          id: uuidv4(),
          title: inputRef.current.input.value.trim(),
          isDone: false,
          createdAt: getFormattedTime(),
        }));
      }
    }
  }
  return (
    <Header style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
      <Typography.Title level={1} style={{ color: "white", margin: 0 }}>
        Todo
      </Typography.Title>
      <Switch checkedChildren={<BulbOutlined />} unCheckedChildren={<CloudOutlined/>} defaultChecked onChange={toggleTheme} />
      <Button onClick={showDrawer}>Add Todo</Button>
      <Drawer title="Add Todo" onClose={handleClose} open={open}>
        <Form style={{display:"flex", gap:"6px"}}>
          <Input ref={inputRef} type="text" placeholder="Enter todo here..."/>
          <Button onClick={addTodo} type="primary">Add Todo</Button>
        </Form>
      </Drawer>
    </Header>
  );
};

export default Navbar;
