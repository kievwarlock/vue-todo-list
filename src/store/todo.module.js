import {uuid} from "@/utils/uuid.js";

const state = {
    todoList: []
};

const getters = {
    todoList(state) {
        return state.todoList;
    },
    getIndexTodoListById:  state => id => state.todoList.findIndex(listItem => listItem.id === id)
};

const actions = {
    AddTodoList(context, title) {
        if (title) {
            context.commit('setTodoList', {
                id: uuid(),
                title,
                items: []
            });
        } else {
            throw new Error("title is empty");
        }
    },
    UpdateTodoList(context, payload) {
        let {id, title, items} = payload;
        if (title && id) {
            context.commit('updateTodoList', {
                id,
                title,
                items
            });
        } else {
            throw new Error("title or id is empty");
        }
    },
    DeleteTodoList(context, id) {
        context.commit('deleteTodoListByIndex', context.getters.getIndexTodoListById(id));
    }
};

const mutations = {
    setTodoList(state, todoList) {
        state.todoList.push(todoList);
    },
    updateTodoList(state, todoList) {
        let todoIndex = this.getters.getIndexTodoListById(todoList.id);
        state.todoList[todoIndex] = todoList;
    },
    deleteTodoListByIndex(state, index){
        state.todoList.splice(index, 1);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};