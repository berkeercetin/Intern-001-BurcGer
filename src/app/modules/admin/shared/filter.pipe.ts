/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform (items: any[], searchText: string): any[] {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!items) return []
    if (!searchText) return items
    searchText = searchText.toLowerCase()
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText) || it.surname.toLowerCase().includes(searchText) || it.email.toLowerCase().includes(searchText)
    })
  }
}
