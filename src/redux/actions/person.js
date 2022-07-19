import { ADD_PERSON } from "../constant"

// 创建一个增加人的action动作对象
export const AddPerson = personObj => ({ type: ADD_PERSON, data: personObj })