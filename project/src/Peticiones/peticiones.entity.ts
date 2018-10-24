import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { MedicamentoEntity } from '../medicamentos/medicamento.entity';
@Entity('peticion')
export class PeticionesEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column()
  estado: boolean;

}