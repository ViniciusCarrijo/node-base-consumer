import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Vote } from './vote.entity';

@Entity('candidate')
export class Candidate {
  @PrimaryColumn()
  partyNumber: number;

  @Column()
  name: string;

  @Column({
    default:
      'https://img.elo7.com.br/product/original/3FDCE4A/aang-avatar-amigurumi-lenda-de-aang.jpg',
  })
  photo: string;

  @OneToMany(() => Vote, (vote) => vote.partyNumber, { cascade: true })
  @JoinColumn({ name: 'partyNumber' })
  votes: Vote[];
}
