// tabletValidator.js
import { Tablet } from "./tablets.js";

export class TabletValidator {
  static validateTablet(tablet) {
    const errors = [];

    // Required field checks
    if (!tablet.name || tablet.name.trim().length === 0) {
      errors.push('The name of the tablet is required.');
    }
    if (!tablet.processorClock || tablet.processorClock <= 0) {
      errors.push('The processor clock speed must be a positive number.');
    }
    if (!tablet.processorCores || tablet.processorCores <= 0) {
      errors.push('The processor core count must be a positive integer.');
    }
    if (!tablet.displaySize || tablet.displaySize <= 0) {
      errors.push('The display size must be a positive number.');
    }
    if (!tablet.resolutionWidth || tablet.resolutionWidth <= 0) {
      errors.push('The resolution width must be a positive integer.');
    }
    if (!tablet.resolutionHeight || tablet.resolutionHeight <= 0) {
      errors.push('The resolution height must be a positive integer.');
    }
    if (!tablet.ram || tablet.ram <= 0) {
      errors.push('The RAM size must be a positive integer.');
    }
    if (!tablet.price || tablet.price <= 0) {
      errors.push('The price must be a positive number.');
    }

    return errors;
  }
}
