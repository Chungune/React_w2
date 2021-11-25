import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {addDicFB} from './redux/modules/dic_info'

const AddDic = (props) => {
  const dicRef = useRef();
  const descRef = useRef();
  const exRef = useRef();
  const history = useHistory()
  const dispatch = useDispatch()

  const add_dic = () => {
    const date = new Date()
    history.push('/')
    dispatch(addDicFB({dictionary: dicRef.current.value, description: descRef.current.value, example: exRef.current.value, date:date}))
    console.log('add_dic')
  }


  return(
    <Container>
      <h2>단어 추가하기</h2>
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
            add_dic()
         }
        }
      >추가하기</AddBtn>
    </Container>
    
  )
}

const Container = styled.div`
  max-width: 100%;
  padding: 60px 8px;
  margin-top: 84px;
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

export default AddDic