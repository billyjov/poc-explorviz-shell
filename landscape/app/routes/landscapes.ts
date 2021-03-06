import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import LandscapeTokenService, {
  LandscapeToken,
} from 'landscape/services/landscape-token';
import ENV from 'landscape/config/environment';
import { action } from '@ember/object';

const { userService } = ENV.backendAddresses;

export default class Landscapes extends Route {
  @service('landscape-token')
  tokenService!: LandscapeTokenService;

  @action
  refreshRoute() {
    return this.refresh();
  }

  async model() {
    let uId = JSON.parse(sessionStorage.getItem('user') as string)?.sub;

    if (!uId) {
      return Promise.reject(new Error('User profile not set'));
    }

    uId = encodeURI(uId);

    return new Promise<any>((resolve, reject) => {
      fetch(`${userService}/user/${uId}/token`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      })
        .then(async (response: Response) => {
          if (response.ok) {
            const tokens = (await response.json()) as LandscapeToken[];
            resolve(tokens);
          } else {
            reject();
          }
        })
        .catch((e) => reject(e));
    });
  }

  afterModel(landscapeTokens: LandscapeToken[]) {
    const currentToken = this.tokenService.token;
    const tokenCandidates = landscapeTokens.filter(
      (token) => token.value === currentToken?.value
    );
    if (tokenCandidates.length > 0) {
      this.tokenService.setToken(tokenCandidates[0]);
    } else {
      // selected token does not exist anymore
      this.tokenService.removeToken();
    }
  }

  @action
  // eslint-disable-next-line class-methods-use-this
  loading(/* transition, originRoute */) {
    return true;
  }
}
