import styled from 'styled-components';

export const Container = styled.div`
  background: url('https://wallpapercave.com/wp/wp123564.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 180px;
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
  height: 100%;
  padding: 0 10px;
  p {
    color: #fff;
  }
`;

export default Widget;