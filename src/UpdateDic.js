import React, {useRef} from 'react'
import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateDicFB} from './redux/modules/dic_info'

const UpdateDic = (props) => {
  const dicRef = useRef();
  const descRef = useRef();
  const exRef = useRef();
  const history = useHistory();
  const params_index = useParams().index
  const dispatch = useDispatch();
  const dic_list = useSelector(state => state.dicInfo.dic_list)

  return (
    <Container>
      <h2>단어 수정하기</h2>
      <AddBox>
        <span>단어</span>
        <input type='text' ref={dicRef}/>
        <span>설명</span>
        <input type='text' ref={descRef} className='desc'/>
        <span>예시</span>
        <input type='text' ref={exRef}/>
      </AddBox>
      <AddBtn
        onClick={() => {
            history.goBack()
            dispatch(updateDicFB(dic_list[params_index].id, {dictionary: dicRef.current.value, description: descRef.current.value, example: exRef.current.value}))
          }
        }
      >수정하기</AddBtn>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  padding: 60px 8px;
  margin-top: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddBox = styled.div`
  width: 400px;
  padding: 15px;
  background: #fff;
  border: 2.9px solid green;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & > input {
    width: 97%;
    height: 30px;
    margin: 5px 0 27px;
    border: 1px solid green;
    border-radius: 6px;
    outline: none;
  };
  & > input:last-child {
    margin-bottom: 5px;
  }
  & > .desc {
    height: 60px;
  }
`

const AddBtn = styled.button`
  width: 435px;
  padding: 15px;
  margin-top: 20px;
  background: green;
  border: 2.9px solid green;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export default UpdateDic