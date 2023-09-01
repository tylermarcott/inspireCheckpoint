import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

/* TODO: ok sor here's how I'm going to do this. I need to make 4 different controllers and 4 different services, 2 for weather, quotes, images, todo, respectively. Mick said that the account will already be set up. I just have to make sure to wait to render certain things later on in the project until the account is logged in, or it will cause issues.

1: going to start with rendering either an image or weather to the page to make sure I can access the sandbox API.

2: Just bust out weather, quotes and images super quick, don't make it super fancy, just simple and make sure it makes sense and looks ok.

3: Move on to the todos, which is going to be a majority of the project.
*/

export class ImagesController {
  _drawImage() {
    // @ts-ignore
    // NOTE: ok so on here, this is just targeting style in the body and changing the background image to the following url. So to change styling on this, I can just change the styling on the body itself in CSS. I went in and did image fit and things work great now.
    document.body.style.backgroundImage = `url(${AppState.randomImage.largeImgUrl})`
  }
  constructor() {
    this.getImages()
    AppState.on('randomImage', this._drawImage)
  }
  async getImages() {
    try {
      await imagesService.getImages()
    } catch (error) {
      Pop.error(error)
    }
  }
}