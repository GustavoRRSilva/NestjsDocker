import { Module } from '@nestjs/common'
import { EnvCnfiService } from './env-cnfi.service'

@Module({
  providers: [EnvCnfiService],
})
export class EnvCnfiModule {}
