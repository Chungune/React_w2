import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteDicFB} from './redux/modules/dic_info'

const Main = (props) => {
  const _dic_list = useSelector(state => state.dicInfo.dic_list);
  const dic_sort = _dic_list.sort((a,b) => b.date - a.date)
  const dispatch = useDispatch();
  const history = useHistory();

  return(
    <Container>
      {dic_sort.map((l, i) => {
        return(
          <DicBox key={i}>
            <div className='dicBox'>
              <h3>{l.dictionary}</h3>
            </div>
            <div className='dicBox'>
              <span>설명</span>
              <p>{l.description}</p>
            </div>
            <div className='dicBox'>
              <span>예시</span>
              <p style={{color: '#99ccf0'}}>{l.example}</p>
            </div>
            <BtnGroup>
              <button
                onClick={() => {
                  history.push('/update/' + i)
                }}
              >수정</button>
              <button
                onClick={() => {
                  dispatch(deleteDicFB(l.id))
                }}
              >삭제</button>
            </BtnGroup>
          </DicBox>
        )
      })}
      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 84px;
  padding: px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const DicBox = styled.div`
  padding: 20px;
  border: 3px dashed #fff;
  border-radius: 10px;
  box-sizing: border-box;
  background: #56a35c;
  position: relative;
  width: calc((100% - 40px) / 3);
  @media screen and (max-width: 1024px) {
    width: calc((100% - 40px) / 2);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & > .dicBox {
    margin-bottom: 15px;
    &:nth-child(3) {
      margin-bottom: 0;
    }
    & > h3 {
      margin: 0;
    }
    & > span {
      font-size: 14px;
    }
  }
  & p {
    margin: 6px 0 0 0;
  }
`



const BtnGroup = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  & > button:first-child {
    margin-right: 3px;
  }
`


export default Main