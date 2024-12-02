export class Tablet {
  constructor(
    name,
    processorClock,
    processorCores,
    displaySize,
    resolutionWidth,
    resolutionHeight,
    ram,
    price,
    description,
    tabletId
  ) {
    this.tabletId = tabletId; // Azonosító, opcionális
    this.name = name; // Név
    this.processorClock = processorClock; // GHz
    this.processorCores = processorCores; // Processzormagok száma
    this.displaySize = displaySize; // Kijelző mérete (hüvelyk)
    this.resolutionWidth = resolutionWidth; // Felbontás szélessége (pixel)
    this.resolutionHeight = resolutionHeight; // Felbontás magassága (pixel)
    this.ram = ram; // RAM mérete (GB)
    this.price = price; // Ár (Ft)
    this.description = description; // Opcionális leírás
  }
}