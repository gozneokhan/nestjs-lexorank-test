import { Injectable } from '@nestjs/common';
import { LexoRank } from 'lexorank';

@Injectable()
export class AppService {
  items = [
    //* 항목 목록
    { data: 'item1', lexo: null },
    { data: 'item2', lexo: null },
    { data: 'item3', lexo: null },
    { data: 'item4', lexo: null },
    { data: 'item5', lexo: null },
    { data: 'item6', lexo: null },
    { data: 'item7', lexo: null },
  ];

  //* LexoRank로 항목 찾기
  find() {
    this.items.sort((a, b) => {
      if (a.lexo && b.lexo) {
        return a.lexo.compareTo(b.lexo);
      }
      return 0;
    });

    return this.items;
  }

  //* 새로운 항목을 삽입
  insert(data: string) {
    const newLexoRank = LexoRank.middle();

    const newItem = {
      data: data,
      lexo: newLexoRank,
    };

    this.items.push(newItem);

    //* LexoRank에 따라 항목 정렬
    this.items.sort((a, b) => {
      if (a.lexo && b.lexo) {
        return a.lexo.compareTo(b.lexo);
      }
      return 0;
    });
  }

  //* 항목 이동
  move(sourceIndex: number, destionationIndex: number) {
    //* 인덱스 유효성 검사
    if (
      sourceIndex < 0 ||
      sourceIndex >= this.items.length ||
      destionationIndex < 0 ||
      destionationIndex >= this.items.length
    ) {
      throw new Error('사용 불가능한 인덱스입니다.');
    }

    //* 이동할 항목 가져오기
    const itemToMove = this.items[sourceIndex];

    //* 해당 인덱스의 항목 삭제
    this.items.splice(sourceIndex, 1);

    //* 목표 위치에 항목 삽입
    this.items.splice(destionationIndex, 0, itemToMove);

    //* LexoRank에 따라 항목 정렬
    this.items.sort((a, b) => {
      if (a.lexo && b.lexo) {
        return a.lexo.compareTo(b.lexo);
      }
      return 0;
    });
  }
}

//! LexoRank에 따라 정렬 시키는 함수 사용 방법
//! appService.move(0, 2); 첫 번째 항목을 세 번째로 이동
