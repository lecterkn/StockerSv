/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_StockInCreateRequest } from '../models/controller_StockInCreateRequest';
import type { controller_StockInListResponse } from '../models/controller_StockInListResponse';
import type { controller_StockInResponse } from '../models/controller_StockInResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StockInsService {
    /**
     * 入荷履歴一覧取得
     * @param storeId 店舗ID
     * @returns controller_StockInListResponse OK
     * @throws ApiError
     */
    public static getStoresStockIns(
        storeId: string,
    ): CancelablePromise<controller_StockInListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/stockIns',
            path: {
                'storeId': storeId,
            },
        });
    }
    /**
     * 入荷履歴作成取得
     * @param storeId 店舗ID
     * @param request 入荷履歴作成リクエスト
     * @returns controller_StockInResponse OK
     * @throws ApiError
     */
    public static postStoresStockIns(
        storeId: string,
        request: controller_StockInCreateRequest,
    ): CancelablePromise<controller_StockInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stores/{storeId}/stockIns',
            path: {
                'storeId': storeId,
            },
            body: request,
        });
    }
}
