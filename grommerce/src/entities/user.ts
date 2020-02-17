import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    created: Date;

    @Column()
    updated: Date;

    @Column()
    access_token: string;

    @Column()
    expiry_time: Date;
}