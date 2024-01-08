import { Injectable } from '@nestjs/common';
import { LexoRank } from 'lexorank';

@Injectable()
export class AppService {
items = [
{ data: 'item1', lexo: null },
{ data: 'item2', lexo: null },
{ data: 'item3', lexo: null },
{ data: 'item4', lexo: null },
{ data: 'item5', lexo: null },
{ data: 'item6', lexo: null },
{ data: 'item7', lexo: null },
];

constructor() {
let lexoRank = LexoRank.middle();

    this.items.map((item) => {
      item.lexo = lexoRank;
      lexoRank = lexoRank.genNext();
    });

}

find() {
const newItems = this.items.sort((a, b) => a.lexo.compareTo(b.lexo));
return newItems.map((item) => {
return { data: item.data, lexo: item.lexo.toString() };
});
}

insert(data: string) {
const newLexoRank = LexoRank.middle();
const newItem = {
data: data,
lexo: newLexoRank,
};
this.items.push(newItem);
this.items.sort((a, b) => a.lexo.compareTo(b.lexo));
}

move(id: number, where: number) {
let newLexo: LexoRank;

    if (where >= this.items.length) {
      newLexo = this.items[this.items.length - 1].lexo.genNext();
    } else if (where <= 0) {
      newLexo = this.items[0].lexo.genPrev();
    } else {
      newLexo = this.items[where].lexo.between(this.items[where + 1].lexo);
    }

    this.items[id].lexo = newLexo;

    return true;

}
}
