import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
} from 'react-native';

let id = 0;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  appContianer: {
    paddingTop: StatusBar.currentHeight,
  },
  fill : {
    flex : 1
  },
  addTodo: {
    color: '#fff',
  },
});

const Todo = (props) => (
  <View style={[styles.todoContainer, styles.fill]}>
    <Text>{props.todo.text}</Text>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="Delete" style={{ color: '#f00' }} />
  </View>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  toggleCheck(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    });
  }

  addTodo() {
    id++;
    const text = `Todo number ${id}`;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    return (
      <View style={[styles.appContianer, styles.fill]}>
        <Text>Todo counts: {this.state.todos.length}</Text>
        <Text>
          Unchecked count:{' '}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </Text>
        <Button
          onPress={() => this.addTodo()}
          title="Add todo"
          style={styles.addTodo}
        />
        <ScrollView>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleCheck(todo.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
