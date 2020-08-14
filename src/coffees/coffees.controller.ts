import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginationQuery): string {
        const { limit, offset } = paginationQuery;

        return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
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
