interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface videoPlayerActions {
  iniciarVideo(): void;
  stop(): void;
  playToogle(): void;
}

export default class videoPlayer implements videoPlayerActions {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarVideo(): void {
    this.playButton.addEventListener('click', () => {
      this.playToogle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
    })
  }

  playToogle(): void {
    if(this.videoPlayer.paused){
      this.videoPlayer.play();
      this.playButton.innerText = 'Paused'
    }else{
      this.videoPlayer.pause()
      this.playButton.innerText = 'Play'
    }
  }

  stop(): void {}
}

const videoPlayeer = new videoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});
videoPlayeer.iniciarVideo();
