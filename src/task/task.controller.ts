import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
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

    @Get()
    findAll(@Query() params: FindAllParameters): TaskDto[] {
        return this.taskService.findAll(params);
    }


    // Metodo Put vai pegar o id se existir e mudar no body pelo Json
    @Put()
    update(@Body() task: TaskDto){
        this.taskService.update(task)
    }

    @Delete('/:id')
    // método
    // Param usa o id da rota e id como argumento
    remove(@Param('id') id: string){
        return this.taskService.remove(id);
    }


}
