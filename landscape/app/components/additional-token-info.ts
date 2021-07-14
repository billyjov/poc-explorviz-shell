import Component from '@glimmer/component';
import AlertifyHandler from 'landscape/utils/alertify-handler';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { LandscapeToken } from 'landscape/services/landscape-token';
import Auth from 'landscape/services/auth';

interface Args {
  token: LandscapeToken;
}

export default class AdditionalTokenInfo extends Component<Args> {
  @service('auth')
  auth!: Auth;

  @action
  // eslint-disable-next-line class-methods-use-this
  onTokenIdCopied() {
    AlertifyHandler.showAlertifySuccess('Token id copied to clipboard');
  }

  @action
  // eslint-disable-next-line class-methods-use-this
  onTokenSecretCopied() {
    AlertifyHandler.showAlertifySuccess('Token secret copied to clipboard');
  }
}
