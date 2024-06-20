import styled from 'styled-components';

const IconContainer = ({ className }) => (
  <div className={className}>
    <i className="fa fa-code" aria-hidden="true"></i>
  </div>
);

const Icon = styled(IconContainer)`
  font-size: 64px;
  align-self: center;
`;

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  margin-top: 5px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <div className={className}>
    <Icon />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </div>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  gap: 5px;
`;
