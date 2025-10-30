import { AdminDeleteCarParamsDto, AdminGetCarsQueryDto, AdminGetCarsResponseDto } from './admin-car-management.dto';
import z from 'zod';

export type TAdminGetCarsQuery = z.infer<typeof AdminGetCarsQueryDto>;
export type TAdminGetCarsResponse = z.infer<typeof AdminGetCarsResponseDto>;
export type TAdminDeleteCarParams = z.infer<typeof AdminDeleteCarParamsDto>;
