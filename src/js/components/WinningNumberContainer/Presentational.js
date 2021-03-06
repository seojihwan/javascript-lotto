import { CLASSNAME, JS_SELECTOR } from "../../constants/index.js";
import {
  $,
  $$,
  toClassSelector as toCS,
  toDataAttributeSelector as toDAS,
} from "../../utils/index.js";
import { Presentational } from "../core/index.js";

class WinningNumberPresentational extends Presentational {
  constructor(eventListeners) {
    super(eventListeners);
  }

  initalize() {
    this.$container = $(toDAS(JS_SELECTOR.WINNING_NUMBER.CONTAINER));
    this.$$inputs = $$(toCS(CLASSNAME.WINNING_NUMBER.INPUT), {
      $parent: this.$container,
    });
    this.$bonusInput = $(toCS(CLASSNAME.WINNING_NUMBER.BONUS_INPUT), {
      $parent: this.$container,
    });
  }

  setEventListeners() {
    const { getWinningNumberWithValidation } = this.eventListeners;

    this.$container.addEventListener("submit", getWinningNumberWithValidation);
  }

  render({ isLottoInitialAdded, isLottoCleared }) {
    if (isLottoInitialAdded) {
      this.$container.show();
      return;
    }

    if (isLottoCleared) {
      this.clear();
      return;
    }
  }

  clear() {
    this.$$inputs.forEach(($input) => $input.clear());
    this.$bonusInput.clear();
    this.$container.hide();
  }
}

export default WinningNumberPresentational;
