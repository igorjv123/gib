import styled from 'styled-components'
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    font-size:16px;
    border: 2px solid aqua;
    color: aqua;
    margin: 10px;
    padding: 8px;
    cursor:pointer;
    :hover {
        color: #fff;
        border-color: #fff;
      }
    :active{
        margin-top:8px;
    }

`
export default Button;
