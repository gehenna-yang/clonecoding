import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkSpace() {}

  @Delete(':url/members/:id')
  kickMembersFromWorkSpace() {}

  @Get(':url/members/:id')
  getMembersInfoInWorkspace() {}
}
