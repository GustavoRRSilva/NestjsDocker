import { Test, TestingModule } from '@nestjs/testing'
import { EnvCnfiService } from './env-cnfi.service'

describe('EnvCnfiService', () => {
  let service: EnvCnfiService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvCnfiService],
    }).compile()

    service = module.get<EnvCnfiService>(EnvCnfiService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
