export class UserModel {
  name?: string
  surname?: string
  email?: string
  uid?: string
  gender?: string
  birthPlace?: string
  birthTime?: string
  relation?: string
  job?: string
  photoUrl?: string
  premium?: boolean
  contentCreator?: boolean
  coin?: number

  constructor (data?: any) {
    this.name = data?.name || ''
    this.surname = data?.surname || ''
    this.email = data?.email || ''
    this.gender = data?.gender || ''
    this.birthPlace = data?.birthPlace || ''
    this.birthTime = data?.birthTime || ''
    this.relation = data?.relation || ''
    this.job = data?.job || ''
    this.photoUrl = data?.photoUrl || ''
    this.premium = false
    this.contentCreator = false
    this.coin = 0
    this.uid = data?.uid || ''
  }
}
