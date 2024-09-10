import React from 'react';
import * as S from "@/components/BottomSheet/BottomSheet.style";
import Header from "@/components/BottomSheet/Header";
import useBottomSheet from "@/hooks/useBottomSheet";

const BottomSheet = ({ children, onClose, filterCount }) => {
  const { onDragEnd, controls } = useBottomSheet(onClose);

  return (
    <S.Wrapper
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" }
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
    >
      <Header onClose={onClose} />
      <S.ContentWrapper>
        {children}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
