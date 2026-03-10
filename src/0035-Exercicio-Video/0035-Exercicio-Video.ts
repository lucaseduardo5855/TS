//Elementos que precisamos ter na tela  - botoes etc
interface videoPlayerElements {
  videoPlay: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

//Ações -> ações pausar, iniciar, play
interface videoPlayerAction {
  playToogle(): void;
  stop(): void;
  iniciarVideo(): void;
}

//Classe com implements
export default class VideoPlay implements videoPlayerAction {
  private videoPlay: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(VideoPlayerElements: videoPlayerElements ){
    this.videoPlay = VideoPlayerElements.videoPlay;
    this.playButton = VideoPlayerElements.playButton;
    this.stopButton = VideoPlayerElements.stopButton;
  }

  iniciarVideo(): void {
    this.playButton.addEventListener('click', () => {
      this.playToogle();
    })

    this.stopButton.addEventListener('click', () => {
      this.videoPlay.pause();
      this.videoPlay.currentTime = 0;
    })
  }

  playToogle(): void {
    if(this.videoPlay.paused) {
      this.videoPlay.play();
      this.playButton.innerText = 'Pause'
    }else{
      this.videoPlay.pause();
      this.playButton.innerText = 'Play'
    }
  }

  stop(): void {
    //
  }
}

//Variaveis
const playVideo = new VideoPlay({
  videoPlay: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

playVideo.iniciarVideo();

//botoes tem q iniciar e pausar ao apertar, botao stop tem q
