// 3. Entity를 import
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// 4. import후 @Entity를 Board 바로위에 작성하면 아래 Board를 표로 만들겠다는 것!
@Entity()
// 2. 이렇게만 작성하면 그냥 Board라는 클래스명을 가진 것만 만든것! 표로 만드려면 Entity를 import해야해
export class Board {
  // 5. 각 항목을 Column으로 설정해줘야해
  @PrimaryGeneratedColumn("increment")
  // 1. 앞에는 표에 넣을 카테고리이름 ,뒤에는 타입 작성
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}

// 6. 카테고리이름에 빨간줄을 없애야해. tsconfig.json에 들어가서 "experimentalDecorators": true 이거 추가해주고
// 각 카테고리 이름앞에 ! 추가한뒤 vscode 재시작 => !를 추가하는 이유는 꼭 있을 항목이라고 알려주는것!

// 7. index.ts에 들어가서 entities, synchronize, logging 수정
// 8. (index.ts에서 진행)DataSource을 함수로 만들어서 실행시켜보자. 함수명 먼저 선언하고 아래 실행할 수 있게 작성해보자

// 너무 빨리 지나가서 나머지는 영상으로 다시 확인
