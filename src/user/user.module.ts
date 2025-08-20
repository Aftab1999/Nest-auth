// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { PrismaService } from '../prisma/prisma.service';

// @Module({
//   controllers: [UserController],
//   providers: [UserService, PrismaService],
// })
// export class UserModule {}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], 
})
export class UserModule {}

