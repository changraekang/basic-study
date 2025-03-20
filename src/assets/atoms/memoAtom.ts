// src/recoil/memoAtom.ts
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Memo } from "@/pages/MemoPage";

const { persistAtom } = recoilPersist({
  key: "myMemoApp",
  storage: localStorage,
});

// 메모 목록을 저장하는 Atom
export const memoState = atom<Memo[]>({
  key: "memoState",
  default: [],
  effects_UNSTABLE: [persistAtom], // Recoil 상태를 localStorage와 동기화
});
