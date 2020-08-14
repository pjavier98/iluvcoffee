import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(): string {
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns #${id} coffees`;
    }

    @Post()
    create(@Body() body) {
        return body;
        // return `this action creates a coffee`;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body): string {
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `This action removes #${id} coffee`;
    }
}
