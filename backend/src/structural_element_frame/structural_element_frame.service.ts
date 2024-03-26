import { Injectable } from '@nestjs/common';
import { FrameCalculationDto } from './dto/structural_element_frame.dto';


@Injectable()
export class FrameCalculationService {
  calculateForFirstFloor(frameCalculationDto: FrameCalculationDto): any {
    const {
      externalWallArea,
      internalWallArea,
    } = frameCalculationDto;

    // Внешние стены
    const externalWallBoards = 83; // Примерное количество досок на внешние стены
    const externalWallBoardsWidth = 200; // Ширина досок для внешних стен в мм
    const externalWallBoardsVolume = externalWallBoards * externalWallBoardsWidth * 3; // Объем досок для внешних стен в м3

    // Площадь ОСБ для внешних стен
    const osbAreaForExternalWalls = externalWallArea * 2 * 1.15;

    // Площадь парогидроизоляции для внешних стен
    const vaporBarrierAreaForExternalWalls = externalWallArea * 1.15;

    // Площадь ветрозащиты для внешних стен
    const windProtectionAreaForExternalWalls = externalWallArea * 1.15;

    // Площадь утеплителя для внешних стен
    const insulationAreaForExternalWalls = externalWallArea * 1.10; // За вычетом проемов

    // Объем утеплителя для внешних стен
    const insulationVolumeForExternalWalls = insulationAreaForExternalWalls * 0.20; // Толщина утеплителя в метрах

    // Внутренние стены
    const internalWallBoards = 35; // Примерное количество досок на внутренние стены
    const internalWallBoardsWidth = 100; // Ширина досок для внутренних стен в мм
    const internalWallBoardsVolume = internalWallBoards * internalWallBoardsWidth * 3; // Объем досок для внутренних стен в м3

    // Площадь ОСБ для внутренних стен
    const osbAreaForInternalWalls = internalWallArea * 2 * 1.15;

    // Перекрытия
    const floorBeamsCount = 40; // Количество балок для перекрытий
    const floorBeamsWidth = 200; // Ширина досок для балок перекрытий в мм
    const floorBeamsVolume = floorBeamsCount * floorBeamsWidth * 6; // Объем досок для балок перекрытий в м3

    // Площадь ОСБ для перекрытий
    const osbAreaForFloors = (externalWallArea * 2) * 2 * 1.15;

    // Площадь парогидроизоляции для перекрытий
    const vaporBarrierAreaForFloors = externalWallArea * 1.15;

    // Площадь ветрозащиты для перекрытий
    const windProtectionAreaForFloors = externalWallArea * 1.15;

    // Площадь утеплителя для перекрытий
    const insulationAreaForFloors = (externalWallArea * 1.10) - 2; // За вычетом пола и потолка

    // Объем утеплителя для перекрытий
    const insulationVolumeForFloors = insulationAreaForFloors * 0.20; // Толщина утеплителя в метрах

    return {
      externalWallBoards,
      externalWallBoardsWidth,
      externalWallBoardsVolume,
      osbAreaForExternalWalls,
      vaporBarrierAreaForExternalWalls,
      windProtectionAreaForExternalWalls,
      insulationAreaForExternalWalls,
      insulationVolumeForExternalWalls,
      internalWallBoards,
      internalWallBoardsWidth,
      internalWallBoardsVolume,
      osbAreaForInternalWalls,
      floorBeamsCount,
      floorBeamsWidth,
      floorBeamsVolume,
      osbAreaForFloors,
      vaporBarrierAreaForFloors,
      windProtectionAreaForFloors,
      insulationAreaForFloors,
      insulationVolumeForFloors
    };
  }
}