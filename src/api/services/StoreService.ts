/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_StoreCreateRequest } from '../models/controller_StoreCreateRequest';
import type { controller_StoreListResponse } from '../models/controller_StoreListResponse';
import type { controller_StoreResponse } from '../models/controller_StoreResponse';
import type { controller_StoreUpdateRequest } from '../models/controller_StoreUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreService {
    /**
     * 店舗一覧取得
     * @returns any OK
     * @throws ApiError
     */
    public static getStores(): CancelablePromise<(controller_StoreListResponse & {
        list?: Array<controller_StoreResponse>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores',
        });
    }
    /**
     * 店舗新規作成
     * @param request 店舗新規作成リクエスト
     * @returns controller_StoreResponse OK
     * @throws ApiError
     */
    public static postStores(
        request?: controller_StoreCreateRequest,
    ): CancelablePromise<controller_StoreResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stores',
            body: request,
        });
    }
    /**
     * 店舗更新
     * @param storeId 店舗ID
     * @param request 店舗更新リクエスト
     * @returns controller_StoreResponse OK
     * @throws ApiError
     */
    public static patchStores(
        storeId: string,
        request?: controller_StoreUpdateRequest,
    ): CancelablePromise<controller_StoreResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stores/{storeId}',
            path: {
                'storeId': storeId,
            },
            body: request,
        });
    }
}
