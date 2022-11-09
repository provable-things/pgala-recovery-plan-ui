import styled from 'styled-components'

const ConnectButton = styled.button`
  width: 100%;
  color: white;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 300;
  height: 50px;
  border: 0;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 500;
  border-radius: 10px;
  outline: none !important;
  background: ${({ theme }) => theme.secondary4};
  &:hover {
    background: ${({ theme }) => theme.secondary4Hovered};
  }
  color: ${({ theme }) => theme.text1};
  @media (max-width: 767.98px) {
    height: 35px;
  }
  &:disabled {
    background: ${({ theme }) => theme.secondary4};
    opacity: 0.3;
  }
`

export default ConnectButton
