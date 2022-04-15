import styled, {css} from 'styled-components/native';

type ChipProps = {
  checked: boolean;
};

export const Container = styled.TouchableOpacity<ChipProps>`
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid ${({theme}) => theme.colors.border};
  height: 21px;
  border-radius: 8px;
  margin-right: 12px;
  background-color: ${({theme}) => theme.colors.backgroundShape};
  ${({checked, theme}) =>
    checked &&
    css`
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    `}
`;

export const Text = styled.Text<ChipProps>`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  color: ${({theme, checked}) =>
    checked ? theme.colors.white : theme.colors.lightText};
`;
