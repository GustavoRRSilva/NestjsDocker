import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builer'
import { UserEntity, UserProps } from '../../user.entity'
describe('UserEntityTests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
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
  it('Setter of name field', () => {
    sut['name'] = 'otherName'
    expect(sut.props.name).toEqual('otherName')
  })

  it('Getter of password field', () => {
    expect(sut.password).toBeDefined()
    expect(typeof sut.password).toBe('string')
    expect(sut.password).toEqual(props.password)
  })
  it('setter of name field', () => {
    sut['password'] = 'otherPassword'
    expect(sut.props.password).toEqual('otherPassword')
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
  it('Should update a name', () => {
    sut.updateName('Gustavo')
    expect(sut.props.name).toEqual('Gustavo')
  })
  it('Should update a passowrd', () => {
    sut.updatePassword('aa1122bb')
    expect(sut.props.password).toEqual('aa1122bb')
  })
})
