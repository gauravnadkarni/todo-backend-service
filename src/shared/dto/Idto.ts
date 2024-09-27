export interface IDto<DTO,ENTITY> {
    toEntity(dto:DTO | undefined):ENTITY;
}