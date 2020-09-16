import { TodoEntity } from './todo.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {
}