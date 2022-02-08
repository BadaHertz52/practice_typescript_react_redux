# Typescript에서 redux를 사용하여 counter, Todo List 만들기

#### 이 프로젝트는 [해당 수업](https://react.vlpt.us/using-typescript/05-ts-redux.html)을 실습한 것입니다. 
---------------------------------------------------------------------------------------------

### <코드 설명>
#### 1. 구현 하고자 한 기능
  ###### 1) counter
  사용자가 +1,=1,+5의 버튼을 누르면 카운트의 숫자가 변하는 것을 구현하고자 했다. 
  
  ###### 2) Todo List
  사용자가 할 일 목록을 추가할 수 있고 할일을 완료시 해당 할일을 클릭하면 line-through 기능이 실현되게하여 완료를 표시할 수 있도록 하고 옆에 "x"를 누르면 해당 항목이 삭제되는 기능을 구현하고 자 했다. 
  
#### 2. 구현을 위한 코드 작성
  리덕스 모듈과 Ducks 패턴을 이용하였고 코드는 크게  컴포넌트와 컨테이너 컴포넌트, redux store로 이루어지며 컨테이너 컴포넌트에서 액션을 디스패치시 리덕스 스토어에서 보내준 스토어 상태를 프리젠테이셔널 컴포넌트에 보내줘 사용자 화면에 나오는 구성하였습니다. 

  ###### 1) counter
  + 프레젠테이셔널 컴포넌트 : Counter
  + 컨테이너 컴포넌트 : CounterContainer
  + 리덕스 스토어:  reduce module - counter, root reducer - rootReducer , 스토어 - store

  ###### 2) Todo List 
  + 프레젠테이셔널 컴포넌트 : TodoInsert, TodoItem, TodoList
  + 컨테이너 컴포넌트 : TodoApp
  + 리덕스 스토어:  reduce module - todo, root reducer - rootReducer , 스토어 - store

---------------------------------------------------------------------------------------------

### <수업 point>

```typescript
const INCREASE = 'counter/INCREASE' as const; 
const DECREASE = 'counter/DECREASE'as const;
const INCREASE_BY = 'INCREASE_BY' as const ;

export const increase = ()=> ({type:INCREASE});
export const decrease =()=>({type:DECREASE});
export const increaseBy = (diff: number) => ({
  type:INCREASE_BY,
  payload:diff 
});



 type CounterAction = 
  | ReturnType<typeof increase> // = {type : 'counter/INCREASER'} = {type : typeof INCREASE}
  | ReturnType<typeof decrease> 
  | ReturnType<typeof increaseBy>  
```

#### 1. as const 
 
 as const 를 사용하면 객체의 값을 객체의 타입으로 설정할 수 있다. 
 즉, INCREASE 의 type 은 counter/INCREASE가 된다.

#### 2. ReturnType <typeof >

 ReturnType <typeof ★ > 을 사용하면 ★의 결과값의 타입을 가져올 수 있다. 
 'ReturnType<typeof increase>' 대신에  '{type : 'counter/INCREASER'}' 이나 '{type : typeof INCREASE}' 을 사용할 수있으나 ReturnType를 사용한 이유는 
 type : 'counter/INCREASER'}는 앞에서 작성한 counter/INCREAER 를 또 작성해야 하기 때문에 코드의 간결성면에서는 좋지 않기 때문이다. 

