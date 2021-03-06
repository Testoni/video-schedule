import { SafeResourceUrl } from '@angular/platform-browser';

export class Video {
    id: string;
    videoName: string;
    channelName: string;
    videoDate: string;
    videoTime: string;
    videoLink: string;
    registrationDate: string;
    urlSafe: SafeResourceUrl;
}