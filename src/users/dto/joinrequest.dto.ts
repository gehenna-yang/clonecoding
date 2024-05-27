import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'winer0707@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'sryang',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '1234qwer',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
