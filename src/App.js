import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Route, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loadDicFB} from './redux/modules/dic_info'

import Main from './Main'
import AddDic from './AddDic'
import UpdateDic from './UpdateDic'

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadDicFB())
    
  })

  return (
    <Wrap>
      <Container>
        <Header>
          <h1 onClick={() => {history.push('/')}}>단어장</h1>
          <Line/>
        </Header>
          <Route path='/' exact>
            <Main/>
          </Route>
          <Route path='/add'>
            <AddDic/>
          </Route>
          <Route path='/update/:index'>
            <UpdateDic/>
          </Route>
      </Container>
      <Route path='/' exact>
        <GoAdd
          onClick={() => {
            history.push('/add')
          }}
        ><div>+</div>
        </GoAdd>
      </Route>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #dcf2d5;
`

const Container = styled.div`
  max-width: 1350px;
  margin: auto;
  padding: 50px;
  box-sizing: border-box;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #dcf2d5;
  z-index: 1;
  & > h1 {
    margin: 15px 0;
    text-align: center;
    cursor: pointer;
  }
`

const Line = styled.hr`
  border: 2px solid #255732;
`

const GoAdd = styled.div`
  width: 70px;
  height: 70px;
  background: #4c94c7;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  & > div{
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 80px;
    position: absolute;
    bottom: 25px;
    left: 8px;
  }
`

export default App;
