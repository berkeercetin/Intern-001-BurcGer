export class ZodiacModel {
    sun?: string
    moon?: string
    home1?: string
    home2?: string
    home3?: string
    home4?: string
    home5?: string
    home6?: string
    home7?: string
    home8?: string
    home9?: string
    home10?: string
    home11?: string
    home12?: string
  
    constructor (homes?: any) {
      this.sun = homes?.sun || ''
      this.moon = homes?.moon || ''
      this.home1 = homes?.home1 || ''
      this.home2 = homes?.home2 || ''
      this.home3 = homes?.home3 || ''
      this.home4 = homes?.home4 || ''
      this.home5 = homes?.home5 || ''
      this.home6 = homes?.home6 || ''
      this.home7 = homes?.home7 || ''
      this.home8 = homes?.home8 || ''
      this.home9 = homes?.home9 || ''
      this.home10 = homes?.home10 || ''
      this.home11 = homes?.home11 || ''
      this.home12 = homes?.home12 || ''
    }
  }
  