import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() task: TaskDto){
        // console.log(task);
        this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id:string): TaskDto{
        // @Param pega da requisição
        return this.taskService.findById(id);
    }


    // Metodo Put vai pegar o id se existir e mudar no body pelo Json
    @Put()
    update(@Body() task: TaskDto){
        this.taskService.update(task)
    }
}
