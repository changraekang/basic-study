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
  StyledLink,
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${white};
`;

const MemoTitle = styled(Title)`
  font-size: 2.4rem;
  color: ${primary};
`;

const MemoForm = styled(Form)`
  flex-direction: column;
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

const MemoPage = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MemoContainer>
        <MemoTitle>메모 페이지</MemoTitle>
        <StyledLink to="/memo/create">메모 추가</StyledLink>
        <MemoList>
          {memos.map((memo) => (
            <MemoListItem key={memo.id}>
              <h3>{memo.title}</h3>
              <p>{memo.content}</p>
              <p>{memo.createdAt.toLocaleString()}</p>
            </MemoListItem>
          ))}
        </MemoList>
      </MemoContainer>
    </div>
  );
};

export default MemoPage;
