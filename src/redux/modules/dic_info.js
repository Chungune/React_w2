// firestore에서 데이터를 가져오는 함수인 middlewares를 만들기 위해 db를 가져온다.
import {db} from '../../firebase'
// 데이터를 가져오는 firebase의 내장함수
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, deleteField } from '@firebase/firestore'
import { async } from '@firebase/util'



const LOAD = 'dictionary/LOAD'
const ADD_LIST = 'dictionary/ADD_LIST'
const UPDATE = 'dictionary/UPDATE'
const DELETE = 'dictionary/DELETE'

const initialState = {
  dic_list: []
}



export const loadBucket = (dic_list) => {
  return {type: LOAD, dic_list}
}
export function addList(dic_list) {
  return {type: ADD_LIST, dic_list}
}
export function updateList(dic_list_index, dic_list) {
  return {type: UPDATE, dic_list_index, dic_list}
}
export function deleteList(dic_list_index) {
  return {type: DELETE, dic_list_index}
}

// middlewares 
//리덕스에 넣을때 필요한 정보 [document 객체, id, document.data()]

export const loadDicFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, 'dicInfo'))

    let dic_list = []
    
    dic_data.forEach((d) => {
      dic_list.push({id: d.id, ...d.data()})
    })
    dispatch(loadBucket(dic_list))
  }
}

export const addDicFB = (dic_list) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'dicInfo'), dic_list)

    const _dic = await getDoc(docRef)

    const dic_data = {id: _dic.id, ..._dic.data()}

    console.log('addDicFB')

    dispatch(addList(dic_data))
  }
}

export const updateDicFB = (dic_list_id, dic_list) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, 'dicInfo', dic_list_id)
    await updateDoc(docRef, dic_list)

    const _dic_list = getState().dicInfo.dic_list
    const dic_list_index = _dic_list.findIndex((l) => {
      return l.id === dic_list_id
    })
    dispatch(updateList(dic_list_index, dic_list))
  }
}

export const deleteDicFB = (dic_list_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, 'dicInfo', dic_list_id)
    await deleteDoc(docRef)

    const _dic_list = getState().dicInfo.dic_list
    const dic_list_index = _dic_list.findIndex((l) => {
      return l.id === dic_list_id
    })

    dispatch(deleteList(dic_list_index))
  }
}


export default function reducer(state=initialState, action={}) {
  switch (action.type) {

    case 'dictionary/LOAD': {
      console.log({dic_list: action.dic_list})
      return {dic_list: action.dic_list}
    }

    case 'dictionary/ADD_LIST': {
      console.log('reducer')
      return {...state, dic_list: [...state.dic_list, action.dic_list]}
    }

    case 'dictionary/UPDATE': {
      const new_dic_list = state.dic_list.map((v, i) => {
        return i === action.dic_list_index ? action.dic_list : v
      })
      console.log(new_dic_list)
      return {...state, dic_list: new_dic_list}
    }

    case 'dictionary/DELETE': {
      const new_dic_list = state.dic_list.filter((v, i) => {
        return i != action.dic_list_index
      })
      console.log({...state, dic_list: new_dic_list})
      return {...state, dic_list: new_dic_list}
    }

    default:
      return state
  }
}