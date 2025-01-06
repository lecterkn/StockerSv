/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { controller_UserLoginResponse } from '../models/controller_UserLoginResponse';
import type { controller_UserRequest } from '../models/controller_UserRequest';
import type { controller_UserResponse } from '../models/controller_UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * ユーザーログイン
     * @param request ユーザーログインリクエスト
     * @returns controller_UserLoginResponse OK
     * @throws ApiError
     */
    public static postLogin(
        request?: controller_UserRequest,
    ): CancelablePromise<controller_UserLoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: request,
        });
    }
    /**
     * ユーザー作成
     * @param request ユーザー作成リクエスト
     * @returns controller_UserResponse OK
     * @throws ApiError
     */
    public static postRegister(
        request?: controller_UserRequest,
    ): CancelablePromise<controller_UserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register',
            body: request,
        });
    }
}
