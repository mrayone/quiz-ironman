import styled from 'styled-components';
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
  height: 240px;
  margin: 25px 45px;
  border-radius: 15px;
  background: ${(props)=> props.theme.colors.bgColor};
  border: 2px solid ${(props)=> props.theme.colors.primary};
  overflow: hidden;
`;

Widget.Title = styled.h4`
  color: #fff;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background: ${(props)=> props.theme.colors.secondary};
`;

Widget.Content = styled.div`
  width: 100%;
  height: calc(100%);
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

export default Widget;