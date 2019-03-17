import { Column, Entity } from 'typeorm';

export abstract class User {
  @Column('varchar')
  public name!: string;

  @Column('varchar')
  public surname!: string;
}
