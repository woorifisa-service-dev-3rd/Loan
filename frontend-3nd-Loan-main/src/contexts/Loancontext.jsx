import { createContext } from "react"

// Context 생성 ( 란 데이터를 관리)
export const LoanContext = createContext();
// Context 생성 (에 대한 Dispatch 관리)
export const LoanDispatchContext = createContext();


// MemberContext를 생성합니다.
const MemberContext = createContext();
const MemberDispatchContext = createContext();