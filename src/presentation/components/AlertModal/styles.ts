import styled from 'styled-components/native';

type ButtonText = {
  isCancel?: boolean;
};

type ButtonProps = {
  withMargin?: boolean;
};

export const Container = styled.View`
  width: 90%;
  border-radius: 10px;
  align-self: center;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-top: 20px;
  color: ${({theme}) => theme.colors.title};
`;
export const Description = styled.Text`
  width: 80%;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  margin-top: 8px;
  margin-bottom: 14px;
  align-self: center;
  text-align: center;

  color: ${({theme}) => theme.colors.lightText};
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.border};
  margin-bottom: ${({withMargin}) => (withMargin ? 6 : 0)}px;
`;

export const ButtonText = styled.Text<ButtonText>`
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme, isCancel}) =>
    isCancel ? theme.colors.danger : theme.colors.confirm};
`;
