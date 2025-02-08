import { OxidusDatabase } from "../database";
import { IOxidusThemeIndexDB } from "../interface/OxidusThemeModel";

class ThemeRepository extends OxidusDatabase {
  constructor() {
    super();
  }

  public async save(payload: IOxidusThemeIndexDB) {
    return await this.oxidusThemeDatabase.add({
      name: payload.name,
      id: payload.id,
      mainColorHex: payload.mainColorHex,
      darkTheme: payload.darkTheme,
      lightTheme: payload.lightTheme,
      createdAt: payload.createdAt,
    });
  }

  public async getAll() {
    return await this.oxidusThemeDatabase.orderBy("createdAt").toArray();
  }
}

export const themeRepository = new ThemeRepository();
