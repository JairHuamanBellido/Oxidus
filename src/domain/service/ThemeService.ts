import { themeRepository } from "@/src/infrastructure/repository/Theme.repository";
import { ISaveOxidusTheme } from "../interface/OxidusTheme";

export class ThemeService {
  static async save(payload: ISaveOxidusTheme) {
    return await themeRepository.save({
      id: window.crypto.randomUUID(),
      mainColorHex: payload.mainColorHex,
      name: payload.name,
      darkTheme: payload.darkTheme,
      lightTheme: payload.lightTheme,
      createdAt: payload.createdAt,
    });
  }

  static async getAll() {
    return await themeRepository.getAll();
  }

  static async deleteOne(id: string) {
    return await themeRepository.oxidusThemeDatabase.delete(id);
  }

  static async updateOne(id: string, payload: ISaveOxidusTheme) {
    return await themeRepository.oxidusThemeDatabase.update(id, payload);
  }
}
