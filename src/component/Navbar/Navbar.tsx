import {  Button, Drawer, Form, Input, Typography, type InputRef } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";
import { getFormattedTime } from "../../utils/getFormatedDate";
const Navbar = () => {
  const [open,setOpen] = useState(false);
  const inputRef = useRef<InputRef | null>(null);
  const dispatch = useDispatch();
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
          title: inputRef.current.input.value,
          isDone: false,
          createdAt: getFormattedTime(),
        }));
      }
    }
    alert("added todo")
  }
  return (
    <Header style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
      <Typography.Title level={1} style={{ color: "white", margin: 0 }}>
        Todo
      </Typography.Title>
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
