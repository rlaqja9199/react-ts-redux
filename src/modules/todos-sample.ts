// actions.ts/ index.ts/ reducer.ts/ types.td


import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;
//액션 타입 선언, 액션 생성 함수, 초기값, 리듀서
//할일추가, 할일제거, 할일체크


//액션타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;
//액션 생성 함수
export const addTodo = (text: string)=> ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
//액션 객체들에 대한 타입 작성
const actions = {
    addTodo,
    toggleTodo,
    removeTodo,
}
//액션 객체들에 대한 타입 작성
type TodosAction = ActionType<typeof actions>
//상태에서 사용할 할일 항목 데이터 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}
//이 모듈에서 관리할 상태 타입 작성
export type TodoState =  Todo[]

//초기상태 선언
const initialStat: TodoState = [];

//리듀서 작성하기
const todos_sample = createReducer<TodoState, TodosAction>(initialStat,{
    [ADD_TODO]: (state,action) => {
        return state.concat({
            ...action.payload,
            done:false
        })
    },
    [TOGGLE_TODO]: (state,{payload:id}) =>
    state.map(todo => (todo.id === id ? {...todo, done: ! todo.done} : todo)),
    [REMOVE_TODO]: (state,{payload: id}) =>
    state.filter(todo => todo.id !== id)
})
export default todos_sample;