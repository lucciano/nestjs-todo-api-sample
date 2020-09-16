import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';

@Module({
  providers: [TodoService, TodoRepository],
  imports: [TypeOrmModule.forFeature([TodoEntity, TodoRepository])],
  controllers: [TodoController]
})
export class TodoModule {}
