// src/hooks/useMemos.ts
import { useRecoilState } from "recoil";
import { memoState } from "@/assets/atoms/memoAtom";
import { Memo } from "@/pages/MemoPage";
import { v4 as uuidv4 } from "uuid";

export function useMemos() {
  const [memos, setMemos] = useRecoilState(memoState);

  // Create (메모 추가)
  const createMemo = (title: string, content: string) => {
    const newMemo: Memo = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };
    setMemos((prev) => [...prev, newMemo]); // localStorage 저장 필요 없음!
  };

  // Read (단일 메모 찾기)
  const getMemoById = (id: string): Memo | undefined => {
    return memos.find((memo) => memo.id === id);
  };

  // Update (메모 수정)
  const updateMemo = (id: string, title: string, content: string) => {
    setMemos((prev) =>
      prev.map((memo) => (memo.id === id ? { ...memo, title, content } : memo))
    );
  };

  // Delete (메모 삭제)
  const deleteMemo = (id: string) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  };

  return { memos, createMemo, getMemoById, updateMemo, deleteMemo };
}
