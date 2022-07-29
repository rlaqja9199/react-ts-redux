//as const를 작성하는 이유
//액션생성 함수를 생성시 매개변수 타입이 string으로 되어있지 않도록 방지
//원본타입을 나타내도록 함
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

//액션 생성함수 생성
export const increase = () => ({ type: INCREASE})
export const decrease = () => ({ type: DECREASE})
export const increaseBy = (diff: number) => ({
    type:INCREASE_BY,
    payload: diff
});
//스테이트의 타입을 지정
type CounterState = {
    count: number;
};
//초기상태 생성
const initialStat: CounterState = {
    count: 0
};
//리듀서에 액션타입을 지정해야함
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>

//리듀서 만들기
export default function counter(state: CounterState = initialStat, action: CounterAction) : CounterState{
    switch(action.type){
        case 'counter/INCREASE':
            return { count: state.count + 1};
        case 'counter/DECREASE':
            return { count: state.count - 1};
        case 'counter/INCREASE_BY':
            return { count: state.count + action.payload };
        default:
            return state;
    }

}
