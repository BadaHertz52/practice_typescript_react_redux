//action
//type
const INCREASE = 'count/INCREASE' as const;

const DECREASE ='count/DECREASE' as const ;

const INCREASE_BY = 'count/INCREASE_BY' as const;

//constructor
export const increase = ()=> ({type:INCREASE});
export const decrease = ()=>({type:DECREASE});
export const increaseBy = (diff: number)=> ({type:INCREASE_BY , payload: diff });

//initial 
type CounterState = {
  count: number
};

const initialState = {
  count:0
};

//reducer
type CounterAction = 
  | ReturnType <typeof increase>
  | ReturnType <typeof decrease>
  | ReturnType <typeof increaseBy>
;
export default function counter (state: CounterState = initialState , action:CounterAction):CounterState{
  switch(action.type){
    case INCREASE :
      return {count :state.count +1 }  ;
    case  DECREASE :
      return {count: state.count -1} ;
    case INCREASE_BY:
      return {count:state.count + action.payload };
    default:
      return state;
  }
}
