/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_JancodeResponse } from '../models/controller_JancodeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JancodeService {
    /**
     * 製品情報取得
     * @param janCode JANコード
     * @returns controller_JancodeResponse OK
     * @throws ApiError
     */
    public static getProducts(
        janCode: string,
    ): CancelablePromise<controller_JancodeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{janCode}',
            path: {
                'janCode': janCode,
            },
        });
    }
}
