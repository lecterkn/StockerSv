/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_ItemListResponse } from '../models/controller_ItemListResponse';
import type { controller_ItemRequest } from '../models/controller_ItemRequest';
import type { controller_ItemResponse } from '../models/controller_ItemResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemService {
    /**
     * 商品一覧取得
     * @param storeId 店舗ID
     * @param name 商品名
     * @param janCode Janコード
     * @returns any OK
     * @throws ApiError
     */
    public static getStoresItems(
        storeId: string,
        name?: string,
        janCode?: string,
    ): CancelablePromise<(controller_ItemListResponse & {
        list?: Array<controller_ItemResponse>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/items',
            path: {
                'storeId': storeId,
            },
            query: {
                'name': name,
                'janCode': janCode,
            },
        });
    }
    /**
     * 商品新規作成
     * @param request 商品作成リクエスト
     * @param storeId 店舗ID
     * @returns controller_ItemResponse OK
     * @throws ApiError
     */
    public static postStoresItems(
        request: controller_ItemRequest,
        storeId: string,
    ): CancelablePromise<controller_ItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stores/{storeId}/items',
            path: {
                'storeId': storeId,
            },
            body: request,
        });
    }
    /**
     * 商品更新
     * @param storeId 店舗ID
     * @param itemId 商品ID
     * @param request 商品更新リクエスト
     * @returns controller_ItemResponse OK
     * @throws ApiError
     */
    public static patchStoresItems(
        storeId: string,
        itemId: string,
        request: controller_ItemRequest,
    ): CancelablePromise<controller_ItemResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stores/{storeId}/items/{itemId}',
            path: {
                'storeId': storeId,
                'itemId': itemId,
            },
            body: request,
        });
    }
}
