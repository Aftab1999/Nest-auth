// import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';

// @Module({
//   providers: [PrismaService]
// })
// export class PrismaModule {}


import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()   // 👈 important: Global banado
@Module({
  providers: [PrismaService],
  exports: [PrismaService],   // 👈 export bhi karo
})
export class PrismaModule {}

