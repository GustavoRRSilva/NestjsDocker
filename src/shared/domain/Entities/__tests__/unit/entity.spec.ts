import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../Entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit testes', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 25 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })
  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 25 }
    const id = 'b80d3a88-4896-4d67-b289-5300db6ce401'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toStrictEqual(id)
  })

  it('Shoud convert entity to Json ', () => {
    const props = { prop1: 'value1', prop2: 25 }
    const id = 'b80d3a88-4896-4d67-b289-5300db6ce401'
    const entity = new StubEntity(props, id)

    expect(entity.ToJson()).toStrictEqual({
      id: id,
      ...props,
    })
  })
})
