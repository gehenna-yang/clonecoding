import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannel() {}

  @Get(':name')
  getSpecificChannel() {}

  @Get(':name/chats')
  getChat(@Query() data) {
    console.log(data.perPage, data.page);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}
}
