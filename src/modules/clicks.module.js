import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor() {
    super('click analytics', 'Аналитика кликов');
  }

  trigger() {
    let clicksCounter = 0;
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target) {
        clicksCounter++;
      }
    });
    const currentTimeout = 20000;
    setTimeout(() => {
      const clicksAmount = `Количество кликов за ${
        currentTimeout / 1000
      } секунд равно ${clicksCounter}`;
      const clicksAmountElement = document.createElement("div");
      clicksAmountElement.textContent = clicksAmount;
      
    }, currentTimeout);

    return clicksAmountElement;
  }
}
