import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  List,
  ListItem,
} from "@/styles/index";
import { white, primary, grey1 } from "@/styles/colors";

// src/types/memo.ts
export interface Memo {
  id: string; // 고유 ID
  title: string; // 메모 제목
  content: string; // 메모 내용
  createdAt: Date; // 작성일시
}

// MemoPage 스타일
const MemoContainer = styled(Container)`
  margin: 0 auto;
  padding: 20px;
  background-color: ${white};
`;

const MemoTitle = styled(Title)`
  font-size: 2.4rem;
  color: ${primary};
`;

const MemoForm = styled(Form)`
  flex-direction: row;
  align-items: stretch;
`;

const MemoInput = styled(Input)`
  margin-bottom: 10px;
`;

const MemoButton = styled(Button)`
  align-self: flex-end;
`;

const MemoList = styled(List)`
  margin-top: 20px;
`;

const MemoListItem = styled(ListItem)`
  border-bottom: 1px solid ${grey1};
  padding-bottom: 8px;
`;

const CreatePage = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleAddMemo = () => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
    };
    setMemos([...memos, newMemo]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MemoContainer>
        <MemoTitle>메모 페이지</MemoTitle>
        <MemoForm>
          <MemoInput placeholder="제목을 입력하세요..." />
          <MemoButton onClick={handleAddMemo}>추가</MemoButton>
        </MemoForm>
        <MemoForm>
          <MemoInput placeholder="메모를 입력하세요..." />
          <MemoButton onClick={handleAddMemo}>추가</MemoButton>
        </MemoForm>
      </MemoContainer>
    </div>
  );
};

export default CreatePage;
