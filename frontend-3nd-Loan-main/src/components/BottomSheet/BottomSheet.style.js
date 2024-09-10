import { motion } from "framer-motion";
import styled from "styled-components";
import { BOTTOM_SHEET_HEIGHT } from "@/constants/constants";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 50; /* z-index 수정 */
  top: 20vh;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
  margin: 0 auto;
  overflow: hidden;
`;

const HeaderWrapper = styled(motion.div)`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const HandleBar = styled(motion.div)`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

const ContentWrapper = styled.div`
  height: calc(100% - 48px);
  padding: 10px;
  margin-bottom: 60px;
  overflow-y: auto; /* 추가 */
`;

const FilterSection = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  button {
    display: inline-block;
    margin: 5px 5px 5px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button.active {
    background-color: #00aaff;
    color: white;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #ddd;
  z-index: 50; /* z-index 수정 */

  .reset-button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .reset-button:hover {
    background-color: #e0e0e0;
  }

  .loan-button {
    padding: 10px 20px;
    background-color: #00cc66;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .loan-button:hover {
    background-color: #009955;
  }
`;

export { Wrapper, HeaderWrapper, HandleBar, ContentWrapper, FilterSection, Footer };
