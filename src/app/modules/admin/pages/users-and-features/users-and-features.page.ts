import { Component, OnInit, inject } from '@angular/core'
import { Firestore, collection, collectionData, query, getDocs } from '@angular/fire/firestore'
import { LoadingController } from '@ionic/angular'
import { Observable } from 'rxjs'
import { UserModel } from 'src/app/modules/main/models/usermodel'

import { UserService } from 'src/app/modules/main/services/user.service'

@Component({
  selector: 'app-users-and-features',
  templateUrl: './users-and-features.page.html',
  styleUrls: ['./users-and-features.page.scss']
})
export class UsersAndFeaturesPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  users: any[] = []
  loading = false
  user$?: Observable<[]>
  searchText = ''
  constructor (private readonly userService: UserService,
    private readonly loadingController: LoadingController
  ) {}

  ionViewWillEnter () {
    this.loadingController.create(
      {
        message: 'Yükleniyor...',
        spinner: 'crescent',
        animated: true
      }
    ).then(res => {
      res.present()
    })
    const userFeaturesCollection = collection(this.firestore, 'user')
    this.user$ = collectionData(userFeaturesCollection) as Observable<[]>
    const featuresQuery = query(userFeaturesCollection) as any

    getDocs(featuresQuery)
      .then(
        res => {
          console.log(res.docs.map(doc => doc.data()))
          this.users = res.docs.map(doc => doc.data())
        }
      )
      .catch((err: any) => {
        console.error(err)
      })
      .finally(
        // eslint-disable-next-line @typescript-eslint/promise-function-async, @typescript-eslint/no-misused-promises
        () => { this.loading = true; this.loadingController.dismiss() })
  }


  async creator (user: UserModel) {
    this.loadingController.create(
      {
        message: 'Kaydediliyor...',
        spinner: 'crescent',
        animated: true
      }
    ).then(res => {
      res.present()
    })
    console.log(user)
    this.userService.updateCreator(user).then(() => {
      this.loadingController.dismiss()
    })
  }

  ngOnInit () {
  }
}
