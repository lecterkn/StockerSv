/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_StockOutCreateRequest } from '../models/controller_StockOutCreateRequest';
import type { controller_StockOutListResponse } from '../models/controller_StockOutListResponse';
import type { controller_StockOutResponse } from '../models/controller_StockOutResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StockOutsService {
    /**
     * 販売履歴一覧取得取得
     * @param storeId 店舗ID
     * @returns any OK
     * @throws ApiError
     */
    public static getStoresStockOuts(
        storeId: string,
    ): CancelablePromise<(controller_StockOutListResponse & {
        list?: Array<controller_StockOutResponse>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/stockOuts',
            path: {
                'storeId': storeId,
            },
        });
    }
    /**
     * 販売履歴作成取得
     * @param storeId 店舗ID
     * @param request 販売履歴作成リクエスト
     * @returns controller_StockOutResponse OK
     * @throws ApiError
     */
    public static postStoresStockOuts(
        storeId: string,
        request: controller_StockOutCreateRequest,
    ): CancelablePromise<controller_StockOutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stores/{storeId}/stockOuts',
            path: {
                'storeId': storeId,
            },
            body: request,
        });
    }
}
