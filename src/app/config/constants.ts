import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly LIVE_API_ENDPOINT: string = 'api.trainedteachers.org';  //live api endpoint
    public readonly DEV_API_ENDPOINT: string = 'http://localhost/9000'; // test endpoint
}
