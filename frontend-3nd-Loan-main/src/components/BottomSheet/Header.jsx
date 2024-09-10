import * as S from "@/components/BottomSheet/BottomSheet.style";

const Header = ({ onClose }) => {
  return (
    <S.HeaderWrapper>
      <S.HandleBar />
      <button onClick={onClose} style={{ position: 'absolute', right: '16px', top: '16px' }}>X</button>
    </S.HeaderWrapper>
  );
};

export default Header;
