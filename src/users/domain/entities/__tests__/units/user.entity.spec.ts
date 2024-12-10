import { UserEntity, UserProps } from '../../user.entity'
import { faker } from '@faker-js/faker'
describe('UserEntityTests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
    sut = new UserEntity(props)
  })

  it('Constructor Method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined()
    expect(typeof sut.name).toBe('string')
    expect(sut.name).toEqual(props.name)
  })

  it('Getter of password field', () => {
    expect(sut.password).toBeDefined()
    expect(typeof sut.password).toBe('string')
    expect(sut.password).toEqual(props.password)
  })
  it('Getter of email field', () => {
    expect(sut.email).toBeDefined()
    expect(typeof sut.email).toBe('string')
    expect(sut.email).toEqual(props.email)
  })
  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
