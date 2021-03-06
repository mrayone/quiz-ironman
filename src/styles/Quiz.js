import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  background: url('https://wallpapercave.com/wp/wp123564.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
`;


const Widget = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 380px;
  margin: 25px 45px;
  border-radius: 15px;
  background: ${(props)=> props.theme.colors.bgColor};
  border: 2px solid ${(props)=> props.theme.colors.primary};
  overflow: hidden;
  padding-bottom: 10px;
`;

Widget.Title = styled.h2`
  color: #fff;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background: ${(props)=> props.theme.colors.secondary};
`;

Widget.Content = styled.div`
  width: 100%;
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    color: #fff;
  }
`;

Widget.TextBox = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-bottom: 2px solid ${(props)=> props.theme.colors.primary};
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;

  &::placeholder {
    color: rgba(255, 63, 52, 0.5);
  }
`;

Widget.Button = styled.a`
  width: 190px;
  height: 40px;
  border-radius: 15px;
  border-color: transparent;
  background-color: #0fbcf9;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${ shade(0.2, '#0fbcf9') };
    cursor: pointer;
  }

  &:visited {
    text-decoration: none;
    color: #fff;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 25px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  
  li + li {
    margin-top: 10px;
  }
`;

export const ListItem =  styled.li`
  color: #fff;
  padding: 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => {
    return props.isSelected ? css`
    background-color: #0652DD;
  ` : ''}
  }

  ${(props) => {;
    return  props.isCorrect ? css`
    background-color: #2ecc71;
  ` : ''
  }}

  &:hover {
    background-color: #EE5A24;
  }
`;

export default Widget;