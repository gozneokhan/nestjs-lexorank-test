# LexoRank 라이브러리 사용 안내

LexoRank는 주로 렉소그래픽 랭킹이나 정렬에 사용되며, LexoRank와 관련된 작업을 수행하는 메소드를 제공합니다.

# 시작하기

Npm:

```
npm install lexorank
```

Yarn:

```
yarn add lexorank
```

# 정적 메소드

```
import {LexoRank} from "lexorank";

// min
const minLexoRank = LexoRank.min();
// max
const maxLexoRank = LexoRank.max();
// middle
const middleLexoRank = LexoRank.middle();
// parse
const parsedLexoRank = LexoRank.parse('0|0i0000:');
```

### LexoRank.min()

가능한 최소 LexoRank를 반환합니다.

인자가 필요하지 않습니다.

```
const minLexoRank = LexoRank.min();
```

### LexoRank.max()

가능한 최대 LexoRank를 반환합니다.

인자가 필요하지 않습니다.

```
const maxLexoRank = LexoRank.max();
```

### LexoRank.middle()

중간 LexoRank를 반환합니다.

인자가 필요하지 않습니다.

```
const middleLexoRank = LexoRank.middle();
```

### LexoRank.parse(str: string)

문자열에서 LexoRank를 파싱합니다.

LexoRank를 나타내는 문자열을 인자로 사용합니다.

```
const parsedLexoRank = LexoRank.parse('0|0i0000:');
```

# 공용 메소드

```
import {LexoRank} from "lexorank";

// any lexoRank
const lexoRank = LexoRank.middle();

// generate next lexorank
const nextLexoRank = lexoRank.genNext();

// generate previous lexorank
const prevLexoRank = lexoRank.genPrev();

// toString
const lexoRankStr = lexoRank.toString();
```

### LexoRank.genNext()

다음 LexoRank를 생성합니다.

인자가 필요하지 않습니다. 기존 LexoRank 인스턴스에서 호출됩니다.

```
const nextLexoRank = lexoRank.genNext();
```

### LexoRank.genPrev()

이전 LexoRank를 생성합니다.

인자가 필요하지 않습니다. 기존 LexoRank 인스턴스에서 호출됩니다.

```
const prevLexoRank = lexoRank.genPrev();
```

### LexoRank.toString()

LexoRank를 문자열로 변환합니다.

인자가 필요하지 않습니다. 기존 LexoRank 인스턴스에서 호출됩니다.

```
const lexoRankStr = lexoRank.toString();
```

# LexRank 계산

```
import {LexoRank} from "lexorank";

// any lexorank
const any1LexoRank = LexoRank.min();
// another lexorank
const any2LexoRank = any1LexoRank.genNext().genNext();
// calculate between
const betweenLexoRank = any1LexoRank.between(any2LexoRank);
```

### LexoRank.between(lexoRank1: LexoRank, lexoRank2: LexoRank)

두 주어진 LexoRank 사이에 있는 LexoRank를 계산합니다.

두 개의 LexoRank 인스턴스를 인자로 사용합니다.

```
const any1LexoRank = LexoRank.min();
const any2LexoRank = any1LexoRank.genNext().genNext();
const betweenLexoRank = any1LexoRank.between(any2LexoRank);
```

이러한 메소드를 사용하면 LexoRank와 관련된 작업을 수행하고 새로운 랭크를 생성하며 기존 랭크를 기반으로 계산을 수행할 수 있습니다.
