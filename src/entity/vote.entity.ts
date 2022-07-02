import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Candidate } from './candidate.entity';

@Entity('vote')
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  partyNumber: number;

  @ManyToOne(() => Candidate)
  @JoinColumn({ name: 'partyNumber' })
  candidate: Candidate;
}
