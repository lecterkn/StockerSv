/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_ItemStockListResponse } from '../models/controller_ItemStockListResponse';
import type { controller_ItemStockRequest } from '../models/controller_ItemStockRequest';
import type { controller_ItemStockResponse } from '../models/controller_ItemStockResponse';
import type { controller_ItemStockUpdateRequest } from '../models/controller_ItemStockUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemStockService {
    /**
     * 商品詳細一覧取得
     * @param storeId 店舗ID
     * @returns any OK
     * @throws ApiError
     */
    public static getStoresItemStocks(
        storeId: string,
    ): CancelablePromise<(controller_ItemStockListResponse & {
        list?: Array<controller_ItemStockResponse>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/itemStocks',
            path: {
                'storeId': storeId,
            },
        });
    }
    /**
     * 商品詳細登録
     * @param storeId 店舗ID
     * @param request 商品詳細作成リクエスト
     * @returns controller_ItemStockResponse OK
     * @throws ApiError
     */
    public static postStoresItemStocks(
        storeId: string,
        request: controller_ItemStockRequest,
    ): CancelablePromise<controller_ItemStockResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stores/{storeId}/itemStocks',
            path: {
                'storeId': storeId,
            },
            body: request,
        });
    }
    /**
     * Jancodeから商品詳細取得
     * @param storeId 店舗ID
     * @param jancode JANコード
     * @returns controller_ItemStockResponse OK
     * @throws ApiError
     */
    public static getStoresItemStocksJancodes(
        storeId: string,
        jancode: string,
    ): CancelablePromise<controller_ItemStockResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/itemStocks/jancodes/{jancode}',
            path: {
                'storeId': storeId,
                'jancode': jancode,
            },
        });
    }
    /**
     * 商品詳細取得
     * @param storeId 店舗ID
     * @param itemId 商品ID
     * @returns controller_ItemStockResponse OK
     * @throws ApiError
     */
    public static getStoresItemStocks1(
        storeId: string,
        itemId: string,
    ): CancelablePromise<controller_ItemStockResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stores/{storeId}/itemStocks/{itemId}',
            path: {
                'storeId': storeId,
                'itemId': itemId,
            },
        });
    }
    /**
     * 商品詳細更新
     * @param storeId 店舗ID
     * @param itemId 商品ID
     * @param request 商品詳細更新リクエスト
     * @returns controller_ItemStockResponse OK
     * @throws ApiError
     */
    public static patchStoresItemStocks(
        storeId: string,
        itemId: string,
        request: controller_ItemStockUpdateRequest,
    ): CancelablePromise<controller_ItemStockResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stores/{storeId}/itemStocks/{itemId}',
            path: {
                'storeId': storeId,
                'itemId': itemId,
            },
            body: request,
        });
    }
}
