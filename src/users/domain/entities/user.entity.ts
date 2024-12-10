export interface UserProps {
  name: string
  email: string
  password: string
  createdAt?: Date
}
export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get password() {
    return this.props.password
  }
  get email() {
    return this.props.email
  }
  get createdAt() {
    return this.props.createdAt
  }
  get name() {
    return this.props.name
  }
}
