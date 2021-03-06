import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import Configuration from 'settings/services/configuration';

interface ColorSchemeSelectorArgs {
  updateView(): void
}

export default class ColorSchemeSelector extends Component<ColorSchemeSelectorArgs> {
  @service('configuration')
  configuration!: Configuration;

  colorSchemes = [
    { name: 'Default', identifier: 'default' },
    { name: 'Vision Impairment!', identifier: 'impaired' },
    { name: 'Classic (Initial)', identifier: 'classic' },
    { name: 'Dark', identifier: 'dark' },
  ];

  @action
  applyColorScheme(scheme: string) {
    this.configuration.applyColorSchemeByName(scheme);

    // this.args.updateView();
  }
}
