import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvCnfiModule } from './shared/infrastructure/env-cnfi/env-cnfi.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EnvCnfiModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
