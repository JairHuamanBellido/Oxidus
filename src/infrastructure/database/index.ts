import Dexie, { Table } from "dexie";
import { IOxidusThemeIndexDB } from "../interface/OxidusThemeModel";
export class OxidusDatabase extends Dexie {
  oxidusThemeDatabase!: Table<IOxidusThemeIndexDB, string>;

  constructor() {
    super("oxidus");

    this.version(1).stores({
      oxidusThemeDatabase: "id, createdAt",
    });
  }
}
