import React, {useEffect} from 'react';
import { Row, Col, Card } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { ITodo } from '../../store/todo/models/todo.model';
import { IOrder } from '../../store/order/models/order.model';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodoStatus } from '../../store/todo/actions';
import { RootState } from '../../store/todo/reducers';
import { AddTodoForm } from '../../components/AddTodoForm';
import { TodoList } from '../../components/TodoList';
import { OrdersList } from '../../components/OrdersList';
import { message } from 'antd';

import './styles.less';
import axios from "axios";

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);

  const getOrderZtech = () => {
    axios
      .get("https://ztechmaidinh.com/api/v1/orders/112-6265351-2750656")
      .then((res) => {
        console.log(res.data)
      })
  }

  const getOrderMastrocare = () => {
    axios
      .get("https://mastrocare.com/api/v1/orders/113-5949826-4153025")
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    Promise.all([getOrderMastrocare, getOrderZtech]).then(function (values) {
      console.log(values);
      return values;
    }).catch(function (err) {
      console.log(err);
    });
  })

  const orders: IOrder[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.info('Todo removed!');
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{span: 23}}
        sm={{span: 23}}
        md={{span: 21}}
        lg={{span: 20}}
        xl={{span: 18}}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>

      <Col
        xs={{span: 23}}
        sm={{span: 23}}
        md={{span: 21}}
        lg={{span: 20}}
        xl={{span: 18}}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit}/>
        </Card>
      </Col>

      <Col
        xs={{span: 23}}
        sm={{span: 23}}
        md={{span: 21}}
        lg={{span: 20}}
        xl={{span: 18}}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </Col>
      <Col
        xs={{span: 23}}
        sm={{span: 23}}
        md={{span: 21}}
        lg={{span: 20}}
        xl={{span: 18}}
      >
        <Card title="Orders List">
          <OrdersList
            orders={orders}
          />
        </Card>
      </Col>
    </Row>
  );
};
