import styled, {css} from 'styled-components/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

EntypoIcon.loadFont();

type ContainerProps = {
  isAbsolute: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.primary};
  ${({isAbsolute}) =>
    isAbsolute &&
    css`
      position: absolute;
      bottom: 40%;
      right: 16px;
    `}
`;

export const Icon = styled(EntypoIcon).attrs(({theme}) => ({
  name: 'plus',
  size: 24,
  color: theme.colors.primary,
}))``;
