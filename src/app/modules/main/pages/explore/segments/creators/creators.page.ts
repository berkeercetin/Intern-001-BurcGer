import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { UserInfoPage } from 'src/app/modules/main/modals/user-info/user-info.page'
import { UserService } from 'src/app/modules/main/services/user.service'

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss']
})
export class CreatorsPage implements OnInit {
  creators:any
  constructor (private readonly modalController: ModalController, private readonly userService:UserService) {}

  ngOnInit () 
  {
    this.getCreators()
  }

  async getCreators() {
    try {
      const docData = await this.userService.getUsersByContentCreator();
      if (docData.length > 0) {
        console.log('Document data:', docData);
        this.creators = docData;
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error getting creators:', error);
    }
  }
  


  async presentModal(userId: string) {
    const selectedUser = this.creators.find((creator: { uid: string }) => creator.uid === userId);
  
    const modal = await this.modalController.create({
      component: UserInfoPage,
      componentProps: {
        user: selectedUser,
      },
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    if (data) {
      console.log('Data received from modal:', data);
      // Handle the data returned from the modal
    } else {
      console.log('Modal dismissed without data.');
    }
  }
  
}
