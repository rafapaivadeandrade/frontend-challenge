import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color:  ${({theme}) => theme.secondWhite};
`;
export const GreetingsView = styled.View`
  position: absolute;
  top: 108px;
  left:19px;
  flex-direction: row;
  margin-top: 40px;
`;
export const GreetingsText = styled.Text`
  color:  ${({theme}) => theme.black};
  font-size: 24px;
`;
export const UserNameText = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.red};
`;
export const Image = styled.Image`
  border-color: ${({theme}) => theme.greenLight};
  border-width: 3px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: -60px;
  align-items: center;
  align-self: center;
`;
export const BooksView = styled.View`
  flex: 1;
  padding: 32px;
  justify-content: center;
  top: 150px;
  right: 20px;
`;