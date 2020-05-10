import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DateTimeEntity } from '../base/dateTimeEntity';
import { Length, IsNotEmpty, IsEmail } from 'class-validator';

@Entity('user', { orderBy: { id: 'ASC' } })
export class User extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Unique(['email'])
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @Length(4, 100)
  password: string;

  @Column({ default: () => `now()` })
  lastLogin: Date;

  @Column({ default: true })
  isActive: boolean;
}
