export class UserModel {
  name?: string
  surname?: string
  email?: string
  password?: string
  passwordagain?: string
  gender?: string
  birthPlace?: string
  birthTime?: string
  relation?: string
  job?: string
  photoUrl?: string

  constructor (data?: any) {
    this.name = data?.name || ''
    this.surname = data?.surname || ''
    this.email = data?.email || ''
    this.password = data?.password || ''
    this.passwordagain = data?.passwordagain || ''
    this.gender = data?.gender || ''
    this.birthPlace = data?.birthPlace || ''
    this.birthTime = data?.birthTime || ''
    this.relation = data?.relation || ''
    this.job = data?.job || ''
    this.photoUrl = data?.photoUrl || ''
  }
}
