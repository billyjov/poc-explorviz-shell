import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CollaborativeSettingsService from 'visualization/services/collaborative-settings-service';
import CollaborativeService from 'visualization/services/collaborative-service';
import { CollaborativeEvents } from 'collaborative-mode/utils/collaborative-data';

interface AdminSettingsArgs {}

export default class AdminSettings extends Component<AdminSettingsArgs> {
  @service('collaborative-settings-service')
  collaborativeSettings!: CollaborativeSettingsService;

  @service('collaborative-service')
  collaborativeService!: CollaborativeService;

  get settings() {
    return [
      {
        name: 'Presentation Mode?',
        tooltip: 'When selected, only one user is allowed to interact',
        value: this.collaborativeSettings.meeting?.presentationMode,
        onToggle: this.togglePresentationMode,
      },
    ];
  }

  @action
  togglePresentationMode() {
    this.collaborativeService.send(CollaborativeEvents.TogglePresentationMode);
  }
}
